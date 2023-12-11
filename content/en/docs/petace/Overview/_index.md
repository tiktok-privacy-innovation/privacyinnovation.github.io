---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PETAce"]
description: "The architecture design, features, and performance of PETAce."
---

## PETAce

Privacy-Enhancing Technologies via Applied Cryptography Engineering (PETAce) enables fast prototyping of ideas based on privacy-enhancing technologies. PETAce is a long-term development project and is planned to catch up with state-of-the-art research results in future releases. It is implemented in C++ and is modularized into the following repositories.

- [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo) implements primitive hashing, encryption, and randomness generation algorithms performed by one party.
- [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse) includes frequently used cryptographic subprotocols such as oblivious transfer and oblivious shuffling.
- [PETAce-Duet](https://github.com/tiktok-privacy-innovation/PETAce-Duet) abstracts general-purpose two-party secure computing operator protocols.
- [PETAce-SetOps](https://github.com/tiktok-privacy-innovation/PETAce-SetOps) archives several protocols that perform private set operations.
- [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) provides a preliminary interface of network communication.

### PETAce-Solo

PETAce-Solo is a C++ library that implements or wraps primitive cryptography schemes. It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

PETAce-Solo implements or wraps the following primitives that involves only one party, as implied by the same "Solo".

Hash function: SHA-256, SHA3-256, and BLAKE2b.
Psuedo-random number generators based on: SHAKE_128, BLAKE2Xb, and AES_ECB_CTR.
Sampling of bytes, 32-bit unsigned integers, and 64-bit unsigned integers from the uniform distribution.
Prime field elliptic curve group arithmetics including hash-to-curve.

### PETAce-Verse


PETAce-Verse is a collection of primitive cryptographic protocols.
It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

PETAce-Verse implements frequently, repeatedly called subprotocols, as implied by the same "Verse".
Examples are oblivious transfer, oblivious pseudorandom functions, (vector) oblivious linear evaluation, etc.
Currently, PETAce-Verse includes: [Naor-Pinkas OT](https://dl.acm.org/doi/10.5555/365411.365502) and [IKNP OT](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_9) with [optimization](https://link.springer.com/article/10.1007/s00145-016-9236-6).

### PETAce-Duet

PETAce-Duet is a collection of general-purpose two-party secure computing protocols.
It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

PETAce-Duet implements the following protocols that involve two parties, as implied by the name "Duet".

- [ABY](https://www.ndss-symposium.org/wp-content/uploads/2017/09/08_2_1.pdf) protocols: additive sharing, binary sharing, share conversion, and operations over shares (e.g., addition and multiplication over additive shares and bit-wise AND operation over binary shares).
-  Secure comparison protocols from ABY and [Cheetah](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf).
- [Secret shared shuffle](https://link.springer.com/chapter/10.1007/978-3-030-64840-4_12). Permutation network will be available in a future release.

### PETAce-SetOps

PETAce-SetOps is a collection of protocols that perform private set operations.
It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

Private set operations generally include private set intersection(PSI), private join and compute(PJC), and private information retrieval(PIR) protocols.
Currently, PETAce-SetOps implements a PSI protocol based on Elliptic-Curve Diffie-Hellman (ECDH-PSI).

### PETAce-Network

PETAce-Network defines abstract network communication interfaces.
It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

Currently, PETAce-Network instantiate the network communication interface using the socket protocol.
