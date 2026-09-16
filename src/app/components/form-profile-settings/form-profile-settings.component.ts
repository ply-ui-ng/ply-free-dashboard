// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardBodyComponent } from '../card/card-body/card-body.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { LabelComponent } from '../input-group/label/label.component';
import { BaseInputDirective } from '../input-group/ply-input.directive';
import { BaseAddonEndDirective } from '../input-group/ply-addon-end.directive';
import { IconComponent } from '../icon/icon.component';
import { BaseButtonDirective } from '../button/ply-button.directive';
import { IconButtonDirective } from '../button/ply-icon-button.directive';
import { IconStrokedButtonDirective } from '../button/ply-icon-stroked-button.directive';
import { BaseTextareaDirective } from '../input-group/ply-textarea.directive';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-profile-settings',
  standalone: true,
  imports: [
    CommonModule, CardComponent, CardBodyComponent,     
    InputGroupComponent, LabelComponent, BaseInputDirective, BaseAddonEndDirective, IconComponent, 
     BaseButtonDirective, IconButtonDirective, IconStrokedButtonDirective, 
        
     BaseTextareaDirective, AvatarComponent
  ],
  templateUrl: './form-profile-settings.component.html'
})
export class FormProfileSettingsComponent {
}
