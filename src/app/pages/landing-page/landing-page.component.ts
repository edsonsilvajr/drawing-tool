import { Component } from '@angular/core';
import { OptionsMenuComponent } from '../../components/options-menu/options-menu.component';
import { ColorsMenuComponent } from '../../components/colors-menu/colors-menu.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [OptionsMenuComponent, ColorsMenuComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
