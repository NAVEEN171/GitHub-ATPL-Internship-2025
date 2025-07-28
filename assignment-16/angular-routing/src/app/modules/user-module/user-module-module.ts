import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing-module';
import { UserDetails } from '../../components/task-5/user-details/user-details';

@NgModule({
  declarations: [UserDetails],
  imports: [CommonModule, UserModuleRoutingModule],
})
export class UserModuleModule {}
