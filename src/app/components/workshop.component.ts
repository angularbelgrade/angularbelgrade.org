import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-workshop',
  template: `
    <h2 id="workshop" class="section-title">Workshop</h2>

    <div class="workshop-card">
      <h3 class="workshop-title">
        Modern Angular Architectures: SignalStore, Signal Forms, and AI
        Assistants
      </h3>

      <div class="workshop-info">
        <div class="trainer-photos">
          <img
            alt="Manfred Steyer"
            src="/people/manfred-steyer.jpg"
            height="112"
            width="112"
          />

          <img
            alt="Michael Egger-Zikes"
            src="/people/michael-egger-zikes.jpg"
            height="112"
            width="112"
          />
        </div>

        <ul>
          <li>
            <strong>Trainers:</strong> Manfred Steyer & Michael Egger-Zikes
          </li>
          <li><strong>Date:</strong> May 8, 2026</li>
          <li><strong>Time:</strong> 9:00 - 17:00</li>
          <li>
            <strong>Location:</strong> Workshop venue will be announced soon!
          </li>
        </ul>
      </div>

      <hr />

      <div class="workshop-description">
        <p>
          Enterprise applications need to remain maintainable and extensible
          over the long term. This workshop shows you how to achieve this goal
          with modern Angular.
        </p>

        <p>
          We combine cutting-edge features such as Signals, Resources, the
          SignalStore, and Signal Forms with proven concepts like Strategic
          Design (DDD), vertical architectures, as well as Monorepos, Moduliths,
          and Micro Frontends.
        </p>

        <p>
          Then we use the SignalStore, Signal Forms, as well as the Router to
          provide context to an AI assistant that we add to our case study. For
          this, we discuss function calling in the frontend and the creation of
          dynamic UIs.
        </p>

        <p>
          By the end of this workshop, you’ll be able to design and implement
          sustainable solutions using Angular’s latest innovations and evaluate
          the pros and cons of different architectural approaches for your
          projects.
        </p>

        <h4 class="workshop-subtitle">Agenda:</h4>

        <div class="workshop-agenda-item">
          <p>Block 0: Project Setup</p>
          <ul>
            <li>Overview: Vertical architectures and Strategic Design (DDD)</li>
            <li>
              Latest features in Sheriff and Nx for building modular solutions
            </li>
            <li>Current trends for Angular-based Micro Frontends</li>
          </ul>
        </div>

        <div class="workshop-agenda-item">
          <p>Block 1: Reactive Design with Signals</p>
          <ul>
            <li>Reactive thinking and principles of reactive design</li>
            <li>Understanding the Signal Graph</li>
            <li>
              Synchronous and asynchronous projections with computed and the
              Resource API
            </li>
            <li>Data sinks in the reactive flow: Templates and Effects</li>
          </ul>
        </div>

        <div class="workshop-agenda-item">
          <p>Block 2: Lightweight State Management with the NgRx SignalStore</p>
          <ul>
            <li>The SignalStore and your architecture</li>
            <li>SignalStore and the Resource API</li>
            <li>Mutation APIs as the counterpart to the Resource API</li>
            <li>Custom extensions for recurring use cases</li>
            <li>Communication between multiple SignalStores</li>
            <li>Implementing common state patterns with the SignalStore</li>
          </ul>
        </div>

        <div class="workshop-agenda-item">
          <p>Block 3: Signal Forms</p>
          <ul>
            <li>Signal Forms within the reactive data flow</li>
            <li>Standard schemas and Zod for enforcing data contracts</li>
            <li>Integrating Signal Forms with the SignalStore</li>
          </ul>
        </div>

        <div class="workshop-agenda-item">
          <p>Block 4: AI Assistants</p>
          <ul>
            <li>Patterns and prompts for AI assistants with Hashbrown</li>
            <li>
              Using NgRx SignalStore, Signal Forms, and the Router as context
              sources
            </li>
            <li>
              Angular services for assistants: tool-calling in the frontend
            </li>
            <li>Enabling the assistant to answer questions with dynamic UIs</li>
          </ul>
        </div>
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

      .workshop-subtitle {
        font-weight: 600;
        font-size: 1.15rem;
        margin: 1rem 0;
      }

      .workshop-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .trainer-photos {
        display: flex;
        flex-direction: column;
        gap: 1rem;
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

      .workshop-description p {
        margin: 0;
        line-height: 1.5;
      }

      .workshop-description p + p {
        margin-top: 1rem;
      }

      .workshop-agenda-item > p {
        font-weight: 600;
      }

      .workshop-agenda-item > ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      @media only screen and (min-width: 850px) {
        .workshop-card {
          padding: 2rem;
          max-width: 860px;
        }

        .trainer-photos {
          flex-direction: row;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent {}
