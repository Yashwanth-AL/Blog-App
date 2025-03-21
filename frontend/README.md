# React + Vite  template 

## step-1 
npm create vite@latest my-project -- --template react
cd my-project

## step-2
npm install tailwindcss @tailwindcss/vite

# step-3 : (In vite.config.js add the following code)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});

## step-4 (index.css file add the following line)
@import "tailwindcss";
