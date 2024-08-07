import { ICatalogRepository } from "interface/catalogRepository.interface";

export class CatalogService {
  private _repository: ICatalogRepository;

  constructor(repository: ICatalogRepository) {
    this._repository = repository;
  }

  async createProduct(input: any) {
    const data = await this._repository.create(input);
    if (!data.id) {
      throw new Error("Unable to create product");
    }
    return data;
  }
  async updateProduct(input: any) {
    const data = await this._repository.update(input);
    // emit event to update record in elastic search
    return data;
  }

  // instead of this will get product from Elastic search
  async getProducts(limit: number, offset: number) {
    const products = await this._repository.find(limit, offset);
    return products;
  }
  async getProduct(id: number) {
    const product = await this._repository.findOne(id);
    return product;
  }
  async deleteProduct(id: number) {
    const product = await this._repository.delete(id);
    // delete from e.s
    return product;
  }
}
