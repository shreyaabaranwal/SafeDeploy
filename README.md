# 🚀 Cloud-Native CI/CD Platform with Safe Deployment & Auto Failure Detection

## 📌 Overview

This project demonstrates a **production-grade, cloud-native CI/CD system** built entirely on AWS. It automates the full lifecycle from **code commit → build → test → deploy → validate → serve**, ensuring that only **healthy and verified deployments** are exposed to users.

The system incorporates **infrastructure-level validation, container orchestration, and load-balanced traffic routing** to simulate real-world DevOps environments.

---

## 🎯 Objectives

* Build a **fully automated CI/CD pipeline**
* Ensure **zero-downtime deployments**
* Implement **health-based traffic routing**
* Detect and prevent faulty deployments
* Gain hands-on experience with **AWS DevOps ecosystem**

---

## 🏗️ System Architecture

```id="wz9w3o"
Developer → CloudShell → CodeCommit → CodePipeline → CodeBuild → ECR → ECS (Fargate) → ALB → Users
                          ↓
                    CloudWatch Logs & Metrics
                          ↓
                         IAM (Access Control Layer)
```

---
<img width="977" height="650" alt="image" src="https://github.com/user-attachments/assets/c237c3f2-2a57-4d8c-b4ec-ca904a23b90c" />

## ⚙️ Tech Stack & Services Used

### 💻 Development & Access

* **CloudShell**

  * Used for Git operations, AWS CLI, debugging, and pipeline triggering
  * Eliminates local environment dependency

---

### 🔐 Identity & Security

* **IAM (Identity and Access Management)**

  * Managed permissions for:

    * CodeBuild (ECR access)
    * CodePipeline (ECS deploy)
    * ECS task execution roles
  * Ensures **least-privilege access control**

---

### 🗂️ Source Control

* **AWS CodeCommit**

  * Private Git repository
  * Triggers pipeline on code push

---

### 🔁 CI/CD Orchestration

* **AWS CodePipeline**

  * Automates:

    * Source → Build → Deploy stages
  * Event-driven pipeline execution

---

### 🏗️ Build System

* **AWS CodeBuild**

  * Runs in isolated container environment
  * Executes:

    * Docker build
    * Test scripts
    * Push to ECR
  * Uses `buildspec.yml`

---

### 📦 Container Registry

* **Amazon ECR (Elastic Container Registry)**

  * Stores versioned Docker images
  * Secure image retrieval for ECS

---

### 🚢 Compute Layer

* **Amazon ECS (Fargate)**

  * Serverless container orchestration
  * No EC2 management required
  * Handles:

    * Task scheduling
    * Scaling
    * Deployment updates

---

### 🌐 Networking & Traffic Routing

* **Application Load Balancer (ALB)**

  * Public entry point
  * Routes HTTP traffic to ECS tasks
  * Performs **health checks**

* **Target Group**

  * Registers ECS tasks
  * Tracks health status
  * Enables intelligent routing

---

### 🖥️ Infrastructure (Underlying)

* **Amazon EC2 (Implicit via ALB & Networking)**

  * Provides VPC, subnets, and networking backbone
  * Hosts ALB infrastructure

---

### 📊 Monitoring & Observability

* **Amazon CloudWatch**

  * Logs:

    * ECS container logs
    * CodeBuild logs
  * Metrics:

    * CPU / Memory
    * Task failures
  * Used for debugging deployment issues

---

## 🔄 End-to-End Workflow

```id="k7d4bm"
1. Developer pushes code (CloudShell → CodeCommit)
2. CodePipeline triggers automatically
3. CodeBuild:
   → Builds Docker image
   → Runs tests
   → Pushes image to ECR
4. ECS:
   → Pulls new image
   → Starts new task
5. ALB:
   → Sends /health request
   → Validates container
6. If healthy:
   → Traffic routed to container
7. If unhealthy:
   → Task terminated (auto failure handling)
```

---

## 🧪 Health Check Mechanism

```id="v2n3x7"
GET /health → 200 OK
```

* Lightweight endpoint
* Independent of DB
* Used by ALB for validation

---

## ⚠️ Real-World Challenges & Debugging

### Issue Encountered:

```id="r2km2z"
503 Service Unavailable
0 healthy targets
```

### Root Causes:

* Application not responding to `/health`
* Double `app.listen()` causing crash
* DB dependency blocking startup
* Health check timeout too aggressive
* ECS tasks restarting continuously

---

## 🛠️ Fixes Implemented

* ✅ Added `/health` endpoint
* ✅ Fixed server binding (`0.0.0.0:3000`)
* ✅ Removed duplicate server start
* ✅ Increased health check grace period
* ✅ Corrected ECS ↔ ALB target mapping
* ✅ Simplified startup (removed blocking DB init)

---

## 📊 Final Outcome

| Metric        | Before      | After              |
| ------------- | ----------- | ------------------ |
| Deployment    | Failed ❌    | Successful ✅       |
| Target Health | 0 ❌         | 1 Healthy ✅        |
| Availability  | 503 Error ❌ | Working Endpoint ✅ |
| Stability     | Unstable ❌  | Stable ✅           |

---

## 🌐 Live Endpoint

```id="n8hvxj"
http://<ALB-DNS>/health
```

Expected Response:

```id="x8e4tn"
OK
```

---

## 🔐 IAM Role Design

* CodeBuild Role:

  * ECR access
  * CloudWatch logs

* CodePipeline Role:

  * ECS update permissions
  * Task definition registration

* ECS Task Role:

  * Pull image from ECR
  * Logging permissions

---

## 🧠 Key DevOps Learnings

* Container running ≠ application ready
* Health checks are critical for production systems
* Startup dependencies must not block readiness
* Observability is essential for debugging
* Proper IAM design is required for secure pipelines

---

## 🚀 Future Enhancements

* 🔁 Blue-Green deployment (CodeDeploy)
* 📊 Prometheus + Grafana monitoring
* 📦 Terraform (Infrastructure as Code)
* ⚡ Auto-scaling based on metrics
* 🔄 Canary deployments

---

## 💼 Resume Highlight

> Designed and implemented a cloud-native CI/CD pipeline using AWS services with automated container deployment, health-based validation, and failure detection to ensure reliable production releases.

---

## 👩‍💻 Author

**Shreya Baranwal**

---

## ⭐ Support

If you found this useful, give it a ⭐ and share!
