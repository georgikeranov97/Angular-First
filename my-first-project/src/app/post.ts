import { PassThrough } from 'stream';

export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;

    constructor(params) {
        if(params.id) {
            this.id = params.id;
        }

        if(params.userId) {
            this.userId = params.userId;
        }

        if(params.title) {
            this.title = params.title;
        }

        if(params.body) {
            this.body = params.body;
        }
    }
}