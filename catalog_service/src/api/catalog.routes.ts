import express, { NextFunction, Request, Response } from "express";
import { CatalogRepository } from "repository/catalog.repository";
import { CatalogService } from "services/catalog.service";
const router = express.Router();

export const catalogService = new CatalogService(new CatalogRepository());

router.post(
  "/products",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body;
      if (name === undefined || name === "") {
        return res.status(400).json("name should not be empty");
      }
      const data = await catalogService.createProduct(req.body);
      return res.status(201).json(data);
    } catch (error) {
      const err = error as Error;
      return res.status(500).json(err.message);
    }
  }
);

export default router;
