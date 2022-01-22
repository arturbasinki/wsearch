import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages = [];

  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((response: any) => {
      this.pages = response.query.search; //this follow from API response structure
      // console.log(response);
    });
  }
}

// https://en.wikipedia.org/w/api.php?
// action=query&
// format=json&
// list=search&
// utf8=1&
// srsearch=space
