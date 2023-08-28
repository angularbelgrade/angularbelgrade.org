import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-sponsors',
  standalone: true,
  template: `
    <h2 id="sponsors" class="section-title">Sponsors</h2>

    <div class="logos">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .logos {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
      }

      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
