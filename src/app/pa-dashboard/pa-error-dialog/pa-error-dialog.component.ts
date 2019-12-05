import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pa-error-dialog',
  templateUrl: './pa-error-dialog.component.html',
  styleUrls: ['./pa-error-dialog.component.scss']
})
export class PAErrorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

}
