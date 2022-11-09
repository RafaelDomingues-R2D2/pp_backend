import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreatePostsDTO } from "../../dtos/ICreatePostsDTO";
import { IPostsRepository } from "../IPostsRepository";

class PostsRepository implements IPostsRepository{
    async create({author_id, title, description}: ICreatePostsDTO): Promise<void> {
        await prisma.post.create({
            data: {
                author_id,
                title,
                description
            }
        })
    }
}

export { PostsRepository }