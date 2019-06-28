import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../post';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.sass']
})
export class DetailsPostComponent implements OnInit {
  item: Post;
  
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map((res:any) => {
      return new Post(res)
    }))
    .subscribe((res: Post) => {
      this.item = res;
    });
  }
}
