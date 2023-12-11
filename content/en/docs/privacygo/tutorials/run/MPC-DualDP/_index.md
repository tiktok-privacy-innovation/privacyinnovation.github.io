---
title: "MPC-DualDP"
linkTitle: "MPC-DualDP"
weight: 3
description: >

---

### Running the MPC-DualDP protocol

Here we give a simple example to run our protocol.

To run Party A
```shell
cd ${MPC-DualDP}/build/bin
./mpc_dualdp_example  127.0.0.1 8899 127.0.0.1 8890 0
```

To run Party B
```shell
cd ${MPC-DualDP}/build/bin
./mpc_dualdp_example  127.0.0.1 8890 127.0.0.1 8899 1
```
