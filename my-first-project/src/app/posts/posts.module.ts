import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      IndexComponent, 
      AddPostComponent, 
      DetailsPostComponent, 
      EditPostComponent
    ],
    imports: [
      CommonModule,
      PostsRoutingModule,
      ReactiveFormsModule,
      SharedModule
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
    ],
  })

export class PostsModule { }