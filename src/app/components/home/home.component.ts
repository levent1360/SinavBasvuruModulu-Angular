import { OgrenciGiris } from './../../models/models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServisService } from 'src/app/sevices/servis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ogrenciGirisForm: FormGroup
  OgrenciNo: string;
  OgrenciTC: string
  constructor(
    public formBuilder: FormBuilder,
    public servis: ServisService,
    private toastr: ToastrService,
    private route: Router

  ) {
    this.ogrenciGirisForm = this.createForm(this.OgrenciTC, this.OgrenciNo);
  }

  ngOnInit(): void {
  }

  Kaydet() {
    this.OgrenciTC = this.ogrenciGirisForm.value.OgrenciTC;
    this.OgrenciNo = this.ogrenciGirisForm.value.OgrenciNo;
    this.servis.OgrenciGirisServis(this.OgrenciTC, this.OgrenciNo).subscribe((g: OgrenciGiris) => {
      if (g == null) {
        this.createForm("", "")
        this.toastr.error("Giriş bilgileri hatalı kontrol ediniz.");
      } else {
        this.toastr.success("Giriş başarılı");
        sessionStorage.setItem("ogrUID", g.OgrenciId);
        this.route.navigate(['/ogrenci'])
      }
    })
  }

  createForm(t, n) {
    return this.formBuilder.group({
      OgrenciNo: [n, [Validators.required]],
      OgrenciTC: [t, [Validators.required]]
    });
  }

}
