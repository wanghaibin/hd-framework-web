import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    AuthModule
  ]
})
export class RouterModule { }
