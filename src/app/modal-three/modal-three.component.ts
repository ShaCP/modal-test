import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-three',
  templateUrl: './modal-three.component.html',
  styleUrls: ['./modal-three.component.scss'],
})
export class ModalThreeComponent {
  activeModal = inject(NgbActiveModal);
  @Input() name= "";
}
