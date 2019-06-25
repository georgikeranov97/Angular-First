import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../post';
import { map } from 'rxjs/internal/operators';
import { Router } from '@angular/router';
// import { map } from 'rxjs/internal/operators';

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
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts/', {
      title: 'My first post',
      body: 'This is my very first post',
    }).pipe(map((res: any) => {
        return new Post(res);
    })).subscribe((res: Post) => {
      console.log(2, res);
      this.item = res;
      this.router.navigateByUrl('/posts');
    });

  }
  

}
