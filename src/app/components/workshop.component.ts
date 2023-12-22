import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-workshop',
  standalone: true,
  template: `
    <h2 id="workshop" class="section-title">Workshop</h2>

    <div class="workshop-card">
      <h3 class="workshop-title">
        Mastering NgRx SignalStore: From Fundamentals to Advanced Techniques
      </h3>

      <div class="workshop-info">
        <img
          alt="Alex Okrushko"
          src="/people/alex-okrushko.jpg"
          loading="lazy"
          height="112"
          width="112"
        />

        <ul>
          <li><strong>Trainer:</strong> Alex Okrushko</li>
          <li><strong>Date:</strong> May 23, 2024</li>
          <li><strong>Time:</strong> 9:00 - 17:00</li>
          <li><strong>Location:</strong> Belgrade, Serbia</li>
        </ul>
      </div>

      <hr />

      <div class="workshop-description">
        <p>
          Explore the power of NgRx SignalStore in a comprehensive workshop led
          by Alex Okrushko, a core member of the NgRx team. This workshop offers
          a deep dive into the world of reactive state management powered by
          Angular Signals.
        </p>

        <p>
          NgRx SignalStore offers a pragmatic approach to state management in
          Angular applications. With its native support for Signals, you can
          define stores in a clear and declarative manner. The simplicity and
          flexibility of SignalStore, coupled with its opinionated and modular
          design, make it a versatile choice for Angular developers.
        </p>

        <p>
          In this workshop, we’ll walk through the fundamentals of the NgRx
          SignalStore with in-depth discussions, exercises, and code labs. We'll
          guide you through leveraging the power of both Signals and RxJS,
          showing you how to use each in the places where they shine, unlocking
          the full potential of reactivity in Angular. After exploring core
          concepts, we'll delve into using SignalStore plugins and architectural
          patterns that ensure code cleanliness, scalability, and robustness.
        </p>

        <p>
          <strong>Prerequisites:</strong> Participants should have a basic
          understanding of Angular and TypeScript fundamentals. Experience with
          NgRx and Signals is not required but would be beneficial.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 0 1rem 2rem 1rem;
        border-bottom: 1px solid var(--border-color);
      }

      .workshop-card {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        margin: 0 auto;
      }

      .workshop-title {
        font-size: 1.25rem;
        font-weight: 600;
        text-align: center;
        margin: 0;
      }

      .workshop-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .workshop-info > img {
        border-radius: 0.5rem;
      }

      .workshop-info > ul {
        padding: 0;
        margin: 0;
        line-height: 1.4;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      strong {
        font-weight: 600;
      }

      hr {
        width: 100%;
        border: 1px solid var(--border-color);
        margin: 0;
      }

      .workshop-description {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .workshop-description > p {
        margin: 0;
        line-height: 1.5;
      }

      .workshop-description > p + p {
        margin-top: 1rem;
      }

      @media only screen and (min-width: 850px) {
        .workshop-card {
          padding: 2rem;
          max-width: 860px;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent {}
