export interface Tweet {
    author: string,
    nickname: string,
    time: Date,
    text: string,
    picture?: string,
    commentsCount: number,
    retweetsCount: number,
    likesCount: number
}
