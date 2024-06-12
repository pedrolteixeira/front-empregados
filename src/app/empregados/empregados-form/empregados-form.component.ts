import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadosService } from '../../services/empregados.service';
import { Empregado } from '../../models/empregado';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empregados-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './empregados-form.component.html',
  styleUrl: './empregados-form.component.css'
})
export class EmpregadosFormComponent implements OnInit {
  empregadosForm!: FormGroup;
  isEdit: boolean = false;
  empregado = new Empregado;
  empregadoId: any;

  constructor(private route: ActivatedRoute, private empregadoService: EmpregadosService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.empregadosForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        cpf: new FormControl('', Validators.required),
        dateOfBirth: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        currentlyEmployed: new FormControl(false),
    });

    this.empregadoId = this.route.snapshot.paramMap.get('id');
    if (this.empregadoId) {
        this.isEdit = true;
        this.empregadoService.getEmpregadoById(this.empregadoId).then((data) => {
            this.empregado = data;
            this.empregadosForm.patchValue(this.empregado);
        });
    }
}

  salvarEmpregado() {
    if (this.empregadosForm.invalid) {
        this.toastr.error('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    if (this.isEdit) {
        this.empregadoService.updateEmpregado(this.empregadoId, this.empregadosForm.value).then(() => {
            this.toastr.success('Empregado atualizado com sucesso!');
            this.router.navigate(['/empregados']);
        });
    } else {
        this.empregadoService.createEmpregado(this.empregadosForm.value).then(() => {
            this.toastr.success('Empregado criado com sucesso!');
            this.router.navigate(['/empregados']);
        });
    }
}

}