export interface User {
    id: string,
    nickname: string,
    credentials: UserCredentials,
    isLoggedIn: boolean,
    avatar: string
}

export interface UserCredentials {
    username: string,
    password: string,
}

