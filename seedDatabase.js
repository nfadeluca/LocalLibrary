const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
   // Authors
   const author1 = await prisma.author.create({
     data: {
       firstName: 'George',
       familyName: 'Orwell',
       dateOfBirth: new Date('1903-06-25'),
       dateOfDeath: new Date('1950-01-21'),
     },
   });
 
   const author2 = await prisma.author.create({
     data: {
       firstName: 'Aldous',
       familyName: 'Huxley',
       dateOfBirth: new Date('1894-07-26'),
       dateOfDeath: new Date('1963-11-22'),
     },
   });
 
   // Genres
   const sciFi = await prisma.genre.create({
     data: {
       name: 'Science Fiction',
     },
   });
 
   const dystopia = await prisma.genre.create({
     data: {
       name: 'Dystopian',
     },
   });
 
   // Books
   const book1 = await prisma.book.create({
     data: {
       title: '1984',
       author: {
         connect: { id: author1.id },
       },
       summary: 'A dystopian novel set in a totalitarian society.',
       isbn: '978-0-452-28423-4',
       genres: {
         create: [
           {
             genre: {
               connect: { id: sciFi.id },
             },
           },
           {
             genre: {
               connect: { id: dystopia.id },
             },
           },
         ],
       },
     },
   });
 
   const book2 = await prisma.book.create({
     data: {
       title: 'Brave New World',
       author: {
         connect: { id: author2.id },
       },
       summary: 'A dystopian novel set in a technologically advanced society.',
       isbn: '978-0-06-085052-4',
       genres: {
         create: [
           {
             genre: {
               connect: { id: sciFi.id },
             },
           },
           {
             genre: {
               connect: { id: dystopia.id },
             },
           },
         ],
       },
     },
   });
 
   // Book Instances
   await prisma.bookInstance.create({
     data: {
       book: {
         connect: { id: book1.id },
       },
       imprint: 'Penguin Books',
       status: 'Available',
     },
   });
 
   await prisma.bookInstance.create({
     data: {
       book: {
         connect: { id: book2.id },
       },
       imprint: 'Harper Perennial',
       status: 'Available',
     },
   });
 }


main()
   .catch((e) => {
      console.error(e);
      process.exit(1);
   })
   .finally(async () => {
      await prisma.$disconnect();
   });
