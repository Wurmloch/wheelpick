import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-chevron',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 11l7-7 7 7M5 19l7-7 7 7"
    />
  </svg>`,
})
export class DoubleChevronComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
