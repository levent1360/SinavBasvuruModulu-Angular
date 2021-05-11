import { Ogrenci } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/sevices/servis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ogrencidetay',
  templateUrl: './ogrencidetay.component.html',
  styleUrls: ['./ogrencidetay.component.css']
})
export class OgrencidetayComponent implements OnInit {
ogrenci:Ogrenci
ogrenciId:any

  constructor(
    private servis:ServisService,
    private router:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(p=>{
      if(p){
        this.ogrenciId=p;
        this.OgrenciById(this.ogrenciId);
      }
    })
  }

  OgrenciById(id:string){
    this.servis.OgrenciByIdServis(id).subscribe((d:Ogrenci)=>{
      this.ogrenci=d
    })
  }
}
