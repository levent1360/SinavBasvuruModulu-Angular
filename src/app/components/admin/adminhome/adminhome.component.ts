import { Fakulte } from 'src/app/models/models';
import { Component, OnInit } from '@angular/core';
import { ServisService } from 'src/app/sevices/servis.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  collapse = false;
  fakulteSayisi: any
  fakulte: Fakulte[]
  constructor(public servis: ServisService) { }

  ngOnInit(): void {
    this.servis.FakulteListeleServis().subscribe((d: Fakulte[]) => {
      this.fakulteSayisi = d.length;
    })
  }

  

  toggleSidebar() {
    this.collapse = !this.collapse;
  }

}
