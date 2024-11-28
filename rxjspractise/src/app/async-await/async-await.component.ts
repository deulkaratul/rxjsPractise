import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {

  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Data Received');
  //   }, 3000)
  // })

  // // function with async keyword always return promise
  // async getData() {
  //   let response = await this.promise;
  //   console.log(response);

  // }

  ngOnInit(): void {
    //this.getData();

    //this.getData().then(console.log)
    //this.getData().then(data=> console.log(data))
  }

  //Ex-01 : With Promise
  result1: string = '';
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'black'
  }

  hp = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'black'
  }

  notAvail = {
    brand: 'Not Available',
    Status: 'Failed'
  }

  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000)
  })

  fetch1() {
    this.result1 = "fetching Data...";
    this.buyLaptop.then(res => {
      console.log(res);
      this.result1 = JSON.stringify(res);
    })
  }

  //Ex-02 : With Async / await
  result2: string = '';
  async fetch2() {
    this.result2 = "fetching Data...";
    let data = await this.buyLaptop;
    this.result2 = JSON.stringify(data);
  }
  //Ex-03 : With fetch()
  result3: string = '';
  buyLapTop3 = fetch('https://jsonplaceholder.typicode.com/postss')
    .then(response => response.json())
    .catch(err => {
      console.log('catch code=> ', err);
    });


  // fetch3() {
  //   this.result3 = "fetching Data...";
  //   // using Promise
  //   this.buyLapTop3.then(res => {
  //     console.log(res);
  //     this.result3 = JSON.stringify(res);
  //   })
  // }

  async fetch3() {
    this.result3 = "fetching Data...";
    try {
      // using async / await
      let res = await this.buyLapTop3;
      this.result3 = JSON.stringify(res);
    } catch (error) {
      console.error('Error fetching data:', error);
      this.result3 ='Error fetching data:';
      throw error;
    }
  }
}
