# **Envy Project** ✨

Bienvenido a Envy, una plataforma moderna para la gestión y visualización de variables de entorno para tus proyectos. Este repositorio contiene el código fuente de la aplicación web y la API correspondiente, estructurado como un monorepo para un desarrollo ágil y centralizado.

## **Tabla de Contenidos**

- [Descripción](https://www.google.com/search?q=%23descripci%C3%B3n-%EF%B8%8F&authuser=1)
- [Stack Tecnológico](https://www.google.com/search?q=%23stack-tecnol%C3%B3gico-&authuser=1)
- [Estructura del Repositorio](https://www.google.com/search?q=%23estructura-del-repositorio-&authuser=1)
- [Primeros Pasos](https://www.google.com/search?q=%23primeros-pasos-&authuser=1)
    - [Pre-requisitos](https://www.google.com/search?q=%23pre-requisitos&authuser=1)
    - [Instalación](https://www.google.com/search?q=%23instalaci%C3%B3n&authuser=1)
- [Scripts Disponibles](https://www.google.com/search?q=%23scripts-disponibles-&authuser=1)
- [Contacto](https://www.google.com/search?q=%23contacto-&authuser=1)

## **Descripción** ✍️

Envy es una aplicación full-stack diseñada para centralizar la información de tus proyectos. Permite a los equipos visualizar el progreso, gestionar tareas y mantener una fuente única de verdad para cada iniciativa.

### **Funcionalidades Planeadas**

- **Dashboard de Proyectos**: Una vista principal para ver todos los proyectos activos.
- **Vista Detallada**: Páginas individuales para cada proyecto con información específica.
- **Consola Interactiva**: Una interfaz de línea de comandos (`/cli`).
- **Gestión de Equipos**: Una sección (`/team`) para visualizar a los miembros del equipo.

## **Stack Tecnológico** 🛠️

Este proyecto utiliza un stack moderno basado en TypeScript para garantizar un código robusto y escalable.

| Categoría         | Tecnología                                                                                                                                                      |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**      | **Next.js** (con App Router), **React**, **Tailwind CSS**                                                                                                       |
| **Backend**       | **NestJS**, **TypeScript**                                                                                                                                      |
| **Base de Datos** | **PostgreSQL** con **Prisma ORM**                                                                                                                               |
| **UI y UX**       | **Shadcn/ui** (Componentes), **Zustand** (Estado), **React Hook Form** (Formularios), **Sonner** (Notificaciones), **Lucide** (Iconos), **Recharts** (Gráficos) |
| **Herramientas**  | **ESLint**, **Zod** (Validación), **Concurrently** (Monorepo scripts)                                                                                           |

## **Estructura del Repositorio** 📂

Este proyecto es un **monorepo** gestionado con npm workspaces, lo que permite mantener el frontend y el backend en un único lugar.

```
/envy
|-- /apps
|   |-- /api      # Aplicación Backend (NestJS)
|   `-- /web      # Aplicación Frontend (Next.js)
|-- .gitignore
|-- package.json  # Scripts y dependencias raíz
`-- README.md
```

## **Primeros Pasos** 🚀

Sigue estas instrucciones para configurar el entorno de desarrollo en tu máquina local.

### **Pre-requisitos**

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (v9 o superior)
- Una instancia de [PostgreSQL](https://www.postgresql.org/) corriendo.

### **Instalación**

1. **Clona el repositorio:**
```Bash
git clone https://github.com/bk-sin/envy.git
cd envy
```
    
2. **Instala las dependencias del proyecto raíz:**
```Bash
npm install
```
    
Este comando instalará `concurrently` y otras dependencias globales del monorepo.

3. Instala las dependencias de la API y la Web:
    Navega a cada una de las carpetas dentro de apps y ejecuta npm install:
```Bash
# Instalar dependencias del backend
cd apps/api
npm install
cd ../..
 
# Instalar dependencias del frontend
cd apps/web
npm install
cd ../..
```
    
4. Configura las variables de entorno:
    En la carpeta apps/api, crea un archivo .env a partir del ejemplo .env.example (si lo tuvieras). Deberás configurar la URL de conexión a tu base de datos PostgreSQL.
```TOML
# apps/api/.env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"

# apps/web/.env
NEXT_PUBLIC_API_URL="http://localhost:4000"
```
    
5. Ejecuta las migraciones de la base de datos (Prisma):
    Una vez configurado el .env, sincroniza el esquema de Prisma con tu base de datos.
```Bash
cd apps/api
npx prisma migrate dev
```

## **Scripts Disponibles** ▶️

Desde la carpeta raíz del proyecto (`/envy`), puedes usar los siguientes scripts:

- **`npm run dev`**: Inicia tanto el servidor de la API de NestJS como el de desarrollo de Next.js en modo concurrente.
    - La API estará disponible en `http://localhost:4000`.
    - La aplicación web estará disponible en `http://localhost:3000`.
- **`npm run dev:api`**: Inicia únicamente el servidor de la API.
- **`npm run dev:web`**: Inicia únicamente el servidor de desarrollo del frontend.

## **Contacto** 📧

Creado por **Emiliano Alegre** - [bk-sin](https://github.com/bk-sin)

No dudes en abrir un _issue_ si encontrás algún problema o si tenes alguna sugerencia.