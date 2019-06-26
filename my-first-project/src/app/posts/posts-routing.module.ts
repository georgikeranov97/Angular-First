import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AddPostComponent } from './add-post/add-post.component';
import { DetailsPostComponent } from './details-post/details-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
    {
        path: 'posts',
        children: [
            {
                path: '',
                component: IndexComponent,
            },
            {
                path: 'add',
                component: AddPostComponent,
            },
            {
                path: 'details/:id',
                component: DetailsPostComponent,
            },
            {
                path: 'edit/:id',
                component: EditPostComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class PostsRoutingModule { }