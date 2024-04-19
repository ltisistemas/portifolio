import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PortalComponent } from './components/portal.component';
import { SharedModule } from '../shared/shared.module';
import { PortalRoutingModule } from './portal-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { IconInstagranComponent } from './components/social-media-link/components/svg/instagran.component';
import { SocialMediaLinkComponent } from './components/social-media-link/social-media-link.component';

@NgModule({
  imports: [SharedModule, PortalRoutingModule],
  exports: [],
  declarations: [
    PortalComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    SocialMediaLinkComponent,
    IconInstagranComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortalModule {}
