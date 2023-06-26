---
title: "Lorem ipsum dolor sit amet"
date: 2021-11-27T00:00:00-11:00
updated: 2022-12-11T15:30:00-11:00
tags: ["lorem-ipsum", "dolor", "amet", "Pompejanischer", "latex", "monero"]
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
layout: single
type: post
draft: true
latex: true
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


## Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?


> **1914 translation by H. Rackham**
> 
> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?


{{<figure src="/images/posts/Meta/lorem-ipsum/Pompejanischer_Maler_um.webp" alt="Pompejanischer Maler um 10/20" em="*[Pompejanischer Maler um 10/20](https://commons.wikimedia.org/wiki/File:Pompejanischer_Maler_um_10_20_001.jpg), Public domain, via Wikimedia Commons*">}}


## LaTeX support

You can embed equations inline
{{<latex-inline>}}
\frac{2}{c} e ^{-\frac{c^2}{2}}
{{</latex-inline>}}
or in blocks

{{<latex>}}
|x|_0 = \lim_{p \to 0^{+}} \Bigg(\sum_{i=1}^{n} |x_i|^p\Bigg)^{\frac{1}{p}} = |\{i \mid x_i \neq 0\}| = support(\textbf{x})
{{</latex>}}


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

// datalen = number of bits
void blake224_update(state *S, const uint8_t *data, uint64_t datalen) {
    blake256_update(S, data, datalen);
}
```
*[Source](https://github.com/monero-project/monero/blob/master/src/crypto/blake256.c), [license](https://github.com/monero-project/monero/blob/master/LICENSE)*


## Other markdown stuff

*Italics*, **Bold**, ***Bold Italics***

1. Lists look like this
2. Second element
3. Third element
    - First sub element
    - Second sub element[^1]

[^1]: This is the first footnote.


|Tables|look|like this|
|------|----|---------|
|Sed ut perspiciatis|unde omnis iste natus error sit|voluptatem accusantium|
|doloremque laudantium,| totam rem aperiam|, eaque ipsa quae ab illo|
|inventore veritatis et| quasi architecto beatae|vitae dicta sunt explicabo.|
|{{<latex-inline>}}\forall x \; \|f(x)\| \geq 17{{</latex-inline>}}|LaTeX works everywhere|:)|


```goat
      .               .                .               .--- 1          .-- 1     / 1
     / \              |                |           .---+            .-+         +
    /   \         .---+---.         .--+--.        |   '--- 2      |   '-- 2   / \ 2
   +     +        |       |        |       |    ---+            ---+          +
  / \   / \     .-+-.   .-+-.     .+.     .+.      |   .--- 3      |   .-- 3   \ / 3
 /   \ /   \    |   |   |   |    |   |   |   |     '---+            '-+         +
 1   2 3   4    1   2   3   4    1   2   3   4         '--- 4          '-- 4     \ 4

```