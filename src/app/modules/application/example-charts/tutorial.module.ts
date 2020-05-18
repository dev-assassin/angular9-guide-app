import {NgModule} from '@angular/core';
import { TutorialComponent } from './tutorial.component';
import { BrowserModule } from '@angular/platform-browser';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    declarations: [
        TutorialComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule
    ],
    exports: [
        TutorialComponent
    ]
})

export class TutorialModule {}
