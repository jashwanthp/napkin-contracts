import { PrismaClient } from '@prisma/client'

declare global {
  // This prevents TypeScript from complaining about the global variable
  var prisma: PrismaClient | undefined
}

const prisma = globalThis.prisma ?? new PrismaClient()

if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = prisma
}

export { prisma }