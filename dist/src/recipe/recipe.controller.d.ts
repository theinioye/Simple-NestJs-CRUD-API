import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__RecipeClient<{
        title: string;
        description: string | null;
        ingredients: string;
        instructions: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): import(".prisma/client").Prisma.Prisma__RecipeClient<{
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
