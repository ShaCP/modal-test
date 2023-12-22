import { Component, Input } from '@angular/core';
import { Item } from '../modal-parent/modal-parent.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  @Input() selected: Item[] = [];
}
