---
title: "PPAM"
linkTitle: "PPAM"
weight: 2
description: >

---

### Building PPAM

PPAM depends on [DPCA-PSI](../dpca-psi/README.md). You need to build the dependencies of DPCA-PSI first, and then build PPAM.

First, install NASM with `apt install nasm`, or build and install NASM from source code downloaded from [NASM's official page](https://www.nasm.us/). Assume that you are working in the root directory of NASM source code.

```shell
./configure
make -j
make install
```

Second, build and install IPCL using the following scripts.
Assume that IPCL is cloned into the directory `${IPCL}` and will be installed to the directory `${IPCL_INSTALL_DIR}`.

```shell
cmake -B ${IPCL}/build -S ${IPCL} -DCMAKE_INSTALL_PREFIX=${IPCL_INSTALL_DIR} -DCMAKE_BUILD_TYPE=Release -DIPCL_TEST=OFF -DIPCL_BENCHMARK=OFF
cmake --build ${IPCL}/build -j
cmake --build ${IPCL}/build --target install
```

Third, build [JSON for Modern C++ (JSON)](https://github.com/nlohmann/json) using the following scripts.
Assume that JSON is cloned into the directory `${JSON}`.

```shell
cmake -B ${JSON}/build -S ${JSON}
cmake --build ${JSON}/build -j
```

At last, build PPAM using the following scripts.
Assume that PPAM is cloned into the directory `${PPAM}`.

```shell
cmake -B ${PPAM}/build -S ${PPAM} -DCMAKE_BUILD_TYPE=Release -DIPCL_DIR=${IPCL_INSTALL_DIR}/lib/cmake/ipcl-2.0.0  -Dnlohmann_json_DIR=${JSON}/build
cmake --build ${PPAM}/build -j
```

Output binaries can be found in `${PPAM}/build/lib/` and `${PPAM}/build/bin/` directories.

| Compile Options          | Values       | Default | Description                         |
|--------------------------|--------------|---------|-------------------------------------|
| `CMAKE_BUILD_TYPE`        | Release/Debug| Release | The build type.                     |
| `PPAM_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.          |
| `PPAM_BUILD_EXAMPLE`        | ON/OFF        | ON      | Build C++ example if set to ON.                 |
| `PPAM_BUILD_TEST`                | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `PPAM_BUILD_DEPS`               | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

PPAM further depends on [OpenSSL](https://github.com/openssl/openssl), [Eigen](https://gitlab.com/libeigen/eigen), [gflags](https://github.com/gflags/gflags), [Google Logging](https://github.com/google/glog), and [Google Test](https://github.com/google/googletest).
The build system will try to find these dependencies if they exist or will otherwise automatically download and build them.