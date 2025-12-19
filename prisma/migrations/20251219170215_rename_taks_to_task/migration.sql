/*
  Warnings:

  - You are about to drop the `Taks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Taks";

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
