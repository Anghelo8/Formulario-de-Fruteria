// Importa la interfaz ApplicationConfig desde Angular Core.
// Esta interfaz se usa para configurar la aplicación Angular.
import { ApplicationConfig } from '@angular/core';

// Importa la función provideRouter que permite configurar las rutas de la app.
import { provideRouter } from '@angular/router';

// Importa las rutas definidas en otro archivo (app.routes.ts).
import { routes } from './app.routes';

// Importa la función importProvidersFrom para incluir módulos que no están directamente en el componente raíz.
import { importProvidersFrom } from '@angular/core';

// Importa FormsModule para usar formularios con ngModel y otras directivas relacionadas.
import { FormsModule } from '@angular/forms';

// Exporta la constante appConfig que define la configuración principal de la aplicación.
export const appConfig: ApplicationConfig = {
  providers: [
    // Configura el sistema de rutas con las rutas definidas.
    provideRouter(routes),

    // Importa FormsModule como proveedor para poder usar formularios en toda la aplicación.
    importProvidersFrom(FormsModule) // 👈 Importar FormsModule aquí
  ]
};
