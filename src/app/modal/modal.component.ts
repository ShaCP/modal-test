import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  modal?: NgbModalRef;
  @ViewChild('content') private modalContent?: TemplateRef<ModalComponent>
  constructor(private modalService: NgbModal) {}
  open() {
    this.modal = this.modalService.open(this.modalContent);
  }

  close(result?: any) {
    this.modal?.close(result);
  }

  dismiss(reason?: any) {
    this.modal?.dismiss(reason);
  }
}
