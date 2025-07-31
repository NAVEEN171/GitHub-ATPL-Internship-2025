import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../../components/task-6/home/home';

import { UserModuleRoutingModule } from './user-module-routing-module';
import { UserDetails } from '../../components/task-5/user-details/user-details';

@NgModule({
  declarations: [UserDetails],
  imports: [CommonModule, UserModuleRoutingModule],
})
export class UserModuleModule {}
