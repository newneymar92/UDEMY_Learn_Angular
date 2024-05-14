import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // Tính năng đóng gói encapsulation cho phép bạn lựa chọn giữa các chế độ
  // Mặc định sẽ là Emulated
  // Khi sử dụng None tức đã vô hiệu hóa tính năng đóng gói nên nếu styles sẽ ảnh hưởng đến global
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent {
  // @Input() để đánh dấu rằng element (có alias là srvElement) là thuộc tính
  // có thể liên kết từ bên ngoài, tức có thể nhận giá trị từ parent component
  @Input('srvElement') element: { type: string; name: string; content: string };
}
