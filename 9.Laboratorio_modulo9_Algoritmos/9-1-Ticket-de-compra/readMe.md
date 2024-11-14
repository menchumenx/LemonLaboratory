

# Ticket de Compra

Este proyecto es una aplicación de cálculo de tickets de compra, desarrollada en TypeScript y empaquetada con Vite. La aplicación permite generar el desglose de precios con y sin IVA para cada producto en el ticket, mostrando el total de la compra y el desglose por tipo de IVA.

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

Este proyecto está organizado en las siguientes carpetas y archivos:

```plaintext
9-1-Ticket-de-compra/
├── node_modules/                    # Dependencias del proyecto
├── public/                          # Archivos estáticos públicos
├── src/
│   ├── ticketCompra/
│   │   ├── index.ts                 # Punto de entrada para el módulo `ticketCompra`
│   │   ├── models.ts                # Definición de interfaces y tipos de datos
│   │   ├── ticketCompra.helpers.ts  # Funciones auxiliares para el cálculo del ticket
│   │   ├── ticketCompra.helpers.spec.ts # Pruebas unitarias para `ticketCompra.helpers.ts`
│   │   ├── ticketCompra.spec.ts     # Pruebas unitarias para `ticketCompra.ts`
│   │   └── ticketCompra.ts          # Función principal de cálculo de tickets
│   ├── main.ts                      # Archivo principal de la aplicación
│   ├── style.css                    # Archivo de estilos CSS
│   ├── typescript.svg               # Icono o imagen de ejemplo
│   └── vite-env.d.ts                # Tipos de ambiente para Vite y TypeScript
├── .gitignore                       # Archivos y carpetas ignorados por Git
├── index.html                       # Archivo HTML principal de la aplicación
├── package-lock.json                # Control de versiones de dependencias
├── package.json                     # Configuración del proyecto y dependencias
├── readMe.md                        # Documentación del proyecto
└── tsconfig.json                    # Configuración de TypeScript
```

- **ticketCompra/:** Carpeta principal del módulo de cálculo del ticket de compra.

- index.ts: Punto de entrada que exporta funcionalidades del módulo ticketCompra.
- models.ts: Define las interfaces y tipos de datos utilizados en el cálculo del ticket (por ejemplo, LineaTicket, ResultadoTotalTicket).
- ticketCompra.helpers.ts: Contiene funciones auxiliares para cálculos específicos en el ticket de compra (como calcularTotalPorTipoIva).
- ticketCompra.helpers.spec.ts: Archivo de pruebas unitarias para las funciones en ticketCompra.helpers.ts.
- ticketCompra.spec.ts: Archivo de pruebas unitarias para las funciones en ticketCompra.ts, validando el cálculo total del ticket.

- **ticketCompra.ts:** Contiene la función principal para calcular el ticket de compra completo, incluyendo totales y desglose de IVA.

- **main.ts:** Archivo principal que inicializa la aplicación y llama a las funciones de cálculo de ticket.

- **vite-env.d.ts:** Archivo de definición de tipos de ambiente para Vite y TypeScript, útil para configurar el entorno de desarrollo.

- **.gitignore:** Define los archivos y carpetas que Git debe ignorar, como node_modules/ y archivos de entorno.

- **package-lock.json y package.json:** Administran las dependencias del proyecto y definen scripts útiles, como npm run dev para desarrollo y npm run build para producción.

- **readMe.md:** Documentación general del proyecto que describe la funcionalidad, instalación y uso.

- **tsconfig.json:** Configuración de TypeScript para el proyecto, donde se definen opciones de compilación y restricciones de tipo.

---

## Descripción del Programa
En este laboratorio, vamos a hacer un programa que calcule el precio de un ticket de compra.

El ticket de compra tendrá una serie de líneas, cada una de ellas representando un producto y una cantidad. Cada producto tendrá un nombre, un precio y un tipo de IVA.

## Tipos de IVA
A continuación se muestran los diferentes tipos de IVA que vamos a manejar en el programa:

