import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-workshop',
  template: `
    <h2 id="workshop" class="section-title">Workshop</h2>

    <div class="workshop-card">
      <div class="card-header">
        <div class="trainers">
          <div class="trainer-holder">
            <img
              alt="Manfred Steyer"
              src="/people/manfred-steyer.jpg"
              width="100%"
            />
            <p>Manfred Steyer</p>
          </div>

          <div class="trainer-holder">
            <img
              alt="Michael Egger-Zikes"
              src="/people/michael-egger-zikes.jpg"
              width="100%"
            />
            <p>Michael Egger-Zikes</p>
          </div>
        </div>
        <div class="workshop-details">
          <h3 class="workshop-title">
            Modern Angular Architectures: SignalStore, Signal Forms, and AI
            Assistants
          </h3>
          <div class="workshop-info">
            <ul>
              <li>
                <img
                  src="/icons/calendar.svg"
                  alt="Date"
                  height="24"
                  width="24"
                />
                <span>May 8, 2026</span>
              </li>
              <li>
                <img src="/icons/time.svg" alt="Time" height="24" width="24" />
                <span>9:00 - 17:00</span>
              </li>
              <li>
                <img
                  src="/icons/location.svg"
                  alt="Location"
                  height="24"
                  width="24"
                />
                <span> Workshop venue will be announced soon! </span>
              </li>
            </ul>
          </div>
        </div>
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
        padding: 3rem 1rem;
        background-color: var(--light-orange-color);
      }

      .workshop-card {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        border-radius: 0.5rem;
        margin: 0 auto;
        background-color: var(--lighter-orange-color);
      }

      .card-header {
        flex-direction: column;
        display: flex;
        gap: 2rem;
      }

      .trainers,
      .workshop-title {
        flex: 1;
      }

      .workshop-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        color: var(--orange-color);
      }

      .workshop-subtitle {
        font-weight: 700;
        font-size: 1.15rem;
        margin: 1rem 0;
      }

      .workshop-info {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .workshop-info ul li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .trainers {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }

      .trainer-holder {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--orange-color);
        color: white;
        width: 160px;
      }

      .trainer-holder p {
        margin: 10px;
        font-weight: 600;
        font-size: 0.8rem;
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
        border: 1px solid var(--orange-color);
        margin: 0;
        opacity: 0.4;
      }

      .workshop-description {
        display: flex;
        flex-direction: column;
      }

      .workshop-description p {
        margin: 0;
        line-height: 1.5;
      }

      .workshop-description p + p {
        margin-top: 1rem;
      }

      .workshop-agenda-item > p {
        font-weight: 700;
        color: #ffffff;
        background-color: var(--orange-color);
        padding: 5px 10px;
      }

      .workshop-agenda-item > ul {
        display: flex;
        flex-direction: column;
        list-style: circle;
        margin: 0;
        background: var(--light-orange-color);
      }
      .workshop-agenda-item > ul > li {
        padding: 5px 10px;
      }

      @media only screen and (min-width: 850px) {
        .workshop-card {
          padding: 2rem;
          max-width: 860px;
        }

        .card-header {
          flex-direction: row;
        }

        .trainers {
          justify-content: space-between;
        }

        .workshop-info {
          flex-direction: row;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkshopComponent {}
