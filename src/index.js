class Sorter {
  constructor() {
    this.arr = [];
      this.sorter_method = (a,b)=>a>b;// your implementation
  }

  add(element) {
   this.arr.push(element) // your implementation
  }

  at(index) {
   if(this.arr[index]!==undefined)
     return this.arr[index];// your implementation
  }

  get length() {
   return this.arr.length; // your implementation
  }

  toArray() {
   return this.arr; // your implementation
  }

  sort(indices) {
   indices.sort((a,b)=>a>=b);
   let temp = [];
   for(let i of indices)
   {
     temp.push(this.arr[i]);
   }
   temp.sort(this.sorter_method);
   let j = 0;
   for(let i of indices)
   {
     this.arr[i]=temp[j];
     j++;
   }// your implementation
  }

  setComparator(compareFunction) {
      this.sorter_method = compareFunction; // your implementation
  }
}

module.exports = Sorter;