// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component ,
  ChangeDetectionStrategy
} from '@angular/core';

/**
 * The clickable header of an accordion item that toggles the body visibility.
 * 
 * @example
 * <ply-accordion-item-header>
 *   Section Title
 * </ply-accordion-item-header>
 */
@Component({
  selector: 'ply-accordion-item-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './accordion-item-header.component.html'
})
export class AccordionItemHeaderComponent {}
