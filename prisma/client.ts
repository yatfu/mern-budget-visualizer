import { PrismaClient as Client } from "@prisma/client"

import { PrismaClient } from "@prisma/client"


// use one client stored globally instead of creating multiple instances of clients per reload
// this is needed because nextjs reloads constantly, creating new clients
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}