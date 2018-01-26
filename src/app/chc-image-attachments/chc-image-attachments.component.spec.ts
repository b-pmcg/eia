import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcImageAttachmentsComponent } from './chc-image-attachments.component';

describe('ChcImageAttachmentsComponent', () => {
  let component: ChcImageAttachmentsComponent;
  let fixture: ComponentFixture<ChcImageAttachmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcImageAttachmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcImageAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
