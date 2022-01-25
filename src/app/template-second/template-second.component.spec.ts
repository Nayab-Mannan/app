import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSecondComponent } from './template-second.component';

describe('TemplateSecondComponent', () => {
  let component: TemplateSecondComponent;
  let fixture: ComponentFixture<TemplateSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
