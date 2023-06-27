/*
  Warnings:

  - A unique constraint covering the columns `[unique_username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unique_username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `unique_username` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_unique_username_key` ON `users`(`unique_username`);
