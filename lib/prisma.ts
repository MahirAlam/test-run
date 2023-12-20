// /lib/prisma.ts

// declaring production prisma client or global cached prisma client

import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient;
}

// Initialize the prisma client
let prisma: PrismaClient;

// If we are in production, create a new prisma client
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // If we are not in production, check if cachedPrisma is defined
  // If it is not, create a new prisma client and cache it
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  // Set the prisma client to the cached one
  prisma = global.cachedPrisma;
}

// Export the prisma client
export default prisma;
