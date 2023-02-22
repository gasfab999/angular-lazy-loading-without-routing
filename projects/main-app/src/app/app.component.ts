import { ChangeDetectorRef, Compiler, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';

  clicked$ = new Subject<void>();

  @ViewChild('libUiHelperLazy', { read: ViewContainerRef }) libUiHelperLazy: ViewContainerRef;
  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private cdRef: ChangeDetectorRef,
  ) {
    this.clicked$.pipe(first()).subscribe(() => {
      import('../../../../dist/ui-helper').then(({ UiHelperModule }) => {
        // In later angular version use createNgModule(), see https://ng-guru.io/guide/lazy-loading/#dynamic-components
        this.compiler.compileModuleAsync(UiHelperModule).then((moduleFactory) => {
          const moduleReference = moduleFactory.create(this.injector);
          const componentFactory =
            moduleReference.instance.resolveLazyloadedComponent();
          const lazyComp = this.libUiHelperLazy.createComponent(
            componentFactory,
            null,
            moduleReference.injector
          );

          this.cdRef.detectChanges(); // tells change detection to refresh the view
        });
      });
    });
  }

}
