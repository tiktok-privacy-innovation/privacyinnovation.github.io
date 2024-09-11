---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce-Solo", "Getting Started"]
description: ""
---


## PETAce-Solo

### Requirements
<!-- start-petace-solo-getting-started -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                           | Tested version | Use                      |
|-----------------------------------------------|----------------|--------------------------|
| [OpenSSL](https://github.com/openssl/openssl) | 1.1.1          | Cryptographic primitives |
| [GMP](https://gmplib.org)                     | 6.3.0          | Bignumer operations for GMP-based Paillier|

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |
| [GoogleBenchmark](https://github.com/google/benchmark) | 1.6.1          | For running benchmarks |
| [Intel Paillier Cryptosystem Library](https://github.com/intel/pailliercryptolib) | 495beaad1f6e70741f2b5cf1279cb919fd66d894 | For partially homomorphic encryption |

## Building PETAce-Solo

We assume that all commands presented below are executed in the root directory of PETAce-Solo.

To build PETAce-Solo library (optionally with test, benchmark, and example):

```bash
cmake -S . -B build -DSOLO_BUILD_TEST=ON -DSOLO_BUILD_BENCH=ON -DSOLO_BUILD_EXAMPLE=ON
cmake --build build
```

Output binaries can be found in `build/lib/` and `build/bin/` directories.

| Compile Options          | Values        | Default | Description                                         |
|--------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`       | Release/Debug | Release | Debug mode decreases run-time performance.          |
| `SOLO_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `SOLO_BUILD_BENCH`       | ON/OFF        | ON      | Build C++ benchmark if set to ON.                   |
| `SOLO_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `SOLO_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `SOLO_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |
| `SOLO_USE_IPCL`          | ON/OFF        | OFF     | BUILD IPCL-based PHE if set to ON, GMP-based PHE if set to off|

### Adding Partially Homomorphic Encryption

By default, the Paillier cryptosystem is a generic implementation that uses the GMP library.
For power users who seek extreme performance on supported processors, we provide the option to switch to the IPCL-based implementation.
To use the IPCL-based Paillier, follow instructions of [Intel Paillier Cryptosystem Library](https://github.com/intel/pailliercryptolib) and install it to `${IPCL_INSTALL_DIR}`.
We recommend the commit `495beaad1f6e70741f2b5cf1279cb919fd66d894` instead of v2.0.0.
Build PETAce-Solo library with extra configuration:

```bash
cmake -S . -B build -DSOLO_USE_IPCL=ON -DIPCL_DIR=${IPCL_INSTALL_DIR}/lib/cmake/ipcl-2.0.0
```
<!-- end-petace-solo-getting-started -->
