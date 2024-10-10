-- CreateTable
CREATE TABLE "recibo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "tarifa" TEXT NOT NULL,
    "costo" INTEGER NOT NULL,
    "inicioPeriodo" TIMESTAMP(3) NOT NULL,
    "finPeriodo" TIMESTAMP(3) NOT NULL,
    "kWh" INTEGER NOT NULL,

    CONSTRAINT "recibo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "recibo" ADD CONSTRAINT "recibo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
