// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md


import { Component, input ,
  ChangeDetectionStrategy
} from '@angular/core';

/**
 * A wrapper to center a spinner within a block or the entire page.
 * Provides a backdrop that can be dark or light.
 * 
 * @example
 * <ply-spinner-wrapper backdrop="dark">
 *   <ply-spinner></ply-spinner>
 * </ply-spinner-wrapper>
 */
@Component({
  selector: 'ply-spinner-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './spinner-wrapper.component.html'
})
export class SpinnerWrapperComponent {
  /**
     * The backdrop input property.
     * @example backdrop="value"
     */
    readonly backdrop = input<'dark' | 'light'>('light');
}
