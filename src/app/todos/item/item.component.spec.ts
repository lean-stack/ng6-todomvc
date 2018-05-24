import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../service/store.service.interface';
import { LocalStoreService } from '../service/local-store.service';
import { ClassDirective } from '../directive/class.directive';
import { FocusOnDirective } from '../directive/focus-on.directive';
import { CommandService } from '../service/command.service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  const cmdServiceMock = {
    update: () => {},
    remove: (id) => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ItemComponent, ClassDirective, FocusOnDirective ],
      providers: [ { provide: CommandService, useValue: cmdServiceMock } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    // Set Inputs
    component.todo = { id: 17, title: 'Unit Testing', completed: false };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete an item, when title is empty after edit', () => {

    // Arrange
    spyOn(cmdServiceMock, 'remove');

    // Act
    component.beginEdit();
    component.editText = '';
    fixture.detectChanges();
    component.commitEdit();
    fixture.detectChanges();

    expect(cmdServiceMock.remove).toHaveBeenCalled();
  });
});
