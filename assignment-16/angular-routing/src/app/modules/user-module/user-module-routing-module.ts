import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetails } from '../../components/task-5/user-details/user-details';
import { Home } from '../../components/task-6/home/home';

const routes: Routes = [
  {
    path: '',
    component: UserDetails,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserModuleRoutingModule {}
