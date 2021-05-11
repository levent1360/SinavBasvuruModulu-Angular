import { Sinav } from './../../../../models/models';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sinav-dialog',
  templateUrl: './sinav-dialog.component.html',
  styleUrls: ['./sinav-dialog.component.scss']
})
export class SinavDialogComponent implements OnInit {

  sinavDetay: Sinav;
  sinavForm: FormGroup;
  dialogBaslik: string;
  islem: string;

  constructor(
    public formBuilder: FormBuilder,
    private dateAdapter: DateAdapter<any>,
    public dialogRef: MatDialogRef<SinavDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dateAdapter.setLocale('tr-TR');
    this.islem = data.islem;
    this.sinavDetay = data.kayit;
    if (this.islem == "ekle") {
      this.dialogBaslik = "Yeni Sınav Ekle";
      this.sinavForm = this.createForm(this.sinavDetay,false);
    }
    else if (this.islem == "duzenle") {
      this.dialogBaslik = "Sınav Düzenle";
      this.sinavForm = this.createForm(this.sinavDetay,true);
    }
  }

  ngOnInit() {
  }

  createForm(v,d) {
    return this.formBuilder.group({
      SinavAd: [{value:v.SinavAd,disabled:false}, [Validators.required]],
      SinavDonem: [{value:v.SinavDonem,disabled:d}, [Validators.required]],
      SinavZamani: [{value:v.SinavZamani,disabled:false}, [Validators.required]],
      SinavTuru: [{value:v.SinavTuru,disabled:false}, [Validators.required]],
      SinavDili: [{value:v.SinavDili,disabled:false}, [Validators.required]],
      SinavTamam: [{value:v.SinavTamam,disabled:false}, [Validators.required]],
      SinavIptal: [{value:v.SinavIptal,disabled:false}, [Validators.required]],
      SinavAciklama: [{value:v.SinavAciklama,disabled:false}, [Validators.required]],
      SinavBasvuruBaslama: [{value:v.SinavBasvuruBaslama,disabled:false}, [Validators.required]],
      SinavBasvuruBitis: [{value:v.SinavBasvuruBitis,disabled:false}, [Validators.required]]
    });
  }
}
