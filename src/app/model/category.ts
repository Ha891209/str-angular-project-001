export class Category {
  id: number;
  name: string;
  description: string;

  constructor(properties?: Category) {
    if (properties) {
      this.id = properties.id || 0;
      this.name = properties.name || '';
      this.description = properties.description || '';
    }
  }
}
