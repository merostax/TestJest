import { Component } from '@angular/core';
import {ButtonComponent} from "../models/button/button.component";

@Component({
  selector: 'git app-root',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
