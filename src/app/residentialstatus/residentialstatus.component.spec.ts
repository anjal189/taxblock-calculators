import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialstatusComponent } from './residentialstatus.component';

describe('ResidentialstatusComponent', () => {
  let component: ResidentialstatusComponent;
  let fixture: ComponentFixture<ResidentialstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
