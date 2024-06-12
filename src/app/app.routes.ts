import { Routes } from '@angular/router';
import { EmpregadosListComponent } from './empregados/empregados-list/empregados-list.component';
import { EmpregadosFormComponent } from './empregados/empregados-form/empregados-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'empregados', pathMatch: 'full' },
    { path: 'empregados', component: EmpregadosListComponent },
    { path: 'form-empregados/:id', component: EmpregadosFormComponent },
    { path: 'form-empregados', component: EmpregadosFormComponent }
];