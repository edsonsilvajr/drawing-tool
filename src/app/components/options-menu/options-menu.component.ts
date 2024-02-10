import { NgClass } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEraser,
  faFileArrowDown,
  faPen,
  faRedo,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-options-menu',
  standalone: true,
  imports: [FontAwesomeModule, NgClass],
  templateUrl: './options-menu.component.html',
  styleUrl: './options-menu.component.css',
})
export class OptionsMenuComponent implements OnInit {
  faPen = faPen;
  faEraser = faEraser;
  faUndo = faUndo;
  faRedo = faRedo;
  faDownload = faFileArrowDown;

  optionSelected = Array(2).fill(false);

  @Output() evento = new EventEmitter();

  ngOnInit(): void {
    this.iniciarComCanetaAtiva();
  }

  iniciarComCanetaAtiva() {
    this.optionSelected[0] = true;
  }

  atualizarArrayOptions(index: number) {
    if (index === 0 || index === 1) {
      this.optionSelected.fill(false);
      this.optionSelected[index] = true;
    }
    this.evento.emit(index);
  }
}
