import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisComponent } from './Registration/regis.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BackendCommunicationComponent } from './backend-communication/backend-communication.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // ... other routes
  { path: 'view-image', component: BackendCommunicationComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    RegisComponent,
    BackendCommunicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule,
    HttpClientModule,RouterModule.forRoot(routes)
  ],exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
