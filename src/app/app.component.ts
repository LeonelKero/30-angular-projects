import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <div class="profile-card">
      <h1 class="heading">{{profileCard}}</h1>
      <div class="values">
        <div><strong>Name: </strong> {{name}}</div>
        <div><strong>Age: </strong>{{age}}</div>
        <div><strong>Presentation: </strong>{{presentation}}</div>
      </div>
      <div class="data-form">
        <input type="text" [(ngModel)]="name" placeholder="Your name">
        <input type="number" [(ngModel)]="age" placeholder="Your age">
        <input type="text" [(ngModel)]="presentation" placeholder="Tell us a bit about yourselve">
      </div>
    </div>
  `,
  styles: `
    .profile-card{
      max-width: 400px;
      background: rgb(255, 255, 255);
      border: 1px solid lightgray;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      padding: 16px;
      border-radius: 16px;
      box-shadow: 0 16px 16px rgb(235, 235, 235);
    }
    .values div{
      margin: 16px 0;
    }
    .heading{
      text-align: center;
    }
    .data-form{
      display: flex;
      flex-direction: column;
    }
    .data-form input{
      padding: 8px;
      margin-top: 8px;
      border-radius: 8px;
      border: 1px solid rgb(216, 215, 215);
    }
  `,
})
export class AppComponent {
  profileCard = 'Profile Card'
  name: string = 'leonel kanmogne'
  age: number = 32
  presentation: string = 'Fullstack developer (java/angular/react)'
}
