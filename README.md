# E-Commerce React App con Vite

## Descripción

Esta es una aplicación de comercio electrónico construida con **React** y **Vite**. Permite navegar por productos, ver detalles, agregar productos al carrito y proceder con el pago en el checkout.

### Funcionalidades principales:

- Navegar por categorías de productos.
- Ver detalles de los productos.
- Agregar productos al carrito.
- Realizar el proceso de compra en el checkout.
- Manejo del estado global del carrito con **Context API**.

## Captura de Pantalla

![Captura de Pantalla](https://res.cloudinary.com/dqdo89dpj/image/upload/v1729982385/ia2_wzlocu.png)

## Tecnologías Utilizadas

- React
- Vite
- React Router Dom
- Context API
- CSS

## Rutas

Las siguientes son las rutas disponibles en la aplicación:

- **/** - Muestra la lista de productos.
- **/category/:categoria** - Muestra los productos filtrados por categoría.
- **/cart** - Muestra el carrito de compras.
- **/productdetail/:id** - Muestra los detalles de un producto individual.
- **/checKout** - Proceso de checkout para realizar la compra.
- **/\*** - Página de error 404.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mrpaolo419/piel-morena.git
   ```

2. Copiar código:

   ```bash
   cd piel-morena
   Instala las dependencias con Vite:
   ```

3. Copiar código:

   ```bash
   npm install
   Inicia la aplicación en modo de desarrollo:
   ```

4. Copiar código

   ```bash
   npm run dev
   ```

Abre tu navegador y ve a http://localhost:5173 (por defecto, Vite usa este puerto) para empezar a usar la aplicación.
