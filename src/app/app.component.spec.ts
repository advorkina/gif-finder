import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  describe('UNIT TEST', () => {
    it(`should save the search term when search term changed`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      spyOn(app, 'searchFotGif');

      app.onSearchTermChanged({ target: { value: 'hello' } });

      expect(app.searchTerm).toEqual('hello');
    });
  });

  describe('SHALLOW UNIT TEST', () => {
    it(`should save the search term when search term changed event triggered`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      spyOn(app, 'searchFotGif');

      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('keyup', { target: { value: 'hello' } });
      fixture.detectChanges();

      expect(app.searchTerm).toEqual('hello');
    });

    it(`should display the search term`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      app.searchTerm = 'hello';
      fixture.detectChanges();

      const rendered = fixture.debugElement.nativeElement;
      expect(rendered.querySelector('label').textContent).toContain('hello');
    });
  });

  describe('INTEGRATION TEST', () => {
    it(`should display the search term from the input`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      spyOn(app, 'searchFotGif');

      const input = fixture.debugElement.query(By.css('input'));
      input.triggerEventHandler('keyup', { target: { value: 'hello' } });
      fixture.detectChanges();

      const rendered = fixture.debugElement.nativeElement;
      expect(rendered.querySelector('label').textContent).toContain('hello');
    });
  });

});
