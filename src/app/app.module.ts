import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EInfoComponent } from './e-info/e-info.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './lc-component/child/child.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EInfoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
