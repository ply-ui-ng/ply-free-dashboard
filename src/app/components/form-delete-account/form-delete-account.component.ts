// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, signal, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { LabelComponent } from '../input-group/label/label.component';
import { BaseInputDirective } from '../input-group/ply-input.directive';
import { BaseButtonDirective } from '../button/ply-button.directive';
import { IconComponent } from '../icon/icon.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-delete-account',
  standalone: true,
  imports: [
    CommonModule, CardComponent,
    InputGroupComponent, LabelComponent, BaseInputDirective,
    BaseButtonDirective, IconComponent
  ],
  templateUrl: './form-delete-account.component.html'
})
export class FormDeleteAccountComponent {
  confirmText = signal<string>('');

  updateConfirm(event: Event) {
    this.confirmText.set((event.target as HTMLInputElement).value);
  }

  get canDelete(): boolean {
    return this.confirmText() === 'DELETE';
  }
}
