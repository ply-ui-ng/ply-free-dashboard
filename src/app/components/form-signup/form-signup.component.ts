// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { LabelComponent } from '../input-group/label/label.component';
import { BaseInputDirective } from '../input-group/ply-input.directive';
import { BaseButtonDirective } from '../button/ply-button.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-signup',
  standalone: true,
  imports: [
    CommonModule, CardComponent,      
    InputGroupComponent, LabelComponent, BaseInputDirective,   
     BaseButtonDirective],
  templateUrl: './form-signup.component.html'
})
export class FormSignupComponent {
}
