import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = false;
  inputValue = '666';
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {}
  onCreateServer(): void {
    this.serverCreationStatus = true;
  }
  onUpdateInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
