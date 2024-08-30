import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { MensajeUsuarioComponent } from '../mensaje-usuario/mensaje-usuario.component';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeUsuarioComponent],
  template: `
    <div class="border border-primary p-3">
      <h2>Sala de Chat</h2>
      <h3>Conversación</h3>
      <div class="row">
        <div class="col-6">
          <app-mensaje-usuario
            [usuario]="'Pepe'"
            (mensajeEnviado)="agregarMensaje($event)"
          >
          </app-mensaje-usuario>
        </div>
        <div class="col-6">
          <app-mensaje-usuario
            [usuario]="'María'"
            (mensajeEnviado)="agregarMensaje($event)"
          >
          </app-mensaje-usuario>
        </div>
      </div>
      @for(mensaje of mensajes; track mensaje.usuario){

      <div class="mt-3">
        <strong>{{ mensaje.usuario }}:</strong> {{ mensaje.texto }}
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class SalaComponent {
  mensajes: Mensaje[] = [];

  agregarMensaje(mensaje: Mensaje) {
    this.mensajes.push(mensaje);
  }
}
