export const interviewQuestions = [
  {
    "id": 1,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is AWS?",
    "explanation": "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. It offers over 200 fully featured services from data centers globally, including compute, storage, databases, networking, analytics, machine learning, and security. It allows businesses to scale rapidly and lower IT costs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A comprehensive cloud platform offering compute, storage, and databases over the internet"
  },
  {
    "id": 2,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is Cloud Computing?",
    "explanation": "Cloud computing is the on-demand delivery of IT resources (like compute power, storage, and databases) over the internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you access technology services on an as-needed basis from a cloud provider like AWS.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "On-demand delivery of IT resources over the internet with pay-as-you-go pricing"
  },
  {
    "id": 3,
    "category": "AWS & DevOps Fundamentals",
    "title": "What are the major AWS services?",
    "explanation": "Key services include:\n- **Compute**: Amazon EC2, AWS Lambda, Amazon ECS/EKS\n- **Storage**: Amazon S3, Amazon EBS, Amazon EFS\n- **Database**: Amazon RDS, Amazon DynamoDB\n- **Networking**: Amazon VPC, Route 53, Elastic Load Balancing\n- **Security**: AWS IAM, AWS KMS\n- **DevOps**: AWS CodePipeline, CodeBuild, CloudFormation",
    "code": "",
    "example": "",
    "tip": "Categorize them by Compute, Storage, DB, and Network when answering.",
    "summary": "EC2, S3, RDS, VPC, IAM, Lambda, and CodePipeline"
  },
  {
    "id": 4,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is the difference between IaaS, PaaS, and SaaS?",
    "explanation": "- **IaaS (Infrastructure as a Service)**: You manage the OS, runtime, and application. AWS manages hardware and networking. (Example: Amazon EC2).\n- **PaaS (Platform as a Service)**: You manage only the application and data. AWS manages the OS and runtime. (Example: AWS Elastic Beanstalk, RDS).\n- **SaaS (Software as a Service)**: Fully managed software accessed via browser. You manage nothing. (Example: Salesforce, Gmail).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "IaaS provides bare servers; PaaS provides runtimes; SaaS provides fully finished apps"
  },
  {
    "id": 5,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is DevOps?",
    "explanation": "DevOps is the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity. It bridges the gap between software development (Dev) and IT operations (Ops) by automating infrastructure, workflows, and continuously measuring application performance.",
    "code": "",
    "example": "",
    "tip": "Emphasize that DevOps is a culture, not just a toolset.",
    "summary": "A cultural and technical movement bridging Development and Operations to deliver software faster"
  },
  {
    "id": 6,
    "category": "AWS & DevOps Fundamentals",
    "title": "What are the main principles of DevOps?",
    "explanation": "The core principles are known by the acronym CALMS:\n- **C**ulture: Shared responsibility and collaboration.\n- **A**utomation: CI/CD, Infrastructure as Code, automated testing.\n- **L**ean: Focus on producing value and eliminating waste.\n- **M**easurement: Tracking KPIs, logging, and monitoring.\n- **S**haring: Sharing ideas, feedback, and tools across teams.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Culture, Automation, Lean, Measurement, and Sharing (CALMS)"
  },
  {
    "id": 7,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is CI/CD?",
    "explanation": "CI/CD stands for Continuous Integration and Continuous Delivery (or Deployment).\nIt is the automated pipeline that takes source code from a developer's commit, compiles it, runs automated unit and integration tests, and then securely deploys it across staging and production environments.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The automated process of building, testing, and deploying software changes"
  },
  {
    "id": 8,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is the difference between Continuous Integration, Continuous Delivery, and Continuous Deployment?",
    "explanation": "- **Continuous Integration (CI)**: Automatically merging, building, and testing code on every commit.\n- **Continuous Delivery**: Automating deployment to staging, but requiring a manual human approval to deploy to Production.\n- **Continuous Deployment**: Fully automated release to Production with zero human intervention the moment tests pass.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Delivery requires a manual push to Prod; Deployment is fully automatic to Prod"
  },
  {
    "id": 9,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is Infrastructure as Code (IaC)?",
    "explanation": "Infrastructure as Code (IaC) is the process of managing and provisioning cloud data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools (like clicking through the AWS Console). Common tools include AWS CloudFormation and HashiCorp Terraform.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Provisioning and managing cloud resources using code instead of a manual UI"
  },
  {
    "id": 10,
    "category": "AWS & DevOps Fundamentals",
    "title": "What are the advantages of Infrastructure as Code?",
    "explanation": "1. **Consistency**: Eliminates configuration drift; environments are perfectly identical.\n2. **Speed**: Can spin up entire data centers in minutes.\n3. **Version Control**: Infrastructure is tracked in Git, allowing rollbacks and audits.\n4. **Reusability**: You can write a module once and deploy it across Dev, QA, and Prod.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Consistency, speed, version control history, and reusability across environments"
  },
  {
    "id": 11,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is an AWS Region?",
    "explanation": "An AWS Region is a physical, geographical location in the world where AWS clusters its data centers (e.g., `us-east-1` in N. Virginia, `eu-west-1` in Ireland). Each Region is completely independent and isolated from other Regions to achieve the greatest possible fault tolerance and stability.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A distinct geographical location containing multiple Availability Zones"
  },
  {
    "id": 12,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is an Availability Zone?",
    "explanation": "An Availability Zone (AZ) consists of one or more discrete data centers within an AWS Region. Each AZ has redundant power, networking, and connectivity. They are separated by a meaningful distance (many miles) from other AZs in the same Region to protect against local disasters (fires, floods).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A distinct, isolated data center (or cluster of data centers) within an AWS Region"
  },
  {
    "id": 13,
    "category": "AWS & DevOps Fundamentals",
    "title": "Region vs Availability Zone?",
    "explanation": "A Region is a large geographical area (e.g., Northern Virginia). \nAn Availability Zone is a specific data center facility inside that Region. Every Region contains a minimum of 3 Availability Zones. When you deploy an EC2 instance, you place it in a specific AZ within a specific Region.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A Region is the city/state; the Availability Zone is the physical building"
  },
  {
    "id": 14,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is an AWS Edge Location?",
    "explanation": "An Edge Location is a specialized AWS data center used primarily for caching content closer to end users to reduce latency. They are part of the AWS CloudFront Content Delivery Network (CDN) and Route 53. There are vastly more Edge Locations globally than standard AWS Regions.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A data center used by CloudFront to cache content geographically close to users"
  },
  {
    "id": 15,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is AWS Global Infrastructure?",
    "explanation": "The AWS Global Infrastructure is the massive physical network of Regions, Availability Zones, and Edge Locations connected by a highly resilient, private global network backbone built and maintained by Amazon.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The physical network of Regions, AZs, and Edge Locations worldwide"
  },
  {
    "id": 16,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is high availability?",
    "explanation": "High Availability (HA) ensures a system remains operational and accessible, even if individual components fail. In AWS, this is achieved by deploying application instances across multiple Availability Zones behind an Elastic Load Balancer. If one AZ goes completely offline, traffic automatically routes to the healthy instances in the other AZ.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Designing a system to remain accessible during component or data center failures"
  },
  {
    "id": 17,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is fault tolerance?",
    "explanation": "Fault tolerance is stricter than High Availability. It means a system can experience a total component failure with absolutely zero downtime or degradation in performance. While HA might experience a slight delay while a load balancer shifts traffic, a fault-tolerant system operates seamlessly.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The ability to withstand component failure with zero downtime or performance impact"
  },
  {
    "id": 18,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is scalability?",
    "explanation": "Scalability is the ability of an application to automatically increase or decrease its compute capacity to meet changes in demand. In AWS, this is usually handled by Auto Scaling Groups that launch more EC2 instances when CPU load increases, and terminate them when load decreases.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The ability to automatically adjust compute capacity based on traffic load"
  },
  {
    "id": 19,
    "category": "AWS & DevOps Fundamentals",
    "title": "Vertical scaling vs horizontal scaling?",
    "explanation": "- **Vertical Scaling (Scaling Up)**: Increasing the power of a single server (e.g., upgrading from a `t3.micro` with 1GB RAM to a `t3.large` with 8GB RAM). It usually requires downtime to reboot.\n- **Horizontal Scaling (Scaling Out)**: Adding more servers of the same size to a pool (e.g., going from 2 web servers to 10). It provides high availability and theoretically limitless capacity.",
    "code": "",
    "example": "",
    "tip": "Always favor horizontal scaling in cloud architecture.",
    "summary": "Vertical adds more RAM/CPU to one machine; Horizontal adds more machines"
  },
  {
    "id": 20,
    "category": "AWS & DevOps Fundamentals",
    "title": "What is elasticity in AWS?",
    "explanation": "Elasticity is the concept of matching provisioned resources to exact demand at any given point in time. It means not just scaling *out* during a traffic spike, but aggressively scaling *in* (removing servers) when traffic drops so you stop paying for unused resources.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The ability to scale resources rapidly outward and inward to exactly match demand"
  },
  {
    "id": 21,
    "category": "IAM & AWS Security",
    "title": "What is AWS IAM?",
    "explanation": "AWS Identity and Access Management (IAM) is a global service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources like S3 buckets or EC2 instances.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The central security service for managing user identities and resource permissions"
  },
  {
    "id": 22,
    "category": "IAM & AWS Security",
    "title": "What is an IAM User?",
    "explanation": "An IAM User is an entity that you create in AWS to represent the person or application that uses it to interact with AWS. A user in AWS consists of a name and credentials (a password for the AWS Console, or Access Keys for the API/CLI).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An identity representing a specific human or application with long-term credentials"
  },
  {
    "id": 23,
    "category": "IAM & AWS Security",
    "title": "What is an IAM Group?",
    "explanation": "An IAM Group is a collection of IAM Users. You can attach an IAM Policy to a Group, and all Users inside that Group inherit those permissions. It simplifies managing permissions for multiple users (e.g., an 'Administrators' group or a 'Developers' group).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A collection of users that share inherited permissions"
  },
  {
    "id": 24,
    "category": "IAM & AWS Security",
    "title": "What is an IAM Role?",
    "explanation": "An IAM Role is an identity with specific permissions, similar to an IAM User. However, instead of being uniquely associated with one person, a role is intended to be *assumable* by anyone (or any AWS Service, like EC2 or Lambda) who needs it. Roles do not have standard long-term passwords; they rely on temporary, auto-rotating security credentials.",
    "code": "",
    "example": "",
    "tip": "Roles are the most secure way to grant permissions to AWS services and CI/CD pipelines.",
    "summary": "An identity with temporary credentials that can be assumed by users or AWS services"
  },
  {
    "id": 25,
    "category": "IAM & AWS Security",
    "title": "What is an IAM Policy?",
    "explanation": "An IAM Policy is a JSON document that defines permissions. When attached to an identity (User, Group, Role) or a resource, it dictates what actions are `Allow` or `Deny` on which specific AWS resources.",
    "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::my-bucket\"\n    }\n  ]\n}",
    "example": "",
    "tip": "",
    "summary": "A JSON document explicitly granting or denying permissions to AWS APIs"
  },
  {
    "id": 26,
    "category": "IAM & AWS Security",
    "title": "User vs Role vs Group?",
    "explanation": "- **User**: A specific human/app with long-term credentials.\n- **Group**: A folder to organize Users and apply policies to all of them at once.\n- **Role**: An identity with *temporary* credentials, used by AWS resources (like EC2) or federated users to temporarily gain permissions.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "User = Person, Group = Collection of People, Role = Temporary permissions for services/federation"
  },
  {
    "id": 27,
    "category": "IAM & AWS Security",
    "title": "What is the difference between identity-based and resource-based policies?",
    "explanation": "- **Identity-based policies**: Attached to an IAM User, Group, or Role. (e.g., \"Bob can read from S3\").\n- **Resource-based policies**: Attached directly to an AWS resource, like an S3 Bucket Policy or KMS Key Policy. (e.g., \"This bucket can be read by Bob and Alice\").",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Identity-based attach to the actor; Resource-based attach to the object being acted upon"
  },
  {
    "id": 28,
    "category": "IAM & AWS Security",
    "title": "What is the principle of least privilege?",
    "explanation": "The principle of least privilege dictates that you should grant a user, application, or service the absolute bare minimum permissions required to perform its specific task, and nothing more. If a Lambda function only needs to read from one specific S3 bucket, you grant it exactly that, not `s3:*` or `AdministratorAccess`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Granting only the exact permissions needed for a task and absolutely nothing more"
  },
  {
    "id": 29,
    "category": "IAM & AWS Security",
    "title": "How do you implement least privilege in AWS?",
    "explanation": "1. Never use root account credentials.\n2. Do not attach `AdministratorAccess` to standard developers.\n3. Write custom JSON IAM policies that restrict actions to specific Resource ARNs.\n4. Use IAM Access Analyzer to generate policies based on actual CloudTrail activity.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By writing tightly scoped JSON policies mapping exact Actions to exact Resource ARNs"
  },
  {
    "id": 30,
    "category": "IAM & AWS Security",
    "title": "What is an IAM Role used for?",
    "explanation": "Roles are heavily used for:\n1. **Service Accounts**: Giving an EC2 instance permissions to read from S3 without hardcoding API keys.\n2. **Cross-Account Access**: Allowing a user in Account A to access resources in Account B.\n3. **Federation**: Allowing corporate Active Directory users (SAML/OIDC) to log into AWS.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Granting secure, temporary, passwordless access to AWS services, cross-account users, or federated identities"
  },
  {
    "id": 31,
    "category": "IAM & AWS Security",
    "title": "Why should applications avoid storing AWS access keys?",
    "explanation": "Access keys (long-term credentials) are highly prone to being leaked via hardcoded secrets in source code, committed to GitHub, or logged in text files. If leaked, hackers can instantly spin up expensive crypto-mining EC2 instances. Instead, applications running on AWS should assume IAM Roles, which use short-lived, auto-rotating credentials.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Hardcoded keys often leak to GitHub. IAM Roles with temporary credentials are much safer."
  },
  {
    "id": 32,
    "category": "IAM & AWS Security",
    "title": "What is an IAM Access Key?",
    "explanation": "An Access Key consists of two parts: an `Access Key ID` (like a username) and a `Secret Access Key` (like a password). They are long-term credentials used exclusively to make programmatic calls to the AWS API via the AWS CLI, SDKs, or tools like Terraform.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A long-term ID and Secret used to authenticate programmatic API requests to AWS"
  },
  {
    "id": 33,
    "category": "IAM & AWS Security",
    "title": "What is MFA?",
    "explanation": "Multi-Factor Authentication (MFA) adds an extra layer of security. In addition to a username and password, the user must provide a unique, time-sensitive code generated by a virtual authenticator app (like Authy/Google Authenticator) or a physical hardware token (like YubiKey).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Requiring a time-based code from a secondary device in addition to a password"
  },
  {
    "id": 34,
    "category": "IAM & AWS Security",
    "title": "How do you enable MFA for AWS users?",
    "explanation": "As an administrator, you can attach an IAM Policy that denies all actions (except the ability to manage their own MFA device) unless `aws:MultiFactorAuthPresent` evaluates to `true`. This forces the user to log in and immediately register an MFA device before they can access any AWS resources.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By attaching a policy that denies all AWS actions unless the MFA context key is present"
  },
  {
    "id": 35,
    "category": "IAM & AWS Security",
    "title": "What is an AWS Service Control Policy (SCP)?",
    "explanation": "SCPs are a feature of AWS Organizations. While IAM policies grant permissions, SCPs act as a giant overriding guardrail for entire AWS Accounts. An SCP can say \"Deny launching EC2 instances larger than t3.large\". Even if the Root user of an account tries to launch a larger instance, the SCP blocks it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Account-level guardrails that restrict maximum available permissions for all users in an account"
  },
  {
    "id": 36,
    "category": "IAM & AWS Security",
    "title": "What is AWS Organizations?",
    "explanation": "AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage. It provides consolidated billing and allows you to apply Service Control Policies (SCPs) to organizational units (OUs).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A service to centrally manage billing and security policies across multiple AWS accounts"
  },
  {
    "id": 37,
    "category": "IAM & AWS Security",
    "title": "What is a permission boundary?",
    "explanation": "A Permissions Boundary is an advanced IAM feature where you attach a policy to an IAM User or Role that sets the absolute *maximum* permissions that identity can ever have. It does not grant permissions on its own; it restricts the permissions granted by other IAM policies.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An IAM feature that sets the maximum allowable permissions an identity can receive"
  },
  {
    "id": 38,
    "category": "IAM & AWS Security",
    "title": "What is an AWS Resource Policy?",
    "explanation": "A Resource Policy is attached directly to a resource (like an S3 Bucket, KMS Key, or SQS Queue) instead of a user. It defines exactly who is allowed to access that specific resource. It is especially useful for granting cross-account access.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A policy attached directly to a resource (e.g., S3 Bucket Policy) defining who can access it"
  },
  {
    "id": 39,
    "category": "IAM & AWS Security",
    "title": "How do you securely manage secrets in AWS?",
    "explanation": "You should never store database passwords or API keys in code or environment variables. Instead, store them in **AWS Secrets Manager** or **AWS Systems Manager Parameter Store (SSM)**. Your application or CI/CD pipeline then uses an IAM Role to securely retrieve the secret via an API call at runtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Store them in AWS Secrets Manager and retrieve them at runtime using an IAM Role"
  },
  {
    "id": 40,
    "category": "IAM & AWS Security",
    "title": "What is AWS Secrets Manager and how is it different from Parameter Store?",
    "explanation": "Both services store encrypted secrets. However:\n- **Secrets Manager**: Costs money. It has native ability to automatically rotate passwords (e.g., changing the RDS database password every 30 days automatically via Lambda).\n- **Parameter Store (SSM)**: Standard parameters are free. Does not support native automatic rotation.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Secrets Manager supports automated password rotation and costs money; Parameter Store is free"
  }
,
  {
    "category": "VPC & Networking",
    "title": "What is Amazon VPC?",
    "explanation": "Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of IP address range, creation of subnets, and configuration of route tables and network gateways.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logically isolated virtual network defined by you within the AWS cloud",
    "id": 41
  },
  {
    "category": "VPC & Networking",
    "title": "What is a subnet?",
    "explanation": "A subnet is a range of IP addresses in your VPC. You launch AWS resources (like EC2 instances) into a specific subnet. A subnet is bound to a single Availability Zone (it cannot span multiple AZs).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A segmented range of IP addresses within a VPC, bound to a specific Availability Zone",
    "id": 42
  },
  {
    "category": "VPC & Networking",
    "title": "Public subnet vs private subnet?",
    "explanation": "- **Public Subnet**: The subnet's Route Table has a direct route to an Internet Gateway (IGW), allowing resources to be accessed from the public internet.\n- **Private Subnet**: The subnet's Route Table does *not* have a route to an IGW. Resources in a private subnet cannot be directly accessed from the internet, making them much more secure for databases or backend servers.",
    "code": "",
    "example": "",
    "tip": "Always place databases and application servers in Private Subnets.",
    "summary": "Public subnets route to the internet; Private subnets do not",
    "id": 43
  },
  {
    "category": "VPC & Networking",
    "title": "What is an Internet Gateway?",
    "explanation": "An Internet Gateway (IGW) is a highly available, redundant VPC component that allows communication between instances in your VPC and the internet. To make a subnet \"public\", you must attach an IGW to your VPC and add a route in the subnet's Route Table pointing `0.0.0.0/0` (all internet traffic) to the IGW.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A component attached to a VPC that enables direct access to the public internet",
    "id": 44
  },
  {
    "category": "VPC & Networking",
    "title": "What is a NAT Gateway?",
    "explanation": "A Network Address Translation (NAT) Gateway enables instances in a *Private Subnet* to connect to the internet (for downloading software updates) or other AWS services, but prevents the internet from initiating connections directly to those instances. The NAT Gateway itself must be deployed in a *Public Subnet*.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Allows outbound internet access for private instances without allowing inbound connections",
    "id": 45
  },
  {
    "category": "VPC & Networking",
    "title": "Why do private subnets need a NAT Gateway?",
    "explanation": "Even though a server is in a private subnet and secure from the outside world, it still occasionally needs to access the internet to download OS security patches, fetch packages via `apt-get` or `npm`, or call external third-party APIs. A NAT Gateway provides this outbound-only internet access.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "To allow private instances to download critical OS updates and packages",
    "id": 46
  },
  {
    "category": "VPC & Networking",
    "title": "What is a Route Table?",
    "explanation": "A Route Table contains a set of rules, called routes, that are used to determine where network traffic from your subnet or gateway is directed. Every subnet must be associated with exactly one Route Table.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A set of rules defining where network traffic leaving a subnet is directed",
    "id": 47
  },
  {
    "category": "VPC & Networking",
    "title": "What is a Security Group?",
    "explanation": "A Security Group acts as a virtual firewall for your EC2 instances to control inbound and outbound traffic. It operates at the instance level. Security Groups are stateful, meaning if you allow inbound traffic on port 80, the return traffic is automatically allowed regardless of outbound rules.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An instance-level, stateful virtual firewall controlling inbound/outbound traffic",
    "id": 48
  },
  {
    "category": "VPC & Networking",
    "title": "What is a Network ACL?",
    "explanation": "A Network Access Control List (NACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more *Subnets*. NACLs are stateless, meaning you must explicitly allow both inbound and outbound traffic (e.g., explicitly allowing ephemeral ports for return traffic).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A subnet-level, stateless firewall controlling traffic entering or exiting a subnet",
    "id": 49
  },
  {
    "category": "VPC & Networking",
    "title": "Security Group vs Network ACL?",
    "explanation": "- **Scope**: Security Groups apply to the *Instance*. NACLs apply to the *Subnet*.\n- **State**: Security Groups are *Stateful* (return traffic automatically allowed). NACLs are *Stateless* (return traffic must be explicitly allowed).\n- **Rules**: Security Groups only support `Allow` rules. NACLs support both `Allow` and `Deny` rules.",
    "code": "",
    "example": "",
    "tip": "This is a guaranteed interview question. Memorize the Instance/Subnet and Stateful/Stateless differences.",
    "summary": "Security Groups are stateful and instance-level; NACLs are stateless and subnet-level",
    "id": 50
  },
  {
    "category": "VPC & Networking",
    "title": "What is CIDR?",
    "explanation": "Classless Inter-Domain Routing (CIDR) is a method for allocating IP addresses and IP routing. In AWS, you use CIDR notation (like `10.0.0.0/16`) to define the IP range of your VPCs and Subnets. The `/16` means the first 16 bits are fixed, giving you 65,536 IP addresses.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A standard syntax for defining IP address ranges and network masks",
    "id": 51
  },
  {
    "category": "VPC & Networking",
    "title": "What is a VPC Peering connection?",
    "explanation": "A VPC Peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. It is not transitive (if A peers with B, and B peers with C, A cannot talk to C automatically).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A private, non-transitive connection allowing two VPCs to communicate with each other",
    "id": 52
  },
  {
    "category": "VPC & Networking",
    "title": "What is AWS Transit Gateway?",
    "explanation": "AWS Transit Gateway connects VPCs and on-premises networks through a central hub. It solves the complexity of VPC Peering by acting as a cloud router. Instead of creating complex, non-transitive peerings between dozens of VPCs, you connect all VPCs to one Transit Gateway, massively simplifying network management.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A central cloud router that massively simplifies connecting dozens of VPCs and on-premises networks",
    "id": 53
  },
  {
    "category": "VPC & Networking",
    "title": "What is a VPC Endpoint?",
    "explanation": "A VPC Endpoint allows you to privately connect your VPC to supported AWS services (like S3 or DynamoDB) without requiring an Internet Gateway, NAT Gateway, or public IP address. Traffic between your VPC and the AWS service does not leave the Amazon network.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Allows private connection to AWS services without traffic going over the public internet",
    "id": 54
  },
  {
    "category": "VPC & Networking",
    "title": "Gateway Endpoint vs Interface Endpoint?",
    "explanation": "- **Gateway Endpoint**: Injected as a route in your Route Table. Completely free. Only supports Amazon S3 and DynamoDB.\n- **Interface Endpoint**: Creates an Elastic Network Interface (ENI) with a private IP in your subnet. Costs an hourly fee. Powered by AWS PrivateLink, supports almost all other AWS services (KMS, SNS, SQS).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Gateway is free but only for S3/DynamoDB; Interface uses an ENI for most other services and costs money",
    "id": 55
  },
  {
    "category": "VPC & Networking",
    "title": "What is DNS in AWS?",
    "explanation": "Domain Name System (DNS) translates human-readable domain names (like `www.amazon.com`) into machine-readable IP addresses. In AWS, DNS is heavily integrated into VPCs (auto-assigning DNS hostnames to EC2 instances) and globally managed via Amazon Route 53.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The phonebook of the internet, translating domain names to IP addresses",
    "id": 56
  },
  {
    "category": "VPC & Networking",
    "title": "What is Route 53?",
    "explanation": "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It can perform three main functions: Domain registration (buying `.com` names), DNS routing (pointing names to IPs/resources), and Health Checking (verifying endpoints are up).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Amazon's highly available DNS, domain registration, and health checking service",
    "id": 57
  },
  {
    "category": "VPC & Networking",
    "title": "What is a Route 53 Hosted Zone?",
    "explanation": "A Hosted Zone is a container that holds information about how you want to route traffic on the internet for a specific domain (like `example.com`).\n- **Public Hosted Zone**: Routes traffic on the public internet.\n- **Private Hosted Zone**: Routes traffic only within your specified VPCs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A container for DNS records that define how traffic is routed for a domain",
    "id": 58
  },
  {
    "category": "VPC & Networking",
    "title": "What are Route 53 routing policies?",
    "explanation": "1. **Simple**: Routes traffic to a single resource.\n2. **Weighted**: Routes traffic across multiple resources based on proportions (e.g., 80% to Server A, 20% to Server B).\n3. **Latency**: Routes users to the AWS Region with the lowest network latency.\n4. **Failover**: Routes to a primary resource, and fails over to a secondary if primary is unhealthy.\n5. **Geolocation**: Routes traffic based on the physical location of the users.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Rules defining how DNS queries are answered (Simple, Weighted, Latency, Failover, Geolocation)",
    "id": 59
  },
  {
    "category": "VPC & Networking",
    "title": "What is DNS failover?",
    "explanation": "DNS Failover uses Route 53 Health Checks to monitor the health of your application (e.g., checking if `primary.com` returns HTTP 200). If the primary endpoint fails, Route 53 automatically updates the DNS resolution to point users to a backup endpoint (e.g., a static 'Under Maintenance' page on S3 or a secondary Region).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automatically redirecting traffic to a backup resource if the primary resource fails health checks",
    "id": 60
  },
  {
    "category": "VPC & Networking",
    "title": "What is Elastic Load Balancing?",
    "explanation": "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It ensures high availability and fault tolerance.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A service that automatically distributes incoming traffic across multiple healthy servers",
    "id": 61
  },
  {
    "category": "VPC & Networking",
    "title": "ALB vs NLB?",
    "explanation": "- **Application Load Balancer (ALB)**: Operates at Layer 7 (HTTP/HTTPS). It can inspect traffic, route based on URL paths (`/api` vs `/images`), and terminate SSL/TLS. Best for web apps.\n- **Network Load Balancer (NLB)**: Operates at Layer 4 (TCP/UDP). It is built for extreme performance, millions of requests per second, and ultra-low latency. It passes traffic directly to the instance.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "ALB is Layer 7 (HTTP) and feature-rich; NLB is Layer 4 (TCP) and built for extreme raw performance",
    "id": 62
  },
  {
    "category": "VPC & Networking",
    "title": "What is a Target Group?",
    "explanation": "A Target Group is used by Load Balancers to route requests to one or more registered targets (EC2 instances, Lambda functions, or IP addresses). When you create a listener rule on an ALB, you specify a Target Group for the traffic. Target Groups also define the Health Check parameters.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logical grouping of destinations (instances/containers) that a Load Balancer sends traffic to",
    "id": 63
  },
  {
    "category": "VPC & Networking",
    "title": "What is a health check?",
    "explanation": "A Health Check is a periodic ping (like an HTTP GET request to `/health`) sent by a Load Balancer or Route 53 to a target. If the target responds with a success code (e.g., 200 OK), it receives traffic. If it fails, the Load Balancer stops sending traffic to that specific instance until it recovers.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A periodic ping to verify an instance is functioning before sending it live traffic",
    "id": 64
  },
  {
    "category": "VPC & Networking",
    "title": "How would you design a highly available VPC architecture?",
    "explanation": "1. Deploy a VPC with at least two Availability Zones (AZs).\n2. Create a Public Subnet and a Private Subnet in *each* AZ.\n3. Deploy an Internet Gateway and attach it to the VPC.\n4. Deploy a NAT Gateway in the Public Subnets to allow outbound internet for private resources.\n5. Deploy an Application Load Balancer in the Public Subnets.\n6. Deploy the application EC2 instances inside an Auto Scaling Group located in the Private Subnets.",
    "code": "",
    "example": "",
    "tip": "This is the classic AWS 3-Tier Web Architecture.",
    "summary": "Use multiple AZs, public subnets for load balancers/NAT, and private subnets for application servers/databases",
    "id": 65
  },
  {
    "category": "EC2 & Compute",
    "title": "What is Amazon EC2?",
    "explanation": "Amazon Elastic Compute Cloud (EC2) provides secure, resizable compute capacity in the cloud. It is essentially a virtual machine (VM) running in an AWS data center that you can boot up in seconds, scale automatically, and pay for by the second.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A web service providing resizable virtual machines in the cloud",
    "id": 66
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an EC2 instance?",
    "explanation": "An EC2 instance is a single virtual server running in AWS. When you \"launch an instance,\" you are renting a slice of a physical server equipped with a specific amount of CPU, RAM, and Storage, running an OS of your choice (Linux, Windows).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A single, specific virtual machine provisioned via the EC2 service",
    "id": 67
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an AMI?",
    "explanation": "An Amazon Machine Image (AMI) provides the information required to launch an EC2 instance. It is a packaged template that contains a software configuration (operating system, application server, and applications). You can use AWS-provided AMIs (like Amazon Linux 2) or create custom AMIs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A master template containing the OS and pre-installed software used to boot an EC2 instance",
    "id": 68
  },
  {
    "category": "EC2 & Compute",
    "title": "What are EC2 instance types?",
    "explanation": "Instance types are combinations of CPU, memory, storage, and networking capacity designed to optimize for different use cases. \nExamples:\n- **t3.micro**: General purpose, burstable.\n- **c5.large**: Compute-optimized (for rendering/gaming).\n- **r5.large**: Memory-optimized (for databases/caching).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Different hardware configurations optimized for specific workloads (Compute, Memory, General Purpose)",
    "id": 69
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an instance family?",
    "explanation": "An instance family groups instance types by their primary hardware optimization. \n- **General Purpose**: T, M families.\n- **Compute Optimized**: C family.\n- **Memory Optimized**: R, X families.\n- **Storage Optimized**: I, D families.",
    "code": "",
    "example": "",
    "tip": "M = Multi-purpose. C = Compute. R = RAM. I = IOPS.",
    "summary": "A categorization of instance types based on what hardware resource they optimize (CPU, RAM, Storage)",
    "id": 70
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an EC2 key pair?",
    "explanation": "A key pair, consisting of a public key and a private key, is a set of security credentials that you use to prove your identity when connecting to an instance via SSH (Linux) or RDP (Windows). AWS stores the public key, and you store the private key (a `.pem` file).",
    "code": "",
    "example": "",
    "tip": "Mention AWS Systems Manager Session Manager (SSM) as a more secure, keyless alternative to SSH.",
    "summary": "A public/private key file used to securely SSH into a Linux EC2 instance",
    "id": 71
  },
  {
    "category": "EC2 & Compute",
    "title": "What is EBS?",
    "explanation": "Amazon Elastic Block Store (EBS) provides block-level storage volumes for use with EC2 instances. It acts as the primary hard drive for an EC2 instance. EBS volumes are highly available, persistent (they survive instance termination), and can be encrypted.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Persistent block-level storage volumes acting as virtual hard drives for EC2 instances",
    "id": 72
  },
  {
    "category": "EC2 & Compute",
    "title": "EBS vs Instance Store?",
    "explanation": "- **EBS**: Persistent storage attached via the network. Data survives if you stop/reboot the instance. Slightly higher latency.\n- **Instance Store**: Ephemeral storage physically attached to the host computer. Offers blazing fast I/O, but if the instance stops or the underlying hardware fails, all data is permanently lost.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "EBS is persistent network storage; Instance Store is fast, temporary, physically attached storage",
    "id": 73
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an EBS snapshot?",
    "explanation": "An EBS snapshot is a point-in-time backup of an EBS volume stored securely in Amazon S3. Snapshots are incremental, meaning only the blocks that have changed since your last snapshot are saved, significantly reducing storage costs.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An incremental, point-in-time backup of an EBS volume stored in S3",
    "id": 74
  },
  {
    "category": "EC2 & Compute",
    "title": "What is an Auto Scaling Group?",
    "explanation": "An Auto Scaling Group (ASG) contains a collection of EC2 instances that are treated as a logical grouping. You specify a minimum, maximum, and desired capacity. The ASG automatically launches or terminates instances to maintain the desired capacity or to respond to dynamic scaling policies.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logical grouping of EC2 instances that automatically scales in and out based on demand",
    "id": 75
  },
  {
    "category": "EC2 & Compute",
    "title": "What is EC2 Auto Scaling?",
    "explanation": "EC2 Auto Scaling is the service that automatically adds or removes compute capacity. It ensures you have the correct number of EC2 instances available to handle the load for your application, improving fault tolerance and reducing costs by terminating instances when they aren't needed.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The service that dynamically adjusts the number of running EC2 instances to meet demand",
    "id": 76
  },
  {
    "category": "EC2 & Compute",
    "title": "What are scaling policies?",
    "explanation": "Scaling policies are the rules that tell an Auto Scaling Group exactly *when* and *how* to scale. They are usually triggered by CloudWatch Alarms (e.g., \"Scale out by 2 instances if average CPU exceeds 75% for 3 minutes\").",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Rules linking CloudWatch alarms to Auto Scaling actions (e.g., scaling based on CPU utilization)",
    "id": 77
  },
  {
    "category": "EC2 & Compute",
    "title": "Target tracking vs step scaling?",
    "explanation": "- **Target Tracking**: Easiest to use. You set a target metric (e.g., \"Keep CPU at 50%\"). AWS automatically calculates how many instances to add/remove to maintain that exact percentage.\n- **Step Scaling**: More manual. You define precise steps based on alarm thresholds (e.g., if CPU > 60%, add 1; if CPU > 85%, add 3).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Target tracking maintains a specific metric percentage; Step scaling adds instances in defined blocks",
    "id": 78
  },
  {
    "category": "EC2 & Compute",
    "title": "What is a Launch Template?",
    "explanation": "A Launch Template specifies the configuration details for launching EC2 instances (like the AMI ID, instance type, key pair, security groups, and EBS volumes). Auto Scaling Groups use Launch Templates to know exactly *what kind* of instance to boot up when scaling out.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A saved configuration detailing the AMI, instance type, and network settings required to boot an EC2 instance",
    "id": 79
  },
  {
    "category": "EC2 & Compute",
    "title": "Launch Template vs Launch Configuration?",
    "explanation": "Both define how to launch an EC2 instance, but **Launch Templates** are the modern, recommended standard. \nLaunch Templates support versioning (so you can update the AMI without creating a brand new template), T2/T3 Unlimited, and Spot instance mixing. Launch Configurations are legacy and being deprecated.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Launch Templates are modern and support versioning; Launch Configurations are legacy and deprecated",
    "id": 80
  },
  {
    "category": "EC2 & Compute",
    "title": "What is a Spot Instance?",
    "explanation": "A Spot Instance allows you to bid on spare Amazon EC2 compute capacity at up to a 90% discount compared to On-Demand pricing. However, AWS can reclaim the instance with only a 2-minute warning if they need the capacity back. They are strictly for fault-tolerant, stateless, or batch processing workloads.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Heavily discounted spare compute capacity that can be interrupted with a 2-minute warning",
    "id": 81
  },
  {
    "category": "EC2 & Compute",
    "title": "On-Demand vs Reserved vs Spot Instances?",
    "explanation": "- **On-Demand**: Pay by the second. No commitment. Most expensive. Best for unpredictable, spiky workloads.\n- **Reserved Instances**: Commit to 1 or 3 years. Up to 72% discount. Best for steady-state databases or core services.\n- **Spot Instances**: Bid on spare capacity. Up to 90% discount. Instance can be killed at any time. Best for batch processing or stateless web apps.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "On-Demand (flexible/expensive), Reserved (1-3 yr commit/cheap), Spot (interruptible/cheapest)",
    "id": 82
  },
  {
    "category": "EC2 & Compute",
    "title": "How do you troubleshoot an unreachable EC2 instance?",
    "explanation": "1. **Security Group**: Verify Port 22 (SSH) or Port 80/443 (HTTP) is open to your IP address.\n2. **Network ACL**: Check if a subnet NACL is blocking the traffic.\n3. **Route Table**: Verify the subnet has a route to the Internet Gateway.\n4. **Public IP**: Ensure the instance actually has a Public IP address assigned.\n5. **CPU Load**: Check CloudWatch. The instance might be frozen at 100% CPU.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Check Security Groups, Route Tables, Internet Gateways, Public IP assignment, and CPU load",
    "id": 83
  },
  {
    "category": "EC2 & Compute",
    "title": "How do you troubleshoot an EC2 instance with high CPU?",
    "explanation": "1. Log into the instance via SSM Session Manager or SSH.\n2. Run `top` or `htop` (Linux) to identify the specific process consuming the CPU.\n3. Check application logs for infinite loops, memory leaks, or garbage collection thrashing.\n4. Check CloudWatch metrics to see if this corresponds to a massive spike in incoming network traffic (potential DDoS or legitimate virality).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use SSH/SSM to run `top`, check application logs, and review CloudWatch network metrics",
    "id": 84
  },
  {
    "category": "EC2 & Compute",
    "title": "How would you design highly available EC2 infrastructure?",
    "explanation": "I would create an Auto Scaling Group spanning at least two private Availability Zones. I would attach this ASG to an Application Load Balancer located in public subnets. \nIf an entire AZ goes down, the ALB stops routing traffic there, and the ASG automatically boots up replacement instances in the surviving AZ. This ensures self-healing, highly available compute.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Place EC2 instances in an Auto Scaling Group spanning multiple AZs behind an Application Load Balancer",
    "id": 85
  }
,
  {
    "category": "S3 & Storage",
    "title": "What is Amazon S3?",
    "explanation": "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. You can use it to store and protect any amount of data for websites, mobile applications, backup and restore, archive, and big data analytics.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A highly scalable object storage service used for backups, static websites, and file storage",
    "id": 86
  },
  {
    "category": "S3 & Storage",
    "title": "What is an S3 bucket?",
    "explanation": "An S3 bucket is a container for objects stored in Amazon S3. Every object is contained in a bucket. Buckets are regional resources, but their names must be globally unique across all existing bucket names in Amazon S3.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A regional container for storing objects; requires a globally unique name",
    "id": 87
  },
  {
    "category": "S3 & Storage",
    "title": "What is an S3 object?",
    "explanation": "An object is the fundamental entity stored in S3. It consists of the file data itself and its metadata (key-value pairs describing the object). Each object is identified by a unique, full path (called the Key), such as `folder/image.png`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A file and its metadata stored in an S3 bucket, identified by a unique Key",
    "id": 88
  },
  {
    "category": "S3 & Storage",
    "title": "What are S3 storage classes?",
    "explanation": "S3 offers different storage classes based on access frequency and cost:\n- **S3 Standard**: For frequently accessed data.\n- **S3 Standard-IA**: For data accessed less frequently, but requires rapid access when needed.\n- **S3 One Zone-IA**: Same as Standard-IA but stored in only one AZ (costs 20% less).\n- **S3 Glacier Flexible Retrieval**: For archives where retrieval times from minutes to hours are acceptable.\n- **S3 Glacier Deep Archive**: Lowest-cost storage class; retrieval time of 12 hours.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Tiers of storage designed for different use cases based on access frequency and cost",
    "id": 89
  },
  {
    "category": "S3 & Storage",
    "title": "S3 Standard vs Intelligent-Tiering?",
    "explanation": "- **S3 Standard**: You pay a flat rate for storage. Best if you know the access pattern.\n- **S3 Intelligent-Tiering**: AWS automatically monitors access patterns and moves objects between frequent and infrequent access tiers to optimize your costs. Best for unknown or changing access patterns.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Intelligent-Tiering automatically moves data between tiers based on usage to save money",
    "id": 90
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 Versioning?",
    "explanation": "Versioning enables you to keep multiple variants of an object in the same bucket. When you overwrite or delete an object, S3 creates a new version instead of actually destroying the old data. It is a critical defense mechanism against accidental deletions or malicious overwrites (like ransomware).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Preserves, retrieves, and restores every version of every object stored in a bucket",
    "id": 91
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 Lifecycle Management?",
    "explanation": "S3 Lifecycle Management allows you to create rules that automate the transition of objects to cheaper storage classes over time, or expire them completely. For example, \"Move logs to Glacier after 30 days, and delete them after 365 days.\"",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automated rules to transition objects to cheaper storage classes or delete them over time",
    "id": 92
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 Bucket Policy?",
    "explanation": "An S3 Bucket Policy is a resource-based IAM policy attached directly to the bucket. It grants or denies permissions across all objects within the bucket. It is commonly used to grant anonymous public read access for a static website, or to force all uploaded objects to be encrypted.",
    "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Principal\": \"*\",\n      \"Action\": \"s3:GetObject\",\n      \"Resource\": \"arn:aws:s3:::my-public-bucket/*\"\n    }\n  ]\n}",
    "example": "",
    "tip": "",
    "summary": "A resource-based JSON policy attached to a bucket to control access at the bucket level",
    "id": 93
  },
  {
    "category": "S3 & Storage",
    "title": "IAM Policy vs S3 Bucket Policy?",
    "explanation": "- **IAM Policy**: Attached to the user or role. It says \"What can *this user* do in AWS?\" (e.g., \"User A can read Bucket B\").\n- **Bucket Policy**: Attached to the bucket itself. It says \"Who is allowed to access *this bucket*?\" (e.g., \"Bucket B can be read by User A and User C\"). \nAWS evaluates both policies; if either allows it (and neither explicitly denies it), the action succeeds.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "IAM policies define what a user can do; Bucket policies define who can access the bucket",
    "id": 94
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 encryption?",
    "explanation": "S3 provides encryption in transit (using HTTPS) and encryption at rest. Server-Side Encryption (SSE) means Amazon encrypts your data at the object level as it writes it to disks in its data centers, and decrypts it for you when you access it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Protecting data at rest on S3 disks and in transit over the network",
    "id": 95
  },
  {
    "category": "S3 & Storage",
    "title": "SSE-S3 vs SSE-KMS?",
    "explanation": "- **SSE-S3**: Amazon manages the encryption keys completely transparently. Free and simple.\n- **SSE-KMS**: Uses AWS Key Management Service (KMS). You have full control over the encryption keys, key rotation, and you get an audit trail (CloudTrail) of exactly who used the key to decrypt which object. Required for high security/compliance.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "SSE-KMS provides user-managed keys and full audit trails; SSE-S3 is fully Amazon-managed",
    "id": 96
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 Object Lock?",
    "explanation": "S3 Object Lock uses a write-once-read-many (WORM) model. It prevents an object from being deleted or overwritten for a fixed amount of time or indefinitely. It is heavily used to meet regulatory compliance requirements for data retention (e.g., financial records) and to protect against ransomware.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Prevents objects from being deleted or overwritten, enforcing WORM compliance",
    "id": 97
  },
  {
    "category": "S3 & Storage",
    "title": "What is S3 Cross-Region Replication?",
    "explanation": "Cross-Region Replication (CRR) automatically and asynchronously copies objects uploaded to a bucket in one AWS Region to a destination bucket in a completely different AWS Region. It is used for disaster recovery and to reduce latency for users in different geographical locations. Versioning must be enabled on both buckets.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Automatically copying objects between buckets in different AWS Regions for disaster recovery",
    "id": 98
  },
  {
    "category": "S3 & Storage",
    "title": "How do you secure an S3 bucket?",
    "explanation": "1. Turn on **Block Public Access** at the bucket or account level.\n2. Enable **S3 Versioning** to protect against accidental deletion.\n3. Force encryption using **SSE-KMS**.\n4. Write a strict **Bucket Policy** limiting access to specific IAM Roles or VPC Endpoints.\n5. Enable **MFA Delete** so permanent deletions require a 2FA code.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Block public access, enforce KMS encryption, enable versioning, and use strict bucket policies",
    "id": 99
  },
  {
    "category": "S3 & Storage",
    "title": "How would you design an S3-based static website or artifact storage solution?",
    "explanation": "For a static React/Angular app: I would create an S3 bucket, enable \"Static website hosting\", and upload the compiled HTML/JS/CSS files. I would then create an **Amazon CloudFront** distribution pointing to the S3 bucket as its origin. Finally, I would use an Origin Access Control (OAC) to ensure the bucket is *only* readable by CloudFront, keeping the bucket entirely private from the direct internet while providing global edge caching.",
    "code": "",
    "example": "",
    "tip": "Always mention combining S3 with CloudFront (CDN) and OAC for security and performance.",
    "summary": "Host files in a private S3 bucket and use CloudFront with OAC to serve them globally",
    "id": 100
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is AWS CodeCommit?",
    "explanation": "AWS CodeCommit is a fully-managed source control service that hosts secure Git-based repositories. It behaves similarly to GitHub or GitLab but is deeply integrated with AWS IAM for security and access control.",
    "code": "",
    "example": "",
    "tip": "Note: AWS recently announced they are closing CodeCommit to new customers, pushing users towards GitHub/GitLab.",
    "summary": "A fully managed Git repository hosting service integrated with AWS IAM",
    "id": 101
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is AWS CodeBuild?",
    "explanation": "AWS CodeBuild is a fully managed continuous integration (CI) service that compiles source code, runs tests, and produces software packages that are ready to deploy. You don't need to provision, manage, or scale your own build servers; CodeBuild scales continuously and processes multiple builds concurrently.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A fully managed, serverless build service that compiles code and runs tests",
    "id": 102
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is AWS CodeDeploy?",
    "explanation": "AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and even on-premises servers. It handles the complexity of updating applications with minimal downtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A service that automates software deployments to EC2, Lambda, and ECS",
    "id": 103
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is AWS CodePipeline?",
    "explanation": "AWS CodePipeline is a continuous delivery (CD) service that models, visualizes, and automates the steps required to release your software. It is the orchestrator. It pulls source code from GitHub/CodeCommit, triggers CodeBuild to compile it, and triggers CodeDeploy to deploy it.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The orchestrator that links source, build, and deploy steps into a visual CI/CD pipeline",
    "id": 104
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is CodePipeline used for?",
    "explanation": "CodePipeline orchestrates the entire CI/CD workflow. It defines the 'Stages' (Source, Build, Test, Deploy). If a developer pushes to the `main` branch, CodePipeline detects the change and automatically pushes the artifact through every stage until it hits Production, pausing only if manual approval gates are configured.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Orchestrating the end-to-end flow of code from a Git commit to a Production deployment",
    "id": 105
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "CodeBuild vs CodeDeploy?",
    "explanation": "- **CodeBuild**: Used for *Building* and *Testing*. It takes raw source code, runs commands (like `npm install` or `dotnet build`), and outputs a compiled ZIP file or Docker image.\n- **CodeDeploy**: Used for *Deploying*. It takes the ZIP file or Docker image produced by CodeBuild and safely installs it onto target EC2 servers or ECS clusters.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "CodeBuild compiles and tests code; CodeDeploy installs the compiled code onto servers",
    "id": 106
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "CodePipeline vs CodeBuild?",
    "explanation": "- **CodeBuild**: Runs scripts in an isolated container to compile code. It has no concept of environments or deployment flow.\n- **CodePipeline**: The master workflow engine. It triggers CodeBuild. Once CodeBuild finishes, CodePipeline takes the artifact and hands it to CodeDeploy.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "CodePipeline is the workflow orchestrator; CodeBuild is merely a worker task executing scripts",
    "id": 107
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is buildspec.yml?",
    "explanation": "The `buildspec.yml` is a YAML-formatted configuration file used by AWS CodeBuild. It is placed in the root of your source code repository and defines the exact commands CodeBuild should run during each phase of the build process (e.g., installing dependencies, running tests, compiling the code).",
    "code": "version: 0.2\nphases:\n  install:\n    commands:\n      - npm install\n  build:\n    commands:\n      - npm run build\nartifacts:\n  files:\n    - '**/*'\n  base-directory: 'build'",
    "example": "",
    "tip": "",
    "summary": "A YAML file defining the exact CLI commands CodeBuild executes to compile and test your application",
    "id": 108
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What are the phases in buildspec.yml?",
    "explanation": "The buildspec file is broken down into specific execution phases:\n1. **install**: Used for installing dependencies (like `npm install` or installing a specific version of Node/Java).\n2. **pre_build**: Used for things like logging into Docker Hub or ECR.\n3. **build**: The actual compilation or testing commands (like `dotnet test` or `docker build`).\n4. **post_build**: Used for packaging artifacts or pushing images to a registry.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "install, pre_build, build, and post_build",
    "id": 109
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What are build artifacts in CodeBuild?",
    "explanation": "Artifacts are the final, deployable output of the build process. For a web app, this might be a ZIP file containing compiled HTML/JS and backend DLLs. The `artifacts` section in `buildspec.yml` tells CodeBuild exactly which files to package up and pass back to CodePipeline.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The final compiled files or binaries produced by CodeBuild, ready for deployment",
    "id": 110
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "How do you store build artifacts in S3?",
    "explanation": "CodePipeline automatically manages an \"Artifact Store\" S3 bucket behind the scenes. When CodeBuild finishes, it zips up the files defined in the `artifacts` section of the buildspec and uploads them to this S3 bucket. CodeDeploy then downloads that ZIP from S3 to deploy it to EC2 instances.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "CodePipeline automatically handles transferring artifacts between CodeBuild, S3, and CodeDeploy",
    "id": 111
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "How do you integrate CodeBuild with GitHub?",
    "explanation": "You create an AWS CodeStar connection to authenticate AWS with your GitHub account using OAuth or a GitHub App. Once connected, you configure the CodePipeline 'Source' stage to point to the specific GitHub repository and branch (e.g., `main`). A webhook is automatically created in GitHub to trigger the pipeline on every push.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By creating a CodeStar connection and configuring a CodePipeline Source stage with a webhook",
    "id": 112
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "How do you run unit tests in CodeBuild?",
    "explanation": "You define the test execution command in the `build` or `pre_build` phase of the `buildspec.yml` file. For example, you would add `- npm run test` or `- dotnet test`. If the command returns a non-zero exit code (meaning a test failed), CodeBuild instantly stops, and the pipeline fails.",
    "code": "phases:\n  build:\n    commands:\n      - dotnet test ./MySolution.sln --logger trx",
    "example": "",
    "tip": "",
    "summary": "By adding the test CLI command to the buildspec.yml file; failed tests halt the build",
    "id": 113
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "How do you publish test reports?",
    "explanation": "To see visual test results in the AWS Console, you use the `reports` section in `buildspec.yml`. You configure your test runner to output an XML file (like `.trx` or `JUnit`), and tell CodeBuild where to find it. CodeBuild parses the file and generates a Test Report dashboard.",
    "code": "reports:\n  my_test_report:\n    files:\n      - '**/*.trx'\n    base-directory: 'tests/TestResults'\n    file-format: VisualStudioTrx",
    "example": "",
    "tip": "",
    "summary": "Output tests to an XML file and define a `reports` section in the buildspec.yml",
    "id": 114
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "How do you securely provide environment variables to CodeBuild?",
    "explanation": "You never hardcode secrets in `buildspec.yml`. Instead, you store the secrets in **AWS Secrets Manager** or **SSM Parameter Store**. In the `buildspec.yml`, under the `env` section, you use the `secrets-manager` or `parameter-store` mapping. CodeBuild uses its IAM Role to fetch the secret at runtime and injects it as a secure environment variable.",
    "code": "env:\n  secrets-manager:\n    MY_API_KEY: \"arn:aws:secretsmanager:region:account:secret:MySecret:API_KEY\"",
    "example": "",
    "tip": "",
    "summary": "By mapping buildspec env variables directly to AWS Secrets Manager ARNs",
    "id": 115
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is a CodeDeploy Application?",
    "explanation": "In CodeDeploy, an Application is just a logical container or namespace for the software you are deploying. It doesn't do anything on its own; it simply holds the Deployment Groups and the deployment history for a specific project.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logical container in CodeDeploy that holds Deployment Groups and release history",
    "id": 116
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is a Deployment Group?",
    "explanation": "A Deployment Group specifies *where* and *how* to deploy the application. It defines the target EC2 instances (usually selected via EC2 Tags or an Auto Scaling Group), the deployment strategy (e.g., OneAtATime, AllAtOnce, Blue/Green), and optional CloudWatch Alarms for automatic rollback.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Defines the target instances, deployment strategy, and rollback rules for a deployment",
    "id": 117
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is appspec.yml?",
    "explanation": "The Application Specification (`appspec.yml`) is a YAML file used specifically by CodeDeploy. While `buildspec.yml` tells CodeBuild how to *compile*, `appspec.yml` tells CodeDeploy how to *install* the app on the EC2 instance. It maps files from the artifact ZIP to target folders on the server and defines scripts to run during lifecycle events.",
    "code": "version: 0.0\nos: linux\nfiles:\n  - source: /\n    destination: /var/www/html\nhooks:\n  ApplicationStart:\n    - location: scripts/start_server.sh\n      timeout: 300\n      runas: root",
    "example": "",
    "tip": "",
    "summary": "A YAML file telling CodeDeploy where to copy files on the server and what scripts to run",
    "id": 118
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What are CodeDeploy lifecycle hooks?",
    "explanation": "Lifecycle hooks are specific events in the `appspec.yml` where you can run custom bash or PowerShell scripts during the deployment process. \nThe most common hooks are:\n- `BeforeInstall`: (e.g., stopping the current web server)\n- `AfterInstall`: (e.g., fixing file permissions)\n- `ApplicationStart`: (e.g., starting the new web server process)\n- `ValidateService`: (e.g., running a `curl` command to verify the app is responding)",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Specific phases in appspec.yml where you execute scripts to stop, install, start, and validate the app",
    "id": 119
  },
  {
    "category": "AWS CodeSuite (CI/CD)",
    "title": "What is an in-place deployment?",
    "explanation": "In an in-place deployment, CodeDeploy stops the application on the existing EC2 instances, overwrites the old files with the new application revision, and starts the new version. Depending on the deployment strategy (like `OneAtATime`), it can result in reduced capacity or downtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Stopping the existing app, overwriting the files, and restarting it on the same servers",
    "id": 120
  }
,
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How would you design a CI/CD pipeline on AWS?",
    "explanation": "I would use AWS CodePipeline to orchestrate the flow. The pipeline would trigger from a GitHub/CodeCommit repository. It would use AWS CodeBuild to compile the code and run unit tests. Upon success, CodePipeline would trigger CodeDeploy to deploy the compiled artifact to an EC2 Auto Scaling Group or ECS cluster, with a manual approval step before reaching Production.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use CodePipeline to orchestrate GitHub (Source), CodeBuild (Test/Compile), and CodeDeploy (Release)",
    "id": 121
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "What stages should a production CI/CD pipeline contain?",
    "explanation": "A standard robust pipeline contains:\n1. **Source**: Pull code on push/merge.\n2. **Build & Test (CI)**: Compile code, run unit tests, run SonarQube/SAST.\n3. **Package**: Publish Docker image or ZIP artifact to a registry (S3/ECR).\n4. **Deploy Dev**: Auto-deploy to a development environment.\n5. **Deploy QA**: Auto-deploy to QA and run automated UI/integration tests.\n6. **Manual Approval**: A hard gate requiring a human click.\n7. **Deploy Prod**: Deploy to production using a Blue-Green or Canary strategy.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Source -> Build/Test -> Package -> Deploy Dev -> Deploy QA -> Manual Approval -> Deploy Prod",
    "id": 122
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement source control integration?",
    "explanation": "In AWS CodePipeline, you create a 'Source' stage. For GitHub or Bitbucket, you use an **AWS CodeStar connection** to securely authenticate. You configure the Source stage to listen to a specific branch (e.g., `main`). When a developer merges a PR, a webhook instantly alerts CodePipeline to download the latest commit and begin the pipeline.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By using a CodeStar connection and configuring a webhook on the target branch",
    "id": 123
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you trigger a pipeline automatically after a Git push?",
    "explanation": "AWS automatically configures a Webhook on the Git repository (GitHub/GitLab/CodeCommit). When you push code, the repository sends an HTTP POST request to AWS CodePipeline, which triggers a new execution instantly. For CodeCommit, it relies on Amazon EventBridge events.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Through automatically configured webhooks (GitHub) or EventBridge events (CodeCommit)",
    "id": 124
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement Pull Request validation?",
    "explanation": "You create a standalone CodeBuild project that is triggered via a GitHub Webhook listening specifically for 'Pull Request' events. The `buildspec.yml` compiles the code and runs unit tests. The CodeBuild project reports a \"Pass\" or \"Fail\" status back to the GitHub PR UI, blocking the merge if tests fail.",
    "code": "",
    "example": "",
    "tip": "Explain that PR validation is usually *not* done in CodePipeline, but rather a standalone CodeBuild project.",
    "summary": "By configuring a standalone CodeBuild project triggered by PR webhooks to run tests and report status back",
    "id": 125
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you run unit tests automatically?",
    "explanation": "Unit tests are run during the 'Build' phase in CodeBuild. You explicitly define the test command (e.g., `npm test` or `mvn test`) in the `buildspec.yml`. If any test fails, the command returns a non-zero exit code, which inherently causes CodeBuild to fail and stops the pipeline.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By executing the test CLI command inside the buildspec.yml file",
    "id": 126
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement code quality checks?",
    "explanation": "Code quality is usually enforced using a tool like **SonarQube** or **SonarCloud**. You add the Sonar Scanner CLI tool to your `buildspec.yml`. After running tests, the scanner analyzes the code for bugs, code smells, and coverage, and uploads the report to the SonarQube server. If the 'Quality Gate' fails, you configure CodeBuild to fail the pipeline.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By integrating a Static Application Security Testing (SAST) tool like SonarQube in the buildspec",
    "id": 127
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement security scanning?",
    "explanation": "Security scanning happens at multiple levels:\n1. **SAST (Static Analysis)**: Running tools like Checkmarx or SonarQube during the build.\n2. **SCA (Software Composition Analysis)**: Checking `package.json` for known CVEs using `npm audit` or tools like Snyk.\n3. **Container Scanning**: Enabling \"Scan on Push\" in Amazon ECR to automatically scan Docker images for OS-level vulnerabilities.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Using SAST for code, SCA for dependencies, and ECR \"Scan on push\" for Docker containers",
    "id": 128
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you manage secrets in CI/CD?",
    "explanation": "Secrets must NEVER be stored in the Git repository or hardcoded in `buildspec.yml`. \nInstead, they are stored in **AWS Secrets Manager** or **AWS SSM Parameter Store**. The CodeBuild service uses its IAM Role to query Secrets Manager dynamically at runtime and injects the secrets into the environment variables.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By storing them in AWS Secrets Manager and pulling them dynamically at runtime via IAM Roles",
    "id": 129
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you manage environment-specific configuration?",
    "explanation": "You do not hardcode database URLs in your code. You tokenize them (e.g., `#{DB_URL}#`). During the deployment stage (not the build stage), you use tools (or scripts in the `appspec.yml`) to inject the correct environment-specific values stored in AWS Systems Manager (SSM) Parameter Store for that specific environment (Dev, QA, Prod).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By tokenizing configurations and replacing them at deployment time using SSM Parameter Store",
    "id": 130
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you promote the same artifact across environments?",
    "explanation": "You configure a single CodePipeline with multiple sequential deployment stages. CodeBuild runs exactly once, generating an immutable ZIP or Docker image stored in S3/ECR. \nThe `DeployDev` stage deploys that artifact. If successful, the `DeployProd` stage downloads that *exact same* artifact and deploys it. You never re-run CodeBuild between environments.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By designing sequential pipeline stages that all deploy the exact same immutable artifact from S3/ECR",
    "id": 131
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "Why should you build once and deploy many times?",
    "explanation": "Building code creates slight variations (e.g., timestamps change, dynamic dependencies might pull a slightly newer minor version). If you build for QA, test it, and then *rebuild* for Prod, you are deploying an untested binary. Building once creates an **immutable artifact**, guaranteeing that what goes to Prod is byte-for-byte identical to what passed QA.",
    "code": "",
    "example": "",
    "tip": "Use the phrase 'Immutable Artifact' to sound like a senior engineer.",
    "summary": "To guarantee that the exact binary tested in lower environments is identical to what hits Production",
    "id": 132
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement approval before production deployment?",
    "explanation": "In AWS CodePipeline, you add an **'Manual Approval' Action** as a stage right before the Production deployment stage. When the pipeline reaches this action, it stops executing and publishes a notification to an SNS topic (which emails the QA team). The pipeline resumes only when an authorized IAM user logs into the console and clicks 'Approve'.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By adding a 'Manual Approval' action in CodePipeline tied to an SNS notification",
    "id": 133
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement automated rollback?",
    "explanation": "In AWS CodeDeploy, you can configure **Automatic Rollbacks**. You link a CloudWatch Alarm (e.g., 'HTTP 500 errors > 5%') to the Deployment Group. If that alarm goes off during or immediately after the deployment, CodeDeploy automatically stops the deployment and redeploys the previously successful application revision.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By configuring CodeDeploy to automatically redeploy the last known good revision if a CloudWatch Alarm triggers",
    "id": 134
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement database deployment in CI/CD?",
    "explanation": "Databases are updated using automated migration scripts (like Entity Framework Migrations, Flyway, or Liquibase). You define a step in the pipeline (often a Lambda function or a CodeBuild job) that runs the migration tool against the target RDS database. This step MUST happen before the application code is swapped on the EC2 servers.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By integrating tools like Flyway/Liquibase to run automated SQL migrations against the database prior to app deployment",
    "id": 135
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you handle failed pipeline executions?",
    "explanation": "When a pipeline fails, I receive an SNS/Slack alert. I click the link to the failed stage in AWS CodePipeline, view the CodeBuild or CodeDeploy logs to identify the exact error (e.g., a failed unit test or a missing permission), fix the issue locally, and push a hotfix branch to trigger a new pipeline run.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Review the detailed logs in CodeBuild/CodeDeploy, fix the underlying code, and push a new commit",
    "id": 136
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you reduce pipeline execution time?",
    "explanation": "1. **Caching**: Use CodeBuild's local caching (for `node_modules` or `.m2`) so dependencies don't download from scratch every time.\n2. **Parallelism**: Split large test suites into multiple CodeBuild projects that run concurrently.\n3. **Compute Type**: Increase the CPU/RAM of the CodeBuild container environment.\n4. **Docker Layers**: Optimize Dockerfiles to utilize layer caching.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By implementing dependency caching, parallel test execution, and increasing build server resources",
    "id": 137
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement parallel jobs?",
    "explanation": "In AWS CodePipeline, a 'Stage' can contain multiple 'Actions'. By default, actions in a stage run in parallel. You can put a 'Run UI Tests' CodeBuild action and a 'Run Integration Tests' CodeBuild action in the exact same stage, and CodePipeline will spin up two separate containers to run them simultaneously.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By placing multiple Action configurations within a single CodePipeline Stage",
    "id": 138
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How do you implement deployment notifications?",
    "explanation": "You use **AWS Chatbot** or **Amazon EventBridge**. You create an EventBridge rule that listens for 'CodePipeline Pipeline Execution State Change' events. You route these events to an SNS Topic. If using Slack/Teams, AWS Chatbot subscribes to that SNS Topic and formats the notification beautifully into your chat channel.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Using EventBridge to capture pipeline state changes, routing them to SNS and AWS Chatbot",
    "id": 139
  },
  {
    "category": "CI/CD & DevOps Pipeline",
    "title": "How would you design Dev → QA → UAT → Production deployment flow?",
    "explanation": "1. **CodePipeline** orchestrates the flow.\n2. **Source/Build Stages**: Generate one immutable artifact.\n3. **Dev Stage**: CodeDeploy pushes the artifact to Dev EC2s.\n4. **QA Stage**: CodeDeploy pushes to QA EC2s, followed immediately by a CodeBuild action that runs automated Selenium tests.\n5. **UAT Stage**: Manual Approval Action (requires Product Owner), then deploys to UAT.\n6. **Prod Stage**: Manual Approval Action (requires Change Board), then uses CodeDeploy Blue/Green deployment to push to Production safely.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A sequential CodePipeline using one immutable artifact, with manual approval gates before UAT and Prod",
    "id": 140
  },
  {
    "category": "Docker & Containerization",
    "title": "What is Docker?",
    "explanation": "Docker is an open-source platform that enables developers to package applications and their dependencies into a standardized unit called a container. This ensures the application runs exactly the same way regardless of the environment (a developer's laptop, QA server, or AWS cloud).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A platform for packaging applications and dependencies into standardized, portable containers",
    "id": 141
  },
  {
    "category": "Docker & Containerization",
    "title": "Container vs Virtual Machine?",
    "explanation": "- **Virtual Machine**: Includes a full copy of an operating system, virtualized hardware, and the app. It is heavy, slow to boot, and consumes gigabytes of RAM.\n- **Container**: Shares the host machine's OS kernel. It only contains the application and its dependencies. It is extremely lightweight, boots in milliseconds, and consumes very little RAM.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "VMs virtualize the hardware and include a full OS; Containers virtualize the OS and share the kernel",
    "id": 142
  },
  {
    "category": "Docker & Containerization",
    "title": "What is a Docker image?",
    "explanation": "A Docker image is a read-only template that contains a set of instructions for creating a Docker container. It includes the application code, libraries, tools, and dependencies required to make the application run. It is the \"blueprint\" for the container.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A read-only, executable template used to create Docker containers",
    "id": 143
  },
  {
    "category": "Docker & Containerization",
    "title": "What is a Docker container?",
    "explanation": "A container is a running instance of a Docker image. If the image is the class definition, the container is the instantiated object in memory. You can run, start, stop, and delete containers without affecting the underlying image.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A running, isolated instance of a Docker image",
    "id": 144
  },
  {
    "category": "Docker & Containerization",
    "title": "What is a Dockerfile?",
    "explanation": "A Dockerfile is a simple text file containing a list of commands that the Docker daemon calls sequentially to assemble an image. It defines the base OS (`FROM`), sets environment variables (`ENV`), copies files (`COPY`), and specifies the command to run the app (`CMD`).",
    "code": "FROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nCMD [\"node\", \"server.js\"]",
    "example": "",
    "tip": "",
    "summary": "A text script containing the instructions to build a Docker image",
    "id": 145
  },
  {
    "category": "Docker & Containerization",
    "title": "What is a Docker layer?",
    "explanation": "Every command in a Dockerfile (like `RUN`, `COPY`, `ADD`) creates a new layer in the Docker image. Layers are cached. If you change your application code but not your `package.json`, Docker reuses the cached layer where it ran `npm install`, drastically speeding up subsequent builds.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An intermediate, cached filesystem state created by each instruction in a Dockerfile",
    "id": 146
  },
  {
    "category": "Docker & Containerization",
    "title": "What is Docker Compose?",
    "explanation": "Docker Compose is a tool for defining and running multi-container Docker applications. You use a single `docker-compose.yml` file to configure multiple services (e.g., a Node.js web container AND a PostgreSQL database container) and launch them together with a single command (`docker-compose up`).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A tool used to define, launch, and manage multi-container applications locally",
    "id": 147
  },
  {
    "category": "Docker & Containerization",
    "title": "What is an image registry?",
    "explanation": "A registry is a storage and distribution system for Docker images. After building an image on your laptop or in CI, you 'push' it to a registry. Servers then 'pull' the image from the registry to run it. Examples include Docker Hub (public) and Amazon ECR (private).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A centralized repository for storing, distributing, and versioning Docker images",
    "id": 148
  },
  {
    "category": "Docker & Containerization",
    "title": "What is Amazon ECR?",
    "explanation": "Amazon Elastic Container Registry (ECR) is a fully managed, private Docker container registry that makes it easy to store, manage, share, and deploy container images. It is deeply integrated with IAM for security and ECS/EKS for deployment.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "AWS's fully managed, private Docker container registry",
    "id": 149
  },
  {
    "category": "Docker & Containerization",
    "title": "ECR vs Docker Hub?",
    "explanation": "- **Docker Hub**: The default public registry. Anyone can pull images from it. Private repos cost extra.\n- **Amazon ECR**: A private registry hosted entirely within your AWS account. It is secured by AWS IAM, meaning only authorized users or EC2/ECS roles can pull images. It also offers automated vulnerability scanning.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Docker Hub is typically public; ECR is private, highly secure, and deeply integrated with AWS",
    "id": 150
  },
  {
    "category": "Docker & Containerization",
    "title": "How do you build a Docker image in CodeBuild?",
    "explanation": "In your `buildspec.yml`, you define the `docker build` command in the `build` phase. You must also ensure the CodeBuild environment has the 'Privileged' flag checked in the AWS Console, which allows the CodeBuild container to run the Docker daemon inside itself (Docker-in-Docker).",
    "code": "phases:\n  build:\n    commands:\n      - docker build -t my-app:latest .",
    "example": "",
    "tip": "",
    "summary": "By running `docker build` in the buildspec and enabling the 'Privileged' flag on the CodeBuild project",
    "id": 151
  },
  {
    "category": "Docker & Containerization",
    "title": "How do you push a Docker image to ECR?",
    "explanation": "1. In the `pre_build` phase, use the AWS CLI to authenticate Docker to ECR: `aws ecr get-login-password | docker login...`\n2. In the `build` phase, build the image and tag it with the ECR URI.\n3. In the `post_build` phase, execute `docker push <account-id>.dkr.ecr.<region>.amazonaws.com/my-repo:latest`.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Authenticate via the AWS CLI, build/tag the image, and run `docker push` in CodeBuild",
    "id": 152
  },
  {
    "category": "Docker & Containerization",
    "title": "How do you tag Docker images?",
    "explanation": "You should tag images using a unique identifier, usually the Git commit hash (e.g., `my-app:a1b2c3d`) or a pipeline execution ID. Never rely solely on the `latest` tag in production, as it makes rolling back extremely difficult and you lose track of exactly what code is currently running.",
    "code": "",
    "example": "",
    "tip": "Always advise against using the 'latest' tag in production.",
    "summary": "Using unique identifiers like the Git commit hash rather than the mutable `latest` tag",
    "id": 153
  },
  {
    "category": "Docker & Containerization",
    "title": "How do you scan container images for vulnerabilities?",
    "explanation": "You can enable **\"Scan on push\"** in your Amazon ECR repository settings. Whenever CodeBuild pushes a new image to ECR, AWS automatically scans the OS packages (like Debian/Alpine) against the CVE database and provides a report of critical, high, and medium vulnerabilities.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By enabling the automated \"Scan on push\" feature in Amazon ECR",
    "id": 154
  },
  {
    "category": "Docker & Containerization",
    "title": "How would you optimize a Docker image for production?",
    "explanation": "1. **Use small base images**: Use `alpine` or `distroless` images to reduce attack surface and size (e.g., from 800MB to 50MB).\n2. **Multi-stage builds**: Use a fat SDK image to compile the code, but only copy the compiled binary to a tiny runtime image in the final stage.\n3. **Layer Caching**: Put commands that change frequently (like `COPY . .`) at the very bottom of the Dockerfile, and dependencies (`npm install`) at the top.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use Alpine/Distroless bases, utilize multi-stage builds, and optimize layer caching",
    "id": 155
  }
