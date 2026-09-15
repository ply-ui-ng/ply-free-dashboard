// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component ,
  ChangeDetectionStrategy
} from '@angular/core';

/**
 * Container for action buttons within an alert component.
 * 
 * @example
 * <ply-alert>
 *   <ply-alert-actions>
 *     <button ply-button>Undo</button>
 *   </ply-alert-actions>
 * </ply-alert>
 */
@Component({
  selector: 'ply-alert-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert-actions.component.html'
})
export class AlertActionsComponent {}
