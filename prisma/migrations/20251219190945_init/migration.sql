-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborators" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "register_data" DATE NOT NULL,
    "os_counter" INTEGER NOT NULL DEFAULT 0,
    "rework_counter" INTEGER NOT NULL DEFAULT 0,
    "total_time_minutes" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resources" (
    "id" SERIAL NOT NULL,
    "resource_number" INTEGER NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "is_rework" BOOLEAN NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "start_datetime" TIMESTAMP NOT NULL,
    "end_datetime" TIMESTAMP NOT NULL,
    "duration_min" INTEGER NOT NULL,
    "collaborator_id" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Resources_resource_number_key" ON "Resources"("resource_number");

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "Collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
