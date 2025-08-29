// Importamos Component para definir un componente standalone
import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // Selector para usar en HTML: <app-header>
  templateUrl: './header.component.html', // HTML del componente
  styleUrls: ['./header.component.css'],  // Estilos CSS
  standalone: true // Componente independiente
})
export class HeaderComponent {}
