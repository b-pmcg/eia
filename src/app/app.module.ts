import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**User defined components */
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { ChcImageAttachmentsComponent } from './chc-image-attachments/chc-image-attachments.component';

/**Third party modules */
import { ImageUploadModule } from "angular2-image-upload";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ChcImageAttachmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
