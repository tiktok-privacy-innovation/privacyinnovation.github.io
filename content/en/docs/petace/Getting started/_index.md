---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce", "Getting Started"]
description: "Prepare your development environment, quick start and basic tutorials of PETAce."
---


## PETAce-Solo

### Requirements

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                           | Tested version | Use                      |
|-----------------------------------------------|----------------|--------------------------|
| [OpenSSL](https://github.com/openssl/openssl) | 1.1.1          | Cryptographic primitives |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |
| [GoogleBenchmark](https://github.com/google/benchmark) | 1.6.1          | For running benchmarks |

### Building PETAce-Solo

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

## PETAce-Verse

### Requirements

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                             |
|--------------------------------------------------------------------------------|----------------|---------------------------------|
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)       | 0.1.0          | Cryptography primitives         |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) | 0.1.0          | Network communication protocols |

| Optional dependency                                | Tested version | Use               |
|----------------------------------------------------|----------------|-------------------|
| [GoogleTest](https://github.com/google/googletest) | 1.12.1         | For running tests |

### Building PETAce-Verse

We assume that all commands presented below are executed in the root directory of PETAce-Verse.

To build PETAce-Verse library (optionally with test and example):

```bash
cmake -S . -B build -DVERSE_BUILD_TEST=ON -DVERSE_BUILD_EXAMPLE=ON
cmake --build build
```

Output binaries can be found in `build/lib/` and `build/bin/` directories.

| Compile Options           | Values        | Default | Description                                         |
|---------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`        | Release/Debug | Release | Debug mode decreases run-time performance.          |
| `VERSE_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `VERSE_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `VERSE_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `VERSE_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |


### Running PETAce-Verse

To run Party A

```shell
./build/bin/verse_example 127.0.0.1 8899 127.0.0.1 8890 0
```

To run Party B

```shell
./build/bin/verse_example 127.0.0.1 8890 127.0.0.1 8899 1
```

## PETAce-Duet

### Requirements

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                               |
|--------------------------------------------------------------------------------|----------------|-----------------------------------|
| [Eigen](https://gitlab.com/libeigen/eigen)                                     | 3.4.0          | Matrix and vector templates       |
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)       | 0.1.0          | Cryptography primitives           |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) | 0.1.0          | Network communication protocols   |
| [PETAce-Verse](https://github.com/tiktok-privacy-innovation/PETAce-Verse)     | 0.1.0          | Primitive cryptographic protocols |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |
| [GoogleBenchmark](https://github.com/google/benchmark) | 1.6.1          | For running benchmarks |
| [TCLAP](https://github.com/mirror/tclap)     | 1.22.2         | For running examples      |

### Building PETAce-Duet

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

### Running PETAce-Duet

To run examples, execute the following in commands in separate terminal sessions.

```bash
./build/bin/duet_example -p 0
./build/bin/duet_example -p 1
```

You can also use `./build/bin/duet_example -h` to learn more details

## PETAce-SetOps

### Requirements

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                             |
|--------------------------------------------------------------------------------|----------------|---------------------------------|
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)        | 0.1.0          | Cryptography primitives         |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network)  | 0.1.0          | Network communication protocols |
| [Google Logging](https://github.com/google/glog)                               | 0.4.0          | Logging                         |
| [JSON for Modern C++(JSON)](https://github.com/nlohmann/json)                  | 3.10.1         | PSI parameter configuration     |

| Optional dependency                                | Tested version | Use                    |
|----------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest) | 1.12.1         | For running tests      |
| [gflags](https://github.com/gflags/gflags)         | 2.2.2          | For running benchmarks |

### Building PETAce-SetOps

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

### Running PETAce-SetOps

To run as Party A (a sender):

```bash
bash build/example/scripts/ecdh_psi_sender_example.sh
```

To run as Party B (a receiver):

```bash
bash build/example/scripts/ecdh_psi_receiver_example.sh
```

## PETAce-Network

### Requirements

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |

### Building PETAce-Network

We assume that all commands presented below are executed in the root directory of PETAce-Network.

To build PETAce-Network library (optionally with test and example):

```bash
cmake -S . -B build -DNETWORK_BUILD_TEST=ON -DNETWORK_BUILD_EXAMPLE=ON
cmake --build build
```

Output binaries can be found in `build/lib/` and `build/bin/` directories.

| Compile Options             | Values        | Default | Description                                         |
|-----------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`          | Release/Debug | Release | Debug mode decreases run-time performance.          |
| `NETWORK_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `NETWORK_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `NETWORK_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `NETWORK_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

### Running PETAce-Network

Here we give a simple example to run our protocol.

To run as Party A:

```shell
./build/bin/network_example 127.0.0.1 8899 127.0.0.1 8890
```

To run as Party B:

```shell
./build/bin/network_example 127.0.0.1 8890 127.0.0.1 8899
```
