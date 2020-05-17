import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ExampleBootstrapPrototypeComponent } from './example-bootstrap-prototype.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgeComponent } from './components/badge/badge.component';
import { BlockquotesComponent } from './components/blockquotes/blockquotes.components';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import {CollapseComponent} from './components/collapse/collapse.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { FormsComponent } from './components/forms/forms.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PopoversComponent } from './components/popovers/popovers.component';

const routes: Routes = [
    {path: '', component: ExampleBootstrapPrototypeComponent, children: [
        {path: 'alerts', component: AlertsComponent},
        {path: 'badge', component: BadgeComponent},
        {path: 'blockquotes', component: BlockquotesComponent},
        {path: 'breadcrumb', component: BreadcrumbComponent},
        {path: 'buttons', component: ButtonsComponent},
        {path: 'collapse', component: CollapseComponent},
        {path: 'dropdowns', component: DropdownsComponent},
        {path: 'forms', component: FormsComponent},
        {path: 'list-group', component: ListGroupComponent},
        {path: 'modal', component: ModalComponent},
        {path: 'pagination', component: PaginationComponent},
        {path: 'popovers', component: PopoversComponent},
        {path: '', redirectTo: '/bootstrap-prototype/alerts', pathMatch: 'full'},
        {path: '**', component: AlertsComponent}
    ]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ExampleBootstrapPrototypeRoutingModule {}

