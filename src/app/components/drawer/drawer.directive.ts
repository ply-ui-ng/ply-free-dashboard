// Ply (free tier) — https://ply-ui.com
// Free to use in unlimited projects. Do not redistribute this source as a library, kit, or template collection.
// Full license terms: https://github.com/ply-ui-ng/ply/blob/main/LICENSE.md

import {
  Directive,
  OnDestroy,
  ViewContainerRef,
  inject,
  input
} from '@angular/core';
import { DrawerPanel } from './drawer-panel';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { merge, Subscription } from 'rxjs';
import { outputToObservable } from '@angular/core/rxjs-interop';

/**
 * A directive that attaches a `ply-drawer` to a trigger element (like a button).
 * Automatically handles the overlay backdrop and click-to-open behavior.
 * 
 * @example
 * <ply-drawer #myDrawer position="right">Drawer Content</ply-drawer>
 * <button [ply-drawer]="myDrawer">Open Drawer</button>
 */
@Directive({
  selector: '[ply-drawer]',
  host: {
    '(click)': 'toggleDrawer()',
  },
})
export class DrawerDirective<T> implements OnDestroy {
  private isDrawerOpen = false;
  private overlayRef?: OverlayRef;
  private closingSubscription = Subscription.EMPTY;

  /** The edge of the screen to slide the drawer in from. */
  readonly placement = input('right');
  
  /** The reference to the `ply-drawer` component to open. */
  readonly drawerPanel = input.required<DrawerPanel<T>>({ alias: "ply-drawer" });

  private overlay = inject(Overlay);
  private viewContainerRef = inject(ViewContainerRef);

  toggleDrawer(): void {
    this.isDrawerOpen ? this.destroyDrawer() : this.openDrawer();
  }

  openDrawer(): void {
    const drawerPanel = this.drawerPanel();
    if (!drawerPanel) return;

    this.isDrawerOpen = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: ['bg-slate-300/50', 'dark:bg-slate-800/80', 'backdrop-blur-[8px]'],
      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    const templatePortal = new TemplatePortal(
      drawerPanel.templateRef(),
      this.viewContainerRef
    );
    this.overlayRef.attach(templatePortal);

    this.closingSubscription = merge(
      this.overlayRef.backdropClick(),
      this.overlayRef.detachments(),
      outputToObservable(drawerPanel.closed)
    ).subscribe(() => this.destroyDrawer());
  }

  private destroyDrawer(): void {
    if (!this.overlayRef || !this.isDrawerOpen) {
      return;
    }

    this.closingSubscription.unsubscribe();
    this.isDrawerOpen = false;
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
    this.closingSubscription.unsubscribe();
  }
}
