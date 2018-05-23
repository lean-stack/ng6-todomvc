import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { StoreService } from '../service/store.service.interface';
import { LocalStoreService } from '../service/local-store.service';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ItemComponent ],
      providers: [ { provide: StoreService, useClass: LocalStoreService } ]
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
});
