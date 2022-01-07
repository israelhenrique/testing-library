import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SimpleComponent} from './simple.component';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";
import {render, screen} from "@testing-library/angular";
import userEvent from "@testing-library/user-event";


@Component({
    template: `
        <simple-component [data]="data">
        </simple-component>`,
})
class TestHostComponent {
    data = 'Teste';
}

xdescribe('100% de coverage', () => {
    let component: SimpleComponent
    let fixture: ComponentFixture<SimpleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SimpleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});

describe('Sem testar caso de uso', () => {
    let component: SimpleComponent
    let fixture: ComponentFixture<SimpleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SimpleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('deve mostrar / esconder o dado ao clicar', async () => {
        component.data = 'Teste'
        const nativeElement = fixture.nativeElement;
        expect(nativeElement.textContent).not.toContain('Teste');
        component.show();
        fixture.detectChanges();
        expect(nativeElement.textContent).toContain('Teste');
    });

});

xdescribe('Testando caso de uso', () => {
    let component: SimpleComponent
    let fixture: ComponentFixture<SimpleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SimpleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SimpleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('deve mostrar / esconder o dado ao clicar', async () => {
        component.data = 'Teste'
        const nativeElement = fixture.nativeElement;
        const debugElement = fixture.debugElement;

        expect(nativeElement.textContent).not.toContain('Teste');

        const button = debugElement.query(By.css('button'));

        button.nativeElement.click()

        fixture.detectChanges();
        expect(nativeElement.textContent).toContain('Teste');
    });

});

xdescribe('Testando caso de uso com Test Host', () => {
    let testHostComponent: TestHostComponent
    let testHostFixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TestHostComponent, SimpleComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        testHostFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostFixture.componentInstance;
        testHostFixture.detectChanges();
    });

    it('should create', () => {
        expect(testHostFixture).toBeTruthy();
    });

    it('deve renderizar a string passada no input', async () => {
        const textContent = testHostFixture.nativeElement.textContent;
        expect(textContent).toContain('Teste');
    })

});

xdescribe('Teste com testing library', () => {

    it('deve mostrar / esconder o dado ao clicar', async () => {
        await render(SimpleComponent, {
            componentProperties: {
                data: 'Test',
            }
        });

        expect(screen.queryByText('Test')).toBeNull();
        const button = screen.getByRole('button')

        userEvent.click(button);
        expect(screen.getByText('Test')).toBeTruthy();

    });

});
