---
title: "Lorem ipsum dolor sit amet"
date: 2021-11-27T00:00:00-11:00
updated: 2022-07-11T00:00:00-11:00
tags: ["lorem-ipsum"]
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
layout: single
type: post
draft: true
latex: true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

# Markdown stuff

Regular, *Italic*, **Bold**, ***Bold-Italic***, `Monospace`

{{<figure src="/images/posts/Meta/lorem-ipsum/mike-beaumont-gPh1HauFE1Y-unsplash.jpg" alt="People on wooden dock during sunset" caption="Photo by [Mike Beaumont](https://unsplash.com/@mbeaumont76)">}}


## Lists

1. Lists look like this
2. Second element
3. Third element
    - First sub element
    - Second sub element


## Quotes

> **Mu"sic** (?), *n.* [F. *musique*, fr. L. *musica*, Gr. ? (sc. ?), any art over which the Muses presided, especially music, lyric poetry set and sung to music, fr. ? belonging to Muses or fine arts, fr. ? Muse.]
>
> The science and the art of tones, or musical sounds, i. e., sounds of higher or lower pitch, begotten of uniform and synchronous vibrations, as of a string at various degrees of tension; the science of harmonical tones which treats of the principles of harmony, or the properties, dependences, and relations of tones to each other; the art of combining tones in a manner to please the ear.
>
> *—[Webster](https://www.websters1913.com/words/Music)*


## Tables

|Tables|look like|this|
|------|---------|----|
|Sed ut perspiciatis|unde omnis iste natus error sit|voluptatem accusantium|
|doloremque laudantium,| totam rem aperiam,|eaque ipsa quae ab illo|
|inventore veritatis et| quasi architecto beatae|vitae dicta sunt explicabo.|
|\(\forall x \; \|f(x)\| \geq 17\)|\(\LaTeX\) works just about|everywhere|


## Code highlighting

```c
// datalen = number of bits
void blake256_update(state *S, const uint8_t *data, uint64_t datalen) {
    int left = S->buflen >> 3;
    int fill = 64 - left;

    if (left && (((datalen >> 3)) >= (unsigned) fill)) {
        memcpy((void *) (S->buf + left), (void *) data, fill);
        S->t[0] += 512;
        if (S->t[0] == 0) S->t[1]++;
        blake256_compress(S, S->buf);
        data += fill;
        datalen -= (fill << 3);
        left = 0;
    }

    while (datalen >= 512) {
        S->t[0] += 512;
        if (S->t[0] == 0) S->t[1]++;
        blake256_compress(S, data);
        data += 64;
        datalen -= 512;
    }

    if (datalen > 0) {
        memcpy((void *) (S->buf + left), (void *) data, datalen >> 3);
        S->buflen = (left << 3) + datalen;
    } else {
        S->buflen = 0;
    }
}
```
*[Source](https://github.com/monero-project/monero/blob/master/src/crypto/blake256.c), [license](https://github.com/monero-project/monero/blob/master/LICENSE)*


## LaTeX support

You can embed equations inline \(\frac{2}{c} e ^{-\frac{c^2}{2}}\) or in blocks:

$$|x|_0 = \lim_{p \to 0^{+}} \Bigg(\sum_{i=1}^{n} |x_i|^p\Bigg)^{\frac{1}{p}} = |\{i \mid x_i \neq 0\}| = support(\textbf{x})$$