| Tipo de IVA        | Porcentaje | Bienes y servicios que graba                                                                                   |
|--------------------|------------|-----------------------------------------------------------------------------------------------------------------|
| **General**        | 21%        | Aplica a la mayoría de productos y servicios: electrónica, ropa, automóviles, mobiliario, etc.                 |
| **Reducido**       | 10%        | Aplica a cultura, alimentación y transporte.                                                                   |
| **Superreducido A** | 5%         | Nuevo tipo de IVA desde el 01/01/2023, aplicable a aceites de oliva y de semillas, y pastas alimenticias.      |
| **Superreducido B** | 4%         | Aplica a alimentación esencial, libros y medicamentos.                                                         |
| **Superreducido C** | 0%         | Nuevo tipo de IVA desde el 01/01/2023, aplicable a pan común, harina panificable, leche, queso, huevos, frutas, verduras, hortalizas, legumbres, tubérculos y cereales. |
| **Sin IVA**        | 0%         | Aplica a servicios de asistencia sanitaria o educación.                                                        |


---


## Documentación de Código

### Interfaces 

#### Tipo de IVA
Los tipos de IVA estarán definidos mediante el tipo `TipoIva`:

```typescript
type TipoIva =
  | "general"
  | "reducido"
  | "superreducidoA"
  | "superreducidoB"
  | "superreducidoC"
  | "sinIva"; 
  ```

#### Producto
Cada producto del ticket está representado por la interfaz `Producto`, que define los atributos básicos de un producto en el sistema:

```typescript
interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}
```

#### LineaTicket
Representa una línea de ticket, que contiene un producto y la cantidad de dicho producto en el ticket.

```typescript
export interface LineaTicket {
    producto: Producto;
    cantidad: number;
}
```

#### ResultadoTotalTicket
Representa los totales de un ticket completo, calculando el total sin IVA, el total con IVA, y el IVA total.

```typescript
export interface ResultadoTotalTicket {
    totalSinIva: number;
    totalConIva: number;
    totalIva: number;
}
```

#### TotalPorTipoIva
Representa el desglose de IVA para un tipo de IVA específico en el ticket.

```typescript
export interface TotalPorTipoIva {
    tipoIva: TipoIva;
    cuantia: number;
}
```
#### TicketFinal
Representa el ticket completo con el detalle de cada línea, los totales, y el desglose de IVA.

```typescript
export interface TicketFinal {
    lineas: ResultadoLineaTicket[];
    total: ResultadoTotalTicket;
    desgloseIva: TotalPorTipoIva[];
}
```

---


### Funciones Principales

`**calculaTicket()**`

Calcula el ticket final a partir de una lista de líneas de ticket.

Esta función toma un array de objetos `LineaTicket`, que representan productos con cantidades específicas, y calcula el ticket completo. Para cada línea, calcula el total con y sin IVA, y genera un desglose del IVA.

**Parámetros**
- **`lineasTicket`** (`LineaTicket[]`): Array de objetos `LineaTicket` que contiene cada producto y su cantidad.

**Retorno**
- **`TicketFinal`**: Objeto `TicketFinal` que contiene el detalle de cada línea del ticket, el total con y sin IVA, y un desglose por tipo de IVA.

**Ejemplo de uso**
```javascript
const lineasTicket = [
    { producto: { nombre: "Camiseta", precio: 20, tipoIva: "general" }, cantidad: 2 },
    { producto: { nombre: "Libro", precio: 15, tipoIva: "reducido" }, cantidad: 1 }
];
const ticket = calculaTicket(lineasTicket);
console.log(ticket);

// Salida esperada:
// {
//   lineas: [ ...detalle de cada línea... ],
//   total: { totalSinIva: 55, totalConIva: 60.5, totalIva: 5.5 },
//   desgloseIva: [ ...desglose de IVA por tipo... ]
// }
```

