import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LifecycleComponent],
  template: ` <div class="mt-5 container text-center border border-success">
    <h1>Demostración de Ciclos de Vida en Angular</h1>
    <button class="mb-2 btn btn-danger" (click)="mostrarContador = !mostrarContador">
      {{ mostrarContador ? 'Detener Contador' : 'Iniciar Contador' }}
    </button>
    @if (mostrarContador) {
    <div class="container border border-danger">
      <app-lifecycle [data]="data"></app-lifecycle>
    </div>
    }
    <div>
      <button class="btn btn-primary m-2" (click)="changeData()">
        Cambiar Data
      </button>
      <button class="btn btn-primary" (click)="resetData()">
        Resetear Data
      </button>
    </div>
  </div>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  data: string = 'Hola Mundo Angular';
  mostrarContador: boolean = false;

  // Método para cambiar la propiedad data
  changeData() {
    this.data = 'Modificado en ' + new Date().toLocaleTimeString();
  }

  // Método para resetear la propiedad data
  resetData() {
    this.data = 'Hola Mundo Angular';
  }
}
