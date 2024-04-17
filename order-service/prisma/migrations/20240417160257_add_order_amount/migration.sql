/*
  Warnings:

  - Added the required column `orderAmount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "orderAmount" DOUBLE PRECISION NOT NULL;
