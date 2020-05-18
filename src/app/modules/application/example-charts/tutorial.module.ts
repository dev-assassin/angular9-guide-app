import {NgModule} from '@angular/core';
import { TutorialComponent } from './tutorial.component';
import { CommonModule } from '@angular/common';
import {ChartsModule} from 'ng2-charts';
import { TutorialRoutingModule } from './tutorial-routing.module';

@NgModule({
    declarations: [
        TutorialComponent
    ],
    imports: [
        CommonModule,
        ChartsModule,
        TutorialRoutingModule
    ],
    exports: [
        TutorialComponent
    ]
})

export class TutorialModule {}
