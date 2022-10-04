import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCadastroComponent } from './item-cadastro.component';

describe('ItemCadastroComponent', () => {
  let component: ItemCadastroComponent;
  let fixture: ComponentFixture<ItemCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
