export class Product {
  id: number;
  catId: number;
  name: string;
  description: string;
  image: string = '';
  price: number;
  stock: number;
  featured: boolean;
  discounted: boolean;
  active: boolean;

  constructor(properties?: Product) {
    if (properties) {
      this.id = properties.id || 0;
      this.catId = properties.catId || 0;
      this.name = properties.name || '';
      this.description = properties.description || '';
      this.image = properties.image || '';
      this.price = properties.price || 0;
      this.stock = properties.stock || 0;
      this.featured = properties.featured || false;
      this.discounted = properties.discounted || false;
      this.active = properties.active || false;
    }
  }
}
