// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Directive, HostListener, Optional, inject } from '@angular/core';
import { AlertComponent } from './alert.component';

/**
 * A directive that dismisses the parent `ply-alert` when clicked.
 * 
 * @example
 * <button plyAlertDismiss>Close</button>
 */
@Directive({
  selector: '[plyAlertDismiss]',
})
export class AlertDismissDirective {
  private alert = inject(AlertComponent, { optional: true });

  @HostListener('click')
  onClick() {
    if (this.alert) {
      this.alert.handleClose();
    }
  }
}
