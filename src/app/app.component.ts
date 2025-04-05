import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, TodoListComponent],
  template: `
     <div class="p-6">
      <div class="text-center text-2xl text-blue-600 font-bold">{{title}}</div>
      <form class="bg-slate-50 p-3 max-w-150 rounded m-auto my-6 flex flex-col shadow-md" [formGroup]="todoForm" (ngSubmit)="createTodo()">
        <div class="flex flex-row">
          <input class="w-md border border-slate-300 rounded-xl py-1 px-2 mx-2" type="text" formControlName="todoTitle" placeholder="Create new Todo here">
          <button class="text-white bg-blue-500 hover:bg-blue-700 px-6 rounded-xl disabled:bg-slate-300" type="submit" [disabled]="todoForm.invalid">Create</button>
        </div>
        @if (todoForm.controls.todoTitle.dirty && todoForm.controls.todoTitle. value.trim().length < 2) {
            <span class="text-red-500 text-xs mx-3 my-1">Todo title must be on at least 02 characters</span>
          }
      </form>
      <app-todo-list [todo]="newTodo" />
     </div>
  `,
  styles: [],
})
export class AppComponent {
  title: string = 'Simple Todo 😅'
  newTodo = ''

  todoForm = new FormGroup({
    todoTitle: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] })
  })

  createTodo() {
    this.newTodo = this.todoForm.value.todoTitle!
    this.todoForm.reset()
  }
}
