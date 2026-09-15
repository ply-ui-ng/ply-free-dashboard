// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardBodyComponent } from '../card/card-body/card-body.component';
import { BaseButtonDirective } from '../button/base-button.directive';
import { StrokedButtonDirective } from '../button/base-stroked-button.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-cart',
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent,     
         
     BaseButtonDirective,   
        StrokedButtonDirective],
  templateUrl: './form-cart.component.html'
})
export class FormCartComponent {
}
