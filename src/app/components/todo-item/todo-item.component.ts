import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  template: `
    <div class="flex flex-row justify-between align-center max-w-100% my-2 shadow p-5 hover:bg-lime-100 rounded-md">
      <div>{{todoTitle()}}</div>
      <button 
      class="text-red-500 border py-1 px-2 rounded-xl hover:text-neutral-50 hover:bg-red-500 hover:cursor-pointer" 
      (click)="onDelete()">
      Delete
    </button>
    </div>
  `,
  styles: ``
})
export class TodoItemComponent {
  todoTitle = input<string>()

  delete = output()

  onDelete() {
    this.delete.emit()
  }
}
