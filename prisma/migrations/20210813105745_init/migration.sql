-- CreateTable
CREATE TABLE "Models" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "fee" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outfits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "modelId" INTEGER NOT NULL,
    "designerId" INTEGER NOT NULL,
    "guestId" INTEGER,
    "eventId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Designers" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Events" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME(2) NOT NULL,
    "venue" TEXT NOT NULL,
    "max_capacity" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guests" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuestAtEvent" (
    "id" SERIAL NOT NULL,
    "guestId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Outfits.name_unique" ON "Outfits"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Events.name_unique" ON "Events"("name");

-- AddForeignKey
ALTER TABLE "Outfits" ADD FOREIGN KEY ("modelId") REFERENCES "Models"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfits" ADD FOREIGN KEY ("designerId") REFERENCES "Designers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfits" ADD FOREIGN KEY ("guestId") REFERENCES "Guests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Outfits" ADD FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestAtEvent" ADD FOREIGN KEY ("guestId") REFERENCES "Guests"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuestAtEvent" ADD FOREIGN KEY ("eventId") REFERENCES "Events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
