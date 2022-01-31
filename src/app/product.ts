export class ProductDetailsVO {
    id!: string;
    name!: string;
    description!: string;
    value!: string;

    size!: number;
    sizes!: number[];

    color!: string;
    colors!: string[];

    img!: string;
    imgs!: string[];
    
    ratting!: number;
    
    
}

export class ShopProductVO {
    id!: string;
    name!: string;
    value!: string;
}