import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipsComponent } from './zips.component';

describe('ZipsComponent', () => {
  let component: ZipsComponent;
  let fixture: ComponentFixture<ZipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
