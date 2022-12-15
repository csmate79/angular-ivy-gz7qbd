import {
  Component,
  Input,
  OnDestroy,
  Optional,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormGroupDirective,
  NgControl,
  NgForm,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BaseComponentDirective } from '../../directives/base-component.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InputComponent
  extends BaseComponentDirective
  implements OnDestroy
{
  @Input() type = 'text';

  @Input() isNumeric = false;

  @Input() suffixIcon = '';

  @Input() hint = '';

  @Input() disableDefaultErrorMessages = false;

  @Input() maxLength: number | null = null;

  private controlValueChange: Subscription;

  constructor(
    protected fb: FormBuilder,
    public ngControl: NgControl,
    @Optional() protected ngForm: NgForm,
    @Optional() protected formGroupDirective: FormGroupDirective
  ) {
    super(fb, ngControl, ngForm, formGroupDirective);
    this.controlValueChange = this.control.valueChanges
      .pipe(
        map((val) => (this.isNumeric && val ? Number(val) : val)),
        tap((val) => this.setValue(val))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.controlValueChange.unsubscribe();
  }

  onBlur() {
    this.onTouch();
  }

  hasErrorDefinition(definition: string): boolean {
    return this.errors.some((error) => error.error === definition);
  }

  getMaximumLength(): number {
    return this.maxLength || 524288;
  }
}
