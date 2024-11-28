import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  promiseVal:any;
  dell={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'black'
  }

  hp={
    brand:'Dell',
    hardDisk:'2 TB',
    color:'black'
  }

  notAvail={
    brand:'Not Available',
    Status:'Failed'
  }

  ngOnInit(): void {  
    let buyLaptop = new Promise((resolve, reject) => {
      //resolve('Promise is resolved');
      //reject('Promise is reject');
      if (this.DellAvailable()) {
       
        return setTimeout(() => {
          resolve(this.dell);
          //resolve('Dell is purchased')
        }, 3000);
      } else if (this.HpAvailable()) {
      
        return setTimeout(() => {
          resolve(this.hp);
          //resolve('HP is purchased')
        }, 3000);
      } else {
        
        return setTimeout(() => {
          reject(this.notAvail)
          //reject('Laptop is not available on store');
        }, 3000);
      }
    });

    buyLaptop.then(res => {
      console.log('then code=> ', res);
      this.promiseVal=res;
    }).catch(err => {
      console.log('catch code=> ', err);
      this.promiseVal=err;
    });

  }

  DellAvailable() {
    return true;   
  }

  HpAvailable() {
    return false
  }


}
