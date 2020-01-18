// @ts-ignore
import { Component, OnInit } from '@angular/core';

export interface Content {
  readonly id: number;
  author: string;
  imageUrl?: string;
  type?: string;
  title: string;
  body: string;
  tags: string[];
}

class ContentList {
  static contentCount = 0;
  private _items: Content[];
  constructor() {
    this._items = [];
  }
  get items(): Content[] {
    return this._items;
  }
  addition(content: Content) {
    this._items.push(content);
  }
  toString(i: number): string {
    return 'Id: ' + this._items[i].id + ', ' +
      'Author: ' + this._items[i].author + ', ' + 'Title: ' + this._items[i].title + ', ' + 'Body: ' + this._items[i].body;
  }
  count() {
    return this._items.length;
  }
}

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  title = 'Assignment1';
  content: Content[];
  cList: ContentList;

  constructor() {
    this.content = [{
      id: 1,
      author: 'J.D. Salinger',
      title: 'Catcher in the Rye',
      body: '"Phonies!"',
      tags: [],
    }, {
      id: 2,
      author: 'Stephen King',
      title: 'The Shining',
      body: '"All work and no play makes Jack a dull boy."',
      tags: [],
    }, {
      id: 3,
      author: 'George Orwell',
      title: '1984',
      body: '"It already happened."',
      tags: [],
    }];
    this.cList = new ContentList();
    this.cList.addition(this.content[0]);
    this.cList.addition(this.content[1]);
    this.cList.addition(this.content[2]);
  }

  ngOnInit(): void {
  }
}
