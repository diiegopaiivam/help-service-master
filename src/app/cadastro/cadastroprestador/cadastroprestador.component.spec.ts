import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroprestadorComponent } from './cadastroprestador.component';

describe('CadastroprestadorComponent', () => {
  let component: CadastroprestadorComponent;
  let fixture: ComponentFixture<CadastroprestadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroprestadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroprestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
