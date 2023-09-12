import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-partners',
  standalone: true,
  template: `
    <h2 id="partners" class="section-title">Community Partners</h2>

    <div class="logos">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .logos {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        max-width: 720px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      :host {
        display: block;
        padding-bottom: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnersComponent {}
