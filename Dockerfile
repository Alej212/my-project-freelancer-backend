# Especifica la imagen base
FROM node:lts-alpine3.19

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install -g pnpm
RUN pnpm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto que tu aplicación utilizará
EXPOSE 3000

# hace el build 
RUN pnpm build

# Comando para iniciar la aplicación
CMD [ "node", "dist/index" ]
