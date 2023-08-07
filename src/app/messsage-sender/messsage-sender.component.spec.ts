import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssageSenderComponent } from './messsage-sender.component';

describe('MesssageSenderComponent', () => {
  let component: MesssageSenderComponent;
  let fixture: ComponentFixture<MesssageSenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesssageSenderComponent]
    });
    fixture = TestBed.createComponent(MesssageSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
