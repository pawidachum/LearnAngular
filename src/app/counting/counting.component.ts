 import { Component, Input } from '@angular/core';
@Component({
 selector: 'app-counting',
 templateUrl: './counting.component.html',

})
export class CountingComponent {
    @Input()
    title: String;
count = 0;
 constructor() {}
 countNumber() {
   this.count = this.count + 1;
}
}
// Lab3

