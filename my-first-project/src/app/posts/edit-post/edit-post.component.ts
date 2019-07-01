import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent implements OnInit {
  item: Post;
  public profileForm;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.profileForm =  this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      body: ['', [Validators.required, Validators.minLength(6)]],
    })
  
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map((res:any) => {
      return new Post(res)
    }))
    .subscribe((res: Post) => {
      console.log(res);
      this.item = res;
    });
  }

  onSubmit(post: Post) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    post = this.profileForm.value;
    this.httpClient.put('https://jsonplaceholder.typicode.com/posts/' + id, post)
    .subscribe((res: Post) => {
      this.item = res;
      console.log(res)
    })
    console.warn(this.profileForm.value);
    console.warn(this.profileForm.value.title);
    console.warn(this.profileForm.value.body);
    if(this.profileForm.invalid) {
      return;
    }
    this.router.navigateByUrl('/posts');
  }

  // editPost() {
  //   const returnedTarget = Object.assign(this.item, this.profileForm.value);
  //   console.log(returnedTarget);
  //   return returnedTarget;
  // }

  // redirectToPostsPage() {
  //   this.router.navigateByUrl('/posts');
  // }
}
