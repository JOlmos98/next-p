import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Shopping Cart',
 description: 'SEO Title',
};

export default function CounterPage() {


  //Hacemos el copy-paste
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20}/>
    </div>
  );
}
