import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

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
}
