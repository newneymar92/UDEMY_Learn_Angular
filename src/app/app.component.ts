import { Component } from '@angular/core';

//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // Cũng giống như template, style chỉ được sử dụng 1 kiểu hoặc styleUrl hoặc styles, điểm khác biệt so với template là cả hai đều có giá trị là một array
  // Bạn chỉ được có 1 template nhưng có thể có nhiều tệp để styles
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
})
export class AppComponent {
  title: string = 'my-first-app';
  name = 'TaiNA18';
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'No server was created';

  // Section 5
  serverElements = [
    { type: 'server', name: 'Test Server', content: 'Just a test !' },
  ];
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    console.log(serverData, 'serverData');
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprints',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  newServerName = '';
  newServerContent = '';
  getName() {
    return this.name;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

  getColor() {
    return this.allowNewServer === true ? 'green' : 'green';
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed';
  }

  onDestroyElement() {
    this.serverElements.splice(0, 1);
  }
  //Data binding
  // 1. String Interpolation (nội suy chuỗi) : phân giải một chuỗi và trả về một chuỗi
  //  <div>{{ name }}</div>
  //  <div>{{ getName() }}</div>

  // 2. Property Binding
  //  <button [disabled]="!allowNewServer">Add Server</button>

  // 3. Event Binding
  // <button (click)="onCreateServer()"></button>

  // Two-WAY-DATABINDING
  // Sử dụng ngModel - đây là một loại directives cho phép: Nó sẽ tự động trigger input event và tự động cập nhật giá trị của serverName trong component, tức đồng bộ dữ liệu
  // ở cả 2 file html cũng như ts
  // <input [(ngModel)]="serverName/>

  //DIRECTIVES
  //1. ngIf
  // <p *ngIf="someCondition">Only visible if 'someCondition' is true</p>
  // Kể từ Angular 16 cú pháp trên tương đương với
  // @if (someCondition) {
  //  <p>Only visible if 'someCondition' is true</p>
  // }

  // 2. ngStyle
  // Đây cũng là một kiểu directives cho phép người dùng ràng buộc giá trị của thuộc tính để linh động kiểu style, sử dụng kiểu data binding là property binding để cấu hình
  // <p [ngStyle]="{backgroundColor:getColor()}">Server was created !</p>[ngStyle]
  // Dấu ngoặc vuông ở đây không phải là một phần của directives name, directive name chỉ là ngStyle. Dấu ngoặc vuông cho biết rằng
  // chúng tôi muốn liên kết với một số thuộc tính theo directives này

  // 3. ngClass
  // Cho phép chúng ta thêm xóa các lớp CSS một cách linh hoạt và cũng sử dụng kiểu data binding là property binding
  // <p [ngStyle]="{backgroundColor:getColor()}" [ngClass]="{online:serverStatus === "online"}">Server was created !</p>[ngStyle]

  // 4. ngFor
  // Đây là một cú pháp để thay đổi DOM nên sẽ có * ở trước, dùng để lặp các phần tử
  // <app-server *ngFor="let server of servers">Server was looped</app-server>
  // Kể từ Angular 16 cú pháp trên tương đương với
  // @for (item of items; track item.id){
  // <li>{{item.title}}</li>
  //}
  // track item.id là required
}
