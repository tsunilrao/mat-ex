import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MtxFormfield, MtxFormfieldType } from './mtx-form-field.model';

interface FieldDefault {
  autocomplete: string;
  placeholder: string;
  validators: ValidatorFn[];
}

const FieldDefaults: { [key: string]: FieldDefault } = {
  text: { autocomplete: 'off', placeholder: 'Text', validators: [], },
  number: { autocomplete: 'off', placeholder: 'Number', validators: [], },
  date: { autocomplete: 'off', placeholder: 'Date', validators: [], },
  name: { autocomplete: 'name', placeholder: 'Name', validators: [Validators.maxLength(50)], },
  email: { autocomplete: 'email', placeholder: 'Email', validators: [Validators.email], },
  checkbox: { autocomplete: 'off', placeholder: 'Checkbox', validators: [], },
}

@Component({
  selector: 'mtx-form',
  templateUrl: './mtx-form.component.html',
  styleUrls: ['./mtx-form.component.scss']
})
export class MtxFormComponent implements OnInit, OnChanges {

  @Input() formData?: MtxFormfield[] = []

  form: FormGroup;
  formFields: MtxFormfield[];

  constructor() { }

  ngOnInit(): void {
    this.reset()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formData) {
      this.reset(changes.formData.currentValue)
    }
  }

  reset(formData: MtxFormfield[] = this.formData) {
    if (!formData) throw new Error("Invalid Form Data");
    const controls = {}
    this.formFields = formData.map(field => {
      const newField = { ...field }
      newField.value = field.value || null
      newField.autocomplete = field.autocomplete || this.getAutocomplete(field.type)
      newField.placeholder = field.placeholder || this.getPlaceholder(field.type)
      newField.validators = this.getValidators(field.type)
      if (field.validators) newField.validators = [...newField.validators, ...field.validators]
      if (field.required) newField.validators.push(Validators.required)
      controls[field.tag] = new FormControl(newField.value, newField.validators)
      return newField
    })
    this.form = new FormGroup(controls)
  }

  @Output() onSubmit = new EventEmitter
  public submit() {
    if (!this.form.valid) this.form.markAllAsTouched()
    else this.onSubmit.emit(this.getFormValue())
  }

  private getFormValue(): any {
    return this.form.value;
  }

  private getAutocomplete(type: MtxFormfieldType): string {
    return FieldDefaults[type].autocomplete;
  }
  private getPlaceholder(type: MtxFormfieldType): string {
    return FieldDefaults[type].placeholder;
  }
  private getValidators(type: MtxFormfieldType): ValidatorFn[] {
    return FieldDefaults[type].validators || [];
  }

}
