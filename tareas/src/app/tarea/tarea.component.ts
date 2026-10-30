import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  fechaLimite: string;
  estado: string;
}

@Component({
  selector: 'app-tarea',
  imports: [FormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  tareas: Tarea[] = [];

  titulo = '';
  descripcion = '';
  fechaLimite = '';
  estado = 'Pendiente';

  constructor(private router: Router) {
    if (localStorage.getItem('sesionTareas') !== 'si') {
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('agendaTareas');
    if (datos !== null) {
      this.tareas = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionTareas');
    this.router.navigate(['/login']);
  }

  guardar() {
    if (this.titulo.trim() === '' ||
        this.descripcion.trim() === '' ||
        this.fechaLimite.trim() === '' ||
        this.estado.trim() === '') {
      alert('Complete todos los campos');
      return;
    }

    if (this.estado !== 'Pendiente' && this.estado !== 'Completada') {
      alert('Seleccione un estado válido');
      return;
    }

    let nuevoId = 1;
    for (const tarea of this.tareas) {
      if (tarea.id >= nuevoId) {
        nuevoId = tarea.id + 1;
      }
    }

    const nuevoRegistro: Tarea = {
      id: nuevoId,
      titulo: this.titulo.trim(),
      descripcion: this.descripcion.trim(),
      fechaLimite: this.fechaLimite,
      estado: this.estado
    };
    this.tareas.push(nuevoRegistro);

    this.guardarEnLocalStorage();
    this.limpiar();
  }

  limpiar() {
    this.titulo = '';
    this.descripcion = '';
    this.fechaLimite = '';
    this.estado = 'Pendiente';
  }

  guardarEnLocalStorage() {
    localStorage.setItem('agendaTareas', JSON.stringify(this.tareas));
  }
}
