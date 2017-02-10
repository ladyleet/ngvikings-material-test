import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogInstructionsComponent } from '../dialog-instructions/dialog-instructions.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  openDialog()  {
    this.dialog.open(DialogInstructionsComponent);
  }
  ngOnInit() {
  }

  puns: Object=[] = [{
    type: "cat",
    image: "cat-emoji.png",
    altText: "cat emoji",
    route: "meow",
    chip1: "cat",
    chip2: "meow",
    chip3: "kitty"  
  },
  {
    type: "banana",
    image: "banana-emoji.png",
    altText: "banana emoji",
    route: "banana",
    chip1: "banana",
    chip2: "fruit",
    chip3: "yellow"  
  },
  {
    type: "cow",
    image: "cow-emoji.png",
    altText: "cow emoji",
    route: "moo",
    chip1: "cow",
    chip2: "animal",
    chip3: "moo"  
  },
  {
    type: "duck",
    image: "duck-emoji.png",
    altText: "duck emoji",
    chip1: "duck",
    chip2: "quack",
    chip3: "bird",
    toolTip: "oops, this isn't done yet"  
  }];

}
