# README

This tool includes some API to handle emoji.

## Install

```shell
npm install handle-emoji
```

## Usage

### import

```javascript
import { detect } from 'handle-emoji'
import emoji from 'handle-emoji'
```

### detect

```javascript
import { detect } from 'handle-emoji'

detect(str) // true or false

detect("This one includes emoji: 😄") // true
emoji.detect("This one includes emoji: 😄") // true
```

## emoji range

This tool include the following emojis:

* [Emoticons ( 1F601 - 1F64F )](https://apps.timwhitlock.info/emoji/tables/unicode#block-1-emoticons)
* [Dingbats ( 2702 - 27B0 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-2-dingbats)
* [Transport and map symbols ( 1F680 - 1F6C0 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-3-transport-and-map-symbols)
* [Enclosed characters ( 24C2 - 1F251 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-4-enclosed-characters)
* [Uncategorized](https://apps.timwhitlock.info/emoji/tables/unicode#block-5-uncategorized)
* [Additional emoticons ( 1F600 - 1F636 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-6a-additional-emoticons)
* [Additional transport and map symbols ( 1F681 - 1F6C5 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-6b-additional-transport-and-map-symbols)
* [Other additional symbols ( 1F30D - 1F567 )](https://apps.timwhitlock.info/emoji/tables/unicode#block-6c-other-additional-symbols)
* [Emoji Versions, V11.0](http://unicode.org/emoji/charts/emoji-versions.html)

## Author Info

* [GitHub](https://github.com/Tao-Quixote)
* Email: <web.taox@gmail.com>
