---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce-SetOps", "Getting Started"]
description: ""
---


## PETAce-SetOps

### Requirements
<!-- start-petace-setops-getting-started -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                                  |
|--------------------------------------------------------------------------------|----------------|--------------------------------------|
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)        | 0.3.0          | Cryptography primitives              |
| [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse)      | 0.3.0          | Primitive cryptographic protocols    |
| [PETAce-Duet](https://github.com/tiktok-privacy-innovation/PETAce-Duet)        | 0.3.0          | Two-party secure computing protocols |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network)  | 0.3.0          | Network communication protocols      |
| [Google Logging](https://github.com/google/glog)                               | 0.4.0          | Logging                              |
| [JSON for Modern C++(JSON)](https://github.com/nlohmann/json)                  | 3.10.1         | PSI parameter configuration          |

| Optional dependency                                | Tested version | Use                    |
|----------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest) | 1.12.1         | For running tests      |
| [gflags](https://github.com/gflags/gflags)         | 2.2.2          | For running benchmarks |

## Building PETAce-SetOps

We assume that all commands presented below are executed in the root directory of PETAce-SetOps.

First, build [JSON for Modern C++ (JSON)](https://github.com/nlohmann/json) using the following scripts.
Assume that JSON is cloned into the directory `${JSON}`.

```bash
cmake -B ${JSON}/build -S ${JSON}
cmake --build ${JSON}/build -j
```

Then, build PETAce-SetOps library (optionally with test and example):

```bash
cmake -S . -B build -Dnlohmann_json_DIR=${JSON}/build -DSETOPS_BUILD_TEST=ON -DSETOPS_BUILD_EXAMPLE=ON
cmake --build build
```

Output binaries can be found in `build/lib/` and `build/bin/` directories.

| Compile Options            | Values        | Default | Description                                         |
|----------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`         | Release/Debug | Release | Debug mode decreases run-time performance.          |
| `SETOPS_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `SETOPS_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `SETOPS_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `SETOPS_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

Here we give a simple example to run protocols in PETAce-SetOps.

To run as Party A (a sender):

```bash
bash build/example/scripts/ecdh_psi_sender_example.sh
```

To run as Party B (a receiver):

```bash
bash build/example/scripts/ecdh_psi_receiver_example.sh
```
<!-- end-petace-setops-getting-started -->
