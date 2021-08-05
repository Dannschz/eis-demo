export function darkerColor(color: string): string {
  if (color.length === 7) {
    const [hash, numColor] = color.split('#');
    const n1 = numColor.substring(0, 2);
    const n2 = numColor.substring(2, 4);
    const n3 = numColor.substring(4, 6);
    const hexStr = `rgb(${parseInt(n1, 16) - 8}, ${parseInt(n2, 16) - 8}, ${
      parseInt(n3, 16) - 8
    })`;
    return hexStr;
  }
  return color;
}

export function pepe() {}
