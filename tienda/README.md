# Inventario de una tienda

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Actualizar registros.

## Ejecutar

Desde esta carpeta:

```powershell
npm install
npm start
```

Abra http://localhost:4200. Comprobación de compilación: `npm run build`.

## Acceso de práctica

Usuario: `vendedor`. Contraseña: `tienda123`.
Login: `/login`. CRUD: `/producto`.
Es una simulación educativa en el navegador. Utilice datos ficticios.

## Organización y persistencia

App únicamente contiene RouterOutlet. LoginComponent valida el acceso.
ProductoComponent revisa la marca `sesionTienda` al entrar.
El arreglo se recupera de `productosTienda` usando JSON.parse.
Cada cambio convierte el arreglo a texto con JSON.stringify y lo guarda con localStorage.setItem.
El ID se obtiene recorriendo los registros y sumando uno al mayor; no se permite editarlo.
Editar copia valores al formulario; Actualizar modifica la fila del mismo índice conservando ID y total. Cancelar limpia el formulario sin escribir en el arreglo.

Cerrar sesión elimina únicamente `sesionTienda`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Después de iniciar sesión, ejecute en la consola del navegador:

```javascript
if (localStorage.getItem('productosTienda') === null) {
  localStorage.setItem('productosTienda', JSON.stringify([
  {
    "id": 1,
    "codigo": "P001",
    "nombre": "Cuaderno",
    "precio": 35.5,
    "existencias": 20
  },
  {
    "id": 2,
    "codigo": "P002",
    "nombre": "Lápiz",
    "precio": 8,
    "existencias": 0
  }
]));
}
location.reload();
```

El bloque solo prepara ejemplos si la clave no existe; conserva los datos existentes.
El tercer registro para la captura se agrega con el formulario.

## Reglas específicas

Aceptar existencias 0 y precios decimales positivos; rechazar precio negativo o cero y existencias negativas o decimales; actualizar precio y existencias sin agregar filas.

## Etapas y publicación

Proyecto generado con `ng new tienda --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login tienda (implementado)
2. Mostrar registros tienda (implementado)
3. Crear registros tienda (implementado)
4. Actualizar registros tienda (implementado)
5. Eliminar registros tienda

```powershell
git add tienda/
git commit -m "Actualizar registros tienda"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
