import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  // Chúng ta có thể liên kết với các thuộc tính của các chỉ thị đặt vào phần tử đó, tức đặt chúng trên cùng một phần tử
  //  <p appBetterHighlight [defaultColor]="'yellow'">Style me with a better directive</p>
  // Hoặc đối với riêng property binding, nếu truyền xuống một string có thể viết gọn
  // <p appBetterHighlight defaultColor="yellow">Style me with a better directive</p>

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Sử dụng Renderer để truy cập DOM và sử dụng các phương thức Renderer cung cấp để truy cập DOM (nên sử dụng)
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.defaultColor;
  }

  // HostListener là một cách thuận tiện để lắng nghe các sự kiện trên phần tử đó
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }

  // HostBinding là một cách để bind một thuộc tính trong phần tử đó mà không cần sử dụng đến Renderer
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;
}
