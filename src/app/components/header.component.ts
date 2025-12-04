import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformServer } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent, map, pairwise, tap } from 'rxjs';

@Component({
  selector: 'bgd-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav [class]="isNavVisible() ? 'visible-nav' : 'hidden-nav'">
      <a class="home-link" routerLink="/">
        <img
          alt="Angular Belgrade"
          src="/angular-belgrade.svg"
          fetchPriority="high"
          loading="eager"
          height="40"
          width="34"
        />
      </a>

      <button class="menu-button" (click)="toggleMenu()">
        <img
          alt="Open Menu Icon"
          src="/icons/menu.svg"
          fetchPriority="high"
          loading="eager"
          height="35"
          width="35"
        />
      </button>

      <ul class="desktop-links">
        <li><a routerLink="/" fragment="speakers">Speakers</a></li>
        <li><a routerLink="/" fragment="agenda">Agenda</a></li>
        <li><a routerLink="/" fragment="workshop">Workshop</a></li>
        <li><a routerLink="/" fragment="sponsors">Sponsors</a></li>
        <li><a routerLink="/team" routerLinkActive="active-link">Team</a></li>
        <li><a routerLink="/" fragment="venue">Venue</a></li>
        <li>
          <a class="tickets-button" routerLink="/" fragment="tickets">
            Tickets
          </a>
        </li>
      </ul>

      <ul
        class="mobile-links"
        [class]="isMenuOpen() ? 'visible-menu' : 'hidden-menu'"
      >
        <li>
          <a routerLink="/" fragment="speakers" (click)="closeMenu()">
            Speakers
          </a>
        </li>
        <li>
          <a routerLink="/" fragment="agenda" (click)="closeMenu()"> Agenda </a>
        </li>
        <li>
          <a routerLink="/" fragment="workshop" (click)="closeMenu()">
            Workshop
          </a>
        </li>
        <li>
          <a routerLink="/" fragment="sponsors" (click)="closeMenu()">
            Sponsors
          </a>
        </li>
        <li>
          <a
            routerLink="/team"
            routerLinkActive="active-link"
            (click)="closeMenu()"
          >
            Team
          </a>
        </li>
        <li>
          <a routerLink="/" fragment="venue" (click)="closeMenu()">Venue</a>
        </li>
        <li>
          <a
            class="tickets-button"
            routerLink="/"
            fragment="tickets"
            (click)="closeMenu()"
          >
            Tickets
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        position: fixed;
        z-index: 10;
        top: 0;
        width: 100%;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        background-color: var(--background-color);
      }

      .visible-nav {
        transform: translateY(0);
      }

      .hidden-nav {
        transform: translateY(-100%);
      }

      .visible-menu {
        transform: translateX(0);
      }

      .hidden-menu {
        transform: translateX(-100%);
      }

      .desktop-links {
        display: none;
      }

      .mobile-links {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        position: absolute;
        right: 0;
        top: 4rem;
        width: 100%;
        background-color: var(--background-color);
        padding: 1rem 0 2rem 0;
        border-bottom: 1px solid var(--border-color);
        margin: 0;
        transition: transform 0.3s ease-in-out;
      }

      .menu-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
      }

      a {
        text-decoration: none;
      }

      .home-link {
        justify-self: flex-start;
      }

      .tickets-button {
        color: white;
        padding: 0.5rem 1.5rem;
        border-radius: 0.5rem;
        background: var(--logo-purple-color);
        font-weight: 600;
        text-decoration: none;
      }

      .tickets-button:hover {
        opacity: 0.9;
      }

      @media only screen and (min-width: 850px) {
        .desktop-links {
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          gap: 2rem;
          margin: 0 1.25rem 0 0;
          padding: 0;
        }

        .mobile-links {
          display: none;
        }

        .menu-button {
          display: none;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);

  readonly isNavVisible = signal(true);
  readonly isMenuOpen = signal(false);

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      return;
    }

    this.toggleHeaderOnScroll();
  }

  toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  private toggleHeaderOnScroll(): void {
    fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        pairwise(),
        filter(() => !this.isMenuOpen()),
        tap(([previousPosition, currentPosition]) => {
          const isNavVisible =
            currentPosition <= 79 || currentPosition < previousPosition;
          this.isNavVisible.set(isNavVisible);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }
}
