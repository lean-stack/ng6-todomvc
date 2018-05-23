import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { MainComponent } from './main/main.component';
import { ShellComponent } from './shell/shell.component';
import { StoreService } from './service/store.service.interface';
import { LocalStoreService } from './service/local-store.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ItemComponent, ListComponent, InputComponent, ActionbarComponent, MainComponent, ShellComponent],
  providers: [ { provide: StoreService, useClass: LocalStoreService }],
  exports: [ShellComponent]
})
export class TodosModule { }
