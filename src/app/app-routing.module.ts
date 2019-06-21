import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [{path: "", component:MenuComponent, children:[
  {path: "", component:HomeComponent},  
  {path: "about", component:AboutComponent}, 
  {path: "contact", component:ContactComponent},
  {path: "feedback", component:FeedbackComponent}
  
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




