---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PETAce-Duet"]
description: ""
---

## PETAce-Duet
<!-- start-petace-duet-overview -->

PETAce-Duet is a collection of general-purpose two-party secure computing protocols.
It is one of the crucial building blocks of the framework [PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

As implied by the name "Duet", PETAce-Duet implements various two-party MPC protocols as follows:

- [ABY](https://www.ndss-symposium.org/wp-content/uploads/2017/09/08_2_1.pdf) protocols: arithmetic sharing, boolean sharing, share conversion, and operations over shares (e.g., addition and multiplication over arithmetic shares and bit-wise AND operation over boolean shares).

- Secure comparison protocols from ABY and [Cheetah](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf).

- [Secret shared shuffle](https://link.springer.com/chapter/10.1007/978-3-030-64840-4_12). The permutation network will be available in a future release.

- [Oblivious switching network](https://eprint.iacr.org/2021/243.pdf) with the random OT optimizations.

- Homomorphic Encryption (HE): Duet integrates the Paillier cryptosystem to improve two-party secure computation.
For example, HE enables efficient alternative solutions to problems such as secure shuffling and linear matrix operations.
A generic implementation of the Paillier cryptosystem based on the GMP library is provided in PETAce-Solo.
On supported processors, users can switch to the Intel Paillier Cryptosystem Library (IPCL) for extreme performance.
We support the conversion between HE ciphertexts and arithmetic shares. As a result, we achieve an "ABH" framework where arithmetic shares, Boolean shares, and HE shares (secret shares encrypted by HE) can be converted to one another efficiently.

- Fully Homomorphic Encryption (FHE): Duet integrates the BFV scheme to improve two-party Beaver triple generation.
The underlying BFV functionalities depend on Microsoft SEAL.

- Discrete Gaussian Sampling: Duet leverages MPC to sample random noise according to Discrete Gaussian distribution and outputs the noise in the form of secret sharing.

The core functionalities of Duet are written in C++ to provide the best performance.
A Python interface is provided in [PETAce](https://github.com/tiktok-privacy-innovation/PETAce).
<!-- end-petace-duet-overview -->
