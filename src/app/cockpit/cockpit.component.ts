import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  // @Output() để đánh dấu rằng serverCreated có thể được lắng nghe từ bên ngoài, cho phép child component có thể
  // phát ra sự kiện cho parent component
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  //  Tương tự như @Input() thì @Output() cũng có thể truyền vào alias @Output(bpCreated)
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  newServerName = '';
  // newServerContent = '';

  // Đôi khi chúng ta muốn truy cập một biến trước khi chúng ta gọi một phương thức
  // Không giống như local ref mà chúng ta đã truyền trực tiếp từ template thông qua phương thức
  // Đây chính là một loại ElementRef, có thuộc tính nativeElement
  @ViewChild('newServerContent') serverContentInput: ElementRef;

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    console.log(serverNameInput.value);
    this.serverCreated.emit({
      // serverContent: this.newServerContent,
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
