import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PortalComponent } from './components/portal.component';
import { SharedModule } from '../shared/shared.module';
import { PortalRoutingModule } from './portal-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [SharedModule, PortalRoutingModule],
  exports: [],
  declarations: [PortalComponent, HeaderComponent, MainComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalModule {}
