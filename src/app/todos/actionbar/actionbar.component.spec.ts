import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionbarComponent } from './actionbar.component';
import { State } from '../model/state';
import { StoreService } from '../service/store.service.interface';
import { LocalStoreService } from '../service/local-store.service';

describe('ActionbarComponent', () => {
  let component: ActionbarComponent;
  let fixture: ComponentFixture<ActionbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionbarComponent ],
      providers: [ { provide: StoreService, useClass: LocalStoreService } ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionbarComponent);
    component = fixture.componentInstance;

    // Set Inputs
    component.state = new State();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
