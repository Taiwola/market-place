"use client"
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";



const Cart = () => {

    const {items, removeItem} = useCart();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const itemCount = items.length;
    const product = items.map((item) => item.product[0]);
    const cartTotal = items.reduce((total, {product}) => total + parseFloat(product[0].price), 0)
    const fee = 1;
    return (
        <Sheet>
            <SheetTrigger className="group m-2 flex items-center p-2">
                <ShoppingCart aria-hidden="true" className="h-6 w-6 flex-shrink text-gray-400 group-hover:text-gray-500" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {isMounted ? items.length : 0}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6"> 
                        <SheetTitle>Cart ({isMounted ? items.length : 0})</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                    <div className=" flex w-full flex-col pr-6">
                        {/* TODO: CART LOGIC */}
                        {items.map((item) => (
                            <CartItem product={product} productId={item.product[0].id} key={item.product[0].id}/>
                        )) }
                    </div>
                    <div className="space-y-4 pr-6">
                        <Separator />
                        <div className="space-y-1.5 text-sm">
                            <div className="flex">
                                <span className="flex-1">Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Transaction fee</span>
                                <span>{formatPrice(fee)}</span>
                            </div>
                            <div className="flex">
                                <span className="flex-1">Total fee</span>
                                <span>{formatPrice(cartTotal + fee)}</span>
                            </div>
                        </div>

                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants({
                                    className:"w-full"
                                })}>Checkout</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </div>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-60 text-muted-foreground">
                            <Image src='/hippo-empty-cart.png' alt="....hippo" width={150} height={150} />
                                </div>
                        <div className="text-xl font-semibold">Your cart is empty</div>
                        <SheetTrigger asChild>
                            <Link href='/products' className={buttonVariants({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground"
                            })}>Add items to your cart</Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default Cart;