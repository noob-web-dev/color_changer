function getColorList() {
  const colors = [];
  for (let i = 0; i < 20; i++) {
    const bgr = Math.floor(Math.random() * 256);
    const fr = 256 - bgr;
    const bgg = Math.floor(Math.random() * 256);
    const fg = 256 - bgg;
    const bgb = Math.floor(Math.random() * 256);
    const fb = 256 - bgb;

    const color = {
      bgColor: `rgb(${bgr}, ${bgg}, ${bgb} )`,
    };
    colors.push(color);
  }

  return colors;
}

function getAllColors() {
  const colors = [];

  for (let red = 0; red < 256; red++) {
    for (let green = 0; green < 256; green++) {
      for (let blue = 0; blue < 256; blue++) {
        const color = {
          color: `rgb(${red}, ${green}, ${blue} )`,
        };
        colors.push(color);
      }
    }
  }
  return colors;
}

export { getColorList };
