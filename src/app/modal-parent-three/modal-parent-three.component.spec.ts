import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParentThreeComponent } from './modal-parent-three.component';

describe('ModalParentThreeComponent', () => {
  let component: ModalParentThreeComponent;
  let fixture: ComponentFixture<ModalParentThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalParentThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalParentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
