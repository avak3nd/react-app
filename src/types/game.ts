export type Game = {
    _id: string;
    title: string;
    img: {
        url: string;
    };
    img2?: {
        url: string;
    };
    type?: string;
    sale?: number;
    price: string | number;
    salePrice?: number;
    tag?: string[];
    comment?: string[];
    badge?: string[];
    rank?: number;
};