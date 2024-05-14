import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector:'[app-server]' khi gọi trong html sẽ gọi như prop,
  // selector:'.app-server' khi gọi trong html sẽ gọi như một class
  templateUrl: './server.component.html',
})
export class ServerComponent {}
