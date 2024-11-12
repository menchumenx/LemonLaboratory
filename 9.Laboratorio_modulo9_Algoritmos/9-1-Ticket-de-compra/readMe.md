
# Laboratorio 9.1 - Ticket de Compra

## Descripción
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



## Estructura de Datos

### Tipo de IVA
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



## Interfaces

### Producto
Cada producto del ticket está representado por la interfaz `Producto`, que define los atributos básicos de un producto en el sistema:

```typescript
interface Producto {
  nombre: string;
  precio: number;
  tipoIva: TipoIva;
}
```


## Helpers

### calculaLineaTicket()
Calcula los valores de una línea de ticket para un producto y una cantidad específicos.

Este método toma un objeto de tipo Producto y una cantidad, y devuelve un objeto de tipo ResultadoLineaTicket que contiene todos los datos relevantes de la línea de ticket, tales como el nombre del producto, cantidad, precio sin IVA, tipo de IVA, y el precio total con IVA aplicado.

#### Validación
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
#### Consideraciones
Asegúrate de que el tipo de IVA y el cálculo de precioConIva sean consistentes y correctos, especialmente para productos que no llevan IVA (sinIva), donde el precio total no debería cambiar.

#### Parámetros
- **producto:** Objeto que representa el producto a agregar al ticket, incluyendo nombre, precio y tipo de IVA.
- **cantidad:** Número de unidades del producto en la línea de ticket.
- **Retorno:** Objeto ***ResultadoLineaTicket*** con los valores calculados para la línea de ticket.

#### Excepciones
Lanza un error si producto o cantidad son inválidos (null, undefined o 0).


### calcularPrecioConIva()
Calcula el precio final de un producto con el IVA aplicado según su tipo de IVA.

Este método toma un objeto de tipo Producto y devuelve el precio del producto con el IVA correspondiente ya incluido. El cálculo se basa en el tipo de IVA especificado en el producto, utilizando un mapeo predefinido de tipos de IVA a sus porcentajes (ivaPorcentajes). El resultado se redondea a dos decimales para mayor precisión.

#### Validación
Lanza un error si el parámetro producto es null, undefined, o un objeto vacío.

- Ejemplo de uso
```typescript
const producto = { nombre: "Libro", precio: 15, tipoIva: "reducido" };
const precioFinal = calcularPrecioConIva(producto);

// precioFinal: 16.5 (15 * 1.10)
```

#### Consideraciones
Este método se basa en una constante ivaPorcentajes que debe incluir los tipos de IVA válidos y sus respectivos porcentajes. La función devuelve el precio con IVA redondeado a dos decimales usando toFixed(2), para evitar errores de punto flotante. Asegúrate de que el tipo de IVA en el producto esté bien definido y exista en el mapeo de ivaPorcentajes.

#### Parámetros
- **producto:** Objeto que representa el producto, incluyendo nombre, precio y tipoIva.
- **Retorno:** Número que representa el precio del producto con IVA aplicado, redondeado a dos decimales.

#### Excepciones
Lanza un error si producto es null, undefined o no cumple con los atributos requeridos.
