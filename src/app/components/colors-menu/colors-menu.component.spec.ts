import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsMenuComponent } from './colors-menu.component';

describe('ColorsMenuComponent', () => {
  let component: ColorsMenuComponent;
  let fixture: ComponentFixture<ColorsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
