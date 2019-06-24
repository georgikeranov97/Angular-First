import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
    declarations: [IndexComponent, AddPostComponent],
    imports: [
      CommonModule,
      PostsRoutingModule
    ]
  })

export class PostsModule { }