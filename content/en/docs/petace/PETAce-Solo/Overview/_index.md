---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PETAce-Solo"]
description: ""
---

## PETAce-Solo
<!-- start-petace-solo-overview -->

PETAce-Solo is a C++ library that implements or wraps primitive cryptography schemes.
It is one of the many components in [the framework PETAce](https://github.com/tiktok-privacy-innovation/PETAce).

PETAce-Solo implements or wraps the following primitives that involves only one party, as implied by the same "Solo".
- Hash function: SHA-256, SHA3-256, and BLAKE2b.
- Psuedo-random number generators based on: SHAKE_128, BLAKE2Xb, and AES_ECB_CTR.
- Sampling of bytes, 32-bit unsigned integers, and 64-bit unsigned integers from the uniform distribution.
- Prime field elliptic curve group arithmetics including hash-to-curve.
- Hashing tables: Cuckoo hashing and simple hashing.
- Partially homomorphic encryption: the Paillier cryptosystem.
<!-- end-petace-solo-overview -->
