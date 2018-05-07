import { NgModule } from '@angular/core';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import { BlankTestContentComponent } from './blank-test-content/blank-test-content.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [SharedModule, BlankPageRoutingModule],
    declarations: [BlankPageComponent, BlankTestContentComponent]
})
export class BlankPageModule {}
