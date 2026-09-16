// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {Component, ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab/tab.component';
import { TabLabelComponent } from '../tabs/tab-label/tab-label.component';
import { TabBodyComponent } from '../tabs/tab-body/tab-body.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { LabelComponent } from '../input-group/label/label.component';
import { BaseInputDirective } from '../input-group/ply-input.directive';
import { BaseAddonEndDirective } from '../input-group/ply-addon-end.directive';
import { IconComponent } from '../icon/icon.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { BaseButtonDirective } from '../button/ply-button.directive';
import { IconButtonDirective } from '../button/ply-icon-button.directive';
import { IconStrokedButtonDirective } from '../button/ply-icon-stroked-button.directive';
import { BaseLinkDirective } from '../button/ply-link.directive';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ply-form-signup-tabs',
  standalone: true,
  imports: [
    CommonModule, CardComponent,  TabsComponent, TabComponent, TabLabelComponent, TabBodyComponent, 
    InputGroupComponent, LabelComponent, BaseInputDirective, BaseAddonEndDirective, IconComponent, 
    CheckboxComponent, BaseButtonDirective, IconButtonDirective, IconStrokedButtonDirective, 
    BaseLinkDirective],
  templateUrl: './form-signup-tabs.component.html'
})
export class FormSignupTabsComponent {
}
