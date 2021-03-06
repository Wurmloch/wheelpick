import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-arrow',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 7l4-4m0 0l4 4m-4-4v18"
      />
    </svg>
  `,
})
export class ArrowIcon implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
