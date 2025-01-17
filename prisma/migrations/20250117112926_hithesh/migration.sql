-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificationCose" INTEGER,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;
