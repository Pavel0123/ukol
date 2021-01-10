import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web';
  search = '';
  routes = ['home', 'about', 'contact'];
  sidebar = false;

  get links(): string[] {
    const links = [];
    if (!this.search) {
      return [];
    }
    for (const route of this.routes) {

      if (route.includes(this.search)) {
        links.push(route);
      }
    }
    return links;


  }

  vec(): void {
    this.sidebar = !this.sidebar;
  }

}
