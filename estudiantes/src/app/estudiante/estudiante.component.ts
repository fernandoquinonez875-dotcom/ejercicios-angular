import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Estudiante {
  id: number;
  cuenta: string;
  nombre: string;
  carrera: string;
  fechaIngreso: string;
}

@Component({
  selector: 'app-estudiante',
  imports: [FormsModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
  estudiantes: Estudiante[] = [];

  cuenta = '';
  nombre = '';
  carrera = '';
  fechaIngreso = '';

  constructor(private router: Router) {
    if (localStorage.getItem('sesionEstudiantes') !== 'si') {
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('registrosEstudiantes');
    if (datos !== null) {
      this.estudiantes = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionEstudiantes');
    this.router.navigate(['/login']);
  }

  guardar() {
    if (this.cuenta.trim() === '' ||
        this.nombre.trim() === '' ||
        this.carrera.trim() === '' ||
        this.fechaIngreso.trim() === '') {
      alert('Complete todos los campos');
      return;
    }

    let nuevoId = 1;
    for (const estudiante of this.estudiantes) {
      if (estudiante.id >= nuevoId) {
        nuevoId = estudiante.id + 1;
      }
    }

    const nuevoRegistro: Estudiante = {
      id: nuevoId,
      cuenta: this.cuenta.trim(),
      nombre: this.nombre.trim(),
      carrera: this.carrera.trim(),
      fechaIngreso: this.fechaIngreso
    };
    this.estudiantes.push(nuevoRegistro);

    this.guardarEnLocalStorage();
    this.limpiar();
  }

  limpiar() {
    this.cuenta = '';
    this.nombre = '';
    this.carrera = '';
    this.fechaIngreso = '';
  }

  guardarEnLocalStorage() {
    localStorage.setItem('registrosEstudiantes', JSON.stringify(this.estudiantes));
  }
}
