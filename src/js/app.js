export default function construction(arr) {
  arr.sort((a, b) => b.health - a.health, 0);
  return arr;
}
