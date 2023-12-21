import { Component, TemplateRef, inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-parent',
  templateUrl: './modal-parent.component.html',
  styleUrls: ['./modal-parent.component.scss'],
  providers: [NgbActiveModal],
})
export class ModalParentComponent {
  constructor(activeModal: NgbActiveModal) {}

  private modalService = inject(NgbModal);
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}
