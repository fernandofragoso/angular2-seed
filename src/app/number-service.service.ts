import { Injectable } from '@angular/core';

@Injectable()
export class NumberServiceService {

  constructor() { }

  getNumbers() {
    return [
      { name : "one" },
      { name : "two" },
      { name : "three" },
      { name : "four" }
    ]
  }

}
