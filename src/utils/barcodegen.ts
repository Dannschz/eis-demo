export default function barcodeGenerator(): string {
  const left = 510;
  const middle = Math.floor(Math.random() * (9999 - 1000) + 1000);
  const rigth = Math.floor(Math.random() * (99999 - 10000) + 10000);

  return `${left}${middle}${rigth}`;
  // return '7591005994324';
}
