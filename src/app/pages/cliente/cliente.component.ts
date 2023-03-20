import { Component } from '@angular/core';
import { User } from '../../Interface/clienteInterface'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})

export class ClienteComponent {
    users: User[] = []
  
    lastID: number = 0;

    newUser: User = {
      name: '',
      saldo: 0,
      id: 0
    };
  
    selectedUser: User = {
      name: '',
      saldo: 0,
      id: 0
    };
  
    editMode = false;
  
    addUser() {
      this.lastID++; // Incrementa o último ID utilizado
      this.newUser.id = this.lastID; // Atribui o novo ID ao usuário
      this.users.push(this.newUser);
      this.newUser = {
        name: '',
        saldo: 0,
        id: 0
      };
    }
  
    editUser(user: User) {
      this.selectedUser = { ...user };
      this.editMode = true;
    }
  
    updateUser() {
      const index = this.users.findIndex(u => u.id === this.selectedUser.id);
      this.users[index] = this.selectedUser;
      this.selectedUser = {
        name: '',
        saldo: 0,
        id: 0
      };
      this.editMode = false;
    }
  
    cancelEdit() {
      this.selectedUser = {
        name: '',
        saldo: 0,
        id: 0
      };
      this.editMode = false;
    }
  
    removeUser(user: User) {
      const index = this.users.findIndex(u => u.name === user.name);
      this.users.splice(index, 1);
    }
  }



