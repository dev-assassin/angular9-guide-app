import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SmartphoneComponent } from './smartphone/smartphone.component';

@NgModule({
    declarations: [SmartphoneComponent],
    imports: [
        CommonModule
    ],
    exports: [SmartphoneComponent]
})

export class TutorialModule {}
