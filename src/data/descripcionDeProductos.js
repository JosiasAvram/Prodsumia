import placaDeVideo from "../assets/placaDeVideo.jpg"
import monitor from "../assets/monitor.png"
import fuente from "../assets/fuente.png"
import procesador from "../assets/procesador.png"
import teclado from "../assets/teclado.png"
import gabinete from "../assets/gabinete.png"
import mouse from "../assets/mouse.png"
import microfono from "../assets/microfono.png"

const stockDeProductos = [
    {
        id:0, 
        name:'Monitor', 
        descripcion:'Monitor de 24 pulgadas',
        precio:24500 , 
        stock:5,
        img:monitor,
    },
    {
        id:1, 
        name:'Placa de Video', 
        descripcion:'Placa de 12gb 3060',
        precio:97600 , 
        stock:3,
        img:placaDeVideo,
    },
    {
        id:2, 
        name:'Fuente 600w', 
        descripcion:'Fuente certificada para tu pc',
        precio:8300 , 
        stock:11,
        img:fuente,
    },
    {
        id:3, 
        name:'Procesador i7', 
        descripcion:'Intel i7 12700 12 nucleos',
        precio:54000 , 
        stock:4,
        img:procesador,
    },
    {
        id:4, 
        name:'Teclado mecánico', 
        descripcion:'Teclado iluminado',
        precio:24000 , 
        stock:9,
        img:teclado,
    },
    {
        id:4, 
        name:'Gabinete', 
        descripcion:'Gabinete Gamer con luces Led',
        precio:24000 , 
        stock:9,
        img:gabinete,
    },
    {
        id:4, 
        name:'Mouse', 
        descripcion:'Mouse iluminado con botones laterales',
        precio:24000 , 
        stock:9,
        img:mouse,
    },
    {
        id:4, 
        name:'Teclado mecánico', 
        descripcion:'Teclado iluminado',
        precio:24000 , 
        stock:9,
        img:microfono,
    },
];

export default stockDeProductos;