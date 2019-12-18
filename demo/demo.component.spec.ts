import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DemoComponent } from './demo.component';

import {
  GridComponent,
  GridColumnComponent,
  GridStickyScrollComponent,
  GridHeadingComponent
} from '../src/index';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GridTemplateRendererComponent } from '../src/grid-template-renderer.component';

describe('DemoComponent', function () {
  let de: DebugElement;
  let comp: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        DemoComponent,
        GridComponent,
        GridColumnComponent,
        GridHeadingComponent,
        GridTemplateRendererComponent,
        GridStickyScrollComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/demo/i,
      '<h1> should say something about "Demo"');
  });
});
