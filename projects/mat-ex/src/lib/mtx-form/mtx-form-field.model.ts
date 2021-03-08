import { ValidatorFn } from "@angular/forms";

export interface MtxFormfield {
    tag: string;
    type: MtxFormfieldType;
    value?: any;
    placeholder?: string;
    autocomplete?: string;
    validators?: ValidatorFn[];
    required?: boolean;
}

export type MtxFormfieldType = 'text' | 'name' | 'email' | 'number' | 'date' | 'checkbox'
