import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tarih:any = new Date().toString();
  constructor() {
    this.tarih=setInterval(()=>{
      this.tarih = new Date().toString()
    },1000) 
   }

  ngOnInit(): void {

  }

}
