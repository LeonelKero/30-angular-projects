import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div class="xs:w-full max-w-md m-auto mt-10 rounded-md p-5 bg-stone-50 drop-shadow-lg">
      <h1 class="text-3xl text-center text-sky-700 text-grey-100 p-3">{{profileCard}}</h1>
      <div class="mt-6">
        <div><strong>Name: </strong> {{name}}</div>
        <div><strong>Age: </strong>{{age}}</div>
        <div>
          <p>
            <strong>Presentation: </strong>{{presentation}}
          </p>
        </div>
      </div>
      <div class="mt-6 flex flex-col">
        <h4 class="text-xl text-sky-500 font-light mb-2">Update Profile</h4>
        <input class="border border-slate-300 p-2 my-2 rounded-xl" type="text" [(ngModel)]="name" placeholder="Your name">
        <input class="border border-slate-300 p-2 my-2 rounded-xl" type="number" [(ngModel)]="age" placeholder="Your age">
        <input class="border border-slate-300 p-2 mt-2 mb-4 rounded-xl" type="text" [(ngModel)]="presentation" placeholder="Tell us a bit about yourselve">
      </div>
      <span class="text-neutral-400">🚀 <code>Happy Coding!</code></span>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  profileCard = 'Profile Card'
  name: string = 'leonel kanmogne'
  age: number = 32
  presentation: string = 'Fullstack developer (java/angular/react)'
}
