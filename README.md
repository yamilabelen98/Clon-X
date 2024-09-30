# Clon de X

Este proyecto es un clon de la plataforma X (anteriormente conocida como Twitter), desarrollado con tecnologías modernas de desarrollo web. Permite a los usuarios iniciar sesión, publicar tweets, ver su feed y gestionar su perfil.

## Características principales

- **Autenticación con GitHub**: Inicia sesión fácilmente usando tu cuenta de GitHub.
- **Gestión de sesión**: Cierra sesión cuando lo desees.
- **Perfil de usuario**: Visualiza tu información de perfil, incluyendo:
  - Nombre de usuario
  - Nombre completo
  - Avatar
- **Feed de tweets**: Ve tus tweets.
- **Publicación de tweets**: Crea y publica nuevos tweets.

## Tecnologías utilizadas

- **[Next.js](https://nextjs.org/)**: Framework de React para aplicaciones web.
- **[Supabase](https://supabase.io/)**: Plataforma de backend como servicio (BaaS) para gestión de base de datos y autenticación.
- **[React](https://reactjs.org/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[TypeScript](https://www.typescriptlang.org/)**: Superconjunto tipado de JavaScript.
- **[TailwindCSS](https://tailwindcss.com/)**: Framework de CSS para diseño rápido y responsivo.

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/yamilabelen98/Clon-X.git
   ```

2. Instala las dependencias:
   ```
   cd clon-de-x
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
   NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima_de_supabase
   ```

4. Inicia el servidor de desarrollo:
   ```
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Uso

1. En la página principal, haz clic en "Iniciar sesión con GitHub".
2. Una vez autenticado, podrás ver tu perfil y feed de tweets.
3. Utiliza el formulario de creación de tweets para publicar nuevos mensajes.
4. Navega por la aplicación para ver tus tweets.
5. Cuando hayas terminado, puedes cerrar sesión desde el menú de usuario.

## Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request para sugerir cambios o mejoras.
