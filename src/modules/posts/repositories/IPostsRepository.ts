import { ICreatePostsDTO } from "../dtos/ICreatePostsDTO";

interface IPostsRepository {
    create(data: ICreatePostsDTO): Promise<void>
}

export { IPostsRepository }