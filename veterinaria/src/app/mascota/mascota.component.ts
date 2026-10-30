import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  edad: number;
  propietario: string;
}

@Component({
  selector: 'app-mascota',
  imports: [FormsModule],
  templateUrl: './mascota.component.html',
  styleUrl: './mascota.component.css'
})
export class MascotaComponent {
  mascotas: Mascota[] = [];

  nombre = '';
  especie = '';
  edad: number | null = null;
  propietario = '';

  constructor(private router: Router) {
    if (localStorage.getItem('sesionVeterinaria') !== 'si') {
      this.router.navigate(['/login']);
      return;
    }

    const datos = localStorage.getItem('mascotasVeterinaria');
    if (datos !== null) {
      this.mascotas = JSON.parse(datos);
    }
  }

  cerrarSesion() {
    localStorage.removeItem('sesionVeterinaria');
    this.router.navigate(['/login']);
  }

  guardar() {
    if (this.nombre.trim() === '' ||
        this.especie.trim() === '' ||
        this.edad === null ||
        this.propietario.trim() === '') {
      alert('Complete todos los campos');
      return;
    }

    if (!Number.isInteger(this.edad) || this.edad < 0) {
      alert('Edad (años cumplidos) debe ser un entero mayor o igual que 0');
      return;
    }

    let nuevoId = 1;
    for (const mascota of this.mascotas) {
      if (mascota.id >= nuevoId) {
        nuevoId = mascota.id + 1;
      }
    }

    const nuevoRegistro: Mascota = {
      id: nuevoId,
      nombre: this.nombre.trim(),
      especie: this.especie.trim(),
      edad: this.edad,
      propietario: this.propietario.trim()
    };
    this.mascotas.push(nuevoRegistro);

    this.guardarEnLocalStorage();
    this.limpiar();
  }

  limpiar() {
    this.nombre = '';
    this.especie = '';
    this.edad = null;
    this.propietario = '';
  }

  guardarEnLocalStorage() {
    localStorage.setItem('mascotasVeterinaria', JSON.stringify(this.mascotas));
  }
}