,
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is Amazon ECS?",
    "explanation": "Amazon Elastic Container Service (ECS) is a highly scalable, high-performance container orchestration service that supports Docker containers. It allows you to easily run and scale containerized applications on AWS without having to install and operate your own cluster management software.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "AWS's native, highly scalable container orchestration service for running Docker containers",
    "id": 156
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "ECS vs EKS?",
    "explanation": "- **ECS**: Amazon's proprietary container orchestrator. It is deeply integrated with AWS, much simpler to learn, and requires less maintenance.\n- **EKS**: Amazon Elastic Kubernetes Service. It runs upstream, open-source Kubernetes. It is vastly more complex but is the industry standard, meaning your deployment manifests are portable to Azure/GCP.",
    "code": "",
    "example": "",
    "tip": "Choose ECS for simplicity and AWS lock-in; choose EKS for portability and multi-cloud strategies.",
    "summary": "ECS is native/simple; EKS is open-source Kubernetes and complex but portable",
    "id": 157
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is AWS Fargate?",
    "explanation": "AWS Fargate is a serverless compute engine for containers that works with both ECS and EKS. Fargate entirely removes the need to provision and manage EC2 servers. You simply define your container's CPU/RAM requirements, and AWS provisions the underlying infrastructure invisibly.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A serverless compute engine for containers that eliminates the need to manage EC2 instances",
    "id": 158
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "ECS EC2 launch type vs Fargate?",
    "explanation": "- **EC2 Launch Type**: You manage a fleet of EC2 instances. You are responsible for OS patches, scaling the underlying EC2 Auto Scaling Group, and optimizing container packing. You pay for the EC2 instances, regardless of whether containers are running on them.\n- **Fargate**: Serverless. No EC2 instances to manage. You pay exactly per minute for the CPU/RAM your specific containers use.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "EC2 type requires managing host VMs; Fargate is fully serverless and charges per container",
    "id": 159
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is an ECS Cluster?",
    "explanation": "An ECS Cluster is a logical grouping of tasks or services. If using the EC2 launch type, the cluster also logically groups the underlying EC2 instances. It acts as a boundary for your container deployments.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A logical grouping of tasks, services, and (optionally) EC2 infrastructure",
    "id": 160
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is an ECS Task Definition?",
    "explanation": "A Task Definition is a blueprint for your application. It is a JSON file that describes one or more containers that form your application. It specifies the Docker image URI, CPU/RAM requirements, environment variables, IAM roles, and port mappings. It is the ECS equivalent of a `docker-compose.yml` file.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A JSON blueprint defining how your containers should run (image, CPU, memory, ports)",
    "id": 161
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is an ECS Service?",
    "explanation": "An ECS Service ensures that a specified number of Tasks (based on a Task Definition) are constantly running. If a container crashes, the Service automatically detects the failure and launches a replacement Task. It also manages registering those Tasks with an Application Load Balancer.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Maintains a desired count of running tasks and registers them with a load balancer",
    "id": 162
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is an ECS Task?",
    "explanation": "A Task is a single running instantiation of a Task Definition within an ECS Cluster. If your ECS Service has a \"desired count\" of 3, ECS will spawn 3 individual Tasks.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A single running instance of a Task Definition",
    "id": 163
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "How does ECS service discovery work?",
    "explanation": "ECS integrates with **AWS Cloud Map**. When a new Task boots up, ECS automatically registers its internal IP address with Cloud Map. Other microservices in the VPC can then communicate with it using a friendly DNS name (e.g., `http://backend.local`) instead of hardcoding volatile IP addresses.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Uses AWS Cloud Map to automatically assign internal DNS names to dynamic container IPs",
    "id": 164
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "How do you deploy a Docker application to ECS?",
    "explanation": "1. **CodeBuild**: Compile the code and `docker build` the image.\n2. **ECR**: Push the image to Amazon ECR.\n3. **CodeDeploy/ECS**: Create a new revision of the ECS Task Definition pointing to the new ECR image URI. Then, update the ECS Service to use this new Task Definition revision.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Build image -> Push to ECR -> Create new Task Definition revision -> Update ECS Service",
    "id": 165
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is Amazon EKS?",
    "explanation": "Amazon Elastic Kubernetes Service (EKS) is a managed service that makes it easy to run upstream Kubernetes on AWS. AWS manages the highly-available Kubernetes Control Plane (API server, etcd) across multiple Availability Zones, so you only have to manage the worker nodes (or use Fargate).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A fully managed service providing a highly available Kubernetes Control Plane",
    "id": 166
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is Kubernetes?",
    "explanation": "Kubernetes (K8s) is an open-source system for automating deployment, scaling, and management of containerized applications. Originally designed by Google, it is now the industry standard orchestrator for complex microservice architectures.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An open-source, industry-standard container orchestration platform",
    "id": 167
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a Kubernetes Pod?",
    "explanation": "A Pod is the smallest deployable compute unit in Kubernetes. A Pod encapsulates one or more Docker containers that share the same network namespace (IP address) and storage volumes. Usually, one Pod = one container.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "The smallest deployable unit in Kubernetes, typically wrapping a single Docker container",
    "id": 168
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a Deployment in Kubernetes?",
    "explanation": "A Kubernetes Deployment is a declarative YAML object that manages a set of identical Pods (a ReplicaSet). You define the desired state (e.g., \"I want 3 replicas of the frontend app\"), and the Deployment Controller constantly monitors and replaces any Pods that fail to maintain that exact count.",
    "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3",
    "example": "",
    "tip": "",
    "summary": "A controller that maintains a desired number of identical Pods and handles rolling updates",
    "id": 169
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a Kubernetes Service?",
    "explanation": "Pods are ephemeral; their IP addresses change constantly as they are destroyed and recreated. A Kubernetes Service provides a stable, persistent IP address and DNS name to abstract away the dynamic Pod IPs. It acts as an internal load balancer, routing traffic to the healthy Pods.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An abstraction that provides a stable IP/DNS and load balances traffic across ephemeral Pods",
    "id": 170
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a ConfigMap?",
    "explanation": "A ConfigMap is an API object used to store non-confidential data in key-value pairs (like database URLs or feature flags). Pods can consume ConfigMaps as environment variables or configuration files, allowing you to decouple environment-specific configuration from your container images.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Stores non-confidential configuration data decoupled from the container image",
    "id": 171
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a Kubernetes Secret?",
    "explanation": "A Secret is similar to a ConfigMap but is specifically designed to hold sensitive data like passwords, OAuth tokens, and SSH keys. They are base64 encoded and can be mounted into Pods as environment variables or files.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "An object for storing sensitive data like passwords and tokens separately from Pod definitions",
    "id": 172
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "What is a Kubernetes Ingress?",
    "explanation": "An Ingress is an API object that manages external HTTP/HTTPS access to the Services inside a cluster. It provides path-based routing (e.g., routing `/api` to the backend service and `/` to the frontend service) and SSL termination. In AWS, an Ingress controller typically provisions an Application Load Balancer (ALB).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Manages external HTTP/S routing to internal cluster Services, often acting as an ALB",
    "id": 173
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "How do you implement rolling deployment in Kubernetes?",
    "explanation": "Rolling updates are the default behavior in a Kubernetes `Deployment`. When you update the image tag in the Deployment YAML, K8s automatically creates a new ReplicaSet. It scales up the new ReplicaSet one Pod at a time, and scales down the old ReplicaSet one Pod at a time, ensuring zero downtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "It is the default behavior of the Deployment object when the image tag is updated",
    "id": 174
  },
  {
    "category": "ECS, EKS & Kubernetes",
    "title": "How would you troubleshoot a Kubernetes pod that keeps restarting?",
    "explanation": "The Pod is likely in a `CrashLoopBackOff` state.\n1. Run `kubectl get pods` to verify the state.\n2. Run `kubectl describe pod <pod-name>` to check the Kubernetes Events (e.g., Liveness probe failed, OutOfMemory (OOM) Killed, or ImagePullBackOff).\n3. Run `kubectl logs <pod-name> --previous` to see the application crash stack trace from just before it restarted.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use `kubectl describe pod` for K8s events and `kubectl logs --previous` for application errors",
    "id": 175
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What is Amazon CloudWatch?",
    "explanation": "Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, and IT managers. It provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, optimize resource utilization, and get a unified view of operational health.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "AWS's central monitoring, logging, and observability service",
    "id": 176
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What are CloudWatch Metrics?",
    "explanation": "Metrics are time-ordered sets of data points representing the performance of AWS resources. For example, EC2 automatically publishes metrics for CPU Utilization, Network In/Out, and Disk Read/Write to CloudWatch every 5 minutes (or 1 minute with Detailed Monitoring).",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Time-series data points tracking resource performance (e.g., CPU, Memory, Network)",
    "id": 177
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What are CloudWatch Logs?",
    "explanation": "CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services into a single, highly scalable service. You can use CloudWatch Logs Insights to interactively search and analyze your log data using a SQL-like query language.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A centralized repository for storing and searching application and system log files",
    "id": 178
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What are CloudWatch Alarms?",
    "explanation": "Alarms continuously monitor CloudWatch metrics. If a metric breaches a defined threshold (e.g., 'CPU > 80% for 5 minutes'), the Alarm changes to the `ALARM` state. It can then automatically trigger actions, such as sending an SNS email notification or triggering an Auto Scaling Group to launch more EC2 instances.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Triggers automated actions (like SNS alerts or Auto Scaling) when metrics breach thresholds",
    "id": 179
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What is a CloudWatch Dashboard?",
    "explanation": "A CloudWatch Dashboard is a customizable home page in the CloudWatch console that you can use to monitor your resources in a single view, even those that are spread across different Regions. You populate it with graphs plotting specific Metrics or log queries.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A customizable visual UI for plotting multiple metric graphs in a single view",
    "id": 180
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "How do you monitor EC2 CPU utilization?",
    "explanation": "AWS automatically tracks EC2 CPU utilization out of the box without any agents. You simply open the CloudWatch console, navigate to Metrics -> EC2, and select the `CPUUtilization` metric for your specific Instance ID.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "It is tracked automatically by default as a standard EC2 CloudWatch metric",
    "id": 181
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "How do you monitor application logs?",
    "explanation": "To get application logs (like Nginx logs or Node.js console output) from an EC2 instance into CloudWatch, you must install the **CloudWatch Agent** on the EC2 server. You configure the agent's JSON file to point to `/var/log/nginx/access.log`, and it will constantly stream those log entries to a CloudWatch Log Group.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Install and configure the CloudWatch Agent on the EC2 instance to stream local log files",
    "id": 182
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "How do you configure alerts for application failures?",
    "explanation": "1. Stream application logs to CloudWatch Logs.\n2. Create a **Metric Filter** that searches the logs for the word `ERROR` or `Exception` and increments a custom metric.\n3. Create a **CloudWatch Alarm** on that custom metric (e.g., if Errors > 5 in 1 minute, trigger alarm).\n4. Link the Alarm to an **SNS Topic** to send a Slack/Email alert to the DevOps team.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Create a Metric Filter for 'ERROR' in the logs, attach an Alarm, and route it to an SNS topic",
    "id": 183
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "What is AWS CloudTrail?",
    "explanation": "AWS CloudTrail provides governance, compliance, and auditing for your AWS account. It records every single API call made within your account (whether via the Console, CLI, or SDK). It answers the critical security question: \"Who did what, when, and from which IP address?\"",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "A security auditing service that records every API call made in the AWS account",
    "id": 184
  },
  {
    "category": "CloudWatch, Monitoring & Logging",
    "title": "CloudWatch vs CloudTrail?",
    "explanation": "- **CloudWatch**: Focuses on **Performance**. It tells you *how* your resources are performing (CPU spikes, memory usage, application errors).\n- **CloudTrail**: Focuses on **Security/Auditing**. It tells you *who* made changes (e.g., User Bob deleted the production database at 2:00 AM).",
    "code": "",
    "example": "",
    "tip": "CloudWatch = \"What is happening?\". CloudTrail = \"Who did it?\".",
    "summary": "CloudWatch monitors performance and logs; CloudTrail audits user API activity",
    "id": 185
  }
