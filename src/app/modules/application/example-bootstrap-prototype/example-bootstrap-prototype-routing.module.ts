import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BlockquotesComponent } from './components/blockquotes/blockquotes.components';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const routes: Routes = [
    {path: '', component: ExampleBootstrapPrototypeComponent, children: [
        {path: 'alerts', component: AlertsComponent},
        {path: 'badge', component: BadgeComponent},
        {path: 'blockquotes', component: BlockquotesComponent},
        {path: 'breadcrumb', component: BreadcrumbComponent},
        {path: 'buttons', component: ButtonsComponent},
        {path: '', redirectTo: '/bootstrap-prototype/alerts', pathMatch: 'full'},
        {path: '**', component: AlertsComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExampleBootstrapPrototypeRoutingModule {}
