import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPagesComponent } from './books-pages.component';

describe('BooksPagesComponent', () => {
  let component: BooksPagesComponent;
  let fixture: ComponentFixture<BooksPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
