import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntesWebComponent } from './apuntes-web.component';

describe('ApuntesWebComponent', () => {
  let component: ApuntesWebComponent;
  let fixture: ComponentFixture<ApuntesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApuntesWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApuntesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
