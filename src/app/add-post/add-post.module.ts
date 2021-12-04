import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostComponent } from './add-post.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AddPostComponent],
    exports: [AddPostComponent]
})
export class AddPostModule { }