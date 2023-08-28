import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'bgd-header',
  standalone: true,
  imports: [RouterLink, NgClass],
  template: `
    <nav [ngClass]="{ header: !hideNav, 'header-hidden': hideNav }">
      <div class="header">
        <button class="menu-button" (click)="toggleNav()">
          <img
            class="menu"
            src="/icons/menu.svg"
            fetchPriority="high"
            loading="eager"
            height="30"
            width="30"
          />
        </button>
        <a class="home-link" routerLink="/">
          <img
            class="logo"
            alt="Angular Belgrade Logo"
            src="/angular-belgrade.svg"
            fetchPriority="high"
            loading="eager"
            height="40"
            width="40"
          />
        </a>
      </div>

      <ul class="nav-list">
        <li><a routerLink="/" fragment="speakers">Speakers</a></li>
        <li><a routerLink="/" fragment="sponsors">Sponsors</a></li>
      </ul>

      <div class="sidenav" [class.open]="isNavOpen">
        <div class="sidenav-items">
          <a class="home-link" routerLink="/">
            <img
              class="logo"
              alt="Angular Belgrade Logo"
              src="/angular-belgrade.svg"
              fetchPriority="high"
              loading="eager"
              height="30"
              width="30"
            />
          </a>
          <button class="menu-button" (click)="toggleNav()">
            <img
              class="menu"
              src="/icons/close.svg"
              fetchPriority="high"
              loading="eager"
              height="20"
              width="20"
            />
          </button>
        </div>
        <ul>
          <li><a routerLink="/" fragment="speakers">Speakers</a></li>
          <li><a routerLink="/" fragment="sponsors">Sponsors</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `
      nav {
        padding: 0.75rem;
        border-bottom: 1px solid #303b57;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.7s ease-in-out;
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
        margin: 0 1.25rem 0 0;
        padding: 0;
      }

      a {
        text-decoration: none;
      }

      .header {
        display: flex;
        flex: 1;
        align-items: center;
        transform: translateY(0);
      }

      .header-hidden {
        transform: translateY(-100%);
      }

      .menu-button {
        margin-right: 1rem;
        background: none;
        border: none;
        cursor: pointer;
        display: none;
      }

      .sidenav {
        width: 0;
        background: linear-gradient(to top, #171a29, #0e101c);
        transition: width 0.7s ease-in-out;
        overflow: hidden;
        position: fixed;
        height: 100vh;
        bottom: 0;
        left: 0;
        top: 0;
      }

      .sidenav-items {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sidenav-items button {
        margin-left: auto;
      }

      .sidenav a {
        padding: 15px 25px;
        text-align: center;
        display: block;
        transition: 0.3s;
      }

      .sidenav a:hover {
        background-color: #ddd;
      }

      .sidenav ul {
        top: 2rem;
        display: flex;
        flex-direction: column;
      }

      .sidenav.open {
        width: 80vw;
      }

      .home-link {
        justify-self: flex-start;
      }

      .logo:hover,
      .sidenav a:hover {
        filter: drop-shadow(0 0 1rem #a6abbd);
      }

      @media only screen and (max-width: 992px) {
        .menu-button {
          display: inline;
        }

        .nav-list {
          display: none;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  hideNav = false;
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.hideNav = window.scrollY > 0;
  }
}
