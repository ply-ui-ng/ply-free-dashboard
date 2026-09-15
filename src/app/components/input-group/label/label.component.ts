// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Component, computed, input ,
  ChangeDetectionStrategy
} from '@angular/core';
import { cn } from '../../tw-merge/tw-merge';

/**
 * A label element for use inside a `ply-input-group`.
 *
 * @example
 * <ply-label>Email address</ply-label>
 */
@Component({
  selector: 'ply-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './label.component.html',
  host: { '[class]': 'hostCls()' }
})
export class LabelComponent {
  readonly extraClass = input('', { alias: 'class' });
  protected readonly hostCls = computed(() =>
    cn('block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1', this.extraClass())
  );
}
