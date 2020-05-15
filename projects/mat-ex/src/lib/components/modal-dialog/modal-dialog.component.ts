import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, Inject, ElementRef, Input } from '@angular/core';
import { ToolbarButtonComponent } from '../toolbar-button/toolbar-button.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewEncapsulation } from '@angular/core';

const DIALOG_SELECTOR = 'mtx-modal-dialog';

const DIALOG_TYPE_ATTRIBUTES = [
  'alert',
  'select',
  'confirm',
  'submit',
];

const DIALOG_VARIANT_ATTRIBUTES = [
  'basic',
  'flat',
  'raised',
  'stroked',
];

@Component({
  selector: DIALOG_SELECTOR,
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalDialogComponent implements OnInit {

  @Input() type?= DIALOG_TYPE_ATTRIBUTES[0]
  @Input() variant?= DIALOG_VARIANT_ATTRIBUTES[0]
  @Input() color?= 'white';
  
  componentRef: ComponentRef<any>;

  get showDividers() { console.log(this.type);
   return (this.type==='confirm' || this.type==='submit')}

  @ViewChild("dialogContainer", { read: ViewContainerRef }) container;

  constructor(private elementRef: ElementRef,
    private resolver: ComponentFactoryResolver,
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.dialogRef._containerInstance._config.autoFocus = false
      this.dialogRef._containerInstance._config.restoreFocus = false
      this.dialogRef.disableClose = true;
    elementRef.nativeElement.classList.add(DIALOG_SELECTOR);

    if (data && data.type) {
      this.type = data.type
      DIALOG_TYPE_ATTRIBUTES.forEach(attr => {
        if (attr === data.type) elementRef.nativeElement.classList.add(attr);
      })
    }

    if (data && data.variant) {
      this.variant = data.variant
      DIALOG_VARIANT_ATTRIBUTES.forEach(attr => {
        if (attr === data.variant) elementRef.nativeElement.classList.add(attr);
      })
    }
  }

  ngOnInit(): void {
  }

  closeDialog(value?: any) {
    this.dialogRef.close(value)
  }

  createComponent(icon) {
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(ToolbarButtonComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.icon = icon
  }

  ngOnDestroy() {
    if (this.componentRef) this.componentRef.destroy();
  }

  _getHostElement() {
    return this.elementRef.nativeElement;
  }

}
