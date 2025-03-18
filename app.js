class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  // Добавление в конец 
  append(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
  }

  // Добавление в начало 
  prepend(value) {
      const newNode = new Node(value);
      if (!this.head) {
          this.head = this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head = newNode;
      }
      this.length++;
  }

  // Удаление элемента 
  remove(value) {
      if (!this.head) return false;

      if (this.head.value === value) {
          this.head = this.head.next;
          if (!this.head) this.tail = null;
          this.length--;
          return true;
      }

      let current = this.head;
      while (current.next) {
          if (current.next.value === value) {
              current.next = current.next.next;
              if (!current.next) this.tail = current; 
              this.length--;
              return true;
          }
          current = current.next;
      }
      return false;
  }

  // Поиск элемента (find)
  find(value) {
      let current = this.head;
      while (current) {
          if (current.value === value) return current;
          current = current.next;
      }
      return null;
  }

  // Получение размера (size)
  size() {
      return this.length;
  }

}