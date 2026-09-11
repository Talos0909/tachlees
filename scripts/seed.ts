const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const electricity = await prisma.category.create({
    data: { name: 'חשמל', slug: 'electricity' },
  });

  const cellular = await prisma.category.create({
    data: { name: 'סלולר', slug: 'cellular' },
  });

  // Create vendors
  const partner = await prisma.vendor.create({
    data: { name: 'Partner', website: 'partner.co.il' },
  });

  const cellcom = await prisma.vendor.create({
    data: { name: 'Cellcom', website: 'cellcom.co.il' },
  });

  // Create services
  const electricityService = await prisma.service.create({
    data: {
      name: 'חשמל - חודשי',
      categoryId: electricity.id,
    },
  });

  const cellularService = await prisma.service.create({
    data: {
      name: 'סלולר - חודשי',
      categoryId: cellular.id,
    },
  });

  // Create prices
  await prisma.price.create({
    data: {
      serviceId: electricityService.id,
      vendorId: partner.id,
      price: 450,
      priceType: 'FIXED',
      confidence: 0.8,
    },
  });

  await prisma.price.create({
    data: {
      serviceId: cellularService.id,
      vendorId: cellcom.id,
      price: 89,
      priceType: 'SUBSCRIPTION',
      confidence: 0.85,
    },
  });

  console.log('✅ Seed completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
