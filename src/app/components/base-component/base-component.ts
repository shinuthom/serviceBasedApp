import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';

@Component({
    selector: 'base',
    templateUrl: 'base-component.html'
})

export class BaseComponent {
    posts: any;
    constructor(private backendService: BackendService) {
    }
    ngOnInit() {
        this.backendService.fetchPostServiceBased();
        this.backendService.fetchPost().subscribe(data => {
            this.posts = data;
        });
    }
}
