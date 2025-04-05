import { Component, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItemComponent],
  template: `
    <div class="flex flex-col max-w-300 m-auto p-8">
      @if (todos.length > 0) {
        <div>All Todos ({{todos.length}})</div>
      }
      @for (todo of todos; track $index) {
        <app-todo-item [todoTitle]="todo" (delete)="removeTodo($index)" />
      }@empty {
        <div class="flex flex-col text-center text-slate-400 py-8 mt-10">
          <code class="text-2xl">Nothing to show! 👆🏾 Create new Todo.</code>
        </div>
      }
    </div>
  `,
  styles: ``
})
export class TodoListComponent implements OnInit, OnChanges {
  todo = input<string>()
  todos: string[] = []

  ngOnInit(): void {
    this.todos = []
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.todos.push(changes['todo'].currentValue)
  }

  removeTodo(index: number) {
    this.todos = this.todos.filter((_, i) => index !== i)
  }
}
