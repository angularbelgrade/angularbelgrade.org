import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';

export const routeMeta: RouteMeta = {
  title: `Code of Conduct | ${metaResource.title}`,
};

@Component({
  standalone: true,
  template: `
    <h1 class="section-title">Code of Conduct</h1>

    <h2 class="section-subtitle">Overview</h2>

    <p>
      Angular Belgrade is committed to providing a safe and inclusive
      environment for all participants, regardless of gender, age, sexual
      orientation, disability, physical appearance, body size, race, ethnicity,
      religion, or professional status. This Code of Conduct outlines the
      principles and guidelines for acceptable behavior by all conference
      participants.
    </p>

    <h2 class="section-subtitle">Expected Behavior</h2>

    <p>All participants are expected to:</p>

    <ol>
      <li>
        <strong>Be Respectful:</strong> Treat all individuals with respect,
        kindness, and consideration. Do not engage in any form of
        discrimination, harassment, or bullying.
      </li>
      <li>
        <strong>Be Inclusive:</strong> Embrace diversity and promote
        inclusivity. Encourage and welcome participation from all individuals,
        regardless of background or identity.
      </li>
      <li>
        <strong>Be Collaborative:</strong> Foster a collaborative and positive
        atmosphere. Encourage sharing of ideas and knowledge in a constructive
        manner.
      </li>
      <li>
        <strong>Be Professional:</strong> Maintain professionalism at all times.
        Refrain from disruptive behavior, use of profanity, or any form of
        intimidation.
      </li>
      <li>
        <strong>Be Mindful:</strong> Be aware of your surroundings and the
        impact of your words and actions on others. If someone indicates that
        they are uncomfortable, respect their feelings and modify your behavior
        accordingly.
      </li>
    </ol>

    <h2 class="section-subtitle">Unacceptable Behavior</h2>

    <p>Unacceptable behavior includes, but is not limited to:</p>

    <ol>
      <li>
        <strong>Harassment:</strong> Harassment of any kind, including unwelcome
        comments or actions related to gender, age, sexual orientation,
        disability, physical appearance, body size, race, ethnicity, religion,
        or professional status, will not be tolerated.
      </li>
      <li>
        <strong>Intimidation or Threats:</strong> Intimidating, bullying, or
        threatening behavior will not be tolerated.
      </li>
      <li>
        <strong>Disruption:</strong> Disruptive behavior, including any form of
        heckling or inappropriate interruption during presentations or
        discussions, is not acceptable.
      </li>
    </ol>

    <h2 class="section-subtitle">Reporting and Enforcement</h2>

    <p>
      If you experience or witness a violation of this Code of Conduct, please
      report it to the conference staff. Reports will be kept confidential to
      the extent possible.
    </p>
    <p>
      Violations may result in a range of actions, including verbal warnings,
      expulsion from the conference without a refund, or reporting the incident
      to the appropriate authorities.
    </p>

    <h2 class="section-subtitle">Contact Information</h2>

    <p>
      If you need to report an incident or have any questions about this Code of
      Conduct, please contact us at
      <a href="mailto:angularbelgrade@gmail.com">angularbelgrade@gmail.com</a>.
    </p>

    <h2 class="section-subtitle">Acknowledgment</h2>

    <p>
      By attending <strong>NG Belgrade Conf</strong>, you agree to adhere to
      this Code of Conduct. Organizers reserve the right to update and modify
      this Code of Conduct as needed.
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 1200px;
        padding: 0 2rem 2rem;
      }

      p,
      ol {
        line-height: 1.5;
      }

      p + p {
        margin-top: 0;
      }

      ol {
        margin: 0 0 1rem 0;
      }

      li:not(:last-child) {
        margin-bottom: 0.5rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CodeOfConductPage {}
