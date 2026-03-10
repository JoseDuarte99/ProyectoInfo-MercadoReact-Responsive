# 🌐 **Proyecto Final - Informatorio 2025**  

Este repositorio contiene la **Entrega Final** del curso de la especialidad de **React** del Informatorio 2025.  

## 📝 **Descripción**  
Para el proyecto se utilizó **Vite + React + React-Router + React-Query + CSS Module + TypeScript**, simulando parte del sitio de **Mercado Libre Argentina**.  

------

⚠️ **Aviso Legal**
Este proyecto es únicamente con fines educativos y personales. No está afiliado, patrocinado ni aprobado por Mercado Libre. El código, diseño y funcionalidades aquí presentadas son una recreación parcial con fines de aprendizaje. **Está prohibido su uso comercial o distribución sin autorización.**
Este proyecto no utiliza ni distribuye recursos oficiales, marcas registradas, logotipos ni contenido original de Mercado Libre. Cualquier similitud visual o funcional es puramente referencial y educativa.


## 📄 Licencia
Este proyecto está licenciado bajo los términos de la [Licencia MIT](LICENSE), lo que permite su uso, modificación y distribución **con atribución**.

**Sin embargo**, al tratarse de un proyecto educativo basado en una plataforma existente, se establece que:

> 🔒 **No se permite el uso comercial ni la distribución pública como producto final.**

------

## 📌 Características 🛒 Ecommerce (Mercado Libre)

- ✔ Implementación de un **Navbar** en el **Header**  
- ✔ Renderizado de **artículos** en el **Main**, cumpliendo con los requerimientos solicitados  
- ✔ Uso de **children** para la composición de componentes  
- ✔ Estilos con **CSS Module**, asegurando una estructura visual ordenada  
- ✔ Buscador de productos. **Filtrado los productos** por nombre a medida que el usuario escribe  
- ✔ Selector de filtros. Filtrado por categoría, precio, etc  
- ✔ Opción de agregar al carrito desde cada producto. Cada card tiene un botón "Agregar". Al hacer click, suma al contador del carrito en el header  
- ✔ Opción de quitar del carrito desde cada producto. Cada producto agregado tiene un botón de "Quitar", un **contador de producto individual**. Al hacer click, resta al contador del carrito en el header  
- ✔ Carrito en el header. Ícono con **contador visible** del total de productos  
- ✔ Simulación de compras  
- ✔ Visualización de detalles de productos  
- ✔ Cálculo de costo final de productos agregados al carrito de compras  
- ✔ Navegación entre rutas, utilizando **React Router**  
- ✔ Peticiones HTTP, utilizando **React Query**  
- ✔ Creación de nuevas publicaciones, guardando la información en el **Local Storage** del navegador  
- ✅ Entre otras características...


------
## 🛠️ Requerimientos Técnicos

Este proyecto fue desarrollado utilizando tecnologías modernas del ecosistema React, priorizando la escalabilidad, modularidad y experiencia de usuario. A continuación se detallan los requerimientos técnicos necesarios para ejecutar y mantener el proyecto:

### ⚙️ Tecnologías Base
- **React 18+** con enfoque en componentes reutilizables y composición mediante `children`.
- **React Router DOM** para navegación entre rutas y vistas.
- **React Query** para manejo eficiente de peticiones HTTP y caché de datos.
- **CSS Modules** para estilos encapsulados y estructura visual ordenada.

### 📦 Dependencias
- `react-router-dom`
- `@tanstack/react-query`
- `uuid` (para generar identificadores únicos en publicaciones)
- Otras dependencias estándar del entorno React (ver `package.json`).

### 💾 Persistencia
- **Local Storage**: utilizado para guardar nuevas publicaciones creadas por el usuario.

### 🧪 Requisitos de entorno
- **Node.js 16+**
- **npm 8+** o **yarn** como gestor de paquetes

### 🖥️ Recomendaciones de desarrollo
- Uso de **componentes funcionales** y **hooks** (*useState, useEffect, Reduce*) para mantener una lógica clara y desacoplada.
- Separación de responsabilidades entre vistas, componentes y lógica de negocio.
- Estructura de carpetas modular para facilitar el mantenimiento y escalabilidad del proyecto.

------

## 🌟 **Final del Proyecto**  
Aquí puedes ver el resultado final del sitio inspirada en Mercado Libre Argentina:  

https://mercadoreact.vercel.app 

------

##  📦 **Instalación y Uso
1️⃣ Clonar el repositorio:

  ```bash
      git clone <URL_DEL_REPOSITORIO>
      cd <NOMBRE_DEL_REPOSITORIO>
  ```
2️⃣ Instalar dependencias:

  ```bash
    npm install
  ```
3️⃣ Ejecutar el proyecto:

  ```bash
    npm run dev
  ```
