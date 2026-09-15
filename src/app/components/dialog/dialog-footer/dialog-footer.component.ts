// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component ,
  ChangeDetectionStrategy
} from '@angular/core';


/**
 * A footer section for a dialog, rendered as part of `ply-dialog`.
 *
 * @example
 * <ply-dialog-footer>
 *   <button ply-button color="primary">Save</button>
 * </ply-dialog-footer>
 */
@Component({
  selector: 'ply-dialog-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dialog-footer.component.html'
})
export class DialogFooterComponent {}
