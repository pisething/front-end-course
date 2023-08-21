import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidArticleComponent } from './paid-article.component';

describe('PaidArticleComponent', () => {
  let component: PaidArticleComponent;
  let fixture: ComponentFixture<PaidArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
