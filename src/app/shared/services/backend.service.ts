import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendService {
    posts: any;
    constructor(private _http: HttpClient) {}
    fetchPost() {
        return this._http.get('https://jsonplaceholder.typicode.com/posts').map(res => res);
    }
    fetchPostServiceBased() {
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(data => this.posts = data);
    }
    getAllPostServiceBased() {
        return this.posts;
    }
}
