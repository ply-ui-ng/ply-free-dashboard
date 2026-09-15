// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { OutputEmitterRef, TemplateRef, Signal } from '@angular/core';

/**
 * Interface that a context menu component must satisfy for use with
 * the `[ply-context-menu-trigger]` directive.
 *
 * @example
 * class MyContextMenuComponent implements ContextMenuPanel<MyContext> {
 *   templateRef = inject(TemplateRef<MyContext>);
 *   closed = output<void>();
 * }
 */
export interface ContextMenuPanel<T> {
  templateRef: Signal<TemplateRef<T>>;
  readonly closed: OutputEmitterRef<void>;
}
