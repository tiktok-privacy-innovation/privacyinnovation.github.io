---
title: "PETAce-Verse"
linkTitle: "PETAce-Verse"
weight: 2
description: >

---

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