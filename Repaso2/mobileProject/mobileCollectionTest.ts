import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";  
let mobile1 = new Mobile("MOBILE 1", "47479HK", "MODEL 8PS","BLACK",887);
let mobile2 = new Mobile("MOBILE 2", "JS878DD", "MODEL 3FR","RED",490);
let mobile3 = new Mobile("MOBILE 3", "889JJHK", "MODEL RT2","GREY",789);
let mobile4 = new Mobile("MOBILE 4", "119JU87", "MODEL 44D","BLUE",999);
let arrayMobile = [mobile1,mobile2,mobile3,mobile4];
let myCollection = new MobileCollection(arrayMobile);

console.log("Mobile in the collection", myCollection.getMobile());
console.log("Total Price of the collection",myCollection.getTotalPrice());

myCollection.setMobile([mobile1, mobile2]);
myCollection.setTotalPrice(1800);

console.log("Update Mobile",myCollection.getMobile());
console.log("Update Total Price",myCollection.getTotalPrice());
console.log("Print MobileCollection");
myCollection.printCollection();
