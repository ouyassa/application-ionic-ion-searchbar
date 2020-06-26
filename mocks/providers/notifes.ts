import { Injectable } from '@angular/core';

import { Notife } from '../../models/notife';

@Injectable()
export class Notifes {
  
  notifes: Notife[] = [];

  defaultNotife: any = {
    "quoi": "Burt Bear",
    "quand": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "titre": "Burt Bear",
    "commune": "Burt Bear",
    "codePostal": "Burt Bear",
    "infoPra": "Burt Bear",
    "adresse": "Burt Bear",
    "email": "Burt Bear",
    "horaire": "Burt Bear",
    "infosSupp": "Burt Bear",
    "nameContact": "Burt Bear",
    "emailContact": "Burt Bear",
    "statusNotife": "Burt Bear",
    "statusContact": "Burt Bear",
    "id": "Burt Bear",
  };


  constructor() {
    let notifes = [];

    for (let notife of notifes) {
      this.notifes.push(new Notife(notife));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.notifes;
    }

    return this.notifes.filter((notife) => {
      for (let key in params) {
        let field = notife[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return notife;
        } else if (field == params[key]) {
          return notife;
        }
      }
      return null;
    });
  }

  add(notife: Notife) {
    this.notifes.push(notife);
  }

  delete(notife: Notife) {
    this.notifes.splice(this.notifes.indexOf(notife), 1);
  }
}
