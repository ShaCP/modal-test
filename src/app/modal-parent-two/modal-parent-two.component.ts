import { Component, Input, TemplateRef, inject } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-parent-two',
  templateUrl: './modal-parent-two.component.html',
  styleUrls: ['./modal-parent-two.component.scss'],
})
export class ModalParentTwoComponent {
  public modalService = inject(NgbModal);
  public modalRef?: NgbModalRef;

  open(content: TemplateRef<any>) {
    this.modalRef = this.modalService.open(content);
  }
}
