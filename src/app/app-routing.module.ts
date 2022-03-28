import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoockingsComponent } from './boockings/boockings.component';
import { CreatBookingComponent } from './creat-booking/creat-booking.component';
import { HelpComponent } from './help/help.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

const routes: Routes = [
  {path:'bookings', component:BoockingsComponent},
  {path:'create', component:CreatBookingComponent},
  {path:'edit/:id', component:CreatBookingComponent},
  {path:'imprint', component:ImprintComponent},
  {path:'legalnotice', component:LegalNoticeComponent},
  {path:'help', component:HelpComponent},
  {path:'', redirectTo:'bookings', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
