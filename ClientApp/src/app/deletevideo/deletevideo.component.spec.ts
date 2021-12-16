import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletevideoComponent } from './deletevideo.component';

describe('DeletevideoComponent', () => {
  let component: DeletevideoComponent;
  let fixture: ComponentFixture<DeletevideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletevideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
