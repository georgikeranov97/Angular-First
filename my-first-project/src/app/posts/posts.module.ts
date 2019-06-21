import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
    declarations: [IndexComponent],
    imports: [
      CommonModule,
      PostsRoutingModule
    ]
  })

export class PostsModule { }
