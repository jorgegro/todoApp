import { Component } from '@angular/core';
// import { Switch } from './switch.enum';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = true;
  title = 'app';
  name = 'J o r g e';
  todoInput = '';
  array = [
  ];
  done: boolean = true;

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
    if(this.array[index].done == false){
      this.array[index] = chore;
    } else {
      alert("Invalid Action- Can't edit completed tasks");
    }
  }

  addTodo() {
    let trimmedInput = this.todoInput.trim();
    if (trimmedInput != "") {
      this.array.unshift(
        {
          name: this.todoInput,
          done: false
        }
      );
    } else {
      alert("Invalid input");
    }
    this.todoInput = "";
  }
  deleteTodo(chore) {
    let index = this.array.indexOf(chore);

    if (index > -1) {
      this.array.splice(index, 1);
    }
  }
  deleteAlltodo() {
    this.array = [];
  }
  completedTodo(chore) {
    let index = this.array.indexOf(chore);
    if (this.array[index].done == false) {
      this.array[index].done = true;
    } else {
      this.array[index].done = false;
    }
  }
  checkAlltodo() {
    for (let i = 0; i <= this.array.length; i++) {
      if(this.array[i].done == false){
        this.array[i].done = true;
      } else {
        this.array[i].done = false;
      }
    }
  }
}
