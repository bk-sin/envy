import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { config } from 'dotenv';
import { resolve } from 'path';

// Cargar variables de entorno desde el archivo .env
config({ path: resolve(__dirname, '../.env') });

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Crear usuarios de prueba
  const ownerUser = await prisma.user.upsert({
    where: { email: 'owner@test.com' },
    update: {},
    create: {
      email: 'owner@test.com',
      password: await bcrypt.hash('owner123', 10),
      firstName: 'Project',
      lastName: 'Owner',
    },
  });

  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@test.com' },
    update: {},
    create: {
      email: 'admin@test.com',
      password: await bcrypt.hash('admin123', 10),
      firstName: 'Jane',
      lastName: 'Admin',
    },
  });

  const developerUser = await prisma.user.upsert({
    where: { email: 'developer@test.com' },
    update: {},
    create: {
      email: 'developer@test.com',
      password: await bcrypt.hash('developer123', 10),
      firstName: 'John',
      lastName: 'Developer',
    },
  });

  console.log('✅ Users created:', {
    owner: ownerUser.email,
    admin: adminUser.email,
    developer: developerUser.email,
  });

  // Crear proyecto de ejemplo
  const demoProject = await prisma.project.upsert({
    where: { slug: 'demo-project' },
    update: {},
    create: {
      name: 'Demo Project',
      slug: 'demo-project',
      description: 'Proyecto de demostración para testing',
    },
  });

  console.log('✅ Project created:', demoProject.name);

  // Crear membresías del proyecto
  const ownerMembership = await prisma.projectMember.upsert({
    where: {
      userId_projectId: {
        userId: ownerUser.id,
        projectId: demoProject.id,
      },
    },
    update: {},
    create: {
      userId: ownerUser.id,
      projectId: demoProject.id,
      role: 'OWNER',
    },
  });

  const adminMembership = await prisma.projectMember.upsert({
    where: {
      userId_projectId: {
        userId: adminUser.id,
        projectId: demoProject.id,
      },
    },
    update: {},
    create: {
      userId: adminUser.id,
      projectId: demoProject.id,
      role: 'ADMIN',
    },
  });

  const developerMembership = await prisma.projectMember.upsert({
    where: {
      userId_projectId: {
        userId: developerUser.id,
        projectId: demoProject.id,
      },
    },
    update: {},
    create: {
      userId: developerUser.id,
      projectId: demoProject.id,
      role: 'DEVELOPER',
    },
  });

  console.log('✅ Project memberships created:', {
    owner: ownerMembership.role,
    admin: adminMembership.role,
    developer: developerMembership.role,
  });

  // Crear entornos automáticos
  const environments = [
    {
      name: 'Development',
      slug: 'development',
      type: 'DEVELOPMENT' as const,
    },
    {
      name: 'Staging',
      slug: 'staging',
      type: 'STAGING' as const,
    },
    {
      name: 'Production',
      slug: 'production',
      type: 'PRODUCTION' as const,
    },
  ];

  const createdEnvironments = [];
  for (const env of environments) {
    const environment = await prisma.environment.upsert({
      where: {
        slug_projectId: {
          slug: env.slug,
          projectId: demoProject.id,
        },
      },
      update: {},
      create: {
        name: env.name,
        slug: env.slug,
        type: env.type,
        projectId: demoProject.id,
      },
    });
    createdEnvironments.push(environment);
  }

  console.log(
    '✅ Environments created:',
    createdEnvironments.map((e) => e.name),
  );

  // Dar acceso al developer solo al entorno de development
  const devEnvironment = createdEnvironments.find(
    (e) => e.slug === 'development',
  );
  if (devEnvironment) {
    await prisma.environmentPermission.upsert({
      where: {
        userId_environmentId: {
          userId: developerUser.id,
          environmentId: devEnvironment.id,
        },
      },
      update: {},
      create: {
        userId: developerUser.id,
        environmentId: devEnvironment.id,
      },
    });

    console.log('✅ Developer given access to development environment');
  }

  // Crear variables de ejemplo
  const variables = [
    {
      key: 'DATABASE_URL',
      value: 'postgresql://user:pass@localhost:5432/demo_dev',
      description: 'URL de conexión a la base de datos',
      environmentId: devEnvironment?.id,
    },
    {
      key: 'API_SECRET',
      value: 'super-secret-key-dev',
      description: 'Clave secreta para la API',
      environmentId: devEnvironment?.id,
    },
    {
      key: 'REDIS_URL',
      value: 'redis://localhost:6379',
      description: 'URL de Redis para caché',
      environmentId: devEnvironment?.id,
    },
  ];

  const stagingEnv = createdEnvironments.find((e) => e.slug === 'staging');
  const productionEnv = createdEnvironments.find(
    (e) => e.slug === 'production',
  );

  // Agregar variables para staging
  if (stagingEnv) {
    variables.push(
      {
        key: 'DATABASE_URL',
        value: 'postgresql://user:pass@staging.db.com:5432/demo_staging',
        description: 'URL de conexión a la base de datos',
        environmentId: stagingEnv.id,
      },
      {
        key: 'API_SECRET',
        value: 'staging-secret-key',
        description: 'Clave secreta para la API',
        environmentId: stagingEnv.id,
      },
    );
  }

  // Agregar variables para production
  if (productionEnv) {
    variables.push(
      {
        key: 'DATABASE_URL',
        value: 'postgresql://user:pass@prod.db.com:5432/demo_prod',
        description: 'URL de conexión a la base de datos',
        environmentId: productionEnv.id,
      },
      {
        key: 'API_SECRET',
        value: 'production-secret-key-very-secure',
        description: 'Clave secreta para la API',
        environmentId: productionEnv.id,
      },
    );
  }

  for (const variable of variables) {
    if (variable.environmentId) {
      await prisma.environmentVariable.upsert({
        where: {
          key_environmentId: {
            key: variable.key,
            environmentId: variable.environmentId,
          },
        },
        update: {},
        create: {
          key: variable.key,
          value: variable.value,
          description: variable.description,
          environmentId: variable.environmentId,
        },
      });
    }
  }

  console.log('✅ Environment variables created');

  // Crear un log de auditoría de ejemplo
  await prisma.auditLog.create({
    data: {
      action: 'CREATE',
      entityType: 'PROJECT',
      entityId: demoProject.id,
      userId: ownerUser.id,
      projectId: demoProject.id,
      newValues: {
        name: demoProject.name,
        slug: demoProject.slug,
      },
    },
  });

  console.log('✅ Audit log created');

  console.log('\n🎉 Seed completed successfully!');
  console.log('\n📝 Test accounts:');
  console.log('- Owner: owner@test.com / owner123 (Acceso total al proyecto)');
  console.log(
    '- Admin: admin@test.com / admin123 (Gestiona variables e invita)',
  );
  console.log(
    '- Developer: developer@test.com / developer123 (Solo acceso a development)',
  );
  console.log('\n🚀 Project: Demo Project');
  console.log('- 3 environments: development, staging, production');
  console.log('- Developer only has access to development environment');
  console.log('- Sample variables created in all environments');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
