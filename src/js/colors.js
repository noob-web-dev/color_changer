function getColorList(len = 1) {
  const colors = [];
  for (let i = 0; i < len; i++) {
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

export { getColorList };
