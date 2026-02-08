-- CreateTable
CREATE TABLE "CollaboratorDailyScore" (
    "id" SERIAL NOT NULL,
    "collaborator_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "CollaboratorDailyScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollaboratorDailyScore_collaborator_id_date_key" ON "CollaboratorDailyScore"("collaborator_id", "date");

-- AddForeignKey
ALTER TABLE "CollaboratorDailyScore" ADD CONSTRAINT "CollaboratorDailyScore_collaborator_id_fkey" FOREIGN KEY ("collaborator_id") REFERENCES "Collaborators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
