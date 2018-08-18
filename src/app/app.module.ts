import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes  } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardInfoComponent } from './dashboard/dashboard-info/dashboard-info.component';
import { ManageFaqComponent } from './dashboard/dashboard-info/manage-faq/manage-faq.component';
import { ManageContactUsComponent } from './dashboard/dashboard-info/manage-contact-us/manage-contact-us.component';
import { AddNewFaqComponent } from './dashboard/dashboard-info/add-new-faq/add-new-faq.component';
import { ComposeComponent } from './dashboard/dashboard-info/compose/compose.component';
import { ArchievesComponent } from './dashboard/dashboard-info/archieves/archieves.component';
import { DataService } from './services/data.service';
import { AccountService } from './services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUsersComponent } from './dashboard/dashboard-info/manage-users/manage-users.component';


const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'signin',component:SigninComponent},
  {path:'dashboard-info',component:DashboardComponent},
  {path:'dashboard-info/manage-contact-us',component:DashboardComponent},
  {path:'dashboard-info/manage-users',component:DashboardComponent},
  {path:'dashboard-info/manage-faq',component:DashboardComponent},
  //{path:'dashboard-info/manage-faq/add-new-faq',component:DashboardComponent },
  {path:'dashboard-info/compose',component:DashboardComponent },
  {path:'dashboard-info/archieves',component:DashboardComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SigninComponent,
    DashboardInfoComponent,
    ManageFaqComponent,
    ManageContactUsComponent,
    AddNewFaqComponent,
    ComposeComponent,
    ArchievesComponent,
    ManageUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forRoot(routes)
    
  ],
  providers: [DataService, AccountService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
