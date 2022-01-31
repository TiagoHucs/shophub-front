import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { RattingViewComponent } from './ratting-view/ratting-view.component';
import { ColorChoseComponent } from './color-chose/color-chose.component';
import { SizeChoseComponent } from './size-chose/size-chose.component';
import { ImgChoseComponent } from './img-chose/img-chose.component';



@NgModule({
  declarations: [
    PageTitleComponent,
    RattingViewComponent,
    ColorChoseComponent,
    SizeChoseComponent,
    ImgChoseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    RattingViewComponent,
    ColorChoseComponent,
    SizeChoseComponent,
    ImgChoseComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ]
})
export class UtilModule { }
