import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/post';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.sass']
})
export class EditPostComponent implements OnInit {
  item: Post;
  public profileForm;
  @ViewChild('loader', {static: true}) loader: LoaderComponent;
  
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
      userId: '',
    });

    this.loader.showLoading = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .pipe(map((res:any) => {
      return new Post(res)
    }))
    .subscribe((res: Post) => {
      this.profileForm.controls.title.setValue(res.title);
      this.profileForm.updateValueAndValidity();

      this.profileForm.controls.body.setValue(res.body);
      this.profileForm.updateValueAndValidity();

      this.profileForm.controls.userId.setValue(res.userId);
      this.profileForm.updateValueAndValidity();

      this.item = res;
      this.loader.showLoading = false;
    });
  }

  onSubmit() {
    if(this.profileForm.invalid) {
      return;
    }

    this.loader.showLoading = true;
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.httpClient.put('https://jsonplaceholder.typicode.com/posts/' + id, this.profileForm.value)
    .subscribe((res: Post) => {
      this.item = res;
      this.loader.showLoading = false;
    });
    
    this.router.navigateByUrl('/posts');
  }

  redirectToPostsPage() {
    this.router.navigateByUrl('/posts');
  }
}
