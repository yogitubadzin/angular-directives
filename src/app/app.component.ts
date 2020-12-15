import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the Beach',
      url: '/assets/atTheBeach.jfif'
    },
    {
      title: 'At the Forest',
      url: '/assets/atTheForest.jfif'
    },
    {
      title: 'At the City',
      url: '/assets/atTheCity.jfif'
    }
  ];

  changePageToPrevious(){
    this.currentPage = this.currentPage - 1;
  }

  changePageToNext(){
    this.currentPage = this.currentPage + 1;
  }

  isActive(i: number){
    return i === this.currentPage;
  }

  isPreviousPageDisabled(){
    return this.currentPage === 0;
  }

  isNextPageDisabled(){
    return this.currentPage === this.images.length - 1;
  }

  checkIndex(index: number){
    return Math.abs(this.currentPage - index) < 2;
  }

  getTitle(){
    return this.images[this.currentPage].title;
  }

  getUrl(){
    return this.images[this.currentPage].url;
  }
}
