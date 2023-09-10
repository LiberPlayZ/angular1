import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisComponent } from './Registration/regis.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { BackendCommunicationComponent } from './backend-communication/backend-communication.component';
import { Routes, RouterModule } from '@angular/router';
import { GraphsDataComponent } from './graphs-data/graphs-data.component';
import { GraphsTableServiceService } from './graphs-data/graphs-table-service.service';
import { NoDisplayGuard } from './graphs-data/no.display.guard';

const routes: Routes = [
  // ... other routes
  { path: 'view-image', component: BackendCommunicationComponent },
  { path: 'showgraph/:id/:correlation_coefficient', component: BackendCommunicationComponent, canActivate: [NoDisplayGuard] }
];



@NgModule({
  declarations: [
    AppComponent,
    RegisComponent,
    BackendCommunicationComponent,
    GraphsDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule, MatInputModule,
    HttpClientModule, RouterModule.forRoot(routes)
  ], exports: [RouterModule],
  providers: [NoDisplayGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
