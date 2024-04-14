import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './components/portal.component';

export const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class PortalRoutingModule {}
