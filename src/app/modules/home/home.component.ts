import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/components/page-title/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private pageTitleService: PageTitleService
  ) {
    pageTitleService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
