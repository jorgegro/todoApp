import { Component } from '@angular/core';
// import { Switch } from './switch.enum';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'J o r g e';
  todoInput = '';
  array = [
  ];
  //attempt @ change tag from p to input

  // switch = Switch.on;
  // getCompleted(isCompleted){
  //   switch(isCompleted){
  //     case false: 
  //     return 'initial'
  //     break;
  //     case true:
  //     return 'line-through'
  //     break;
  //   }
  // // }

  // Attempt @ check out todo

  // taskComplete(chore){
  //  let index = this.array.indexOf(chore);
  //  chore = true;
  //  console.log("potatoe");
  // }

  editTodo(chore) {
    let index = this.array.indexOf(chore);
    this.array[index] = chore;
  }

  addTodo(chore) {
    this.array.push(
      {
        name: this.todoInput,
        done: false
      }
    );
    this.todoInput = null;
  }
  deleteTodo(chore) {
    let index = this.array.indexOf(chore);

    if (index > -1) {
      this.array.splice(index, 1);
    }
  }
}
