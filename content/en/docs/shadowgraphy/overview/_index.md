---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["Shadowgraphy"]
description: "The architecture design, features, and performance of Shadowgraphy."
---

## Shadowgraphy

Shadowgraphy is a collection of cryptographic pseudonymization techniques implemented in C/C++ and wrapped in Go.

### Supported Cryptographic Algorithms

#### Format-Preserving Encryption

Shadowgraphy implements FF1 specified in [NIST SP 800-38G Rev. 1](https://csrc.nist.gov/pubs/sp/800/38/g/r1/ipd).
AES-128 is the only supported block cipher at the moment.
The implementation is heavily optimized, inspired by the research work below.
Encryption and decryption are an order of magnitude faster compared to a baseline implementation (https://github.com/comForte/Format-Preserving-Encryption).

> F. Betül Durak, Henning Horst, Michael Horst, and Serge Vaudenay. 2021. FAST: Secure and High Performance Format-Preserving Encryption and Tokenization. In Advances in Cryptology – ASIACRYPT 2021: 27th International Conference on the Theory and Application of Cryptology and Information Security, Singapore, December 6–10, 2021, Proceedings, Part III. Springer-Verlag, Berlin, Heidelberg, 465–489. https://doi.org/10.1007/978-3-030-92078-4_16