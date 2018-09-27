import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-panel',
  templateUrl: './username-panel.component.html',
  styleUrls: ['./username-panel.component.css']
})
export class UsernamePanelComponent implements OnInit {

  username: string = '';

  constructor() { }

  ngOnInit() {
  }

  onClickReset() {
    this.username = '';
  }

  canReset(): boolean {
    return this.username != '';
  }
}
