import { Products } from '../../models/products';
export interface IProductState {
    product: Products[],
    isLoading: boolean
}

function state(): IProductState {
    return {
        product: [],
        isLoading: false,
    }
}

export default state;