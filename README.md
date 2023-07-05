# Frontend del Sistema de SPA de Películas

Este repositorio contiene el código del frontend para un sistema de SPA (Single Page Application) de películas, desarrollado utilizando la librería React y Vite. El sistema permite a los usuarios ver las películas existentes, ver sus detalles y dejar reseñas. También cuenta con un buscador que permite filtrar las películas. Se ha implementado una experiencia de usuario agradable utilizando loaders durante la carga de datos, renderizado dinámico, react router, props, eventos y Redux Toolkit para el manejo del estado. Además, se ha utilizado el framework de estilos Tailwind CSS para una interfaz visual moderna y responsive.

## Características principales

- Utiliza la librería React y Vite para desarrollar la SPA de películas.
- Proporciona una experiencia de usuario agradable con loaders durante la carga de datos, renderizado dinámico, react router, props, eventos y Redux Toolkit para el manejo del estado.
- Implementa un buscador para filtrar las películas obtenidas de la API.
- Permite ver los detalles de cada película y dejar reseñas.
- Proporciona una sección administrativa para que el administrador pueda subir, eliminar y editar películas.
- Incorpora autenticación utilizando JWT para la sección administrativa.
- Utiliza el framework de estilos Tailwind CSS para una interfaz visual moderna y responsive.

## Tecnologías utilizadas

- React
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```shell
npm install
```

4. Configura la URL de la API en el archivo de configuración.

5. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```shell
npm run dev
```

6. El frontend del sistema de películas estará disponible en `http://localhost:3000`.

## Estructura del proyecto

El proyecto tiene la siguiente estructura de directorios:

- `src/`
  - `components/`: Contiene los componentes reutilizables de la aplicación.
  - `containers/`: Contiene los contenedores que combinan componentes y lógica de la aplicación.
  - `hooks/`: Contiene los hooks personalizados utilizados en la aplicación.
  - `pages/`: Contiene las diferentes páginas de la aplicación.
  - `redux/`: Contiene los archivos relacionados con el manejo del estado utilizando Redux Toolkit.
  - `services/`: Contiene los servicios para realizar las solicitudes a la API.
  - `styles/`: Contiene los archivos de estilos de la aplicación.
  - `utils/`: Contiene utilidades y funciones auxiliares.
  - `App.js`: Archivo principal de la aplicación.
  - `index.js`: Archivo de entrada de la aplicación.

## Funcionalidad

El frontend del sistema de películas ofrece las siguientes funcionalidades:

- Ver todas las películas existentes.
- Ver los detalles de una película específica.
- Dejar reseñas en las películas.
- Filtrar las películas utilizando un buscador.
- Sección administrativa para subir, eliminar y editar películas (requiere autenticación).
- Personalización con Dark Mode.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama para tu contribución.
3. Realiza los cambios y mejoras necesarias.


4. Ejecuta el siguiente comando para instalar las dependencias:

```shell
npm install
```

5. Configura la URL de la API en el archivo de configuración.

6. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```shell
npm run dev
```

7. El frontend del sistema de películas estará disponible en `http://localhost:3000`.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Crea un fork de este repositorio.
2. Crea una nueva rama para tu contribución.
3. Realiza los cambios y mejoras necesarias.
4. Envía un pull request explicando tus cambios.


