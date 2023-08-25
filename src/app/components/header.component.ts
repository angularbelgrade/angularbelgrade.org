import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-header',
  standalone: true,
  template: '<header>Header</header>',
  styles: [
    `
      header {
        padding: 1.25rem;
        border-bottom: 1px solid #303b57;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
