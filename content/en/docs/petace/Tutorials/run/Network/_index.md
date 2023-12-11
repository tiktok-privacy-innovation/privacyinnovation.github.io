---
title: "PETAce-Network"
linkTitle: "PETAce-Network"
weight: 5
description: >

---

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