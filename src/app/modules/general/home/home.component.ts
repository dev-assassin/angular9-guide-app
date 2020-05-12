import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment'
import { Meta, Title } from '@angular/platform-browser';

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
        private meta: Meta,
        private titleService: Title
    ) {
        
    }

    ngOnInit() {
        this.titleService.setTitle('angular.dev-assassin: Use Application Web avec Angular');
        this.meta.addTag({
            name: 'angular.dev-assassin',
            content: 'alexandra.petrov'
        });
        this.meta.updateTag({
            name: 'description',
            content: 'Cette application a été développée avec Angular version 9.1.4 et bootstrap 4.4.1' +
            ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
        });
    }
}