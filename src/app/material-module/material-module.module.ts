import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

const ModuleComponent = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [ModuleComponent],
  exports: [ModuleComponent]
})
export class MaterialModuleModule { }
