import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bgd-speakers',
  standalone: true,
  imports: [CommonModule],
  template: `<p>speakers works!</p>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeakersComponent {}
