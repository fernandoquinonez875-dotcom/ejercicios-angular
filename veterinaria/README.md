# Registro de mascotas

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Login.

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
El listado se agrega en la siguiente etapa.

Cerrar sesión elimina únicamente `sesionVeterinaria`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Este bloque se ejecutará en la fase Mostrar registros, antes de construir el formulario de creación:

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


## Reglas específicas

Aceptar edad 0 y nombres repetidos con IDs distintos; rechazar edades negativas o decimales; editar un propietario sin modificar otra mascota.

## Etapas y publicación

Proyecto generado con `ng new veterinaria --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login veterinaria (implementado)
2. Mostrar registros veterinaria
3. Crear registros veterinaria
4. Actualizar registros veterinaria
5. Eliminar registros veterinaria

```powershell
git add veterinaria/
git commit -m "Login veterinaria"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
