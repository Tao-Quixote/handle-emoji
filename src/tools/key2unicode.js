/**
 * get the unicode of Hex
 * @param {char} key
 * @return String
 */
export function key2unicode (key) {
  return `0x${key.codePointAt(0).toString(16)}`
}
