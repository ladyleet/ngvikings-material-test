import { Component, OnInit } from '@angular/core';
import { BananaDataService } from '../../banana-data.service';

@Component({
  selector: 'app-banana-dialog',
  templateUrl: './banana-dialog.component.html',
  styleUrls: ['./banana-dialog.component.css']
})
export class BananaDialogComponent implements OnInit {

  answer: string;

  constructor() { }

  ngOnInit() {
  }

}
