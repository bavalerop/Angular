import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <p [appResaltado]="'red'">
    Hola Mundo
  </p>
  
  <br>
  <app-ng-switch></app-ng-switch>

  <app-ng-style></app-ng-style>

<app-css></app-css>

<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente voluptas aperiam rerum nostrum! Temporibus, eaque quas maxime quaerat sint voluptatem, officia laboriosam, nam dolores dolore totam adipisci rem quisquam repellendus!
</p>

<app-clases></app-clases>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
