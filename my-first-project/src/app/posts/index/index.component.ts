import { map } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../post';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {
    items: Post[] = [];

    constructor( 
        private httpClient: HttpClient,
    ) { }
    ngOnInit(){
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
        });
    }
    
    deleteItem(item) {
        item = event.target;
        var id = item.attributes['id'].value;
        console.log(event.target);
        console.log(id);
        console.log(this.items);
        console.log(this.items[id - 1]);
       
        // this.items.filter((id) => {

        // })
        // return this.httpClient.delete('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}