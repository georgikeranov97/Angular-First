import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [IndexComponent, AddPostComponent],
    imports: [
      CommonModule,
      PostsRoutingModule,
      ReactiveFormsModule,
    ]
  })

export class PostsModule { }