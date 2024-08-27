---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PETAce"]
description: "The architecture design, features, and performance of PETAce."
---

## PETAce
<!-- start-petace-overview -->


- The "user interface" layer provides users with high-level programming interfaces for collaborative data analysis (SecureNumpy), joint SQL query (SecureSQL), and privacy-preserving machine learning (SecureML).

- The "virtual machine" layer is responsible for parsing high-level language into secure multi-party computation (MPC) operators, and performing automatic optimization and scheduling.

- The "protocol" layer includes secure multi-party computation protocols, such as general-purpose two-party secure computation protocols, privacy set intersection, and privacy information retrieval, etc.

- The "primitive" layer consists of standard cryptographic algorithms and protocols, differential privacy mechanisms, and abstract network interfaces, etc.

<figure>
</figure>


    - Hash functions: SHA-256, SHA3-256, and BLAKE2b
    - Psuedo-random number generators based on: SHAKE_128, BLAKE2Xb, and AES_ECB_CTR.
    - Sampling of bytes, 32-bit unsigned integers, and 64-bit unsigned integers from the uniform distribution
    - Prime field elliptic curve group arithmetics including hash-to-curve
    - Hashing tables: Cuckoo hashing and simple hashing
    - Partially homomorphic encryption: the Paillier cryptosystem
    - [Naor-Pinkas OT](https://dl.acm.org/doi/10.5555/365411.365502)
    - [IKNP OT](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_9) with [optimization](https://link.springer.com/article/10.1007/s00145-016-9236-6)
    - [KKRT OT](https://dl.acm.org/doi/abs/10.1145/2976749.2978381)
    - Protocols from [ABY](https://www.ndss-symposium.org/wp-content/uploads/2017/09/08_2_1.pdf)
    - Secure comparison protocols from [Cheetah](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf)
    - The secure random shuffling protocol from [Secret-Shared Shuffle](https://link.springer.com/chapter/10.1007/978-3-030-64840-4_12)
    - Protocols that convert arithmetic shares to and from ciphertexts of the Paillier cryptosystem
    - An ECDH-PSI protocol based on Elliptic-Curve Diffie-Hellman
    - The [KKRT-PSI](https://dl.acm.org/doi/abs/10.1145/2976749.2978381) protocol based on Oblivious Pseudorandom Functions (OPRF)
    - A private join and compute protocol based on [Circuit-PSI](https://www.researchgate.net/publication/356421123_Circuit-PSI_With_Linear_Complexity_via_Relaxed_Batch_OPPRF)
    - Network abstract interface
    - Socket network implementation

- [Python API](python) provides Python APIs such as SecureNumpy, SecureML, SecureSQL, and SetOps.
<!-- end-petace-overview -->
<!-- end-petace-overview -->
