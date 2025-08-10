# 📊 Schema de Base de Datos - Envy

## 🎯 Conceptos Clave

### **Modelo Simplificado: Usuarios → Proyectos → Entornos**

- **Sin Organizaciones**: Trabajamos directamente con proyectos
- **Roles por Proyecto**: Cada usuario tiene un rol específico en cada proyecto
- **Permisos por Entorno**: Los DEVELOPERS necesitan permisos explícitos para acceder a entornos específicos

### **Roles Fijos (Enum):**

- 🔴 **OWNER**: Dueño del proyecto, acceso total
- 🟠 **ADMIN**: Administrador, puede gestionar variables y usuarios
- 🟢 **DEVELOPER**: Desarrollador, acceso limitado según permisos

---

## 📋 Modelos Principales

### 👤 **User**

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  firstName String
  lastName  String
  avatar    String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  sessions               Session[]
  apiKeys                ApiKey[]
  projectMemberships     ProjectMember[]
  invitations            Invitation[]
  auditLogs              AuditLog[]
  environmentPermissions EnvironmentPermission[]
}
```

**Campos principales:**

- `email`: Identificador único del usuario
- `password`: Hash de la contraseña
- `firstName/lastName`: Información personal
- `avatar`: URL de imagen de perfil

**Relaciones:**

- `projectMemberships`: Proyectos donde el usuario es miembro
- `environmentPermissions`: Permisos específicos para entornos

---

### 🚀 **Project**

```prisma
model Project {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  avatar      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  members      ProjectMember[]
  environments Environment[]
  invitations  Invitation[]
  auditLogs    AuditLog[]
}
```

**Campos principales:**

- `name`: Nombre del proyecto
- `slug`: Identificador único URL-friendly
- `description`: Descripción opcional del proyecto

**Relaciones:**

- `members`: Usuarios que pertenecen al proyecto
- `environments`: Entornos del proyecto (dev, staging, prod, etc.)

---

### 👥 **ProjectMember**

```prisma
model ProjectMember {
  id        String   @id @default(cuid())
  userId    String
  projectId String
  role      Role     @default(DEVELOPER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user    User    @relation(fields: [userId], references: [id])
  project Project @relation(fields: [projectId], references: [id])

  @@unique([userId, projectId])
}
```

**Función:**

- Define qué usuarios pertenecen a qué proyectos
- Establece el rol del usuario en cada proyecto específico
- Un usuario puede ser OWNER en un proyecto y DEVELOPER en otro

---

## 🌍 Sistema de Entornos

### 🏗️ **Environment**

```prisma
model Environment {
  id        String          @id @default(cuid())
  name      String
  slug      String
  type      EnvironmentType @default(CUSTOM)
  projectId String
  createdAt DateTime        @default(now())
  updatedAt DateTime        @updatedAt

  project                Project                 @relation(fields: [projectId], references: [id])
  variables              EnvironmentVariable[]
  environmentPermissions EnvironmentPermission[]
}
```

**Tipos de Entorno:**

- `DEVELOPMENT`: Entorno de desarrollo
- `STAGING`: Entorno de pruebas
- `PRODUCTION`: Entorno de producción
- `CUSTOM`: Entornos personalizados

**Automáticos**: Al crear un proyecto se generan automáticamente dev, staging y prod.

---

### 🔐 **EnvironmentPermission**

```prisma
model EnvironmentPermission {
  id            String   @id @default(cuid())
  userId        String
  environmentId String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  user        User        @relation(fields: [userId], references: [id])
  environment Environment @relation(fields: [environmentId], references: [id])

  @@unique([userId, environmentId])
}
```

**Función:**

- Define qué DEVELOPERS pueden acceder a qué entornos específicos
- Solo aplica a usuarios con rol DEVELOPER
- OWNER y ADMIN tienen acceso automático a todos los entornos

---

### 🔧 **EnvironmentVariable**

```prisma
model EnvironmentVariable {
  id            String     @id @default(cuid())
  key           String
  value         String
  description   String?
  environmentId String
  syncStatus    SyncStatus @default(PENDING)
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt

  environment Environment @relation(fields: [environmentId], references: [id])

  @@unique([key, environmentId])
}
```

**Campos principales:**

- `key`: Nombre de la variable (ej: `DATABASE_URL`)
- `value`: Valor de la variable (encriptado)
- `syncStatus`: Estado de sincronización con servicios externos

---

## 📬 Sistema de Invitaciones

### 💌 **Invitation**

```prisma
model Invitation {
  id          String           @id @default(cuid())
  email       String
  projectId   String
  invitedById String
  role        Role             @default(DEVELOPER)
  status      InvitationStatus @default(PENDING)
  token       String           @unique
  expiresAt   DateTime
  createdAt   DateTime         @default(now())
  updatedAt   DateTime         @updatedAt

  project   Project @relation(fields: [projectId], references: [id])
  invitedBy User    @relation(fields: [invitedById], references: [id])
}
```

**Estados de Invitación:**

- `PENDING`: Esperando respuesta
- `ACCEPTED`: Aceptada (usuario agregado al proyecto)
- `REJECTED`: Rechazada por el usuario
- `EXPIRED`: Expirada por tiempo

---

## 🔐 Sistema de Autenticación

### 🎫 **Session**

```prisma
model Session {
  id        String   @id @default(cuid())
  userId    String
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id])
}
```

### 🔑 **ApiKey**

```prisma
model ApiKey {
  id         String    @id @default(cuid())
  name       String
  key        String    @unique
  userId     String
  lastUsedAt DateTime?
  expiresAt  DateTime?
  createdAt  DateTime  @default(now())

  user User @relation(fields: [userId], references: [id])
}
```

---

## 📊 Sistema de Auditoría

### 📝 **AuditLog**

```prisma
model AuditLog {
  id            String    @id @default(cuid())
  action        String
  entityType    String
  entityId      String
  userId        String?
  projectId     String?
  environmentId String?
  oldValues     Json?
  newValues     Json?
  createdAt     DateTime  @default(now())

  user        User?        @relation(fields: [userId], references: [id])
  project     Project?     @relation(fields: [projectId], references: [id])
  environment Environment? @relation(fields: [environmentId], references: [id])
}
```

**Registra:**

- Cambios en variables de entorno
- Invitaciones enviadas/aceptadas
- Cambios de roles
- Creación/eliminación de entornos

---

## 🎭 Matriz de Permisos

| Acción                 | 🔴 OWNER | 🟠 ADMIN | 🟢 DEVELOPER   |
| ---------------------- | -------- | -------- | -------------- |
| **Proyectos**          |
| Ver proyecto           | ✅       | ✅       | ✅             |
| Editar proyecto        | ✅       | ❌       | ❌             |
| Eliminar proyecto      | ✅       | ❌       | ❌             |
| **Miembros**           |
| Ver miembros           | ✅       | ✅       | ✅             |
| Invitar usuarios       | ✅       | ✅       | ❌             |
| Cambiar roles          | ✅       | ❌       | ❌             |
| Remover miembros       | ✅       | ❌       | ❌             |
| **Entornos**           |
| Ver entornos           | ✅       | ✅       | 🔒 Con permiso |
| Crear entornos         | ✅       | ✅       | ❌             |
| Gestionar permisos     | ✅       | ✅       | ❌             |
| **Variables**          |
| Ver variables          | ✅       | ✅       | 🔒 Con permiso |
| Crear/Editar variables | ✅       | ✅       | ❌             |
| Eliminar variables     | ✅       | ✅       | ❌             |

**Leyenda:**

- ✅ Acceso total
- ❌ Sin acceso
- 🔒 Requiere permiso específico de entorno

---

## 🔄 Flujo de Acceso

### **1. Usuario accede a un proyecto:**

```typescript
// Verificar si el usuario es miembro del proyecto
const membership = await prisma.projectMember.findUnique({
  where: {
    userId_projectId: {
      userId: user.id,
      projectId: project.id,
    },
  },
});

