import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <ul>
      <li><a routerLink="/subject-in-a-service">Subject in a service</a></li>
      <li><a routerLink="/signal-in-a-service">Signal in a service</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      display: block;
    }

    ul {
      display: flex;
      padding: 0;
    }

    ul > li {
      list-style-type: none;
      margin-right: 1rem;
      font-size: 1.25rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(title: Title) {
    title.setTitle('ng signal in a service demo');
  }
}
