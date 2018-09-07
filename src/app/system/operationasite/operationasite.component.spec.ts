import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationasiteComponent } from './operationasite.component';

describe('OperationasiteComponent', () => {
  let component: OperationasiteComponent;
  let fixture: ComponentFixture<OperationasiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationasiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationasiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
