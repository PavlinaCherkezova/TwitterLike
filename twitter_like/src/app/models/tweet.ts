export interface Tweet {
    id: string,
    author: string,
    nickname: string,
    time: Date,
    text: string,
    picture?: string,
    comment: Comment[],
    retweetsCount: number,
    likesCount: number
}

export interface Comment {
    id: string,
    author: string,
    nickname: string,
    time: Date,
    text: string,
    picture?: string,
    comment: Comment[],
    retweetsCount: number,
    likesCount: number
}
