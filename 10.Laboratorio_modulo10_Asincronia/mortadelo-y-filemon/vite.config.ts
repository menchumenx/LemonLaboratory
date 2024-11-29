import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src', // Configura la raíz de tu proyecto en la carpeta src
    build: {
        outDir: '../dist', // Configura la carpeta de salida para la compilación
        emptyOutDir: true, // Limpia la carpeta de salida antes de compilar
    },
});
