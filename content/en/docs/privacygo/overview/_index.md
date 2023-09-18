---
title: "Overview"
linkTitle: "Overview"
weight: 1
keywords: ["PrivacyGo"]
description: "The architecture design, features, and performance of PrivacyGo."
---

## PrivacyGo

PrivacyGo is an open-source project dedicated to exploring the fusion of synergistic privacy-enhancing technologies (PETs). Our mission is to enable secure and privacy-preserving computations by leveraging innovative technological advancements.

We meticulously design strategies that harness the unique strengths of each PET, effectively mitigating their individual limitations, especially in privacy-sensitive scenarios. Through collaboration and a shared vision, we aim to shape a safer, more privacy-centric future.

Whether you're a developer, a privacy advocate, or simply enthusiastic about technological advancements, we welcome your contributions and ideas, which will be the driving force behind this transformative endeavor.

## DPCA-PSI

Among various PSI protocols that have been developed in academia and industry, ECDH-style PSI are widely used due to their low communication complexity, especially for large-scale data handling and multi-ID matching. Recent studies in [USENIX22'](https://www.usenix.org/system/files/sec22-guo.pdf) and [PoPETs23'](https://petsymposium.org/popets/2023/popets-2023-0043.pdf) revealed that ECDH-style PSI protocols disclosing intersection size might unintentionally leak membership information about the parties' sets. Particularly, in cases involving multi-ID records, the leakage is more significant compared to single-ID record cases. To address the de-anonymization concerns in PSI, we developed the DPCA-PSI protocol for computing intersection-related statistics from private datasets while reducing privacy leakage. For more detailed information, please refer to [this folder](https://github.com/tiktok-privacy-innovation/PrivacyGo/blob/main/dpca-psi).

![image](/img/docs/privacygo/1.png)

## PPAM

Privacy-Preserving Ads Measurement (PPAM) leveraging DPCA-PSI enables private ad measurement, offering advertisers the ability to measure the effectiveness of their ads while ensuring user privacy protection. This is achieved through the implementation of key privacy-preserving features, such as encrypted match keys and differential privacy (DP) guaranteed matched group size. These features ensure that user interaction between ad provider and advertiser for ad measurement computation cannot be traced back to individual users. For more detailed information, please refer to [this folder](https://github.com/tiktok-privacy-innovation/PrivacyGo/blob/main/ppam).

## Blogs

- Lorem ipsum
