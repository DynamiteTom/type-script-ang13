import { Component, OnInit } from '@angular/core';

const arr_op_list= `     
       'concat', 'copyWithin', 'entries', 'every', 'fill','filter', 'find', 'findIndex', 'flat', 'flatMap',  
      'includes', 'indexOf', 'join', 'keys', 'lastIndexOf', 'length','map','pop', 'push', 'reduce', 'reduceRight', 
       'reverse', 'shift', 'slice', 'some','sort','splice','toLocalString', 'toString','unshift', 'values'
`;

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {
  numbers = [4,6,10];
  
  stringVal = 'Hello world';
  arr_ops = arr_op_list.split(',');  

  constructor() { }

  ngOnInit(): void {
    this.arrEx1();
    let strng = 'Hello world';
    
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  arrEx1(){
    
      this.numbers.push(20);

  //    this.numbers.

  }
}
