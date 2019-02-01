import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeContentComponent } from './some-content/some-content.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SomeContentComponent
    ],
    exports:[
        SomeContentComponent
    ]
})
export class ContentModule {}