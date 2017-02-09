import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { BananaSnackComponent } from '../banana-snack/banana-snack.component';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.css']
})
export class BananaComponent implements OnInit {

  constructor(public snackBar: MdSnackBar) { }

  openSnackBar() {
    this.snackBar.openFromComponent(BananaSnackComponent, { duration: 2000, });
  };

  bananaPuns: Object=[] = [{
    pun: "What did one single banana say to the other single banana?",
    answer: "Banana date lately?"
  }];

  ngOnInit() {
  }

}
