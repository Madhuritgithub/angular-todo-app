import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for *ngFor
import { FormsModule } from '@angular/forms';   // for [(ngModel)]

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, FormsModule],  // 👈 add here
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent {
  newTask: string = '';
  tasks: string[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
