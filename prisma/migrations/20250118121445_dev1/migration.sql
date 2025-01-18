/*
  Warnings:

  - You are about to drop the column `verificationCose` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Data` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Data" ALTER COLUMN "project" SET NOT NULL,
ALTER COLUMN "project" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "verificationCose",
ADD COLUMN     "dataId" TEXT,
ADD COLUMN     "verificationCode" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Data_userId_key" ON "Data"("userId");
