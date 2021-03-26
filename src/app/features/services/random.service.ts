import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomValue(values) {
    return values[Math.floor(Math.random() * values.length)]
  }
}
