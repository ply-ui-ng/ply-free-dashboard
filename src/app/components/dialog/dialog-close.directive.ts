// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Directive, inject, input } from '@angular/core';
import { DialogContext } from './dialog-context';

/**
 * A directive that automatically closes the current open dialog when the host element is clicked.
 * Injects `DialogContext` to find the active dialog reference.
 * 
 * @example
 * <button ply-button ply-dialog-close>Cancel</button>
 */
@Directive({
  selector: '[ply-dialog-close]',
  host: {
    '(click)': '_onButtonClick($event)',
    '[attr.aria-label]': 'ariaLabel() || null',
    '[attr.type]': 'type()',
  },
})
export class DialogCloseDirective {
  /** Optional aria-label for accessibility. */
  readonly ariaLabel = input<string>();
  
  /** The native button type. Defaults to 'button'. */
  readonly type = input('button');

  private dialog = inject(DialogContext, { optional: true });

  _onButtonClick(event: MouseEvent) {
    if (this.dialog) {
      this.dialog.close();
    }
  }
}
