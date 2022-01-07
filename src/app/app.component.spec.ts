import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {SimpleComponent} from "./simple-component/simple.component";
import {MockComponent} from "ng-mocks";
import {By} from "@angular/platform-browser";
import {render, screen} from "@testing-library/angular";

describe('AppComponent', () => {
    let component: AppComponent
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                MockComponent(SimpleComponent),
                // SimpleComponent
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    xit('sets the right value on the child component', () => {
        const element = fixture.debugElement.query(By.directive(SimpleComponent));
        expect(element).toBeTruthy();

        const child: SimpleComponent = element.componentInstance;
        expect(child.data).toBe('Teste')
    });

    it('deve mostrar / esconder o dado ao clicar', async () => {
        const nativeElement = fixture.nativeElement;
        const debugElement = fixture.debugElement;

        expect(nativeElement.textContent).not.toContain('Teste');

        const button = debugElement.query(By.css('button'));

        button.nativeElement.click()

        fixture.detectChanges();
        expect(nativeElement.textContent).toContain('Teste');
    });

});
