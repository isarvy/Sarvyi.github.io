export interface Experience {
  title: string
  company: string
  period: string
  location?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    title: 'Cloud Engineer',
    company: 'Searce Inc.',
    period: '10/2024 – Present',
    location: 'Mumbai',
    bullets: [
      'Architected and operated multi-cloud infrastructure across AWS and GCP using Terraform, Kubernetes, GitOps and ArgoCD.',
      'Built Faraday, a self-service Internal Developer Platform spanning AWS and GCP, automating provisioning and deployment for 300+ microservices across GKE/EKS clusters and cutting deployment turnaround by 90%.',
      'Implemented observability (Prometheus, Grafana) with real-time GitOps status across the platform.',
      'Enforced DevSecOps guardrails in CI/CD with policy-as-code (Kyverno) and IaC scanning (Checkov).',
      'Led migration of 200+ microservices from AWS to GCP and 70+ pipelines from Jenkins to GitHub Actions with zero-downtime cutover, authoring reusable Terraform modules for GKE, GCS, Cloud SQL, IAM and networking.',
      'Standardized GitHub Actions for an enterprise customer via reusable workflows and composite actions.',
      'Drove greenfield deployment of 150+ microservices on GKE using Crossplane, Helm, Terraform and ArgoCD.',
      'Contributed to pre-sales: POCs, SOWs, resource estimation and delivery plans.',
    ],
  },
]
