import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-input-data',
    templateUrl: './input-data.component.html',
    styleUrls: ['./input-data.component.scss']
})
export class InputDataComponent implements OnInit {
    date: Date;
    constructor() { }

    ngOnInit(): void {
    }

}

