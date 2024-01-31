'use client'
import { Button } from "@/components/ui/button"
import { toast } from "sonner";
import {useEffect, useState} from "react"
import { useCart } from "@/hooks/use-cart";
import { Products } from "@/collections/products/Products";

const AddToCartButton = ({product}: {product: Products}) => {
    const {addItem} = useCart();
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSuccess(false)
        }, 200);

        return () => clearTimeout(timer);
    }, [isSuccess])

    return (
       <Button
       onClick={() => {
        setIsSuccess(true)
        toast.success('Added!')
        addItem(product)
       }}
        size="lg"
        className="w-full">
        Add to Cart
       </Button>
    )
}

export default AddToCartButton