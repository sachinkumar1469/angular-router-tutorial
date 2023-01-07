import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard.service";
import { HomeComponent } from "./home/home.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate.guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";


const routes: Routes = [
    { path: 'users', component: UsersComponent },
    {path:'users/:userId/:userName',component:UserComponent},
    {path:'',component:HomeComponent},
    // {path:"servers",component:ServersComponent},
    // {path:'servers/:id/edit',component:EditServerComponent},
    {path:"servers",canActivateChild:[AuthGuard],component:ServersComponent,children:[
      {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]},
    ]},
    {path:'**',redirectTo:'',pathMatch:'full'}
  ];


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})
export class AppRoutes{}