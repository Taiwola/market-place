import { PRODUCT_CATEGORIES } from '@/config'
import { Products } from '@/collections/products/Products' 
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/utils'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'



const CartItem = ({ product, productId }: { product: Products, productId: number }) => {

  const { removeItem } = useCart()

  const products = product.filter((item) => item.id === productId).map((item) => {
    const image = item.images.image1[0]
    return (
      <div key={item.id} className='space-y-3 py-2'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center space-x-4'>
          <div key={item.id} className='relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded'>
            {typeof image !== 'string' && image ? (
              <Image
                src={image}
                alt={item.name}
                fill
                className='absolute object-cover'
              />
            ) : (
              <div className='flex h-full items-center justify-center bg-secondary'>
                <ImageIcon
                  aria-hidden='true'
                  className='h-4 w-4 text-muted-foreground'
                />
              </div>
            )}
          </div>

          <div className='flex flex-col self-start'>
            <span className='line-clamp-1 text-sm font-medium mb-1'>
              {item.name}
            </span>

            <span className='line-clamp-1 text-xs capitalize text-muted-foreground'>
              {item.category}
            </span>

            <div className='mt-4 text-xs text-muted-foreground'>
              <button
                onClick={() => removeItem(item.id)}
                className='flex items-center gap-0.5'>
                <X className='w-3 h-4' />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col space-y-1 font-medium'>
          <span className='ml-auto line-clamp-1 text-sm'>
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </div>
    )
  })
  
  


  return (
    <>
    {products}
    </>
  )
}

export default CartItem
