import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfunctionsComponent } from './userfunctions.component';

describe('UserfunctionsComponent', () => {
  let component: UserfunctionsComponent;
  let fixture: ComponentFixture<UserfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserfunctionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
