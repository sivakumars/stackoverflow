//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgxMasonryModule } from 'ngx-masonry';
import { MatInputModule,
         MatButtonModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,  
         MatCardModule ,
         MatProgressBarModule,
         MatPaginatorModule,
         MatFormFieldModule,
         MatTooltipModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { StackoverflowGalleryComponent } from './components/stackoverflow-gallery/stackoverflow-gallery.component';
import { StackoverflowServiceService } from './services/stackoverflow-service.service';
import { QuestionsComponent } from './components/questions/questions.component';
import { GetinspiredComponent } from './components/getinspired/getinspired.component';

//Routes 
const  appRoutes: Routes = [
  { path: 'questions/:tag', component: QuestionsComponent },
  { path: 'inspiration/:tag', component: GetinspiredComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    StackoverflowGalleryComponent,
    QuestionsComponent,
    GetinspiredComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StackoverflowServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
