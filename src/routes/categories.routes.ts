import { Request, Response, Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
    const { name, description } = req.body;

    const categoryAlreadyExists = categoriesRepository.findByname(name);

    if (categoryAlreadyExists) {
        return res.status(400).json({ error: "Category Alreadyy Exists" });
    }

    categoriesRepository.create({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categoriesRoutes };
