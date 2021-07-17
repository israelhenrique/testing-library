import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular'

import { Component1Component } from './component1.component';

describe('Component1Component', () => {
  let component: Component1Component;
  let fixture: ComponentFixture<Component1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showContent sets the openIndex prop properly', () => {
    expect(component.openIndex).toEqual(-1);
    component.showContent(0);
    expect(component.openIndex).toEqual(0);
  });

  // it('should render counter', async () => {
  //   await render(Component1Component, {
  //     componentProperties: {
  //       items: [
  //         {title: 'item1', content: 'conteudo1'},
  //         {title: 'item2', content: 'conteudo2'}
  //       ]
  //     }
  //   });
  //
  //   fireEvent.click(screen.getByText('Show item1 content'));
  //   expect(screen.getByText('conteudo1'));
  //
  // })

});
