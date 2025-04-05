import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  template: `
    <div class="profile-card">
      <h1 class="heading">{{profileCard}}</h1>
      <div class="values">
        <div><strong>Name: </strong> {{profileForm.value.name}}</div>
        <div><strong>Age: </strong>{{profileForm.value.age}}</div>
        <div>
          <p>
            <strong>Presentation: </strong>{{profileForm.value.presentation}}
          </p>
        </div>
      </div>
      <form [formGroup]="profileForm" class="data-form">
        <h4>Update Profile</h4>
        <input type="text" formControlName='name' placeholder="Your name">
        <input type="number" formControlName='age' placeholder="Your age">
        <input type="text" formControlName='presentation'  placeholder="Tell us a bit about yourselve">
      </form>
      <span>🚀 <code>Happy Coding!</code></span>
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
    .data-form h4{
      margin-bottom: 0;
    }
    .data-form input{
      padding: 8px;
      margin-top: 8px;
      border-radius: 8px;
      border: 1px solid rgb(216, 215, 215);
    }
    .profile-card span{
      margin-top: 16px;
    }
  `,
})
export class AppComponent {
  profileCard = 'Profile Card'
  // name: string = 'leonel kanmogne'
  // age: number = 12
  // presentation: string = 'Fullstack developer (java/angular/react)'

  profileForm = new FormGroup({
    name: new FormControl<string>('leonel ka'),
    age: new FormControl<number | undefined>(undefined, { validators: [Validators.nullValidator] }),
    presentation: new FormControl<string>('Learner...')
  })

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.age < 1) {
  //     this.age = 1
  //   }
  // }
}
