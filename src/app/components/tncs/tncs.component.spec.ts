import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TncsComponent } from './tncs.component';

describe('TncsComponent', () => {
  let component: TncsComponent;
  let fixture: ComponentFixture<TncsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TncsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TncsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
