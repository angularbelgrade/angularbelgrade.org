import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformServer, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent, map, pairwise, tap } from 'rxjs';

@Component({
  selector: 'bgd-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  template: `
    <nav [class]="isNavVisible() ? 'visible-nav' : 'hidden-nav'">
      <a class="home-link" routerLink="/">
        <img
          alt="Angular Belgrade Logo"
          src="/angular-belgrade.svg"
          fetchPriority="high"
          loading="eager"
          height="40"
          width="40"
        />
      </a>

      <button
        class="menu-button"
        [class.hidden]="!isMenuOpen()"
        (click)="toggleMenu()"
      >
        <img
          alt="Close Menu Icon"
          src="/icons/close.svg"
          loading="lazy"
          height="33"
          width="33"
        />
      </button>

      <button
        class="menu-button"
        [class.hidden]="isMenuOpen()"
        (click)="toggleMenu()"
      >
        <img
          alt="Open Menu Icon"
          src="/icons/menu.svg"
          fetchPriority="high"
          loading="eager"
          height="40"
          width="40"
        />
      </button>

      <ul class="desktop-links">
        <li><a routerLink="/" fragment="speakers">Speakers</a></li>
        <li><a routerLink="/" fragment="sponsors">Sponsors</a></li>
        <li><a routerLink="/" fragment="partners">Partners</a></li>
      </ul>

      <ul
        class="mobile-links"
        [class]="isMenuOpen() ? 'visible-menu' : 'hidden-menu'"
      >
        <li>
          <a routerLink="/" fragment="speakers" (click)="toggleMenu()">
            Speakers
          </a>
        </li>
        <li>
          <a routerLink="/" fragment="sponsors" (click)="toggleMenu()">
            Sponsors
          </a>
        </li>
        <li>
          <a routerLink="/" fragment="partners" (click)="toggleMenu()">
            Partners
          </a>
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #303b57;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        background-color: #0e101c;
      }

      .hidden {
        display: none;
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
        background: #0e101c;
        padding: 1rem 0 2rem 0;
        border-bottom: 1px solid #303b57;
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
