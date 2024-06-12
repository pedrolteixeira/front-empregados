import { Component } from '@angular/core';
import { EmpregadosService } from '../../services/empregados.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Empregado } from '../../models/empregado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empregados-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './empregados-list.component.html',
  styleUrl: './empregados-list.component.css'
})
export class EmpregadosListComponent {
  public empregados: Empregado[] = [];
  public empregadosFilter: Empregado[] = [];
  public selectedEmpregadoId: string = '';

  constructor(
    public empregadosService: EmpregadosService,
    public router: Router
  ) { }

  ngOnInit() {
    this.carregarEmpregados();
  }

  carregarEmpregados() {
    this.empregadosService.getEmpregados().then((empregados) => {
      this.empregados = empregados;
      this.filtrarEmpregados();
    });
  }

  filtrarEmpregados() {
    if (this.selectedEmpregadoId == '') {
      this.empregadosFilter = this.empregados;
    } else {
      this.empregadosService.getEmpregadoById(this.selectedEmpregadoId).then((empregado) => {
        this.empregadosFilter = empregado ? [empregado] : [];
      });
    }
  }
}
