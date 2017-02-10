import { Component, OnInit } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';
import { BananaSnackComponent } from '../banana/banana-snack/banana-snack.component';
import { BananaDialogComponent } from './banana-dialog/banana-dialog.component';
import { BananaDataService } from '../banana-data.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

  constructor(public snackBar: MdSnackBar, public dialog: MdDialog, public bananas: BananaDataService) { }

  openSnackBar() {
    this.snackBar.openFromComponent(BananaSnackComponent, { duration: 2000, });
  };

  openBananaDialog(answer: string) {
    const wut = this.dialog.open(BananaDialogComponent);
    wut.componentInstance.answer = answer;
  }

  ngOnInit() {
  }

}
