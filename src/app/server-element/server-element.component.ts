import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  // Tính năng đóng gói encapsulation cho phép bạn lựa chọn giữa các chế độ
  // Mặc định sẽ là Emulated
  // Khi sử dụng None tức đã vô hiệu hóa tính năng đóng gói nên nếu styles sẽ ảnh hưởng đến global
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @Input() để đánh dấu rằng element (có alias là srvElement) là thuộc tính
  // có thể liên kết từ bên ngoài, tức có thể nhận giá trị từ parent component
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  // ContentChill() để có truyền truy cập vào nội dung được lưu trong
  // một component khác nhưng sau đó được truyền qua ng-content
  @ContentChild('contentParagraph') paragraph: ElementRef;

  // Lifecycle Hooks in Action
  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  // ngDoCheck sẽ được gọi bất cứ khi nào Angular kiểm tra bất kì thay đổi nào
  // và có một số trình trigger như việc trigger phương thức hay event bằng việc
  // click hoặc một promise trả về dữ liệu
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text paragraph', this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    // Trước khi tới hook này, không thể truy cập và sử dụng các giá trị trong DOM
    // vì chúng chưa được hiển thị trong DOM
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent, 'Text content');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
