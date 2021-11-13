import { observable, action, makeObservable } from 'mobx';
import { getProducts } from '../services';

class Products {
  @observable isFetchingProducts = false;
  @observable products = [];

  constructor() {
    makeObservable(this);
  }

  @action getProducts = async () => {
    try {
      this.setLoading();
      const receivedProducts = await getProducts();
      this.setProducts(receivedProducts.data);
      this.setLoading();
    } catch (error) {
      console.log(error);
    }
  };

  @action setLoading() {
    this.isFetchingProducts = !this.isFetchingProducts;
  }

  @action setProducts(products) {
    this.products = products;
  }
}

const productsStore = new Products();
export default productsStore;
