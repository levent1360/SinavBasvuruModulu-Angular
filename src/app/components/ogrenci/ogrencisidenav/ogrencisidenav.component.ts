import { Ogrenci } from './../../../models/models';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServisService } from 'src/app/sevices/servis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ogrencisidenav',
  templateUrl: './ogrencisidenav.component.html',
  styleUrls: ['./ogrencisidenav.component.css']
})
export class OgrencisidenavComponent implements OnInit {

OgrenciId:string;
ogrenci:Ogrenci

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private servis:ServisService,private router:Router) {}


  ngOnInit(): void {
    this.OgrenciId=sessionStorage.getItem("ogrUID");
    this.OgrenciById(this.OgrenciId)
  }

  OgrenciById(id:string)  {
    this.servis.OgrenciByIdServis(id).subscribe((o:Ogrenci)=>{
      this.ogrenci=o;
    })
  }

  CikisYap(){
    sessionStorage.removeItem("ogrUID");
    this.router.navigate(['/'])
  }


}
