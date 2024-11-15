
# Clave Fuerte

Este proyecto implementa una validación exhaustiva para contraseñas seguras, asegurando que cumplan con varios criterios de seguridad como longitud mínima, presencia de caracteres especiales, y ausencia de palabras comunes. Es ideal para sistemas que requieren una verificación de contraseña robusta antes de permitir su uso.

---

## Tabla de Contenidos

- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Descripción del Programa](#descripción-del-programa)
- [Documentación de Código](#documentación-de-código)
  - [Interfaces](#interfaces)
  - [Funciones Principales](#funciones-principales)
- [Pruebas](#pruebas)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash
npm install
```

---


## Ejecución

Para ejecutar el proyecto en un entorno de desarrollo, usa el siguiente comando:
```bash
npm run dev
```
---

## Estructura de Carpetas

9-2-Clave-fuerte/
├── node_modules/
├── public/
├── src/
│   └── validar-clave/
│       ├── index.ts
│       ├── models.ts
│       ├── validar-clave.helpers.spec.ts
│       ├── validar-clave.helpers.ts
│       ├── validar-clave.spec.ts
│       └── validar-clave.ts
├── main.ts
├── style.css
├── typescript.svg
├── vite-env.d.ts
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── readMe.md
└── tsconfig.json

---

## Descripción del Programa

Este programa evalúa una contraseña proporcionada por el usuario y verifica que cumpla con las condiciones de seguridad requeridas. La función principal validarClave se encarga de realizar estas validaciones, devolviendo si la clave es válida o el tipo de error encontrado. Las validaciones incluyen:

La clave debe contener mayúsculas y minúsculas.
La clave debe contener números.
La clave debe contener caracteres especiales (@, #, +, _, etc.).
La clave debe tener una longitud mínima de 8 caracteres.
La clave no debe incluir el nombre de usuario.
La clave no debe contener palabras comunes (usando un array de contraseñas comunes).

---

## Documentación de Código

### Interfaces

`ValidacionClave`
Representa el resultado de la validación de la clave. Incluye un valor booleano esValida que indica si la clave es válida y un mensaje error opcional en caso de que la validación falle.
```typescript
interface ValidacionClave {
  esValida: boolean;
  error?: string;
}
```

### Funciones Principales

`validarClave`
Representa el resultado de la validación de la clave. Incluye un valor booleano esValida que indica si la clave es válida y un mensaje error opcional en caso de que la validación falle.

```typescript
export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // ...
};
```

Realiza todas las validaciones en una clave. Devuelve un objeto ValidacionClave que indica si la clave es segura o el error encontrado en caso de no serlo.

- **Parámetros**
nombreUsuario - El nombre de usuario para verificar que no esté contenido en la clave.
clave - La clave a validar.
commonPasswords - Array de palabras comunes a evitar en la clave.

- **Retorno**
Devuelve un objeto ValidacionClave con esValida: true si la clave cumple todas las validaciones o esValida: false y el error correspondiente si alguna validación falla.

- **Ejemplo de Uso**
```typescript
const nombreUsuario = "LauraLP";
const clave = "as12ll!auk";
const commonPasswords = ["password", "123456", "qwerty"];

const resultado = validarClave(nombreUsuario, clave, commonPasswords);
console.log(resultado); // { esValida: true }
```

---

## Pruebas

Las pruebas están implementadas en el archivo validar-clave.spec.ts y cubren los siguientes aspectos:

Validación de Parámetros: Se asegura de que validarClave maneje correctamente los casos en los que los parámetros sean undefined, null o vacíos.
Casos de Validación de Clave: Verifica que la clave cumpla con las validaciones de mayúsculas y minúsculas, números, caracteres especiales, longitud mínima, ausencia del nombre de usuario, y que no contenga palabras comunes.
Caso de Éxito: Confirma que la función devuelve esValida: true cuando la clave cumple con todos los requisitos.

Ejecuta las pruebas con el siguiente comando:

```bash
npm run test
```

---

## Tecnologías Utilizadas

- TypeScript - Para el tipado estático y mejoras de productividad en el desarrollo.
- Jest - Para la implementación de pruebas unitarias.
- Vite - Como entorno de desarrollo rápido y eficiente.
