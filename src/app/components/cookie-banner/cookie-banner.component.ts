// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {
  Component,
  PLATFORM_ID,
  afterNextRender,
  ChangeDetectionStrategy,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BaseButtonDirective } from '../button/ply-button.directive';
import { StrokedButtonDirective } from '../button/ply-stroked-button.directive';
import { IconComponent } from '../icon/icon.component';
import { CookieConsent } from '../types';
import { cn } from '../tw-merge/tw-merge';

/**
 * Fixed consent banner. Hidden until the client confirms `localStorage` has no
 * stored choice (SSR-safe). Accept / Reject persist that choice and emit.
 *
 * @example
 * <ply-cookie-banner (accepted)="enableAnalytics()" (rejected)="disableAnalytics()"></ply-cookie-banner>
 */
@Component({
  selector: 'ply-cookie-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BaseButtonDirective, StrokedButtonDirective, IconComponent],
  templateUrl: './cookie-banner.component.html',
  host: { '[class]': 'hostCls()' },
})
export class CookieBannerComponent {
  private readonly isSsrSafeBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /**
   * Extra host classes merged via `cn()`.
   * @example
   * <ply-cookie-banner class="md:left-8"></ply-cookie-banner>
   */
  readonly extraClass = input('', { alias: 'class' });

  /**
   * `localStorage` key used to remember the choice.
   * @example
   * <ply-cookie-banner storageKey="docs-cookie-consent"></ply-cookie-banner>
   */
  readonly storageKey = input('ply-cookie-consent');

  /**
   * Heading shown beside the cookie icon.
   * @example
   * <ply-cookie-banner title="Cookies"></ply-cookie-banner>
   */
  readonly title = input('We use cookies');

  /**
   * Supporting copy under the title.
   * @example
   * <ply-cookie-banner message="We store preferences only."></ply-cookie-banner>
   */
  readonly message = input(
    'We use cookies to remember your theme and keep the docs working. You can reject non-essential cookies.',
  );

  /**
   * Label for the accept button.
   * @example
   * <ply-cookie-banner acceptLabel="Allow all"></ply-cookie-banner>
   */
  readonly acceptLabel = input('Accept');

  /**
   * Label for the reject button.
   * @example
   * <ply-cookie-banner rejectLabel="Essential only"></ply-cookie-banner>
   */
  readonly rejectLabel = input('Reject');

  /**
   * Optional privacy policy URL. Hidden when empty.
   * @example
   * <ply-cookie-banner policyHref="/privacy"></ply-cookie-banner>
   */
  readonly policyHref = input('');

  /**
   * Label for the privacy policy link.
   * @example
   * <ply-cookie-banner policyLabel="Privacy"></ply-cookie-banner>
   */
  readonly policyLabel = input('Privacy policy');

  /**
   * Emitted after the user accepts (and the choice is stored).
   * @example
   * <ply-cookie-banner (accepted)="onAccept()"></ply-cookie-banner>
   */
  readonly accepted = output<void>();

  /**
   * Emitted after the user rejects (and the choice is stored).
   * @example
   * <ply-cookie-banner (rejected)="onReject()"></ply-cookie-banner>
   */
  readonly rejected = output<void>();

  /**
   * Emitted with the stored consent value after accept, reject, or a successful reset.
   * @example
   * <ply-cookie-banner (consentChange)="consent.set($event)"></ply-cookie-banner>
   */
  readonly consentChange = output<CookieConsent>();

  readonly visible = signal(false);

  protected readonly hostCls = computed(() =>
    cn(
      this.visible()
        ? 'pointer-events-none fixed inset-x-0 bottom-0 z-[10000] p-4 md:inset-x-auto md:left-4 md:max-w-md'
        : 'hidden',
      this.extraClass(),
    ),
  );

  constructor() {
    afterNextRender(() => {
      if (!this.isSsrSafeBrowser) return;
      if (!this.readStored()) this.visible.set(true);
    });
  }

  /**
   * Persist accept, hide the banner, and emit.
   * @example
   * banner.accept();
   */
  accept(): void {
    this.persist('accepted');
    this.visible.set(false);
    this.accepted.emit();
    this.consentChange.emit('accepted');
  }

  /**
   * Persist reject, hide the banner, and emit.
   * @example
   * banner.reject();
   */
  reject(): void {
    this.persist('rejected');
    this.visible.set(false);
    this.rejected.emit();
    this.consentChange.emit('rejected');
  }

  /**
   * Clear the stored choice and show the banner again (demo / settings).
   * @example
   * banner.reset();
   */
  reset(): void {
    if (this.isSsrSafeBrowser) {
      try {
        localStorage.removeItem(this.storageKey());
      } catch {
        /* private mode */
      }
    }
    this.visible.set(true);
  }

  private persist(value: CookieConsent): void {
    if (!this.isSsrSafeBrowser) return;
    try {
      localStorage.setItem(this.storageKey(), value);
    } catch {
      /* private mode */
    }
  }

  private readStored(): CookieConsent | null {
    try {
      const raw = localStorage.getItem(this.storageKey());
      if (raw === 'accepted' || raw === 'rejected') return raw;
    } catch {
      /* private mode */
    }
    return null;
  }
}
