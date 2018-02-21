import { Component } from '@angular/core';
import { BackendService } from '../../shared/services/backend.service';

@Component({
    selector: 'base',
    templateUrl: 'base-component.html'
})

export class BaseComponent {
    posts: any;
    constructor(private backendService: BackendService) {
        backendService.fetchPost().subscribe(data => {
            this.posts = data;
        });
    }
}
