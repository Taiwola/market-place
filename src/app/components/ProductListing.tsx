'use client'
import { Product, Products } from "@/collections/products/Products";
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";


interface ImageObject {
    image1: string[];
    thubWidth: number;
    thubHeight: number;
    position: string;
    cardWidth: number;
    cardHeight: number;
    tabletWidth: number;
  }

interface ProductItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    product_file: string;
    status: string;
    options: string;
    images: {
        image1: string[];
    thubWidth: number;
    thubHeight: number;
    position: string;
    cardWidth: number;
    cardHeight: number;
    tabletWidth: number;
    };
    staticUrl: string;
    staticDir: string;
  }

interface ProductListingProps {
    productItem: ProductItem | null;
    index: number;
}

const ProductListing = ({productItem, index}: ProductListingProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    
    useEffect(() => {
        const timeOut = setTimeout(()=> {
            setIsVisible(true)
        }, index * 75);

        return () => clearTimeout(timeOut);
    }, [index])

    const validUrl = productItem?.images.image1.map((url) => typeof url === "string" ? url : null
    ).filter(Boolean) as string[];

    
    const ProductPlaceholder = () => {
        return (
            <div className="flex flex-col w-full">
                <div className="bg-zinc-100 aspect-square overflow-hidden w-full rounded-xl">
                      <Skeleton  className="h-full w-full"/>  
                </div>
                <Skeleton  className="mt-4 w-2/3 rounded-lg"/>
                <Skeleton  className="mt-2 w-16 h-4 rounded-lg"/>
                <Skeleton  className="mt-2 w-12 h-4 rounded-lg"/>
            </div>
        )
    }

    if (!productItem || !isVisible) return <ProductPlaceholder />
    
    if (isVisible && productItem) {
        return (
            <Link href={`/product/${productItem.id}`} className={cn('invisible h-full w-full cursor-pointer group/main', {
                'visible animate-in fade-in-5': isVisible,
            })} key={index}>

                <div className="flex flex-col w-full">
                    <ImageSlider urls={validUrl} />
                </div>
                
                <div className="flex flex-col w-full">
                    <h3 className="mt-4 font-medium text-4 text-gray-700">
                        {productItem.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {productItem.category}
                    </p>
                    <p className="mt-1 font-medium text-sm text-gray-900">{productItem.price}</p>
                </div>
            </Link>
        )
    }
}

export default ProductListing