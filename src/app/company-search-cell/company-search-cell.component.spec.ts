import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchCellComponent } from './company-search-cell.component';

describe('CompanySearchCellComponent', () => {
  let component: CompanySearchCellComponent;
  let fixture: ComponentFixture<CompanySearchCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
