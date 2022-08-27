import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcometestComponent } from './welcometest.component';

describe('WelcometestComponent', () => {
  let component: WelcometestComponent;
  let fixture: ComponentFixture<WelcometestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcometestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcometestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
