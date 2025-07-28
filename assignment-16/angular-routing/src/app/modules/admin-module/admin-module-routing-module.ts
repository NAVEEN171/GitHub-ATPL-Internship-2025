import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminList } from '../../components/task-5/admin-list/admin-list';

const routes: Routes = [
  {
    path: '',
    component: AdminList,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModuleRoutingModule {}
