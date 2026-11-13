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

- HTML5 y CSS3.
- TypeScript y JavaScript ES6 Modules.
- Programación orientada a objetos.
- Manipulación del DOM y eventos.
- Flexbox y CSS Grid.
- TypeScript Compiler (tsc).

## Estructura del proyecto

- `src/`: código fuente TypeScript.
- `src/components/`: clases y componentes del proyecto.
- `src/utils/`: configuración y utilidades.
- `public/`: archivos necesarios para ejecutar la página.
- `public/index.html`: documento HTML principal.
- `public/blocks/`: estilos CSS por componentes.
- `public/pages/`: estilos principales.
- `public/images/`: imágenes.
- `public/vendor/`: fuentes y estilos externos.
- `public/components/` y `public/utils/`: JavaScript generado por TypeScript.

## Compilación

Para compilar los archivos TypeScript, ejecuta:

```bash
npm run build
```

## Ejecución local

Para iniciar el servidor local, ejecuta:

```bash
python3 -m http.server 8000 --directory public
```

Después abre `http://localhost:8000` en tu navegador.

## Autor

Carlos A. Vazquez Tohorton
