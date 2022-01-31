import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { RattingViewComponent } from './ratting-view/ratting-view.component';
import { ImgChoseComponent } from './img-chose/img-chose.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    RattingViewComponent,
    ImgChoseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    RattingViewComponent,
    ImgChoseComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})
export class UtilModule { }
