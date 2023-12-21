import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalThreeComponent } from '../modal-three/modal-three.component';

@Component({
  selector: 'app-modal-parent-three',
  templateUrl: './modal-parent-three.component.html',
  styleUrls: ['./modal-parent-three.component.scss'],
})
export class ModalParentThreeComponent {
  private modalService = inject(NgbModal);

  openWrapper() {
    this.open();
  }

  open() {
    const modalRef = this.modalService.open(ModalThreeComponent);
    modalRef.componentInstance.name = 'World';
  }
}
