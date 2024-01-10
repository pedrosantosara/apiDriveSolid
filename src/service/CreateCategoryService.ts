import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequesst {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}
    execute({ name, description }: IRequesst): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
