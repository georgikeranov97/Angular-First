import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {
    items: Post[] = [];
    name = new FormControl('');
    loading = false;

    constructor( 
        private httpClient: HttpClient,
        private activatedRoute: ActivatedRoute,
    ) { }
    ngOnInit(){
        this.loading = true;
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
            console.log(this.items);
            this.loading = false;
        });

        this.activatedRoute.params.subscribe(params=>{
            console.log(params);
        });
    }
    
    deleteItem(item) {
        this.loading = true;
        item = event.target;
        const itemId = +(item.attributes['id'].value);
        return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/' + itemId)
        .subscribe((s) => {
            console.log(s);
            console.log(this.items);
            this.loading = false;
        });
    }
}