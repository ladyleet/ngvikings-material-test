import { Component, OnInit } from '@angular/core';
import { CatDataService } from '../cat-data.service';

@Component({
  selector: 'app-meow',
  templateUrl: './meow.component.html',
  styleUrls: ['./meow.component.css']
})
export class MeowComponent implements OnInit {

  constructor(public catPuns: CatDataService) { }

  ngOnInit() {
  }

}