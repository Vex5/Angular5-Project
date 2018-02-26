import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable()

export class UserService {

  constructor() { }

  getUsers(): IUser[]{
    return [
      {
        "userId": 1,
        "name": "Vedad",
        "surname": "Fejzagic",
        "userName": "Vex",
        "country": "BiH",
        "description": "Lorem Ipsum is simply dummy t including versions of Lorem Ipsum."      
      },
      {
        "userId": 2,
        "name": "Marko",
        "surname": "Maric",
        "userName": "Mork",
        "country": "Hrvatska",
        "description": "Lorem Ipsum is simply dumy ind. has bence the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ."      
      },
      {
        "userId": 3,
        "name": "Ana",
        "surname": "Ljunic",
        "userName": "Annita",
        "country": "Rusija",
        "description": " wambled it to make a typet has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ."      
      },
      {
        "userId": 4,
        "name": "Vedad",
        "surname": "Voljic",
        "userName": "Vedo",
        "country": "Irska",
        "description": " wambled it to make a typet has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing ."      
      }
      
    ];
  }

}
