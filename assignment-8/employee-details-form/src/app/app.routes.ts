import { Routes } from '@angular/router';
import { EmployeeDashboard } from './components/employee-dashboard/employee-dashboard';
import { EmployeeTable } from './components/employee-table/employee-table';
import { EmployeeForm } from './components/employee-form/employee-form';
import { MyComponent } from './components/my-component/my-component';
import { UserGreeting } from './components/user-greeting/user-greeting';
import { Root } from './components/root/root';
import { ReactiveForm } from './components/reactive-form/reactive-form';
import { SearchWeather } from './search-weather/search-weather';

export const routes: Routes = [
  {
    path: '',
    component: Root,
  },
  {
    path: 'Dashboard',
    component: EmployeeDashboard,
  },
  {
    path: 'Dashboard/view-employees',
    component: EmployeeTable,
  },
  {
    path: 'Dashboard/Add-Employee',
    component: EmployeeForm,
  },
  {
    path: 'welcome',
    component: MyComponent,
  },
  {
    path: 'greeting',
    component: UserGreeting,
  },
  {
    path: 'root',
    component: Root,
    children: [
      {
        path: 'reactive-form',
        component: ReactiveForm,
      },
      {
        path: 'search-weather',
        component: SearchWeather,
      },
    ],
  },
];
