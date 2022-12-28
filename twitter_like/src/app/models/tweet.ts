export interface Tweet {
    id: string,
    author: string,
    nickname: string,
    time: Date,
    text: string,
    picture?: string,
    comment: Tweet[],
    retweetsCount: number,
    likesCount: number
}

