export class Rectangle {
  constructor(w, h) {
    if (w != undefined && h != undefined && w > 0 && h > 0) {
      this.width = w
      this.height = h
    }

  }
  print() {
    for (let index = 0; index < this.height; index++) {
      console.log("X".repeat(this.width))
    }
  }

};