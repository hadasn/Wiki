import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageObj: object;

  constructor( private router: Router) {

  }

  getOutputVal(page: object) {
    if (page) {
      this.pageObj = page;
    }
  }
  edit(pageId) {
    this.router.navigate(['/edit', pageId], { queryParams: { id: pageId } });
  }

  ngOnInit() {

  }

}
