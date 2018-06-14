import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PagesService} from '../pages.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  pageToEdit: object;
  paramId: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private pagesService: PagesService) {

    this.activatedRoute.queryParams.subscribe(param => {
      this.paramId = param['id'];
    });
  }

  ngOnInit() {
    if (this.paramId !== 'undefined') {
      this.pageToEdit = this.pagesService.getPageById(+this.paramId);
    }
  }

  edit(title: string, subTitle: string, content: string) {
    this.pagesService.editPageById(+this.paramId, title, subTitle, content);
    this.router.navigate(['/home']);
  }

}
