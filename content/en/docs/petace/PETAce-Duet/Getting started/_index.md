---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce-Duet", "Getting Started"]
description: ""
---


## PETAce-Duet

### Requirements
<!-- start-petace-duet-getting-started -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                               |
|--------------------------------------------------------------------------------|----------------|-----------------------------------|
| [Eigen](https://gitlab.com/libeigen/eigen)                                     | 3.4.0          | Matrix and vector templates       |
| [Intel Paillier Cryptosystem Library (IPCL)](https://github.com/intel/pailliercryptolib)                                     | 2.0.0          | Paillier Encryption       |
| [Microsoft SEAL](https://github.com/microsoft/SEAL)                                     | 4.1.0          | Fully homomorphic encryption       |
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)       | 0.4.0          | Cryptography primitives           |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) | 0.4.0          | Network communication protocols   |
| [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse)     | 0.4.0          | Primitive cryptographic protocols |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |
| [Google Logging](https://github.com/google/glog)   | 0.4.0          | For running benchmarks |
| [TCLAP](https://github.com/mirror/tclap)           | 1.2.2          | For running examples and benchmarks |

## Building PETAce-Duet

We assume that all commands presented below are executed in the root directory of PETAce-Duet.

To build PETAce-Duet library (optionally with test, benchmark, and example):

```bash
cmake -S . -B build -DDUET_BUILD_TEST=ON -DDUET_BUILD_BENCH=ON -DDUET_BUILD_EXAMPLE=ON
cmake --build build
```

Output binaries can be found in `build/lib/` and `build/bin/` directories.

| Compile Options          | Values        | Default | Description                                         |
|--------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`       | Release/Debug | Release | Debug mode decreases run-time performance.          |
| `DUET_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `DUET_BUILD_BENCH`       | ON/OFF        | ON      | Build C++ benchmark if set to ON.                   |
| `DUET_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `DUET_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `DUET_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

For more compilation options, such as enabling IPCL and network agents, please refer to [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo) and [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network).

We have prepared three code examples to show you how to use PETAce-Duet.
You can find more details in [Duet Examples](example/README.md).

To run c++ examples, execute the following in commands in separate terminal sessions.

```bash
./build/bin/duet_example -p 0
./build/bin/duet_example -p 1
```

You can also use `./build/bin/duet_example -h` to learn more details.

We have also prepared a series of performance test cases for PETAce-Duet.

To run the benchmark, execute the following in commands in separate terminal sessions.

```bash
./build/bin/duet_bench -p 0 --log_path ./duet0.log
./build/bin/duet_bench -p 1 --log_path ./duet1.log
```

You can also use `./build/bin/duet_bench -h` to learn more details.
<!-- end-petace-duet-getting-started -->
