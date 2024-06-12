import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmpregadosService {
  apiUrl = environment.apiUrl;
  headers = {
    'Content-Type': 'application/json',
    'access_token' : environment.apiKey
  };

  constructor() { }

  async getEmpregados() {
    const response = await fetch(this.apiUrl + 'list', {
      headers: this.headers
    });
    return await response.json();
  }

  async getEmpregadoById(id: string) {
    const response = await fetch(this.apiUrl + 'list?id=' + id, {
      headers: this.headers
    });
    return await response.json();
  }

  async createEmpregado(empregado: any) {
    const response = await fetch(this.apiUrl + 'create', {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(empregado)
    });
    return await response.json();
  }

  async updateEmpregado(id: string, empregado: any) {
    const response = await fetch(this.apiUrl + 'update?id=' + id, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(empregado)
    });
    return await response.json();
  }
}
