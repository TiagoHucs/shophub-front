import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeChoseComponent } from './size-chose.component';

describe('SizeChoseComponent', () => {
  let component: SizeChoseComponent;
  let fixture: ComponentFixture<SizeChoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeChoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
