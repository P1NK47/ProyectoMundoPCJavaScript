class DispositivoEntrada{
    
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Monitor{
    
    static contadorMonitores = 0;

    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}]`;
    }
}

class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    toString(){
        return `\nComputadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}

class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = "";
        for(let computadora of this._computadoras){
            computadorasOrden += ` \n ${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${this._computadoras}`);
    }

    toString(){
        return
    }
}

//PRUEBA DE LA CLASE RATON
let raton1 = new Raton("USB", "HP");
console.log(raton1.toString());
let raton2 = new Raton("Bluetooth", "DELL");
console.log(raton2.toString());
let raton3 = new Raton("Bluetooth", "Logitech");
console.log(raton3.toString());
let raton4 = new Raton("USB", "Razer");
console.log(raton4.toString());
//PRUEBA DE LA CLASE TECLADO
let teclado1 = new Teclado("Bluetooth", "MSI");
console.log(teclado1.toString());
let teclado2 = new Teclado("USB", "Acer");
console.log(teclado2.toString());
let teclado3 = new Teclado("USB", "Logitech");
console.log(teclado3.toString());
let teclado4 = new Teclado("Bluetooth", "Redragon");
console.log(teclado4.toString());
//PRUEBA DE LA CLASE MONITOR
let monitor1 = new Monitor("HP", 15);
console.log(monitor1.toString());
let monitor2 = new Monitor("DELL", 27);
console.log(monitor2.toString());
let monitor3 = new Monitor("Samsung", 24);
console.log(monitor3.toString());
let monitor4 = new Monitor("LG", 22);
console.log(monitor4.toString());
//PRUEBA DE LA CLASE COMPUTADORA REUTILIZANDO EL TO STRING DE LAS OTRAS CLASES
let computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
//usando templyString(te lo imprime en pantalla si tener que usar to string)
console.log(`${computadora1}`);
let computadora2 = new Computadora("Armada", monitor2, teclado2, raton2);
console.log(`${computadora2}`);
let computadora3 = new Computadora("Personalizada", monitor3, teclado3, raton3);
console.log(`${computadora3}`);
let computadora4 = new Computadora("Redragon", monitor4, teclado4, raton4);
//PRUEBA DE LA CLASE ORDEN
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden1.agregarComputadora(computadora4);
orden1.agregarComputadora(computadora4);
orden1.agregarComputadora(computadora3);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora4);
orden2.agregarComputadora(computadora4);
orden2.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();