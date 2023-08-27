import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bgd-sponsors',
  standalone: true,
  imports: [CommonModule],
  template: `<p>sponsors works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
