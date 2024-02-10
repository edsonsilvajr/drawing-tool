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
  private isErasing = false;
  private penConfig = {
    color: '#000000',
    size: 1,
  };

  ngAfterViewInit(): void {
    this.configurarCanvas();
  }

  configurarCanvas() {
    this.canvasRef.nativeElement.width = innerWidth;
    this.canvasRef.nativeElement.height = innerHeight;
    this.context = this.canvasRef.nativeElement.getContext('2d')!;
    this.context.fillStyle = 'white';
    this.context.fillRect(
      0,
      0,
      this.canvasRef.nativeElement.width,
      this.canvasRef.nativeElement.height
    );
  }

  handleOption(e: any) {
    if (e === 4) this.downloadImagem();
    if (e === 2 || e === 3) {
      //criar histórico
    }
    if (e === 1) {
      this.mudarCaneta({
        color: 'rgba(255,255,255,1)',
        size: this.context.lineWidth,
      });
      this.isErasing = true;
    }
    if (e === 0) {
      this.isErasing = false;
      this.mudarCaneta(this.penConfig);
    }
  }

  downloadImagem() {
    const URL = this.canvasRef.nativeElement.toDataURL();
    const anchor = document.createElement('a');
    anchor.href = URL;
    anchor.download = 'desenho.jpg';
    anchor.click();
  }

  handleConfig(e: any) {
    this.mudarCaneta(e, true);
  }

  mudarCaneta(config: any, registrar?: boolean) {
    if (registrar) this.penConfig = config;
    this.context.strokeStyle = this.isErasing
      ? this.context.strokeStyle
      : config.color;
    this.context.lineWidth = config.size;
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
