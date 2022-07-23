import placaDeVideo from "../assets/placaDeVideo.jpg";
import monitor from "../assets/monitor.png";
import fuente from "../assets/fuente.png";
import procesador from "../assets/procesador.png";
import teclado from "../assets/teclado.png";
import gabinete from "../assets/gabinete.png";
import mouse from "../assets/mouse.png";
import microfono from "../assets/microfono.png";

const stockDeProductos = [
  {
    id: 0,
    name: "Monitor",
    descripcion:
      "Monitor de 24 pulgadas - Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones.",
    precio: 24500,
    stock: 5,
    img: monitor,
  },
  {
    id: 1,
    name: "Placa de Video",
    descripcion:
      "Placa de 12gb 3060 - Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.",
    precio: 97600,
    stock: 3,
    img: placaDeVideo,
  },
  {
    id: 2,
    name: "Fuente 600w",
    descripcion:
      "Introduciendo la nueva serie de fuentes de poder EVGA BR. Construidas sobre nuestra ya gran linea de fuentes con certificación Bronze, decidimos hacer las mejoras que nuestros clientes pidieron. Nuestra linea BR cuenta con certificación 80 Plus Bronce, con eficiencia del 85% o más bajo cargas típicas.",
    precio: 8300,
    stock: 11,
    img: fuente,
  },
  {
    id: 3,
    name: "Procesador i7",
    descripcion:
      "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.",
    precio: 54000,
    stock: 4,
    img: procesador,
  },
  {
    id: 4,
    name: "Teclado mecánico",
    descripcion:
      "Teclado iluminado - Este teclado Nisuta de alto rendimiento permite que puedas disfrutar de horas ilimitadas de juegos. Está diseñado especialmente para que puedas expresar tanto tus habilidades como tu estilo. Podrás mejorar tu experiencia de gaming, ya seas un aficionado o todo un experto y hacer que tus jugadas alcancen otro nivel.",
    precio: 24000,
    stock: 9,
    img: teclado,
  },
  {
    id: 5,
    name: "Gabinete",
    descripcion:
      "El nuevo y hermoso chasis de simplicidad, Neon, viene con dos grandes paneles de ventana frontal y lateral de acrílico ahumado que ofrecen la vista de los componentes internos, así como 3 ventiladores LED preinstalados de 120 mm brillantes para iluminar su construcción.",
    precio: 24000,
    stock: 9,
    img: gabinete,
  },
  {
    id: 6,
    name: "Mouse",
    descripcion:
      "Mouse iluminado con botones laterales - El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.",
    precio: 24000,
    stock: 9,
    img: mouse,
  },
  {
    id: 7,
    name: "Microfono",
    descripcion:
      "Ideal para varias actividades. Te brindará un sonido de calidad y conseguirás la nitidez de las voces. Al ser condensador, posibilitará un resultado claro y fino. Es ideal para percusiones, guitarras, pianos, entre otros. Por su respuesta tan definida ante la voz, es el más elegido por los profesionales.",
    precio: 24000,
    stock: 9,
    img: microfono,
  },
];

export default stockDeProductos;
