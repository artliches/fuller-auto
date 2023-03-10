import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlitchHeaderComponent } from './glitch-header.component';

describe('GlitchHeaderComponent', () => {
  let component: GlitchHeaderComponent;
  let fixture: ComponentFixture<GlitchHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlitchHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlitchHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
