// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { BaseInputDirective } from '../input-group/base-input.directive';
import { IconComponent } from '../icon/icon.component';
import { BaseButtonDirective } from '../button/base-button.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-newsletter',
  standalone: true,
  imports: [
    CommonModule, CardComponent,      
    InputGroupComponent,  BaseInputDirective,  IconComponent, 
     BaseButtonDirective],
  templateUrl: './form-newsletter.component.html'
})
export class FormNewsletterComponent {
}
