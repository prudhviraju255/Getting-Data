import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFaqComponent } from './add-new-faq.component';

describe('AddNewFaqComponent', () => {
  let component: AddNewFaqComponent;
  let fixture: ComponentFixture<AddNewFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
