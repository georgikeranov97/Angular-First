import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { Post } from '../../post';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {
    items: Post[] = [];
    @ViewChild('loader', {static:true}) loader: LoaderComponent;

    constructor( 
        private httpClient: HttpClient
    ) { }
    ngOnInit(){
        this.loader.showLoading = true;
        this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
        .pipe(map((res:any) => {
            let items = [];
            res.map((item:any) => {
                items.push(new Post(item));
            })

            return items;
        }))
        .subscribe((res: Post[]) => {
            this.items = res;
            this.loader.showLoading = false;
        });
    }
    
    deleteItem(item: Post) {
        this.loader.showLoading = true;
        return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/' + item.id)
        .subscribe(() => {
            this.loader.showLoading = false;
        });
    }
}