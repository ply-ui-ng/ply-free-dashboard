import { Component, inject, signal } from '@angular/core';
import {
  BaseButtonDirective,
  BaseContextMenuItemDirective,
  BottomSheetComponent,
  ContextMenuComponent,
  ContextMenuDirective,
  DialogBodyComponent,
  DialogCloseDirective,
  DialogComponent,
  DialogFooterComponent,
  DialogHeaderComponent,
  DialogService,
  DrawerComponent,
  DrawerDirective,
  DropdownMenuComponent,
  DropdownMenuDirective,
  DropdownMenuItemComponent,
  HoverCardComponent,
  IconComponent,
  AvatarComponent,
  PopoverComponent,
  SpeedDialComponent,
  StrokedButtonDirective,
  TooltipDirective,
} from 'Base';
import type { SpeedDialAction } from 'Base';
import { ShowcasePage, ShowcaseNavSection } from '../showcase-page';
import { ShowcaseSection } from '../showcase-section';

@Component({
  selector: 'app-overlay-demo-dialog',
  imports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogBodyComponent,
    DialogFooterComponent,
    DialogCloseDirective,
    BaseButtonDirective,
    StrokedButtonDirective,
  ],
  template: `
    <ply-dialog [width]="420">
      <ply-dialog-header>Demo dialog</ply-dialog-header>
      <ply-dialog-body>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Opened with <code class="text-xs">DialogService</code>. Use this pattern for forms and confirmations.
        </p>
      </ply-dialog-body>
      <ply-dialog-footer>
        <button type="button" ply-stroked-button ply-dialog-close>Close</button>
        <button type="button" ply-button color="primary" ply-dialog-close>Got it</button>
      </ply-dialog-footer>
    </ply-dialog>
  `,
})
export class OverlayDemoDialog {}

@Component({
  selector: 'app-ui-overlays',
  imports: [
    ShowcasePage,
    ShowcaseSection,
    BaseButtonDirective,
    StrokedButtonDirective,
    TooltipDirective,
    PopoverComponent,
    DropdownMenuComponent,
    DropdownMenuItemComponent,
    DropdownMenuDirective,
    HoverCardComponent,
    AvatarComponent,
    DrawerComponent,
    DrawerDirective,
    BottomSheetComponent,
    IconComponent,
    ContextMenuComponent,
    ContextMenuDirective,
    BaseContextMenuItemDirective,
    SpeedDialComponent,
  ],
  templateUrl: './overlays.html',
})
export class UiOverlays {
  private readonly dialog = inject(DialogService);
  protected readonly sheetOpen = signal(false);
  protected readonly dialActions: SpeedDialAction[] = [
    { icon: 'edit', label: 'Edit', id: 'edit' },
    { icon: 'user-plus', label: 'Invite', id: 'invite' },
    { icon: 'bell', label: 'Notify', id: 'notify' },
  ];

  protected readonly sections: ShowcaseNavSection[] = [
    { id: 'dialog', label: 'Dialog' },
    { id: 'dropdown', label: 'Dropdown' },
    { id: 'context-menu', label: 'Context menu' },
    { id: 'tooltip', label: 'Tooltip' },
    { id: 'popover', label: 'Popover' },
    { id: 'hover-card', label: 'Hover card' },
    { id: 'drawer', label: 'Drawer' },
    { id: 'bottom-sheet', label: 'Bottom sheet' },
    { id: 'speed-dial', label: 'Speed dial' },
  ];

  openDialog(): void {
    this.dialog.open(OverlayDemoDialog).subscribe();
  }
}
