import { inject, injectable } from "tsyringe";
import { ICreatePostsDTO } from "../../dtos/ICreatePostsDTO";
import { IPostsRepository } from "../../repositories/IPostsRepository";

@injectable()
class CreatePostUseCase {
    constructor(
        @inject("PostsRepository")
        private postsRepository: IPostsRepository
    ){}

    async execute({author_id, title, description}: ICreatePostsDTO): Promise<void> {
        this.postsRepository.create({
            author_id,
            title,
            description
        })
    }
}

export { CreatePostUseCase }