---
title: "PETAce-SetOps"
linkTitle: "PETAce-SetOps"
weight: 4
description: >

---

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