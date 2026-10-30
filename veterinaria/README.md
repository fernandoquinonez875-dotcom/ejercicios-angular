# Registro de mascotas

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Actualizar registros.

## Ejecutar

Desde esta carpeta:

```powershell
npm install
npm start
```

Abra http://localhost:4200. Comprobación de compilación: `npm run build`.

## Acceso de práctica

Usuario: `veterinario`. Contraseña: `mascotas123`.
Login: `/login`. CRUD: `/mascota`.
Es una simulación educativa en el navegador. Utilice datos ficticios.

## Organización y persistencia

App únicamente contiene RouterOutlet. LoginComponent valida el acceso.
MascotaComponent revisa la marca `sesionVeterinaria` al entrar.
El arreglo se recupera de `mascotasVeterinaria` usando JSON.parse.
Cada cambio convierte el arreglo a texto con JSON.stringify y lo guarda con localStorage.setItem.
El ID se obtiene recorriendo los registros y sumando uno al mayor; no se permite editarlo.
Editar copia valores al formulario; Actualizar modifica la fila del mismo índice conservando ID y total. Cancelar limpia el formulario sin escribir en el arreglo.

Cerrar sesión elimina únicamente `sesionVeterinaria`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Después de iniciar sesión, ejecute en la consola del navegador:

```javascript
if (localStorage.getItem('mascotasVeterinaria') === null) {
  localStorage.setItem('mascotasVeterinaria', JSON.stringify([
  {
    "id": 1,
    "nombre": "Luna",
    "especie": "Gato",
    "edad": 0,
    "propietario": "Ana Ejemplo"
  },
  {
    "id": 2,
    "nombre": "Rocky",
    "especie": "Perro",
    "edad": 3,
    "propietario": "Luis Ejemplo"
  }
]));
}
location.reload();
```

El bloque solo prepara ejemplos si la clave no existe; conserva los datos existentes.
El tercer registro para la captura se agrega con el formulario.

## Reglas específicas

Aceptar edad 0 y nombres repetidos con IDs distintos; rechazar edades negativas o decimales; editar un propietario sin modificar otra mascota.

## Etapas y publicación

Proyecto generado con `ng new veterinaria --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login veterinaria (implementado)
2. Mostrar registros veterinaria (implementado)
3. Crear registros veterinaria (implementado)
4. Actualizar registros veterinaria (implementado)
5. Eliminar registros veterinaria

```powershell
git add veterinaria/
git commit -m "Actualizar registros veterinaria"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
