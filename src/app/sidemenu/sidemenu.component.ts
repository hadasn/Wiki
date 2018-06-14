import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { PagesService } from '../pages.service';
import { Page } from '../Page';

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css']
  })
  export class SidemenuComponent implements OnInit {

  pages:  Page[];
  @Output() outputToParent = new EventEmitter<object>();

  constructor(private pagesService: PagesService) { }

  getPage(page: object) {
    this.outputToParent.emit(page);
  }

  ngOnInit() {
    this.pages = this.pagesService.get();
  }
}



