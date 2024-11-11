function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let w = 40; // lebar jajargenjang
  let h = 20; // tinggi jajargenjang

  for (let y = 0; y < height; y += h * 1.5) {
    for (let x = -w; x < width; x += w * 1.5) {
      // Mengatur warna hitam dan putih bergantian
      if ((x / w + y / h) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      
      // Menggambar jajar genjang
      beginShape();
      vertex(x, y);
      vertex(x + w, y);
      vertex(x + w * 1.5, y + h);
      vertex(x + w * 0.5, y + h);
      endShape(CLOSE);
    }
  }
}
