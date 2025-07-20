import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { HotToastRef } from '@ngxpert/hot-toast';
import confetti, { Options } from 'canvas-confetti';

@Component({
  selector: 'app-toast-with-confetti-template-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-with-confetti-template-component.component.html',
  styleUrls: ['./toast-with-confetti-template-component.component.css']
})
export class ToastWithConfettiTemplateComponentComponent implements AfterViewInit {
  toastRef = inject(HotToastRef<any>);
  private elementRef = inject(ElementRef);

  ngAfterViewInit() {
    setTimeout(() => {
      const element = this.elementRef.nativeElement as HTMLElement;
      const { x, y, width, height } = element.getBoundingClientRect();
      const origin = {
        x: (x + width / 2) / window.innerWidth,
        y: (y + height / 2) / window.innerHeight
      };
      this.realisticConfetti({ origin, angle: 180 });
      this.realisticConfetti({ origin, angle: 0 });
      this.realisticConfetti({ origin, angle: 270 });
      this.realisticConfetti({ origin, angle: 90 });
    }, 230);
  }

  realisticConfetti(options: Options) {
    const count = 200;
    function fire(particleRatio: number, opts: Options) {
      confetti({
        ...options,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }
}
