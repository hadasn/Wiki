import { Injectable } from '@angular/core';
import {Page} from './Page';


@Injectable()
export class PagesService {

  pages: Page[] = [
    {id: 1, title: 'title page 1', subTitle: 'sub title page 1', content: 'content page 1 content page 1content page 1'},
    {id: 2, title: 'title page 2', subTitle: 'sub title page 2', content: 'content page 2 content page 2 content page 2'},
    {id: 3, title: 'title page 3', subTitle: 'sub title page 3', content: 'content page 3 content page 3 content page 3'}
  ];

  constructor() {
  }

  get() {
    return this.pages;
  }

  add(page) {
    this.pages.push(page.value);
  }

  getPageById(id) {
    return this.pages.find(i => i.id === id);
  }

  editPageById(id, title, subTitle, content) {
    const page = this.getPageById(id);
    page.title = title;
    page.subTitle = subTitle;
    page.content = content;
  }

}

