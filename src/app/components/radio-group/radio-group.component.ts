// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component, InjectionToken, forwardRef, input, model, ChangeDetectionStrategy, booleanAttribute } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const RADIO_GROUP = new InjectionToken<RadioGroupComponent>('RadioGroup');

let radioGroupIdCounter = 0;

/**
 * A container component for a group of `ply-radio-button` elements.
 * Manages the selected state and integrates with Angular Forms (ngModel, formControlName).
 *
 * @example
 * <ply-radio-group groupLabel="Notification preference" [(ngModel)]="selectedValue">
 *   <ply-radio-button value="1">Option 1</ply-radio-button>
 *   <ply-radio-button value="2">Option 2</ply-radio-button>
 * </ply-radio-group>
 */
@Component({
  selector: 'ply-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './radio-group.component.html',
  host: {
    role: 'radiogroup',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.aria-labelledby]': 'groupLabel() ? labelId : (labelledBy() || null)',
    '[attr.aria-disabled]': 'disabled() ? true : null',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true,
    },
    { provide: RADIO_GROUP, useExisting: RadioGroupComponent },
  ],
})
export class RadioGroupComponent implements ControlValueAccessor {
  /** The currently selected value within the group. */
  readonly value = model<unknown>(undefined);

  /** Disables all radio buttons within this group when true. */
  readonly disabled = model(false);

  /** Visible group label; wired to aria-labelledby for screen readers. */
  readonly groupLabel = input('');

  /** Accessible name when no visible groupLabel is provided. */
  readonly ariaLabel = input('');

  /** ID of an external element that labels this group. */
  readonly labelledBy = input('');

  /** Shared native name assigned to child radio inputs for arrow-key navigation. */
  readonly groupName = `ply-radio-group-${radioGroupIdCounter}`;

  /** Element id for the optional visible group label. */
  readonly labelId = `ply-radio-group-label-${radioGroupIdCounter++}`;

  private onChange: (value: unknown) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: unknown): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  select(value: unknown): void {
    if (!this.disabled()) {
      this.value.set(value);
      this.onChange(value);
      this.onTouched();
    }
  }
}