if (!membership) {
  throw new Error("No tienes acceso a este proyecto");
}
```

### **2. Usuario accede a un entorno:**

```typescript
function canAccessEnvironment(
  userRole: Role,
  userId: string,
  environmentId: string
): boolean {
  switch (userRole) {
    case "OWNER":
    case "ADMIN":
      return true; // Acceso automático

    case "DEVELOPER":
      // Verificar permiso específico
      const permission = await prisma.environmentPermission.findUnique({
        where: {
          userId_environmentId: {
            userId,
            environmentId,
          },
        },
      });
      return !!permission;

    default:
      return false;
  }
}
```

### **3. Usuario modifica variables:**

```typescript
function canModifyVariables(userRole: Role): boolean {
  return userRole === "OWNER" || userRole === "ADMIN";
}
```

---

## 🏗️ Casos de Uso

### **Crear un Proyecto:**

1. Usuario crea proyecto
2. Se genera automáticamente `ProjectMember` con rol `OWNER`
3. Se crean entornos automáticos: `development`, `staging`, `production`
4. Usuario tiene acceso total al proyecto

### **Invitar un Developer:**

1. OWNER/ADMIN crea `Invitation` con rol `DEVELOPER`
2. Se envía email con token único
3. Usuario acepta → se crea `ProjectMember`
4. ADMIN asigna permisos específicos de entorno con `EnvironmentPermission`

### **Promover a Admin:**

1. OWNER cambia `role` en `ProjectMember` de `DEVELOPER` a `ADMIN`
2. Se eliminan todos los `EnvironmentPermission` (ya no los necesita)
3. Usuario ahora tiene acceso automático a todos los entornos

---

## 🔗 Diagrama de Relaciones

```
User ──────────┐
├─ Session     │
├─ ApiKey      │
├─ Invitation  │
└─ ProjectMember ──→ Project ──┐
   └─ role                     ├─ Environment ──┐
                               │  ├─ EnvironmentVariable
                               │  └─ EnvironmentPermission ──→ User
                               └─ AuditLog
```

---

## ⚡ Ventajas del Modelo Actual

### **Simplicidad:**

- ❌ Sin organizaciones complejas
- ✅ Relación directa Usuario → Proyecto
- ✅ Fácil de entender y mantener

### **Flexibilidad:**

- ✅ Un usuario puede tener diferentes roles en diferentes proyectos
- ✅ Permisos granulares por entorno para developers
- ✅ Entornos personalizados ilimitados

### **Escalabilidad:**

- ✅ Auditoría completa de cambios
- ✅ Sistema de invitaciones robusto
- ✅ Gestión de API keys por usuario

### **Seguridad:**

- ✅ Roles claramente definidos
- ✅ Permisos explícitos para entornos
- ✅ Tokens de invitación con expiración

---

## 🔧 Configuración de Prisma

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

**Comandos útiles:**

```bash
# Generar cliente
npx prisma generate

# Crear migración
npx prisma migrate dev

# Ejecutar seed
npx prisma db seed

# Abrir Prisma Studio
npx prisma studio
```
