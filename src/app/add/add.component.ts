import {Component, OnInit} from '@angular/core';
import {PagesService} from '../pages.service';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  form: FormGroup;

  constructor(private pagesService: PagesService, private router: Router) {
    this.form = new FormGroup({
      id     : new FormControl(),
      title  : new FormControl(),
      subTitle: new FormControl(),
      content: new FormControl()
    });
  }

  ngOnInit() {
  }

  add(model: FormGroup) {
    this.pagesService.add(model);
    this.router.navigate(['/home']);
  }








}




