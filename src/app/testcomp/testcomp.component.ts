import { Component } from '@angular/core';

// Có thể bỏ qua selector nhưng cần phải có template trong component
@Component({
  selector: 'app-testcomp',
  template: `<app-server></app-server>`,
  styleUrl: './testcomp.component.css',
})
export class TestcompComponent {}
