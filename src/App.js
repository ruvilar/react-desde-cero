import React from 'react';
import Cupcake from './Cupcake';
import './App.css';

/* const App = () => (
  <div className="App">
    <header>
      <h1>Bienvenidos a React</h1>
      <a
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aprende React
      </a>
    </header>
  </div>
); */


const App = () => (
  <div className="container-cupcakes">
    <Cupcake color="Beige" flavor="Vainilla" image="https://s1.abcstatics.com/media/gurmesevilla/2016/07/helado-de-vainilla.jpg" />
    <Cupcake color="Marrón" flavor="Chocolate" image="https://www.hogarmania.com/archivos/202208/helado-chocolate-portada3-668x400x80xX-1.jpg" />
    <Cupcake color="Azul" flavor="Pistacho" image="https://img.freepik.com/fotos-premium/helado-pistacho-cono-galleta-jarron-sobre-fondo-azul_117406-2520.jpg" />
    <Cupcake color="Rosa" flavor="Frutilla" image="https://www.gourmet.cl/wp-content/uploads/2016/09/Helado-Frutilla-iStock-1-570x432.jpg" />
    <Cupcake color="Negro" flavor="Chocolate Suizo" image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/A37674DB-83CE-4AFB-AC66-B632B9EEAEA7/Derivates/f46fc419-9591-4356-8624-b4d3456d6221.jpg" />
    <Cupcake color="Verde" flavor="Manzana" image="https://www.vitamixespana.com/recetas/wp-content/uploads/2021/04/helado-900x600.png" />
    <Cupcake color="Anaranjado" flavor="Quinotos al Whisky" image="https://mirror3.cdn.net.ar/mirror3/2022/09/mirror3/images/13/1377_3dedfde1e7164ee96ccf2704bfc7c499c051afbbef19263a6631c975ae8812f1/md.jpg" />
    <Cupcake color="Gris" flavor="Tiramisú" image="https://cdn0.recetasgratis.net/es/posts/1/3/5/el_mejor_helado_de_tiramisu_50531_orig.jpg" />
    <Cupcake color="Amarillo" flavor="Limón" image="https://imag.bonviveur.com/helado-de-limon-casero-y-facil.jpg" />
    <Cupcake color="Rojo" flavor="Frambuesa" image="https://truffle-assets.tastemadecontent.net/1t1bxm43v4e3_6jz2KZjAbKYK2MW2A64img_helado-facil-de-frambuesa_landscapeThumbnail_es.jpeg" />
    <Cupcake color="Verde" flavor="Lima" image="https://cdn0.recetasgratis.net/es/posts/2/2/1/helado_de_lima_casero_36122_orig.jpg" />
    <Cupcake color="Negro" flavor="Café" image="https://i.blogs.es/ecf20d/helado_chocolate/1366_2000.jpg" />
    <Cupcake color="Rosa" flavor="Mora" image="https://recetastips.com/wp-content/uploads/2020/08/Helado-de-Mora-Casero.jpg" />
  </div>
);

export default App;