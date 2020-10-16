import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimogenitoComponent } from './meu-primogenito.component';

describe('MeuPrimogenitoComponent', () => {
  let component: MeuPrimogenitoComponent;
  let fixture: ComponentFixture<MeuPrimogenitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimogenitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimogenitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
