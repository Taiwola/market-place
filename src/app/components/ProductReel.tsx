'use client'
import Link from "next/link"
import { Product } from "@/collections/products/Products"
import ProductListing from "./ProductListing"

interface ProductReelProps {
    title: string
    subtitle?: string
    href?: string
}

type Products = typeof Product
const products = Product.map((item) => {
    return item;
});


const ProductReel = (props: ProductReelProps) => {
    return (
        <section className="py-12">
            <div className='md:flex md:items-center md:justify-between mb-4'>
            <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                {props.title ? <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{props.title}</h1> : null}
                {props.subtitle ? <p className="mt-2 text-sm text-muted-foreground">{props.subtitle}</p> : null}
            </div>
            {
                props.href ? <Link href={props.href} className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">Shop the collection{" "} <span>&rarr;</span></Link> 
                :
                null
            }
            </div>

            <div className="relative">
                <div className="mt-6 flex items-center w-full">
                    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                        {products.map((item, i) => {
                            return (<ProductListing key={item.id} productItem={item} index={i} />)
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default ProductReel