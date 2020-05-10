import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {SubjectComponent} from './subject/subject.component';
import {GroupComponent} from './group/group.component';
import {StudentsComponent} from './students/students.component';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminPanelComponent,
    data: {
      title: 'AdminPanel',
      expectedRole: 'admin'
    }
  },
  {
    path: 'subjects',
    canActivate: [AuthGuard],
    component: SubjectComponent,
    data: {title: 'Subject'}
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    component: GroupComponent,
    data: {title: 'Groups'}
  },
  {
    path: 'group',
    canActivate: [AuthGuard],
    component: StudentsComponent,
    data: {title: 'Group'}
  },
  {
    path: 'signin',
    component: LoginComponent,
    data: {title: 'Login'}
  },
  {
    path: 'signup',
    component: RegisterComponent,
    data: {title: 'Register'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

