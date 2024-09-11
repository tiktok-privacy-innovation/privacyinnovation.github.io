---
title: "Getting Started"
linkTitle: "Getting Started"
weight: 2
keywords: ["PETAce-Network", "Getting Started"]
description: ""
---


## PETAce-Network

### Requirements
<!-- start-petace-network-getting-started -->

| System | Toolchain                                             |
|--------|-------------------------------------------------------|
| Linux  | Clang++ (>= 5.0) or GNU G++ (>= 5.5), CMake (>= 3.15) |

| Optional dependency                                    | Tested version | Use                    |
|--------------------------------------------------------|----------------|------------------------|
| [GoogleTest](https://github.com/google/googletest)     | 1.12.1         | For running tests      |
| [gRPC](https://github.com/grpc/grpc)                   | 1.62.1         | For agent-assisted network     |

## Building PETAce-Network

We assume that all commands presented below are executed in the root directory of PETAce-Network.

To build PETAce-Network library (optionally with test and example):

```bash
cmake -S . -B build -DNETWORK_BUILD_TEST=ON -DNETWORK_BUILD_EXAMPLE=ON
cmake --build build
```

PETAce-Network supports network agents based on [gRPC](https://github.com/grpc/grpc).
Here we provide the following scripts to help users install gRPC.
Assume that gRPC is cloned into the directory `${gRPC}` and will be installed to the directory `${gRPC_INSTALL_DIR}`.

```bash
cmake -S . -B build  -DCMAKE_INSTALL_PREFIX=${gRPC_INSTALL_DIR} -DgRPC_INSTALL=ON -DgRPC_BUILD_TESTS=OFF -DgRPC_SSL_PROVIDER=package
cmake --build ${gRPC}/build -j
cmake --build ${gRPC}/build --target install
```

Then, build PETAce-Network library with extra configuration(optionally with test and example):

```bash
cmake -B build -S . -DCMAKE_PREFIX_PATH=${gRPC_INSTALL_DIR} -DNETWORK_BUILD_AGENT=ON -DNETWORK_BUILD_TEST=ON -DNETWORK_BUILD_EXAMPLE=ON
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
| `NETWORK_BUILD_AGENT`       | ON/OFF        | OFF     | Build agent-assisted network if set to ON.          |

## Running the PETAce-Network protocol

Here we give a simple example to run our socket protocol.

To run as Party A:

```shell
./build/bin/network_example 127.0.0.1 8899 127.0.0.1 8890
```

To run as Party B:

```shell
./build/bin/network_example 127.0.0.1 8890 127.0.0.1 8899
```
<!-- end-petace-network-getting-started -->
