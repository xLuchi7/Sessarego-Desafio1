class ProductManager{

    constructor(){

        this.products = []

    }

    getProduct(){

       return this.products

    }

    addProduct(newProduct){

        const product = this.products.find((product) => product.code === newProduct.code)

        if(product){

            console.log("El producto que quiere agregar ya existe en la Base de datos")

        }else{

            this.products.push(newProduct)

            console.log("El producto se creo exitosamente");

        }              

    }

    getProductById(id){

        const product = this.products.find((product) => product.id === id);

        if(product){

            console.log("El producto solicitado es: ", product);

        }else{

            console.log("El producto solicitado no existe");

        }

    }

}

class Product{

    constructor(title, description, price, thumbnail, code, stock, id ) {

        this.id = id;

        this.title = title;

        this.description = description;

        this.price = price;

        this.thumbnail = thumbnail;

        this.code = code;

        this.stock = stock;

    }

}

const product0 = new Product("Monitor Gaming", "240hz 24 pulgadas", 170000, "https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-gamer-27-benq-zowie-xl2731k-dark-grey-0.jpg", "0", 15, 0);

const product1 = new Product("Mouse Gaming", "Razer Viper Mini", 15000, "https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-3346007.jpg", "1", 20, 1);

const product2 = new Product("Mando PS4", "Control inalambrico", 12000, "https://arsonyb2c.vtexassets.com/arquivos/ids/292249/dualshockblack1.jpg?v=637105416256400000", "2", 12, 2);

const product3 = new Product("Auriculares Gaming", "HyperX II Wireless", 15000, "https://mexx-img-2019.s3.amazonaws.com/auricular-inalambrico_40030_1.jpeg", "3", 5, 3);

const productManager = new ProductManager();

productManager.addProduct(product0);
productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3);

console.log(productManager.getProduct());
productManager.getProductById(1)
productManager.getProductById(3)