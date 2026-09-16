// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { Directive, ElementRef, inject, OnInit } from '@angular/core';

/**
 * Applies standardized heading typography styles to an element.
 * 
 * @example
 * <h1 ply-heading size="xl">Page Title</h1>
 */
@Directive({
  selector: '[plyHeadingText]',
  host: {
    class: 'text-slate-900 dark:text-white font-semibold'
  }
})
export class BaseHeadingDirective implements OnInit {
  private el = inject(ElementRef);

  ngOnInit() {
    const h1 = this.el.nativeElement.querySelector('h1');
    if (h1) {
      h1.classList.add('text-3xl', 'md:text-4xl');
    }
  }
}
