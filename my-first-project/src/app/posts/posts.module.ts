import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPostComponent } from './details-post/details-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
    declarations: [IndexComponent, AddPostComponent, DetailsPostComponent, EditPostComponent],
    imports: [
      CommonModule,
      PostsRoutingModule,
      ReactiveFormsModule,
    ]
  })

export class PostsModule { }