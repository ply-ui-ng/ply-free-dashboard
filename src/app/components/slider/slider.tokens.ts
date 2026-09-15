// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import { InjectionToken } from '@angular/core';

/**
 * Injection token used internally by the gallery slider components
 * to share slider state between `GallerySliderComponent` and its child items.
 *
 * @example
 * // Used internally — injected in GallerySliderComponent and consumed by CarouselItemComponent.
 * constructor(@Inject(GALLERY_SLIDER_TOKEN) private slider: GallerySliderComponent) {}
 */
export const GALLERY_SLIDER_TOKEN = new InjectionToken<any>('GALLERY_SLIDER_TOKEN');
