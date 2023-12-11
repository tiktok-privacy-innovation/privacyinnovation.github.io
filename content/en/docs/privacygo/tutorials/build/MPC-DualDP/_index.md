---
title: "MPC-DualDP"
linkTitle: "MPC-DualDP"
weight: 3
description: >

---

### Building MPC-DualDP

MPC-DualDP depends on [PPAM](../ppam/README.md). You need to build the dependencies of PPAM first, and then build MPC-DualDP.

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

At last, build MPC-DualDP using the following scripts.
Assume that MPC-DualDP is cloned into the directory `${MPC-DualDP}`.
```shell
cmake -B ${MPC-DualDP}/build -S ${MPC-DualDP} -DCMAKE_BUILD_TYPE=Release -DIPCL_DIR=${IPCL_INSTALL_DIR}/lib/cmake/ipcl-2.0.0  -Dnlohmann_json_DIR=${JSON}/build
cmake --build ${MPC-DualDP}/build -j
```

Output binaries can be found in `${MPC-DualDP}/build/lib/` and `${MPC-DualDP}/build/bin/` directories.

| Compile Options                | Values        | Default | Description                                         |
|--------------------------------|---------------|---------|-----------------------------------------------------|
| `CMAKE_BUILD_TYPE`             | Release/Debug | Release | The build type.                                     |
| `MPC-DUALDP_BUILD_SHARED_LIBS` | ON/OFF        | OFF     | Build a shared library if set to ON.                |
| `MPC-DUALDP_BUILD_EXAMPLE`     | ON/OFF        | ON      | Build C++ example if set to ON.                     |
| `MPC-DUALDP_BUILD_TEST`        | ON/OFF        | ON      | Build C++ test if set to ON.                        |
| `MPC-DUALDP_BUILD_DEPS`        | ON/OFF        | ON      | Download and build unmet dependencies if set to ON. |

MPC-DualDP further depends on [Google Test](https://github.com/google/googletest).
The build system will try to find these dependencies if they exist or will otherwise automatically download and build them.
