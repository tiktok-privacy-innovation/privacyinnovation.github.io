---
title: "Go Wrapper"
linkTitle: "Go Wrapper"
weight: 2
description: >

---

Assume that C export libraries are already built and stored in the "build/lib" directory.
Pass `CGO_LDFLAGS='-L../../build/lib'` to build or test Go wrappers.
For example, to test Go wrappers, execute the following comment from the directory "shadow/fpe_go".

```bash
CGO_LDFLAGS='-L../../build/lib' go test ./
```