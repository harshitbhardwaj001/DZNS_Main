import { PrismaClient } from "@prisma/client";
import {renameSync} from "fs";

export const addServices = async (req, res, next) => {
  try {
    if (req.files) {
      const fileKeys = Object.keys(req.files);
      const fileNames = [];
      fileKeys.forEach((file) => {
        const date = Date.now();
        renameSync(
          req.files[file].path,
          "uploads/" + date + req.files[file].originalname
        );
        fileNames.push(date + req.files[file].originalname);
      });
      if(req.query) {
        const {
            title,
            description,
            category,
            features,
            price,
            revisions,
            time,
            shortDesc
        } = req.query;

        const prisma = new PrismaClient();

        await prisma.services.create({
            data: {
                title,
                description,
                deliveryTime: parseInt(time),
                category,
                features,
                price: parseInt(price),
                shortDesc,
                revisions: parseInt(revisions),
                createdBy: { connect: { id: req.userId } },
                images: fileNames,
            },
        });

        return res.status(201).send("Successfully created the service.");
      }
    }
    return res.status(400).send("All properties should be required.");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error.");
  }
};
