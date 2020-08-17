import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroHelloComponent } from './hero-hello.component';

describe('HeroHelloComponent', () => {
  let component: HeroHelloComponent;
  let fixture: ComponentFixture<HeroHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
