import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceHelperModule } from 'service-helper';
import { UiHelperComponent } from './ui-helper.component';



@NgModule({
  declarations: [UiHelperComponent],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    ServiceHelperModule
  ],
  exports: [UiHelperComponent]
})
export class UiHelperModule {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    // Empty
  }

  public resolveLazyloadedComponent(): ComponentFactory<UiHelperComponent> {
    return this.componentFactoryResolver.resolveComponentFactory( UiHelperComponent );
  }
}
