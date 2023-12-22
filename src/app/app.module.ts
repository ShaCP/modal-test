import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalParentComponent } from './modal-parent/modal-parent.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalParentComponent,
    ModalContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
