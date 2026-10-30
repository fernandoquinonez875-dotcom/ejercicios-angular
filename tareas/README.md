# Agenda de tareas

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Crear registros.

## Ejecutar

Desde esta carpeta:

```powershell
npm install
npm start
```

Abra http://localhost:4200. Comprobación de compilación: `npm run build`.

## Acceso de práctica

Usuario: `usuario`. Contraseña: `tareas123`.
Login: `/login`. CRUD: `/tarea`.
Es una simulación educativa en el navegador. Utilice datos ficticios.

## Organización y persistencia

App únicamente contiene RouterOutlet. LoginComponent valida el acceso.
TareaComponent revisa la marca `sesionTareas` al entrar.
El arreglo se recupera de `agendaTareas` usando JSON.parse.
Cada cambio convierte el arreglo a texto con JSON.stringify y lo guarda con localStorage.setItem.
El ID se obtiene recorriendo los registros y sumando uno al mayor; no se permite editarlo.


Cerrar sesión elimina únicamente `sesionTareas`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Después de iniciar sesión, ejecute en la consola del navegador:

```javascript
if (localStorage.getItem('agendaTareas') === null) {
  localStorage.setItem('agendaTareas', JSON.stringify([
  {
    "id": 1,
    "titulo": "Repasar Angular",
    "descripcion": "Practicar ngModel",
    "fechaLimite": "2026-11-02",
    "estado": "Pendiente"
  },
  {
    "id": 2,
    "titulo": "Leer apuntes",
    "descripcion": "Revisar componentes",
    "fechaLimite": "2026-11-03",
    "estado": "Completada"
  }
]));
}
location.reload();
```

El bloque solo prepara ejemplos si la clave no existe; conserva los datos existentes.
El tercer registro para la captura se agrega con el formulario.

## Reglas específicas

Proponer Pendiente al crear; completar mediante Editar y Actualizar; conservar el estado al recargar; cancelar y confirmar eliminación sin que reaparezca al recargar.

## Etapas y publicación

Proyecto generado con `ng new tareas --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login tareas (implementado)
2. Mostrar registros tareas (implementado)
3. Crear registros tareas (implementado)
4. Actualizar registros tareas
5. Eliminar registros tareas

```powershell
git add tareas/
git commit -m "Crear registros tareas"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
