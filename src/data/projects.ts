export type Tag = 'Cloud/DevOps' | 'ML' | 'Web' | 'Mobile'

export interface Project {
  slug: string
  title: string
  tags: Tag[]
  stack: string[]
  summary: string
  description: string
  image: string
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    slug: 'faraday-idp',
    title: 'Faraday IDP',
    tags: ['Cloud/DevOps'],
    stack: ['Terraform', 'Kubernetes', 'ArgoCD', 'GKE', 'EKS', 'Prometheus', 'Grafana'],
    summary: 'Self-service Internal Developer Platform across AWS and GCP.',
    description:
      'Automates cloud resource provisioning and deployment for 300+ microservices across multiple GKE/EKS clusters, cutting deployment turnaround by 90%. Includes Prometheus and Grafana observability with real-time GitOps status. Built at Searce (private, no public repo).',
    image: '',
  },
  {
    slug: 'aws-to-gcp-migration',
    title: 'AWS to GCP Migration',
    tags: ['Cloud/DevOps'],
    stack: ['Terraform', 'GKE', 'GitHub Actions', 'Jenkins', 'Cloud SQL'],
    summary: '200+ microservices and 70+ pipelines migrated with zero downtime.',
    description:
      'Moved 200+ microservices from AWS to GCP and 70+ CI/CD pipelines from Jenkins to GitHub Actions. Authored reusable Terraform modules for GKE, GCS, Cloud SQL, IAM and networking, with a zero-downtime cutover. Built at Searce (private).',
    image: '',
  },
  {
    slug: 'gitops-greenfield',
    title: 'Greenfield GitOps on GKE',
    tags: ['Cloud/DevOps'],
    stack: ['Crossplane', 'Helm', 'Terraform', 'ArgoCD', 'Kyverno', 'Checkov'],
    summary: '150+ microservices deployed declaratively on GKE.',
    description:
      'Fully declarative, GitOps-driven infrastructure provisioning using Crossplane, Helm, Terraform and ArgoCD, with Kyverno and Checkov guardrails gating changes in CI/CD. Built at Searce (private).',
    image: '',
  },
  {
    slug: 'yoga-pose',
    title: 'Yoga Pose Correction',
    tags: ['ML', 'Web'],
    stack: ['ml5.js', 'PoseNet', 'KNN', 'JavaScript'],
    summary: 'In-browser pose detection that classifies yoga poses and corrects form.',
    description:
      'Started as a research topic and became a product. ml5.js with PoseNet detects body keypoints and a KNN classifier recognizes the yoga pose.',
    image: '/images/yoga-pose.png',
    repo: 'https://github.com/Sarvyi/Yoga-Pose-Correction',
    demo: 'https://sarvyi.github.io/Yoga-Pose-Correction/',
  },
  {
    slug: 'uuid-auth',
    title: 'UUID Auth',
    tags: ['ML', 'Web'],
    stack: ['Flask', 'EasyOCR', 'TensorFlow', 'PyTorch'],
    summary: 'Hackathon project: a unique identity card built from Aadhaar, PAN and driving licence.',
    description:
      'Extracts data from government IDs with OCR, generates a unique identification card exportable as PDF and uses it to authorize the user. Built at the LOC hackathon.',
    image: '/images/uuid_auth.png',
    repo: 'https://github.com/Sarvyi/UUID_Auth',
  },
  {
    slug: 'car101',
    title: 'Car 101',
    tags: ['ML', 'Web'],
    stack: ['Streamlit', 'TensorFlow', 'YOLO', 'XGBoost', 'BS4'],
    summary: 'Used-car price understanding platform with damage detection.',
    description:
      'XGBoost predicts prices, VGG16 classifies cars (95.64% train, 76.17% validation accuracy), YOLO detects scratches and damage, and BS4 scrapes listings.',
    image: '/images/car101.png',
    repo: 'https://github.com/Sarvyi/Car101',
    demo: 'https://sarvyi-car101-app-bcy37s.streamlit.app/',
  },
  {
    slug: 'tetris',
    title: 'Tetris',
    tags: ['Web'],
    stack: ['React', 'Tailwind', 'Styled Components', 'Framer Motion'],
    summary: 'Tetris game in React with animated UI.',
    description:
      'Built with React, Tailwind and styled-components, animated with Framer Motion. Firebase auth and a chat feature are planned.',
    image: '/images/tetris.jpg',
    repo: 'https://github.com/Sarvyi/Tetris',
  },
  {
    slug: 'whatsapp-analyzer',
    title: 'WhatsApp Analyzer',
    tags: ['ML', 'Web'],
    stack: ['Python', 'Streamlit', 'Hugging Face'],
    summary: 'Analyze exported WhatsApp chats.',
    description:
      'Python analysis over an exported chat, with a Streamlit frontend hosted on Hugging Face Spaces.',
    image: '/images/whatsapp-analysis.png',
    repo: 'https://github.com/Sarvyi/Whatsapp_Analyzer',
    demo: 'https://huggingface.co/spaces/Sarvy/Streamlit_Whatsapp_Analyzer',
  },
  {
    slug: 'ecommerce',
    title: 'eCommerce',
    tags: ['Web'],
    stack: ['Django', 'Bootstrap'],
    summary: 'Full Django eCommerce app with auth and admin-managed content.',
    description:
      'Built entirely with Django models and forms: user authorization and authentication, plus content management from the superadmin panel.',
    image: '/images/eCommerce.png',
    repo: 'https://github.com/Sarvyi/eCommerce',
  },
  {
    slug: 'youtube-ui',
    title: 'YouTube UI',
    tags: ['Mobile'],
    stack: ['Kotlin', 'Jetpack Compose'],
    summary: 'YouTube UI clone for Android.',
    description: 'Built with Kotlin and Jetpack Compose in Android Studio.',
    image: '/images/Youtube-ui.png',
    repo: 'https://github.com/Sarvyi/YoutubeUI',
  },
  {
    slug: 'groovy',
    title: 'Groovy',
    tags: ['Web'],
    stack: ['JavaScript', 'HTML', 'CSS'],
    summary: 'Music player in vanilla JS.',
    description: 'Hosted on GitHub Pages with the tracks bundled in the frontend.',
    image: '/images/gorovy.png',
    repo: 'https://github.com/Sarvyi/Groovy',
  },
  {
    slug: 'weather',
    title: 'Weather App',
    tags: ['Web'],
    stack: ['React', 'Weather API'],
    summary: 'Weather forecast UI in React.',
    description: 'Practice project for async API fetching with React.',
    image: '/images/weatherapp.png',
    repo: 'https://github.com/Sarvyi/Weather-Forecast',
  },
]
