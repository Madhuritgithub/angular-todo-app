import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // 👈 for *ngIf, *ngFor, [ngStyle], etc.
import { FormsModule } from '@angular/forms';     // 👈 for [(ngModel)]

import { TodoAppComponent } from './todo-app/todo-app.component'; // 👈 import your generated component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoAppComponent], // 👈 add here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
}
