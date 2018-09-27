import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernamePanelComponent } from './username-panel.component';

describe('UsernamePanelComponent', () => {
  let component: UsernamePanelComponent;
  let fixture: ComponentFixture<UsernamePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernamePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernamePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
