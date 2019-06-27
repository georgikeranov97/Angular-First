import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    body: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
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
      console.log(res);
      this.item = res;
    });
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    console.warn(this.profileForm.value.title);
    console.warn(this.profileForm.value.body);
  }

  editPost() {
    const returnedTarget = Object.assign(this.item, this.profileForm.value);
    console.log(returnedTarget);
    return returnedTarget;
  }

}
