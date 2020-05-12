import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment'
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    name = environment.application.name;
    angular = environment.application.angular;
    bootstrap = environment.application.bootstrap;
    fontawesome = environment.application.fontawesome;

    feautures: any;
    constructor(
        private titleService: Title
    ) {
        
    }

    ngOnInit() {
        this.titleService.setTitle('angular.dev-assassin: Use Application Web avec Angular');
    }
}