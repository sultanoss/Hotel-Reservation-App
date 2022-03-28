import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoockingsComponent } from './boockings/boockings.component';
import { CreatBookingComponent } from './creat-booking/creat-booking.component';
import { InMemoryDataService } from './in-memory-data.service';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { HelpComponent } from './help/help.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    AppComponent,
    BoockingsComponent,
    CreatBookingComponent,
    MenuComponent,
    FooterComponent,
    ImprintComponent,
    LegalNoticeComponent,
    HelpComponent,
    BannerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
