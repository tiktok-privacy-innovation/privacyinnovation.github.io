---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PETAce"]
description: "The architecture design, features, and performance of PETAce."
---

## PETAce
<!-- start-petace-overview -->

Privacy-Enhancing Technologies via Applied Cryptography Engineering (PETAce) is a framework for privacy-preserving computing. It provides strong privacy guarantee by analytzing and computing cryptographically pseudonymized data without revealing hidden sensitive information. It consists of the following parts:

- The "user interface" layer provides users with high-level programming interfaces for collaborative data analysis (SecureNumpy), joint SQL query (SecureSQL), and privacy-preserving machine learning (SecureML). It also supports large-scale data computing by combining Secure Multi-party Computation and parallel processing systems (such as Spark).

- The "virtual machine" layer is responsible for parsing high-level language into secure multi-party computation (MPC) operators, and performing automatic optimization and scheduling.

- The "protocol" layer includes secure multi-party computation protocols, such as general-purpose two-party secure computation protocols, privacy set intersection, and privacy information retrieval, etc.

- The "primitive" layer consists of standard cryptographic algorithms and protocols, differential privacy mechanisms, and abstract network interfaces, etc.

<figure>
<img src='images/PETAce.png' align="middle"/>
</figure>

PETAce enables fast prototyping of ideas based on privacy-enhancing technologies, and we plan to integrate state-of-the-art research results into the PETAce in future releases. Its core modules are implemented in C++ and are modularized into the following repositories.

- [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo) implements primitive hashing, encryption, and randomness generation algorithms performed by one party.
    - Hash functions: SHA-256, SHA3-256, and BLAKE2b
    - Psuedo-random number generators based on: SHAKE_128, BLAKE2Xb, and AES_ECB_CTR.
    - Sampling of bytes, 32-bit unsigned integers, and 64-bit unsigned integers from the uniform distribution
    - Prime field elliptic curve group arithmetics including hash-to-curve
    - Hashing tables: Cuckoo hashing and simple hashing
    - Partially homomorphic encryption: the Paillier cryptosystem
- [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse) includes frequently used cryptographic subprotocols such as oblivious transfer and oblivious shuffling.
    - [Naor-Pinkas OT](https://dl.acm.org/doi/10.5555/365411.365502)
    - [IKNP OT](https://link.springer.com/chapter/10.1007/978-3-540-45146-4_9) with [optimization](https://link.springer.com/article/10.1007/s00145-016-9236-6)
    - [KKRT OT](https://dl.acm.org/doi/abs/10.1145/2976749.2978381)
- [PETAce-Duet](https://github.com/tiktok-privacy-innovation/PETAce-Duet) abstracts general-purpose two-party secure computing operator protocols.
    - Protocols from [ABY](https://www.ndss-symposium.org/wp-content/uploads/2017/09/08_2_1.pdf)
    - Secure comparison protocols from [Cheetah](https://www.usenix.org/system/files/sec22-huang-zhicong.pdf)
    - The secure random shuffling protocol from [Secret-Shared Shuffle](https://link.springer.com/chapter/10.1007/978-3-030-64840-4_12)
    - Protocols that convert arithmetic shares to and from ciphertexts of the Paillier cryptosystem
- [PETAce-SetOps](https://github.com/tiktok-privacy-innovation/PETAce-SetOps) archives several protocols that perform private set operations.
    - An ECDH-PSI protocol based on Elliptic-Curve Diffie-Hellman
    - The [KKRT-PSI](https://dl.acm.org/doi/abs/10.1145/2976749.2978381) protocol based on Oblivious Pseudorandom Functions (OPRF)
    - A private join and compute protocol based on [Circuit-PSI](https://www.researchgate.net/publication/356421123_Circuit-PSI_With_Linear_Complexity_via_Relaxed_Batch_OPPRF)
- [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) provides a preliminary interface of network communication.
    - Network abstract interface
    - Socket network implementation
<!-- end-petace-overview -->
