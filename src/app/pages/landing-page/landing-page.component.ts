import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OptionsMenuComponent } from '../../components/options-menu/options-menu.component';
import { ColorsMenuComponent } from '../../components/colors-menu/colors-menu.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [OptionsMenuComponent, ColorsMenuComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private context!: CanvasRenderingContext2D;
  private isDrawing = false;

  ngAfterViewInit(): void {
    this.configurarCanvas();
  }

  configurarCanvas() {
    this.canvasRef.nativeElement.width = innerWidth;
    this.canvasRef.nativeElement.height = innerHeight;
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
  }

  beginPath(x: number, y: number) {
    this.context.beginPath();
    this.context.moveTo(x, y);
  }

  drawLine(x: number, y: number) {
    this.context.lineTo(x, y);
    this.context.stroke();
  }

  onMouseDown(event: MouseEvent) {
    this.isDrawing = true;
    this.beginPath(event.clientX, event.clientY);
  }

  onMouseUp(event: MouseEvent) {
    this.isDrawing = false;
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDrawing) return;
    this.drawLine(event.clientX, event.clientY);
  }
}
