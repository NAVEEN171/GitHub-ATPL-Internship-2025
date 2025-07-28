import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModuleRoutingModule } from './admin-module-routing-module';
import { AdminList } from '../../components/task-5/admin-list/admin-list';

@NgModule({
  declarations: [AdminList],
  imports: [CommonModule, AdminModuleRoutingModule],
})
export class AdminModuleModule {}
