// TIPING THE PRODUCT-CART
export type ProductCartType = {
    idProduct: number;
    category: string;
    img: string;
    title: string;
    price: number;
    withDiscount: boolean,
    units?: number;
    previousPrice?: number;
    priceInfo?: string;
    freeShipping: boolean;
    shippingPrice?: number;
    by?: string;
    onClickAdd?: () => void;
    onClickRemove?: () => void;
};



export type PostProductProps = {
    productNew: ProductDB;
    category?: string;
}


export type ProductDB = {
    idProduct: number;
    category: string;
    description: string;
    img: string;
    colors: Array<string> ;
    brands: Array<string>;
    rating: number;
    title: string;
    price: number;
    inStock: boolean;
    prime: boolean;
    withDiscount: boolean;
    previousPrice?: number;
    priceInfo?: string;
    freeShipping: boolean;
    shippingPrice?: number;
    by?: string;
};

export type ProductBase = {
    idProduct: number;
    category: string;
    img: string;
    title: string;
    price: number;
    withDiscount: boolean,
    units?: number;
    previousPrice?: number;
    priceInfo?: string;
    freeShipping: boolean;
    shippingPrice?: number;
    by?: string;
};

export type ProductCardProps = ProductBase & {
    
    onClickAdd?: () => void;
    onClickRemove?: () => void;
};


export type ProductOnCartProps = ProductBase;


