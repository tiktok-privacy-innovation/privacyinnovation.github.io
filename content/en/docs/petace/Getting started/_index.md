---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce", "Getting Started"]
description: "Prepare your development environment, quick start and basic tutorials of PETAce."
---


## PETAce-Solo

### Requirements
<!-- start-petace-requirements -->

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

## Building PETAce

The commands presented below should be executed in the root directory of PETAce.

First, build [JSON for Modern C++ (JSON)](https://github.com/nlohmann/json) using the following scripts.
Assume that JSON is cloned into the directory `${JSON}`.

```bash
cmake -B ${JSON}/build -S ${JSON}
cmake --build ${JSON}/build -j
```

Then, build PETAce library:

```bash
cmake -S . -B build -Dnlohmann_json_DIR=${JSON}/build -DPETACE_BUILD_PYTHON=ON
cmake --build build
cd build
make wheel
```

Output binaries can be found in `build/python/wheel/` directory.

| Compile Options            | Values        | Default | Description                                         |
|----------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`         | Release/Debug | Release | Debug mode decreases run-time performance.          |

For more compilation options, such as enabling IPCL and network agents, please refer to [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo) and [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network).

For instructions on how to run examples of PETAce, please refer to the instructions in the example directory.
<!-- end-petace-requirements -->
<!-- end-petace-requirements -->
