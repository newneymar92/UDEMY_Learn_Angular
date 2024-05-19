import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // directive name chỉ là một bộ chọn và sử dụng nó như một thuộc tính trên một phần tử
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnInit {
  // Directive có quyền truy cập vào phần tử, nó được đưa ra để có quyền truy cập
  // vào chính xác phần tử đó, trong trường hợp này là ví dụ cho trường hợp sẽ
  // ghi đè style của phần tử này
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Thay đổi trực tiếp vào DOM (không nên)
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
