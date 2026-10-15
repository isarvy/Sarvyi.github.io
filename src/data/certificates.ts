export interface Certificate {
  title: string
  issuer: string
  description: string
  icon?: string // boxicons class, used when there is no badge image
  image?: string
  link?: string
}

export const certificates: Certificate[] = [
  {
    title: 'Google Professional Cloud Architect',
    issuer: 'Google Cloud',
    description: 'Designing, building and managing secure, scalable and reliable solutions on Google Cloud.',
    icon: 'bxl-google-cloud',
  },
  {
    title: 'GCP Associate Cloud Engineer',
    issuer: 'Google Cloud',
    description: 'Deploying applications, monitoring operations and managing enterprise solutions on GCP.',
    icon: 'bx-cloud',
  },
  {
    title: 'HashiCorp Terraform Associate',
    issuer: 'HashiCorp',
    description: 'Infrastructure as Code fundamentals, modules, state and workflows with Terraform.',
    icon: 'bx-layer',
  },
  {
    title: 'Claude Certified Architect – Foundations (CCA-F)',
    issuer: 'Anthropic',
    description: 'Foundations of designing solutions with Claude.',
    icon: 'bx-brain',
  },
  {
    title: 'AWS Academy Machine Learning Foundations',
    issuer: 'AWS Academy',
    description: 'Hands-on experience with AWS services for data handling, analysis and visualization.',
    image: '/images/awsml.png',
    link: 'https://www.credly.com/earner/earned/badge/6c35502f-b709-4621-a2a4-840f2bc0fc91',
  },
  {
    title: 'AWS Academy Cloud Architecting',
    issuer: 'AWS Academy',
    description: 'Architecting solutions on AWS across compute, storage, networking and security.',
    image: '/images/awssaa.png',
    link: 'https://www.credly.com/earner/earned/badge/73530ecb-9f15-4aaf-b4d8-c806b74f9627',
  },
  {
    title: 'AWS Academy Data Analytics',
    issuer: 'AWS Academy',
    description: 'Hands-on experience with AWS services for data handling, analysis and visualization.',
    image: '/images/awsanal.png',
    link: 'https://www.credly.com/earner/earned/badge/c3074533-abf6-4f2b-bf37-7ab16a715917',
  },
  {
    title: 'AWS Academy Data Engineering',
    issuer: 'AWS Academy',
    description: 'AWS Data Engineering services for big data handling and analytics.',
    image: '/images/awseng.png',
    link: 'https://www.credly.com/earner/earned/badge/0fb3dbd7-67bb-4c32-a38d-9be9ee2d6cdc',
  },
]
