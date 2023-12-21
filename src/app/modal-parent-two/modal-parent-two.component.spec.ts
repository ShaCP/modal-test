import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParentTwoComponent } from './modal-parent-two.component';

describe('ModalParentTwoComponent', () => {
  let component: ModalParentTwoComponent;
  let fixture: ComponentFixture<ModalParentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalParentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalParentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
