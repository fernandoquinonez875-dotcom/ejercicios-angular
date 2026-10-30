# Registro de estudiantes

Ejercicio CRUD + login de la guía de Angular. Etapa actual: Mostrar registros.

## Ejecutar

Desde esta carpeta:

```powershell
npm install
npm start
```

Abra http://localhost:4200. Comprobación de compilación: `npm run build`.

## Acceso de práctica

Usuario: `registro`. Contraseña: `alumnos123`.
Login: `/login`. CRUD: `/estudiante`.
Es una simulación educativa en el navegador. Utilice datos ficticios.

## Organización y persistencia

App únicamente contiene RouterOutlet. LoginComponent valida el acceso.
EstudianteComponent revisa la marca `sesionEstudiantes` al entrar.
El arreglo se recupera de `registrosEstudiantes` usando JSON.parse.

Cerrar sesión elimina únicamente `sesionEstudiantes`; conserva los registros y las claves de otras aplicaciones.

## Preparar dos registros en la fase de listado

Después de iniciar sesión, ejecute en la consola del navegador:

```javascript
if (localStorage.getItem('registrosEstudiantes') === null) {
  localStorage.setItem('registrosEstudiantes', JSON.stringify([
  {
    "id": 1,
    "cuenta": "0000001",
    "nombre": "Ana Ejemplo",
    "carrera": "Ingeniería en Sistemas",
    "fechaIngreso": "2026-09-14"
  },
  {
    "id": 2,
    "cuenta": "0000002",
    "nombre": "Luis Ejemplo",
    "carrera": "Administración",
    "fechaIngreso": "2026-09-15"
  }
]));
}
location.reload();
```

El bloque solo prepara ejemplos si la clave no existe; conserva los datos existentes.


## Reglas específicas

Conservar ceros iniciales y fechas YYYY-MM-DD; guardar un cambio de carrera y cancelar otra edición sin perder el primero.

## Etapas y publicación

Proyecto generado con `ng new estudiantes --routing --ssr=false --style=css --skip-tests --skip-git`.
Desde la raíz del repositorio común, use los mensajes exactos en este orden:

1. Login estudiantes (implementado)
2. Mostrar registros estudiantes (implementado)
3. Crear registros estudiantes
4. Actualizar registros estudiantes
5. Eliminar registros estudiantes

```powershell
git add estudiantes/
git commit -m "Mostrar registros estudiantes"
git push
```

Se conserva el .gitignore de Angular. node_modules, dist y .angular no se publican.
