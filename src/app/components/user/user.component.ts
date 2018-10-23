import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: String;
  age: number;
  email: String;
  address: Address;
  hobbies: String[];

  constructor(private dataService: DataService) { 
    
  }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'test@test.com';
    this.age = 30;
    this.address = {
      street: '50 main street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', ' Watch movies', ' Listen to music'];
  }

  onClick() {
    this.name = 'Brad Traversy';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for (let i = 0; i < this.hobbies.length;i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street: String,
  city: String,
  state: String
}