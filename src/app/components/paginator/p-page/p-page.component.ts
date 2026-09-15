// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { CommonModule } from '@angular/common';
import { Component, input ,
  ChangeDetectionStrategy, booleanAttribute } from '@angular/core';

/**
 * Represents an individual page number button inside a `ply-paginator`.
 *
 * @example
 * <ply-p-page [active]="true">1</ply-p-page>
 */
@Component({
  selector: 'ply-p-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './p-page.component.html'
})
export class PPageComponent {
  /** Indicates if this page is currently the active/selected page. */
  readonly active = input(false, { transform: booleanAttribute });
}
