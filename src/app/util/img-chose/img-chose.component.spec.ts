import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgChoseComponent } from './img-chose.component';

describe('ImgChoseComponent', () => {
  let component: ImgChoseComponent;
  let fixture: ComponentFixture<ImgChoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgChoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
