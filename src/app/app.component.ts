import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Jorge';
  todoInput = '';

  array = [];

  myFunction(chore) {
    console.log(chore)
  }

  editTodo(chore) {
    let index = this.array.indexOf(chore);

    this.array[index] = prompt('edit!')
  }

  addTodo(chore){
    console.log('sdfjadlk');
    this.array.push(this.todoInput);
    this.todoInput = '';
  }
}
