import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  closeResult = '';
  constructor(private modalService: NgbModal) {}
  open(content: TemplateRef<any>) {
    this.modalService.open(content);
  }
}
