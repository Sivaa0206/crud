import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MarksComponent } from './marks/marks.component';
import { MarklistComponent } from './marklist/marklist.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'marks',component:MarksComponent},
  {path:'marklist',component:MarklistComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'',redirectTo:'marklist',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   