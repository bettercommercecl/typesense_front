const fs = require('fs');
const path = require('path');

// Leer el contenido del componente
const componentPath = path.join(__dirname, '../src/components/PopUpSearcher/PopUpSearcher.js');
const componentContent = fs.readFileSync(componentPath, 'utf8');

// Crear el directorio public si no existe
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Crear el directorio components si no existe
const componentsDir = path.join(publicDir, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir);
}

// Crear el directorio PopUpSearcher si no existe
const popupSearcherDir = path.join(componentsDir, 'PopUpSearcher');
if (!fs.existsSync(popupSearcherDir)) {
  fs.mkdirSync(popupSearcherDir);
}

// Escribir el archivo en public
const outputPath = path.join(popupSearcherDir, 'PopUpSearcher.js');
fs.writeFileSync(outputPath, componentContent);

console.log('Component built successfully!'); 