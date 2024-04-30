import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleaccessmappingComponent } from './roleaccessmapping.component';

describe('RoleaccessmappingComponent', () => {
  let component: RoleaccessmappingComponent;
  let fixture: ComponentFixture<RoleaccessmappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleaccessmappingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleaccessmappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
