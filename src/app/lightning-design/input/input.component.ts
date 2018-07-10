import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

let counter = 0;

@Component({
  selector: 'ld-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true }
  ],
})
export class InputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('ldInput') element: ElementRef;

  @Input() placeholder = '';
  @Input() label = '';

  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() bare = false;
  @Input() counter = false;

  id: string;

  onChange = (_: any) => { };
  @HostListener('blur') onTouched = () => { };

  constructor(private renderer: Renderer2) {
    this.id = 'ld-input-' + (++counter);
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.renderer.setProperty(this.element.nativeElement, 'value', normalizedValue);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event.target.value']) _handleInput(value: any): void {
    this.onChange(value);
  }

  ngOnInit() {
  }
}
