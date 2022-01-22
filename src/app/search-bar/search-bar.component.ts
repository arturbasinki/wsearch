import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit(): void {}

  onFormSubmit(event: any) {
    event.preventDefault();
    this.submitted.emit(this.term);
    // console.log(this.term);
  }

  // that below works with first <input/> in template:
  // onInput(value: any) {
  //   this.term = value.target.value;
  //   console.log(this.term);
  // }
}
