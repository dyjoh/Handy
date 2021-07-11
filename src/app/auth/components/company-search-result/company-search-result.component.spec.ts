import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchResultComponent } from './company-search-result.component';

describe('CompanySearchResultComponent', () => {
  let component: CompanySearchResultComponent;
  let fixture: ComponentFixture<CompanySearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
