---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce", "Getting Started"]
description: "Prepare your development environment, quick start and basic tutorials of PETAce."
---


## PETAce-Solo

### Requirements
<!-- start-section-1 -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                               |
|--------------------------------------------------------------------------------|----------------|-----------------------------------|
| [OpenSSL](https://github.com/openssl/openssl) | 1.1.1          | Cryptographic primitives |
| [GMP](https://gmplib.org)                     | 6.3.0          | Bignumer operations for GMP-based Paillier|
| [Eigen](https://gitlab.com/libeigen/eigen)                                     | 3.4.0          | Matrix and vector templates       |
| [Microsoft SEAL](https://github.com/microsoft/SEAL)                                     | 4.1.0          | Fully homomorphic encryption       |
| [Google Logging](https://github.com/google/glog)                               | 0.4.0          | Logging                              |
| [JSON for Modern C++(JSON)](https://github.com/nlohmann/json)                  | 3.10.1         | PSI parameter configuration          |
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)       | 0.3.0          | Cryptography primitives           |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) | 0.3.0          | Network communication protocols   |
| [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse)     | 0.3.0          | Primitive cryptographic protocols |
| [PETAce-SetOps](https://github.com/tiktok-privacy-innovation/PETAce-SetOps)     | 0.3.0          | Set operations MPC protocol |
| [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Duet)     | 0.3.0          | MPC protocol |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [Intel Paillier Cryptosystem Library (IPCL)](https://github.com/intel/pailliercryptolib)                                     | 495beaad1f6e70741f2b5cf1279cb919fd66d894| Paillier Encryption       |
| [gRPC](https://github.com/grpc/grpc)                                          | 1.62.1          | Network communication              |
<!-- end-section-1 -->
<!-- end-section-1 -->
