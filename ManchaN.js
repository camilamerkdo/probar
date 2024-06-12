class ManchaN {
 constructor(img, x, y, w, h, velocidad) {
  this.img = img;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.angulo = 0;
  this.velocidad = velocidad; 
 }

 dibujar(graphics) {
  graphics.push();
  graphics.translate(this.x + this.w / 2, this.y + this.h / 2);
  graphics.rotate(this.angulo);
  graphics.image(this.img, -this.w / 2, -this.h / 2, this.w, this.h);
  graphics.pop();
 }

 rotar() {
  this.angulo += this.velocidad;  // velocidad para rotar
 }
}

// Añade la clase global
window.ManchaN = ManchaN;
