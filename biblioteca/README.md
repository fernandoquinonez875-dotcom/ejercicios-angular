# Biblioteca

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Eliminar registros.

## Ejecutar

Desde esta carpeta:

```powershell
npm install
npm start
```

Abra http://localhost:4200. Comprobación de compilación: `npm run build`.

## Acceso de práctica

Usuario: `bibliotecario`. Contraseña: `biblio123`.
Login: `/login`. CRUD: `/libro`.
Es una simulación educativa en el navegador. Utilice datos ficticios.

## Organización y persistencia

App únicamente contiene RouterOutlet. LoginComponent valida el acceso.
LibroComponent revisa la marca `sesionBiblioteca` al entrar.
El arreglo se recupera de `librosBiblioteca` usando JSON.parse.
Cada cambio convierte el arreglo a texto con JSON.stringify y lo guarda con localStorage.setItem.
El ID se obtiene recorriendo los registros y sumando uno al mayor; no se permite editarlo.
Editar copia valores al formulario; Actualizar modifica la fila del mismo índice conservando ID y total. Cancelar limpia el formulario sin escribir en el arreglo.
Eliminar solicita confirmación, quita la fila con splice y persiste el arreglo. No se insertan ejemplos automáticamente al iniciar, por lo que los eliminados no reaparecen.
Cerrar sesión elimina únicamente `sesionBiblioteca`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Después de iniciar sesión, ejecute en la consola del navegador:

```javascript
if (localStorage.getItem('librosBiblioteca') === null) {
  localStorage.setItem('librosBiblioteca', JSON.stringify([
  {
    "id": 1,
    "codigo": "0001",
    "titulo": "Introducción a la Web",
    "autor": "Ana Ejemplo",
    "anio": 2022
  },
  {
    "id": 2,
    "codigo": "0002",
    "titulo": "Fundamentos de HTML",
    "autor": "Luis Ejemplo",
    "anio": 2024
  }
]));
}
location.reload();
```

El bloque solo prepara ejemplos si la clave no existe; conserva los datos existentes.
El tercer registro para la captura se agrega con el formulario.

## Reglas específicas

Conservar el código 0003; rechazar años decimales, menores de 1000 o mayores de 9999; actualizar el título sin cambiar el ID ni el total.

## Etapas y publicación

Proyecto generado con `ng new biblioteca --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login biblioteca (implementado)
2. Mostrar registros biblioteca (implementado)
3. Crear registros biblioteca (implementado)
4. Actualizar registros biblioteca (implementado)
5. Eliminar registros biblioteca (implementado)

```powershell
git add biblioteca/
git commit -m "Eliminar registros biblioteca"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.

## Comprobaciones realizadas en navegador

Login incorrecto y correcto; acceso sin sesión; listado vacío; creación de tres registros;
campos vacíos y espacios; reglas específicas; actualización conservando ID y total;
cancelación de edición; cancelación y confirmación de eliminación; recarga y persistencia;
eliminación de todas las filas y nueva creación; cierre de sesión conservando registros y claves ajenas.

Las capturas y el informe detallado están en la carpeta entrega-angular junto a la copia de trabajo.
