class Tree {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  checkBody() {
    if (this.left === undefined || this.right === undefined) {
      console.log(this, " <= 문제가 있습니다");
    }
  }
}

const myTree = new Tree("왼팔", "오른팔");
myTree.checkBody();

const disorderTree = new Tree("왼팔");
disorderTree.checkBody();

// 수정될 로직 


