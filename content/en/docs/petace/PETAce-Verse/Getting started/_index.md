---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce-Verse", "Getting Started"]
description: ""
---


## PETAce-Verse

### Requirements
<!-- start-petace-verse-getting-started -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Required dependency                                                            | Tested version | Use                             |
|--------------------------------------------------------------------------------|----------------|---------------------------------|
| [PETAce-Solo](https://github.com/tiktok-privacy-innovation/PETAce-Solo)       | 0.4.0          | Cryptography primitives         |
| [PETAce-Network](https://github.com/tiktok-privacy-innovation/PETAce-Network) | 0.4.0          | Network communication protocols |

| Optional dependency                                | Tested version | Use               |
|----------------------------------------------------|----------------|-------------------|
| [GoogleTest](https://github.com/google/googletest) | 1.12.1         | For running tests      |
| [Google Logging](https://github.com/google/glog)   | 0.4.0          | For running benchmarks |
| [TCLAP](https://github.com/mirror/tclap)           | 1.2.2          | For running benchmarks |

## Building PETAce-Verse

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
| `VERSE_BUILD_BENCH`       | ON/OFF        | ON      | Build C++ benchmark if set to ON.                   |
| `VERSE_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `VERSE_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

Here we give a simple example to run protocols in PETAce-Verse.

To run Party A

```shell
./build/bin/verse_example 127.0.0.1 8899 127.0.0.1 8890 0
```

To run Party B

```shell
./build/bin/verse_example 127.0.0.1 8890 127.0.0.1 8899 1
```

We have also prepared a series of performance test cases for PETAce-Verse.

To run Party A

```shell
./build/bin/verse_bench -p 0 --log_path ./verse0.log
```

To run Party B

```shell
./build/bin/verse_bench -p 1 --log_path ./verse1.log
```

You can also use ./build/bin/verse_bench -h to learn more details.
<!-- end-petace-verse-getting-started -->
