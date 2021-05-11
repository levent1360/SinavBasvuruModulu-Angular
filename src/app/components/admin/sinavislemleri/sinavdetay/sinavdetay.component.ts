import { Sinav } from './../../../../models/models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServisService } from 'src/app/sevices/servis.service';

@Component({
  selector: 'app-sinavdetay',
  templateUrl: './sinavdetay.component.html',
  styleUrls: ['./sinavdetay.component.scss']
})
export class SinavdetayComponent implements OnInit {
  SinavId: string;
  seciliSinav:Sinav

  constructor(
    private servis: ServisService,
    private routeactive: ActivatedRoute
    ) { }

  ngOnInit() {
    this.routeactive.params.subscribe(p => {
      if (p) {
        this.SinavId = p.sinavid;
        console.log(p)
        this.SinavById()
      }
    })
  }

  SinavById() {
    this.servis.SinavByIdServis(this.SinavId).subscribe(
      (response: Sinav) => {
        this.seciliSinav = response;
      }
    )
  }

}
