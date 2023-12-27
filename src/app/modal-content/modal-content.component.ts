import { Component, Input } from '@angular/core';
import { Item } from '../modal-parent/modal-parent.component';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  @Input() selected: number[] = [];

  @Input() items: Item[] = [];

  onChangeHandler = (item: Item) => {
    const itemIndex = this.selected.indexOf(item.id);
    if (itemIndex > -1) {
      this.selected.splice(itemIndex, 1);
      return;
    }
    this.selected.push(item.id);
  };
}
