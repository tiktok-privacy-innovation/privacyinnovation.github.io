---
title: "C Export Libraries"
linkTitle: "C Export Libraries"
weight: 1
description: >

---

Assume that all commands presented below are executed in the root directory of Shadowgraphy.

```bash
cmake -B build -S . -DCMAKE_BUILD_TYPE=Release -DSHADOW_BUILD_C_EXPORT=ON
cmake --build build -j
```