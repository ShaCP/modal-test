import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { ModalParentComponent } from './modal-parent/modal-parent.component';
import { ModalParentTwoComponent } from './modal-parent-two/modal-parent-two.component';
import { ModalTwoComponent } from './modal-two/modal-two.component';
import { ModalThreeComponent } from './modal-three/modal-three.component';
import { ModalParentThreeComponent } from './modal-parent-three/modal-parent-three.component';
import { ModalContentComponent } from './modal-content/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalParentComponent,
    ModalParentTwoComponent,
    ModalTwoComponent,
    ModalThreeComponent,
    ModalParentThreeComponent,
    ModalContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
