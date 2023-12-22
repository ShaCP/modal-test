import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

export type Item = {
  id: number;
  name: string;
  selected: boolean;
};

@Component({
  selector: 'app-modal-parent',
  templateUrl: './modal-parent.component.html',
  styleUrls: ['./modal-parent.component.scss'],
  providers: [NgbActiveModal],
})
export class ModalParentComponent {
  @ViewChild('modal') private modalComponent?: ModalComponent;
  open() {
    this.modalComponent?.open();
  }

  selected: Item[] = [
    {
      id: 1,
      name: 'Logan',
      selected: false,
    },
    {
      id: 2,
      name: 'Katherine',
      selected: true,
    },
  ];
}
