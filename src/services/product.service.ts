import { IProductDetail, IProductDTO } from '../data-transfer/dto';
import { IProductResponse } from '../data-transfer/IProductResponse';
import ProductMapper from '../mapper/ProductMapper.mapper';
import productRepository from '../repositories/product.repository';

class ProductService {
    async Insert(product: IProductDTO): Promise<IProductResponse> {
        let result = await productRepository.Create(product);

        return ProductMapper.toResponse(result);
    }

    async GetAll(): Promise<IProductDetail[]> {
        let result = await productRepository.GetAll();

        return result.map(item => ProductMapper.toDetail(item));
    }

    async GetAllByCreator(id: string): Promise<IProductDetail[]> {
        let result = await productRepository.GetAllByCreator(id);

        return result.map(item => ProductMapper.toDetail(item));
    }

    async UpdateStock(id: string, stock: number): Promise<boolean> {
        return await productRepository.UpdateProduct(id, stock);
    }
}

export default new ProductService();