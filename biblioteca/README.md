# Biblioteca

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Login.

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
El listado se agrega en la siguiente etapa.

Cerrar sesión elimina únicamente `sesionBiblioteca`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Este bloque se ejecutará en la fase Mostrar registros, antes de construir el formulario de creación:

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


## Reglas específicas

Conservar el código 0003; rechazar años decimales, menores de 1000 o mayores de 9999; actualizar el título sin cambiar el ID ni el total.

## Etapas y publicación

Proyecto generado con `ng new biblioteca --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login biblioteca (implementado)
2. Mostrar registros biblioteca
3. Crear registros biblioteca
4. Actualizar registros biblioteca
5. Eliminar registros biblioteca

```powershell
git add biblioteca/
git commit -m "Login biblioteca"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
