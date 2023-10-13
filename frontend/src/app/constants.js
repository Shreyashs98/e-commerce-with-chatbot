<<<<<<< HEAD
export const ITEMS_PER_PAGE = 10;
=======
export const ITEMS_PER_PAGE = 10;
export function discountedPrice(item){
    return Math.round(item.price*(1-item.discountPercentage/100),2)
}
>>>>>>> 3a48d070471b1a5a6afeb2f746ece4403e247a94