`**calculaLineaTicket()**`
Calcula los valores de una línea de ticket para un producto y una cantidad específicos.

Este método toma un objeto de tipo Producto y una cantidad, y devuelve un objeto de tipo ResultadoLineaTicket que contiene todos los datos relevantes de la línea de ticket, tales como el nombre del producto, cantidad, precio sin IVA, tipo de IVA, y el precio total con IVA aplicado.

**Validación**
Lanza un error si alguno de los parámetros producto o cantidad es null, undefined o si cantidad es 0.

- Ejemplo de uso

```typescript
const producto = { nombre: "Camiseta", precio: 20, tipoIva: "general" };
const cantidad = 2;
const resultado = calculaLineaTicket(producto, cantidad);

// resultado: {
//   nombre: "Camiseta",
//   cantidad: 2,
//   precionSinIva: 20 * 2 ,
//   tipoIva: "general",
//   precioConIva: 24.2 // (20 * 1.21) * 2
// }
```
**Consideraciones**
Asegúrate de que el tipo de IVA y el cálculo de precioConIva sean consistentes y correctos, especialmente para productos que no llevan IVA (sinIva), donde el precio total no debería cambiar.

**Parámetros**
- **producto:** Objeto que representa el producto a agregar al ticket, incluyendo nombre, precio y tipo de IVA.
- **cantidad:** Número de unidades del producto en la línea de ticket.
- **Retorno:** Objeto ***ResultadoLineaTicket*** con los valores calculados para la línea de ticket.

**Excepciones**
Lanza un error si producto o cantidad son inválidos (null, undefined o 0).


`**calcularPrecioConIva()**`
Calcula el precio final de un producto con el IVA aplicado según su tipo de IVA.

Este método toma un objeto de tipo Producto y devuelve el precio del producto con el IVA correspondiente ya incluido. El cálculo se basa en el tipo de IVA especificado en el producto, utilizando un mapeo predefinido de tipos de IVA a sus porcentajes (ivaPorcentajes). El resultado se redondea a dos decimales para mayor precisión.

**Validación**
Lanza un error si el parámetro producto es null, undefined, o un objeto vacío.

- Ejemplo de uso
```typescript
const producto = { nombre: "Libro", precio: 15, tipoIva: "reducido" };
const precioFinal = calcularPrecioConIva(producto);

// precioFinal: 16.5 (15 * 1.10)
```
**Consideraciones**
Este método se basa en una constante ivaPorcentajes que debe incluir los tipos de IVA válidos y sus respectivos porcentajes. La función devuelve el precio con IVA redondeado a dos decimales usando toFixed(2), para evitar errores de punto flotante. Asegúrate de que el tipo de IVA en el producto esté bien definido y exista en el mapeo de ivaPorcentajes.

**Parámetros**
- **producto:** Objeto que representa el producto, incluyendo nombre, precio y tipoIva.
- **Retorno:** Número que representa el precio del producto con IVA aplicado, redondeado a dos decimales.

**Excepciones**
Lanza un error si producto es null, undefined o no cumple con los atributos requeridos.


`**calcularTotalPorTipoIva()**`
Calcula el total de IVA acumulado por cada tipo de IVA en una lista de líneas de ticket.

Este método toma un array de objetos `LineaTicket`, cada uno representando un producto y su cantidad, y devuelve un array de objetos `TotalPorTipoIva`, donde cada objeto representa un tipo de IVA y la cuantía total de dicho IVA. La función agrupa los productos por tipo de IVA y acumula la cantidad de cada tipo, generando un desglose del total de IVA por tipo.

**Validación**
Lanza un error si el parámetro `lineasTicket` es null, undefined o un array vacío.