,
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you achieve zero-downtime deployments?",
    "explanation": "I use a **Blue/Green deployment strategy**. The existing application (Blue) runs in Production on an Auto Scaling Group behind an ALB. The CI/CD pipeline deploys the new version to a completely new Auto Scaling Group (Green) and runs automated health checks. Once Green passes, the ALB routing rule is instantly flipped from Blue to Green. If issues occur, flipping back to Blue takes seconds.",
    "code": "",
    "example": "",
    "tip": "Always mention Blue/Green or Canary deployments when asked about zero downtime.",
    "summary": "Deploying a new environment alongside the old one, testing it, and instantly switching router traffic",
    "id": 186
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you handle database schema changes without downtime?",
    "explanation": "I decouple database migrations from application deployments using the **Expand and Contract pattern**.\n1. **Expand**: Add new columns/tables. Deploy app v1.1 which writes to *both* old and new columns, but reads from old.\n2. **Migrate**: Run a background script to copy old data to new columns.\n3. **Transition**: Deploy app v1.2 which reads and writes *only* to the new columns.\n4. **Contract**: Drop the old columns.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "By using the Expand and Contract pattern to decouple DB changes from app code changes",
    "id": 187
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: A developer pushed AWS keys to GitHub. What do you do?",
    "explanation": "1. **Delete**: Immediately delete or deactivate the exposed Access Keys in IAM.\n2. **Audit**: Review CloudTrail logs immediately to see if the keys were used by malicious actors (e.g., spinning up crypto-mining EC2 instances).\n3. **Rotate**: Generate new keys for the developer and securely store them in Secrets Manager.\n4. **Prevent**: Implement `git-secrets` or pre-commit hooks to scan for credentials before a push is allowed.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Deactivate keys in IAM immediately, audit CloudTrail for misuse, and implement pre-commit scanning",
    "id": 188
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you reduce AWS costs?",
    "explanation": "1. **Compute**: Switch non-critical workloads to Spot Instances. Purchase Compute Savings Plans or Reserved Instances for baseline loads.\n2. **Storage**: Implement S3 Lifecycle policies to move old logs/data to Glacier Deep Archive. Delete unattached EBS volumes.\n3. **Networking**: Ensure resources communicate via private IPs or VPC Endpoints to avoid NAT Gateway data transfer charges.\n4. **Idle Resources**: Use AWS Instance Scheduler to turn off Dev/QA environments at night and on weekends.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use Spot/Reserved instances, S3 Lifecycle policies, delete unused resources, and shutdown Dev at night",
    "id": 189
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: Your application is suddenly slow. How do you troubleshoot?",
    "explanation": "1. **Check the Load Balancer**: Review ALB CloudWatch metrics (TargetResponseTime and HTTP 5xx counts).\n2. **Check Compute**: Look at EC2/ECS CPU and Memory metrics to see if instances are maxed out.\n3. **Check Database**: Look at RDS CPU, Read/Write IOPS, and Database Connections. A locked table or missing index often causes sudden slowness.\n4. **Check Logs**: Review application logs in CloudWatch or X-Ray traces to find the specific bottleneck function.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Analyze ALB response times, compute metrics, database IOPS/locks, and application traces via X-Ray",
    "id": 190
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you design a disaster recovery (DR) plan?",
    "explanation": "A robust Multi-Region DR plan depends on the RTO (Recovery Time) and RPO (Recovery Point):\n1. **Pilot Light**: Core infrastructure (VPCs, DBs) is replicated to a secondary region. DB is continuously synced (RDS Cross-Region Read Replica). Compute is scaled to 0.\n2. **Warm Standby**: A scaled-down version of the app runs in the secondary region. Upon disaster, Auto Scaling scales it up, and Route 53 fails over DNS.\n3. **Multi-Site Active/Active**: App serves traffic from both regions simultaneously. Highest cost, zero downtime.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Choose between Pilot Light, Warm Standby, or Active/Active based on RTO/RPO and budget",
    "id": 191
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you securely access private EC2 instances without SSH keys?",
    "explanation": "I use **AWS Systems Manager (SSM) Session Manager**. It provides secure, interactive browser-based shell access to EC2 instances without needing to open inbound port 22 in Security Groups, without managing `.pem` SSH keys, and without needing a Bastion Host. All session commands are fully logged in CloudTrail and S3 for auditing.",
    "code": "",
    "example": "",
    "tip": "SSM Session Manager is the modern, highly secure answer to 'How do I SSH into a server?'",
    "summary": "Use AWS SSM Session Manager to eliminate inbound SSH ports, bastion hosts, and key management",
    "id": 192
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: A deployment failed in Prod. How do you handle it?",
    "explanation": "1. **Automated Rollback**: My CodeDeploy pipeline is configured to auto-rollback if CloudWatch alarms (like 500 errors > 2%) trigger during deployment.\n2. **Communicate**: Notify stakeholders immediately.\n3. **Investigate**: Check CloudWatch Logs and CodeDeploy logs to find the root cause.\n4. **Post-Mortem**: Once fixed and successfully deployed, hold a blameless post-mortem to discuss why the issue wasn't caught in QA, and add a test to the CI pipeline to prevent it from happening again.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Rely on automated rollbacks, investigate logs, fix the issue, and implement tests to prevent recurrence",
    "id": 193
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you handle a massive, unexpected traffic spike?",
    "explanation": "1. **Auto Scaling**: Ensure the EC2 ASG or ECS Service is configured with Target Tracking scaling policies to scale out automatically.\n2. **Caching**: Put CloudFront in front of static assets and API Gateway with caching in front of dynamic APIs. Implement ElastiCache (Redis) to offload database read queries.\n3. **Database**: Use Aurora Serverless or RDS Read Replicas to handle database load.\n4. **Decoupling**: Offload heavy background tasks (like sending emails) to SQS queues rather than processing them synchronously.",
    "code": "",
    "example": "",
    "tip": "",
    "summary": "Use aggressive caching (CloudFront/Redis), decouple architecture with SQS, and rely on Auto Scaling",
    "id": 194
  },
  {
    "category": "Real-World Scenarios",
    "title": "Scenario: How do you migrate an on-premise application to AWS?",
    "explanation": "I follow the '6 R's' strategy:\n1. **Rehost (Lift and Shift)**: Use AWS Application Migration Service to copy VMs directly to EC2.\n2. **Replatform (Lift, Tinker, Shift)**: Move the app to EC2, but swap the self-hosted database for managed RDS.\n3. **Refactor/Re-architect**: Rewrite the app to be cloud-native (e.g., breaking a monolith into ECS microservices or Lambda functions).\n4. **Repurchase**: Drop the custom app and buy a SaaS alternative.\n5. **Retain**: Leave it on-premise for now.\n6. **Retire**: Shut it down.",
    "code": "",
    "example": "",
    "tip": "Knowing the '6 R's of Migration' is a massive plus for Cloud Architect interviews.",
    "summary": "Analyze the portfolio and apply the 6 R's: Rehost, Replatform, Refactor, Repurchase, Retain, or Retire",
    "id": 195
  }
];
