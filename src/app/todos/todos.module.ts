import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { ActionbarComponent } from './actionbar/actionbar.component';
import { MainComponent } from './main/main.component';
import { ShellComponent } from './shell/shell.component';
import { StoreService } from './service/store.service.interface';
import { LocalStoreService } from './service/local-store.service';
import { StateService } from './service/state.service';
import { FocusOnDirective } from './directive/focus-on.directive';
import { ClassDirective } from './directive/class.directive';
import { HttpStoreService } from './service/http-store.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule, HttpModule],
  declarations: [
    ItemComponent,
    ListComponent,
    InputComponent,
    ActionbarComponent,
    MainComponent,
    ShellComponent,
    FocusOnDirective,
    ClassDirective
  ],
  providers: [
    StateService,
    { provide: StoreService, useClass: HttpStoreService }
  ],
  exports: [ShellComponent]
})
export class TodosModule {}
