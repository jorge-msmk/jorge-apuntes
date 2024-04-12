import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApuntesGitComponent } from '../apuntes-git/apuntes-git.component';
import { ApuntesAngularComponent } from '../apuntes-angular/apuntes-angular.component';
import { ApuntesJavascriptComponent } from '../apuntes-javascript/apuntes-javascript.component';
import { ApuntesWebComponent } from '../apuntes-web/apuntes-web.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, ApuntesGitComponent, ApuntesAngularComponent, ApuntesJavascriptComponent, ApuntesWebComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

  

}
