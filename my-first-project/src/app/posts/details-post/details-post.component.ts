import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

import { Post } from '../../post';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.sass']
})
export class DetailsPostComponent implements OnInit {
  item: Post;
  @ViewChild('loader', {static: true}) loader: LoaderComponent;

  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loader.showLoading = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map((res:any) => {
      return new Post(res)
    }))
    .subscribe((res: Post) => {
      this.item = res;
      this.loader.showLoading = false;
    });
  }
}
