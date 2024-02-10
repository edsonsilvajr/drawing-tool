import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-colors-menu',
  standalone: true,
  imports: [FontAwesomeModule, NgStyle, NgClass, FormsModule],
  templateUrl: './colors-menu.component.html',
  styleUrl: './colors-menu.component.css',
})
export class ColorsMenuComponent {
  @Output() evento = new EventEmitter();
  colors = ['#000000', '#ff0000', '#1AFF00', '#0008FF', '#FFF700'];
  selectedColor = '#000000';
  faSquare = faSquare;
  range = 1;

  handleInputChange() {
    this.evento.emit({
      color: this.selectedColor,
      size: this.range,
    });
  }

  mudarCor(cor: string) {
    this.selectedColor = cor;
    this.evento.emit({
      color: this.selectedColor,
      size: this.range,
    });
  }
}
