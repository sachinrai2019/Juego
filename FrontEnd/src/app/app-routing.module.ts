import { NgModule } from '@angular/core';
import { Routes , RouterModule} from '@angular/router';

import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';




//route guard for entire application

// const routes: Routes = [{path: '', canActivate:[AuthGuard] ,children: [
//   {
//     path: '',
//     redirectTo:'events',
//     pathMatch: 'full'
//   },

//   {
//     path: 'events',
//     component: EventsComponent
//   },
//   {
//     path: 'specialEvents',
//     component: SpecialEventsComponent,
//     canActivate:[AuthGuard]
  

//   }

  
// ]}
// , {
//   path: 'login',
//   component: LoginComponent
// }
// , {
//   path: 'register',
//   component: RegisterComponent
// }
// ];
/////////////////////////////////////////////

 const routes: Routes = [
  {
    path: '',
    redirectTo:'specialEvents',
    pathMatch: 'full'
  },

  
  {
    path: 'specialEvents',
    component: SpecialEventsComponent,
    canActivate:[AuthGuard]
  

  }

  

, {
  path: 'login',
  component: LoginComponent
}
,
{
    path: 'register',
    component: RegisterComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
