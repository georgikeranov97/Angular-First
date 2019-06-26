import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent implements OnInit {
  item: Post;

  profileForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  })

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.router.url.split('/')[3];
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map((res:any) => {
      return new Post(res)
    }))
    .subscribe((res: Post) => {
      this.item = res;
    });
  }

  editPost() {
    
  }

}
