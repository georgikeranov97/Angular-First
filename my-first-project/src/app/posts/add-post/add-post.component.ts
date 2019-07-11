import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/internal/operators';

import { Post } from '../../post';
import { LoaderComponent } from 'src/app/shared/loader/loader.component';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.sass']
})

export class AddPostComponent {
  @ViewChild('loader', {static: true}) loader: LoaderComponent;

  profileForm = this.formBuilder.group({
    title: '',
    body: ''
  })

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit() {
    this.loader.showLoading = true;

    const userId = Math.ceil(Math.random() * 10 + 10);
    this.httpClient.post('https://jsonplaceholder.typicode.com/posts/', {...this.profileForm.value, userId})
    .pipe(map((res: any) => {
        return new Post(res);
    }))
    .subscribe((res: Post) => {
      this.loader.showLoading = false;
      this.router.navigateByUrl('/posts');
    });
  }
}
