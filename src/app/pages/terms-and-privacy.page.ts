import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteMeta } from '@analogjs/router';
import { metaResource } from '../resources/meta.resource';

export const routeMeta: RouteMeta = {
  title: `Terms and Privacy | ${metaResource.title}`,
};

@Component({
  imports: [RouterLink],
  template: `
    <h1 class="section-title">Terms of Service</h1>

    <p>Last updated: December 12, 2023</p>
    <p>
      Please read these Terms of Service ("Terms", "Terms of Service") carefully
      before using the <a routerLink="/">angularbelgrade.org</a> website (the
      "Service") operated by Angular Belgrade ("us", "we", or "our").
    </p>
    <p>
      By purchasing a ticket or attending the Conference and/or Workshop, you
      agree to comply with these terms and conditions.
    </p>

    <h2 class="section-subtitle">Ticket Purchases and Confirmation</h2>

    <p>
      All ticket sales for the Conference and/or Workshop are final. No refunds
      or exchanges are allowed.
    </p>
    <p>
      Your ticket is valid only for the event date and location for which it was
      issued.
    </p>

    <h2 class="section-subtitle">Event Details</h2>

    <p>
      The event schedule, speakers, and workshop topics are subject to change
      without prior notice.
    </p>
    <p>
      The organizers reserve the right to cancel the Conference or Workshop for
      any reason. In such a case, a full refund will be issued to all ticket
      holders.
    </p>

    <h2 class="section-subtitle">Conduct</h2>

    <p>
      All attendees are expected to behave professionally and adhere to the
      <a routerLink="/code-of-conduct">Code of Conduct</a>.
    </p>

    <h2 class="section-subtitle">Media Release</h2>

    <p>
      Photographs and/or video may be taken during the Conference and Workshop.
      By attending, you grant the organizers full rights to use the images and
      footage for promotional purposes.
    </p>

    <h2 class="section-subtitle">Cookies</h2>

    <p>
      We do not utilize cookies to collect or store any personal information
      about our users.
    </p>

    <h2 class="section-subtitle">Personal Data Collected from Other Sources</h2>

    <p>
      We may receive your personal information from other sources and add them
      to your account information.
    </p>

    <h2 class="section-subtitle">Links to Other Websites</h2>

    <p>
      Our Website may contain links to third-party web sites or services that
      are not owned or controlled by Angular Belgrade.
    </p>
    <p>
      Angular Belgrade has no control over, and assumes no responsibility for,
      the content, privacy policies, or practices of any third party web sites
      or services. You further acknowledge and agree that Angular Belgrade shall
      not be responsible or liable, directly or indirectly, for any damage or
      loss caused or alleged to be caused by or in connection with use of or
      reliance on any such content, goods or services available on or through
      any such web sites or services.
    </p>
    <p>
      We strongly advise you to read the terms and conditions and privacy
      policies of any third-party web sites or services that you visit.
    </p>

    <h2 class="section-subtitle">Governing Law</h2>

    <p>
      These Terms shall be governed and construed in accordance with the laws of
      Republic of Serbia, without regard to its conflict of law provisions.
    </p>
    <p>
      Our failure to enforce any right or provision of these Terms will not be
      considered a waiver of those rights. If any provision of these Terms is
      held to be invalid or unenforceable by a court, the remaining provisions
      of these Terms will remain in effect. These Terms constitute the entire
      agreement between us regarding our Service, and supersede and replace any
      prior agreements we might have between us regarding the Service.
    </p>

    <h2 class="section-subtitle">Holder of the Treatment</h2>

    <p>
      Holder of the treatment is Webkraft Studio DOO, Vranjska 21/01, 11050
      Zvezdara, Belgrade | Company Number: 21724858 | Email:
      <a href="mailto:office@webkraft.studio">office&#64;webkraft.studio</a>
    </p>

    <h2 class="section-subtitle">Changes</h2>

    <p>
      We reserve the right, at our sole discretion, to modify or replace these
      Terms at any time. If a revision is material we will try to provide at
      least 30 days notice prior to any new terms taking effect. What
      constitutes a material change will be determined at our sole discretion.
    </p>
    <p>
      By continuing to access or use our Service after those revisions become
      effective, you agree to be bound by the revised terms. If you do not agree
      to the new terms, please stop using the Service.
    </p>

    <h2 class="section-subtitle">Contact Us</h2>

    <p>
      If you have any questions about these Terms, please contact us at
      <a href="mailto:angularbelgrade@gmail.com">
        angularbelgrade&#64;gmail.com
      </a>
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

      p {
        line-height: 1.5;
      }

      p + p {
        margin-top: 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndPrivacyPage {}
