-- CreateTable
CREATE TABLE "Taks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "IsCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "Taks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Taks_id_key" ON "Taks"("id");
