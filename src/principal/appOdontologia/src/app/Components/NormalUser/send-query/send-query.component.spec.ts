import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendQueryComponent } from './send-query.component';

describe('SendQueryComponent', () => {
  let component: SendQueryComponent;
  let fixture: ComponentFixture<SendQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
