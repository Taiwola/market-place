"use client"

import MaxWidthWrapper from "@/app/components/MaxWidthWrapper"
import Link from "next/link";
import { Product } from "@/collections/products/Products";
import {useParams} from "next/navigation"
import { Check, Shield } from "lucide-react";
import ImageSlider from "@/app/components/ImageSlider";
import ProductReel from "@/app/components/ProductReel";
import AddToCartButton from "@/app/components/AddToCartButton";

interface PageProps {
    params: {
        productId: string
    }
}

const BREADCRUMBS = [
    {id: 1, name: 'Home', href: '/'},
    {id: 2, name: 'Product', href: '/products'},
]

const ProductPage = ({params}: PageProps) => {

    const param = useParams();
    const {productId} = param;

    const product = Product.filter((item) => item.id.toString() === productId);

    const productReelTitle = product[0];

    const validUrl = product[0].images.image1.map((url) => typeof url === "string" ? url : null
    ).filter(Boolean) as string[];

    return (
        <MaxWidthWrapper className="bg-white">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg lg:self-end">
                    <ol className="flex items-center space-x-2">
                        {BREADCRUMBS.map((breadcrumb, i) => (
                            <li key={breadcrumb.href}>
                                <div className="flex items-center text-sm">
                                    <Link 
                                    href={breadcrumb.href}
                                    className="font-medium text-sm text-muted-foreground hover:text-gray-900"
                                    >
                                        {breadcrumb.name}
                                    </Link>
                                    {
                                        i !== BREADCRUMBS.length - 1 ? (
                                            <svg
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                aria-hidden='true'
                                                className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
                                                <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                                            </svg>
                                        ) : null
                                    }
                                </div>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-4">
                    {product.map((Item, i) => (
                        <div key={i}>
                            <h1 className="text-3xl tracking-tight font-bold mt-8 text-gray-900 dark:text-gray
                            -dark-1 sm:text-4xl">{Item.name}</h1>
                        </div>
                    ))}
                    </div>
                    <section className="mt-4">
                        {product.map((Item, i) => (
                        <div key={i} className="flex items-center">
                           <p className="font-medium text-gray-900">{Item.price}</p>
                           <div className="ml-4 text-muted-foreground border-gray-300 pl-4 border-s-2">
                                {Item.category}
                           </div>
                        </div>
                    ))}
                        {product.map((Item, i) => (
                        <div key={i}>
                          <div className="mt-4 space-y-6">
                                <p className="text-base text-muted-foreground">{Item.description}</p>
                           </div>
                        </div>
                    ))}


                    <div className="mt-6 flex items-center">
                            <Check aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-green-500" />
                            <p className="ml-2 text-sm text-muted-foreground">Eligible for instant delivery</p>
                    </div>
                    </section>
                </div>

                <div className="mt-10 lg:col-2 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                            <div className="aspect-square rounded-lg">
                                <ImageSlider urls={validUrl}/>
                            </div>
                </div>

                {/* add to cart */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                            <div>
                                <div className="mt-10">
                                    <AddToCartButton product={product} />
                                </div>
                                <div className="mt-10">
                                    add to cart
                                    <div className="mt-6 text-center">
                                        <div className="group inline-flex text-sm text-medium">
                                            <Shield className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"/>
                                            <span className="text-muted-foreground hove:text-gray-700">
                                                30 Day Return Gaurantee
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>

            <ProductReel href="/products" title={`similar ${productReelTitle.category}`} subtitle={`Browse similar high quality ${productReelTitle.category} just like ${productReelTitle.name}`} />
        </MaxWidthWrapper>
    )
}

export default ProductPage