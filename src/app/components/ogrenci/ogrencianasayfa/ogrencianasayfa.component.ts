import { Sinav } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/sevices/servis.service';

@Component({
  selector: 'app-ogrencianasayfa',
  templateUrl: './ogrencianasayfa.component.html',
  styleUrls: ['./ogrencianasayfa.component.css']
})
export class OgrencianasayfaComponent implements OnInit {

  sinavliste:Sinav[]

  constructor(
    private servis:ServisService
  ) { }

  ngOnInit(): void {
    this.SinavListele()
  }

SinavListele(){
  this.servis.SinavListeleServis().subscribe((d:Sinav[])=>{
    this.sinavliste=d;
  })
}

}
