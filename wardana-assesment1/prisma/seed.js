import { PrismaClient } from '../generated/prisma/client.js'
const prisma = new PrismaClient();

async function main() {
    // Contoh data:
    const user = [
    { username: 'test123', password: 'test123' },
    { username: 'Bob', password: 'bob@example.com' },
    ];

    // Memasukkan data pengguna:
    for (const users of user) {
    await prisma.users.create({
        data: users,
    });
    }

    const data_owners = [
    { owner_name: 'Apple.Inc' },
    { owner_name: 'Samsung Ltd' },
    ];

    for (const owners of data_owners) {
    await prisma.owners.create({
        data: owners,
    });
    }

    const data_product = [
    { product_name: 'Iphone 16 Pro', product_brand: 'Iphone' },
    { product_name: 'Ipad Air 11', product_brand: 'Ipad' },
    { product_name: 'Macbook Pro 16', product_brand: 'Macbook' },
    { product_name: 'Galaxy S25 Series', product_brand: 'Phone' },
    { product_name: 'Galaxy Tab S10FE', product_brand: 'Tablet' },
    { product_name: 'Evercross X8', product_brand: 'Phone' },
    { product_name: 'Advance G9', product_brand: 'Phone' },
    ];

    for (const products of data_product) {
    await prisma.products.create({
        data: products,
    });
    }

    const data_product_owners = [
    { product_id: 1, owners_id: 1 },
    { product_id: 2, owners_id: 1 },
    { product_id: 3, owners_id: 1 },
    { product_id: 4, owners_id: 2 },
    { product_id: 5, owners_id: 2 },
    ];

    for (const products_owners of data_product_owners) {
    await prisma.products_owners.create({
        data: products_owners,
    });
    }
}

main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
    })
    .finally(async () => {
    await prisma.$disconnect();
    });