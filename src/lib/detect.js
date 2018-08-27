import { getEmojiUnicode } from '../config'
import { key2unicode } from '../tools'

const upperLimit = 1
const lowerLimit = 0

/**
 * detect if the str contains emoji
 * @param {string} str
 * @return boolean
 */
export function detect (str) {
  if (!str) {
    return false
  }

  const emojiUnicodeArr = getEmojiUnicode()

  for (let k of str) {
    // get the unicode
    let unicode = key2unicode(k)
    for (let subArr of emojiUnicodeArr) {
      if (unicode >= subArr[lowerLimit] && unicode <= subArr[upperLimit]) {
        return true
      }
    }
  }

  return false
}
