import { CreateRecipeDto } from "./dto/create-recipe.dto";
import { UpdateRecipeDto } from "./dto/update-recipe.dto";
import { PrismaService } from "src/prisma/prisma.service";
export declare class RecipeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createRecipeDto: CreateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
