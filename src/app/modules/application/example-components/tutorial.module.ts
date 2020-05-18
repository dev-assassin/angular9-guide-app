import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TutorialRoutingModule} from './tutorial-routing.module';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TutorialComponent } from './tutorial.component';

@NgModule({
    declarations: [
        TutorialComponent,
        SmartphoneComponent
    ],
    imports: [
        CommonModule,
        TutorialRoutingModule
    ],
    exports: [SmartphoneComponent]
})

export class TutorialModule {}
