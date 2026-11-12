# Around The U.S. – Proyecto 8

## Descripción del proyecto

Around The U.S. es una página web interactiva que permite explorar diferentes lugares de Estados Unidos mediante tarjetas con imágenes y nombres.

El proyecto utiliza TypeScript y programación orientada a objetos (POO) para organizar el código en clases reutilizables y facilitar su mantenimiento.

## Funcionalidades

- Editar el nombre y la descripción del perfil.
- Mostrar seis tarjetas iniciales.
- Agregar nuevas tarjetas con nombre y URL de imagen.
- Eliminar tarjetas.
- Marcar y desmarcar tarjetas con "Me gusta".
- Abrir imágenes en una ventana modal.
- Abrir y cerrar ventanas modales mediante botones, clic en el fondo y tecla Escape.
- Validar los formularios antes de enviar la información.

## Tecnologías utilizadas

- HTML5.
- CSS3.
- TypeScript.
- JavaScript ES6 Modules.
- Programación orientada a objetos (POO).
- Clases, herencia, encapsulación y métodos.
- Manipulación del DOM.
- Eventos.
- Flexbox y CSS Grid.
- TypeScript Compiler (tsc).

## Estructura del proyecto

- `index.html`: estructura principal de la página.
- `src/`: código fuente escrito en TypeScript.
- `src/components/`: clases Card, Section, Popup, PopupWithForm, PopupWithImage, UserInfo y FormValidator.
- `src/utils/`: configuración de validación.
- `public/`: archivos JavaScript generados por TypeScript.
- `pages/`: archivos CSS principales.
- `blocks/`: estilos organizados por componentes.
- `images/`: imágenes del proyecto.
- `vendor/`: archivos externos de estilos y fuentes.

## Compilación

Para compilar los archivos TypeScript y generar los archivos JavaScript dentro de `public/`, ejecuta:

```bash
npm run build
```

## Autor

Carlos A. Vazquez Tohorton
