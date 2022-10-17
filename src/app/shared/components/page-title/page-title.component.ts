import { Component, OnInit } from '@angular/core';
import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {

  constructor(
    private pageTitleService: PageTitleService
  ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.pageTitleService.headerData.title
  }

  get icon(): string {
    return this.pageTitleService.headerData.icon
  }

  get routeUrl(): string {
    return this.pageTitleService.headerData.routeUrl
  }
}
