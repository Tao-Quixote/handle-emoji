import { getEmojiUnicode } from '../config'

/**
 * get all unicode of each emoji in this module
 * @return {Array} arr = [
 *    [0x**, 0x**],
 *    ...
 *    [0x**, 0x**]
 * ]
 */
export function allUnicode () {
  const unicodeArr = getEmojiUnicode()
  const result = []

  for (let subArr of unicodeArr) {
    let arr = []
    for (let index = subArr[0]; index < subArr[1]; index++) {
      arr.push(index)
    }
    result.push(arr)
  }

  return result
}
