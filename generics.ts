class DynamicFilter<T> {
  private collection: T[] = [];

  addItem(element: T): void {
    this.collection.push(element);
  }

  getAll(): T[] {
    return this.collection;
  }

  filterByKey<K extends keyof T>(key: K, value: T[K]): T[] {
    return this.collection.filter((item) => item[key] === value);
  }
}
