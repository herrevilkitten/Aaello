import { Component, ElementRef, Input, OnInit, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

let counter = 0;

@Component({
  selector: 'ld-checkbox-toggle',
  templateUrl: './checkbox-toggle.component.html',
  styleUrls: ['./checkbox-toggle.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: CheckboxToggleComponent, multi: true }
  ],
})
export class CheckboxToggleComponent implements ControlValueAccessor, OnInit {
  @Input() label = 'Toggle';
  @Input() on = 'Enabled';
  @Input() off = 'Disabled';
  @Input() value = '1';
  @Input() checked = false;
  @Input() disabled = false;

  @ViewChild('ldCheckboxToggle') element: ElementRef;

  id: string;

  onChange = (_: any) => { };
  @HostListener('blur') onTouched = () => { };

  constructor(private renderer: Renderer2) {
    counter = counter + 1;
    this.id = `ld-checkbox-toggle-${counter}`;
  }

  ngOnInit() {
  }

  writeValue(value: any): void {
    const normalizedValue = value ? true : null;
    this.renderer.setProperty(this.element.nativeElement, 'checked', normalizedValue);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.element.nativeElement, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event.target.checked']) _handleInput(value: any): void {
    this.onChange(value);
  }


}
