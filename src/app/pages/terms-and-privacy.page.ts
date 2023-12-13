import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'Terms and Privacy | Angular Belgrade',
};

@Component({
  standalone: true,
  template: `
    <h1 class="page-heading">Terms of Service</h1>

    <p>Last updated: December 07, 2023</p>

    <p>
      Please read these Terms of Service ("Terms", "Terms of Service") carefully
      before using the angularbelgrade.org website (the "Service") operated by
      Angular Belgrade ("us", "we", or "our").
    </p>

    <p>
      Your access to and use of the Service is conditioned on your acceptance of
      and compliance with these Terms. These Terms apply to all visitors, users
      and others who access or use the Service.
    </p>

    <p>
      By accessing or using the Service you agree to be bound by these Terms. If
      you disagree with any part of the terms then you may not access the
      Service.
    </p>

    <h2>What personal information are collected on angularbelgrade.org?</h2>

    <p>
      The personal information we receive from our customers helps us to
      personalize and continually improve the provision of information services.
      We use this information in particular to manage and provide information
      services to create and process web sites, communicate with you about these
      services, update our records, and advise on products and services that may
      be of interest to you (check if the entries are correct or you have to
      edit / add). We also use this data to improve our service to prevent or
      detect fraud or abuse of our website and to allow third parties to engage
      in technical, logistic and other activities on our behalf. Here are some
      categories of personal information that we collect.
    </p>

    <h2>Email communications</h2>

    <p>
      To monitor our communications, we sometimes request confirmation of
      receiving an e-mail. If you do not want to receive emails or other mail
      from us, you can review your newsletter settings and notification
      preferences. Personal data received from other sources We may receive your
      personal information from other sources and add them to your account
      information.
    </p>

    <h2>Cookies</h2>

    <p>
      To allow our systems to recognize your device and to provide you with
      features we use cookies.
    </p>

    <p>
      Personal data collected from other sources From other sources we may
      receive data such as up-to-date information that we use to make changes to
      update our records or make the next communications more quickly; account
      information, information on visited pages by some traders with whom we
      handle certain co-branding operations or for whom we provide technical,
      implementation, advertising or other service; data on search terms and
      related results collected through searches conducted in web search
      engines; research results and links, lucrative data from central risk, to
      which we resort to offering credit or financial services to some customers
      as well as to prevent and detect fraud.
    </p>

    <h2>Is my personal data security guaranteed?</h2>

    <p>
      We strive to protect the security of your personal information when
      sending them, using Secure Sockets Layer (SSL) software, which encrypts
      the information you enter. At the time of payment we only show the last
      four digits of your credit card number. Of course, we send, during the
      processing of the order, the full credit card number to the issuing
      financial institution credit card. Our security procedures imply that
      occasionally you may be asked to prove your identity before disclosing
      personal information. It is important that you take appropriate
      protections against unauthorized access to your password and your
      computer. Always make sure that you are disconnected when using a shared
      computer with other users.
    </p>

    <h2>Link to other web sites</h2>

    <p>
      Our Service may contain links to third-party web sites or services that
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

    <h2>Termination</h2>

    <p>
      We may terminate or suspend access to our Service immediately, without
      prior notice or liability, for any reason whatsoever, including without
      limitation if you breach the Terms.
    </p>

    <p>
      All provisions of the Terms which by their nature should survive
      termination shall survive termination, including, without limitation,
      ownership provisions, warranty disclaimers, indemnity and limitations of
      liability.
    </p>

    <h2>Governing Law</h2>

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

    <h2>Refund Policies</h2>

    <p>I understand that tickets for this event are nonrefundable.</p>

    <h2>Holder of the treatment</h2>

    <p>
      Holder of the treatment is Webkraft Studio Doo., Vranjska 21 Stan 01,
      11050 Zvezdara, Belgrade - Company Number 10168160 - email:
      office@webkraft.studio
    </p>

    <h2>Data Protection Manager</h2>

    <p>
      Webkraft Studio Doo. as a result of assessing their risk profile on
      personal data processed, decided to have a Personal Data Protection
      Manager available at office@webkraft.studio.
    </p>

    <h2>Changes</h2>

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

    <h2>Contact Us</h2>

    <p>
      If you have any questions about these Terms, please contact us
      angularbelgrade@gmail.com.
    </p>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 80rem;
        padding: 0 2rem 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TermsAndPrivacyPage {}
