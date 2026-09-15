// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Directive, ElementRef, inject, OnInit } from '@angular/core';

/**
 * An element positioned at the end of an input group.
 * 
 * @example
 * <span ply-addon-end>.com</span>
 */
@Directive({
  selector: '[ply-addon-end]',
  host: {
    class: 'w-5 h-5 flex items-center justify-center mr-4 shrink-0',
  },
})
export class BaseAddonEndDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit() {
    // Basic logic if needed
  }
}
