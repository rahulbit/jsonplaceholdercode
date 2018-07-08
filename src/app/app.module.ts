import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HomeviewComponent } from './homeview/homeview.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeviewComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home' , component:HomeviewComponent},
      {path:'', redirectTo:'home', pathMatch:'full' }
    ])
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