- Ejemplo de uso
```typescript
const lineasTicket = [
    { producto: { nombre: "Camiseta", precio: 20, tipoIva: "general" }, cantidad: 2 },
    { producto: { nombre: "Libro", precio: 15, tipoIva: "reducido" }, cantidad: 1 },
    { producto: { nombre: "Medicamento", precio: 50, tipoIva: "superreducidoB" }, cantidad: 3 }
];
const totalPorTipoIva = calcularTotalPorTipoIva(lineasTicket);

// totalPorTipoIva: [
//     { tipoIva: "general", cuantia: 2 },
//     { tipoIva: "reducido", cuantia: 1 },
//     { tipoIva: "superreducidoB", cuantia: 3 }
// ]
```

**Consideraciones**
Este método asume que cada objeto en lineasTicket tiene un producto con un tipoIva válido. El cálculo de la cuantía por tipo de IVA se basa únicamente en la cantidad de cada línea del ticket, sin considerar el precio del producto. Asegúrate de que el tipo de IVA en cada línea esté bien definido y que lineasTicket no esté vacío o nulo.

**Parámetros**
- **lineasTicket (LineaTicket[]):** Array de objetos LineaTicket que contiene cada producto y su cantidad en el ticket.

**Retorno**
TotalPorTipoIva[]:Array de objetos TotalPorTipoIva, donde cada objeto representa un tipo de IVA y su cuantía total en el ticket.

**Excepciones**
Lanza un error si lineasTicket es null, undefined, o un array vacío.


`**calculaResultadoTotalTicket()**`
Calcula los totales de un ticket completo, incluyendo el total sin IVA, el total con IVA, y la cuantía total de IVA aplicada.

Este método toma un array de objetos `LineaTicket`, que representan productos con cantidades específicas, y calcula los totales acumulados del ticket. Para cada línea, se obtiene el precio con y sin IVA y se acumulan estos valores en `totalSinIva`, `totalConIva` y `totalIva` para representar el total del ticket. Los valores se redondean a dos decimales para mayor precisión.

**Validación**
Lanza un error si el parámetro `lineasTicket` es null, undefined, o un array vacío.

- Ejemplo de uso
```typescript
const lineasTicket = [
    { producto: { nombre: "Camiseta", precio: 20, tipoIva: "general" }, cantidad: 2 },
    { producto: { nombre: "Libro", precio: 15, tipoIva: "reducido" }, cantidad: 1 }
];
const resultadoTotal = calculaResultadoTotalTicket(lineasTicket);

// resultadoTotal: {
//   totalSinIva: 55.00,      // (20 * 2) + 15
//   totalConIva: 66.10,      // (20 * 1.21 * 2) + (15 * 1.10)
//   totalIva: 11.10          // totalConIva - totalSinIva
// }
```

**Consideraciones**
Este método asume que cada objeto en lineasTicket tiene un producto con un `tipoIva` válido y un precio definido. 
La función utiliza el método `calculaLineaTicket()` para obtener los precios con y sin IVA por cada línea. Finalmente, el total de IVA (totalIva) se calcula como la diferencia entre totalConIva y totalSinIva, y cada total se redondea a dos decimales utilizando toFixed(2).

**Parámetros**
- **lineasTicket (LineaTicket[]):**Array de objetos LineaTicket que contiene cada producto y su cantidad en el ticket.

**Retorno**
ResultadoTotalTicket: Objeto con los totales del ticket.
totalSinIva (number):Total acumulado sin IVA.
totalConIva (number):Total acumulado con IVA.
totalIva (number): Cuantía total de IVA aplicada.

**Excepciones**
Lanza un error si lineasTicket es null, undefined, o un array vacío.

---

## Pruebas
Las pruebas unitarias están incluidas en el archivo ***ticketCompra.spec.ts*** y cubren las funcionalidades principales de la aplicación. Para ejecutar las pruebas, usa el siguiente comando:
```bash
npm run dev
```

---

## Tecnologías Utilizadas

- Vite: Para el empaquetado y la configuración del entorno de desarrollo.
- TypeScript: Para agregar tipado estático y mejorar la calidad del código.
- Jest (o la biblioteca de pruebas que estés usando): Para escribir y ejecutar pruebas unitarias.

