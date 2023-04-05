import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

  greeting = 'Trail Together';

  changeHandler(event) {
    this.greeting = event.target.value;
  }

}