import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarydashboardComponent } from './librarydashboard.component';

describe('LibrarydashboardComponent', () => {
  let component: LibrarydashboardComponent;
  let fixture: ComponentFixture<LibrarydashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarydashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
