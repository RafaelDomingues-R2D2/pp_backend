import { container } from "tsyringe"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

import { PostsRepository } from "../../modules/posts/repositories/implementations/PostsRepository"
import { IPostsRepository } from "../../modules/posts/repositories/IPostsRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IPostsRepository>(
    "PostsRepository",
    PostsRepository
)