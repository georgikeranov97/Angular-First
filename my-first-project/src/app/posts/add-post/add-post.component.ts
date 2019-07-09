import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../post';
import { map } from 'rxjs/internal/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})

export class AddPostComponent implements OnInit {
  profileForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  })

  item: Post;
  loading = false;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  addNewPost() {
    this.loading = true;
    const userId = Math.ceil(Math.random() * 10 + 10);
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts/', {...this.profileForm.value, userId})
    .pipe(map((res: any) => {
        return new Post(res);
    })).subscribe((res: Post) => {
      console.log(res);
      this.item = res;
      this.router.navigateByUrl('/posts');
      this.loading = false;
    });

  }
}
