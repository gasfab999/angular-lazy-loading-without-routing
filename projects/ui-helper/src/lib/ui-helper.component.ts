import { Component, OnInit } from '@angular/core';
import { ServiceHelperService } from 'service-helper';

@Component({
  selector: 'lib-ui-helper',
  template: `
    <p>
      ui-helper works!!
      <button mat-flat-button color="primary">Mat Button</button>
    </p>
    <mat-card style="width: 400px">
      <mat-card-header>
        <mat-card-title>{{ serviceHelperService.label }}</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        Mat Card Content
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>Test 1</button>
        <button mat-button>Test 2</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [
  ]
})
export class UiHelperComponent implements OnInit {

  constructor(
    public serviceHelperService: ServiceHelperService,
  ) { }

  ngOnInit(): void {
  }

}
