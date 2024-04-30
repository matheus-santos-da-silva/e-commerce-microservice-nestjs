/*
  Warnings:

  - Added the required column `paymentType` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentTypeEnum" AS ENUM ('PIX', 'CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "paymentType" "PaymentTypeEnum" NOT NULL;
