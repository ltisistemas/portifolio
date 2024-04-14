import { NgModule } from '@angular/core';
import { PortalComponent } from './components/portal.component';
import { SharedModule } from '../shared/shared.module';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  imports: [SharedModule, PortalRoutingModule],
  exports: [],
  declarations: [PortalComponent],
  providers: [],
})
export class PortalModule {}
