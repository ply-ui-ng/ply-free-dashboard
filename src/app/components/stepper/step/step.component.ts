// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component, TemplateRef, input, viewChild ,
  ChangeDetectionStrategy, booleanAttribute } from '@angular/core';


/**
 * An individual step within a `ply-stepper`.
 * Contains the label, icon, and template content to render when active.
 *
 * @example
 * <ply-step label="Shipping" icon="truck" description="Enter address">
 *   <div>Shipping form content</div>
 * </ply-step>
 */
@Component({
  selector: 'ply-step',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './step.component.html'
})
export class StepComponent {
  /** The primary title text for this step. */
  readonly label = input('');
  
  /** Optional SVG icon name to display instead of a number. */
  readonly icon = input('');
  
  /** Optional secondary subtitle text for this step. */
  readonly description = input('');
  
  /** If false, prevents advancing past this step if the stepper uses internal navigation. */
  readonly isValid = input(true, { transform: booleanAttribute });

  readonly content = viewChild.required<TemplateRef<any>>('content');

  
  isActive = false;
  isCompleted = false;
}
