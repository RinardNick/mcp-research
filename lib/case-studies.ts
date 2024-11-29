export interface MetricData {
  label: string;
  value: number;
  previousValue?: number;
  unit?: string;
  improvement?: number;
}

export interface CaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: MetricData[];
  timeline: {
    label: string;
    data: number[];
  }[];
  category: 'portfolio-optimization' | 'client-engagement' | 'operational-efficiency' | 'risk-management';
  color: string;
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    id: 'portfolio-personalization',
    title: 'AI-Driven Portfolio Personalization',
    subtitle: 'Scaling Customization for High-Net-Worth Clients',
    summary: 'How a global wealth manager leveraged MSCI\'s AI solutions to deliver personalized portfolios at scale',
    challenge: 'A leading wealth management firm needed to provide personalized portfolio solutions for 10,000+ high-net-worth clients while maintaining consistent investment strategies and risk management.',
    solution: 'Implementation of MSCI\'s AI-powered portfolio optimization platform with automated ESG integration and tax-loss harvesting.',
    impact: 'Achieved 40% reduction in portfolio customization time while improving client satisfaction scores by 35%.',
    metrics: [
      { label: 'Portfolio Customization Time', value: 15, previousValue: 25, unit: 'minutes' },
      { label: 'Client Satisfaction', value: 92, previousValue: 68, unit: '%' },
      { label: 'Cost Reduction', value: 45, unit: '%', improvement: 45 },
      { label: 'Active Clients', value: 12500, previousValue: 8000, unit: 'clients' }
    ],
    timeline: [
      { 
        label: 'Client Satisfaction',
        data: [68, 72, 78, 85, 92]
      },
      {
        label: 'Portfolio Processing Time',
        data: [25, 22, 19, 17, 15]
      }
    ],
    category: 'portfolio-optimization',
    color: '#00408C'
  },
  {
    id: 'client-communication',
    title: 'Enhanced Client Communication',
    subtitle: 'Bridging Complex Strategies with Clear Communication',
    summary: 'Implementing AI-powered communication tools to improve client understanding and engagement',
    challenge: 'A wealth management firm struggled to explain complex investment strategies to clients, leading to lower adoption of sophisticated portfolio solutions.',
    solution: 'Deployment of MSCI\'s natural language processing platform to translate institutional-grade strategies into clear client communications.',
    impact: 'Increased client adoption of advanced strategies by 65% and reduced client support queries by 40%.',
    metrics: [
      { label: 'Strategy Adoption Rate', value: 85, previousValue: 52, unit: '%' },
      { label: 'Client Support Queries', value: 60, previousValue: 100, unit: '%', improvement: 40 },
      { label: 'Client Meeting Efficiency', value: 35, unit: '%', improvement: 35 },
      { label: 'Client Retention', value: 95, previousValue: 82, unit: '%' }
    ],
    timeline: [
      {
        label: 'Strategy Adoption',
        data: [52, 60, 68, 75, 85]
      },
      {
        label: 'Support Queries',
        data: [100, 90, 80, 70, 60]
      }
    ],
    category: 'client-engagement',
    color: '#259BF8'
  },
  {
    id: 'risk-monitoring',
    title: 'Real-Time Risk Monitoring',
    subtitle: 'Proactive Risk Management at Scale',
    summary: 'Implementing AI-powered risk monitoring across diverse portfolio strategies',
    challenge: 'A wealth manager needed to monitor and manage risk across 50,000+ personalized portfolios in real-time.',
    solution: 'Implementation of MSCI\'s AI risk monitoring system with automated alerts and adjustment recommendations.',
    impact: 'Achieved 80% faster risk detection and 50% reduction in risk-related portfolio adjustments.',
    metrics: [
      { label: 'Risk Detection Time', value: 2, previousValue: 10, unit: 'minutes' },
      { label: 'Risk Incidents', value: 50, previousValue: 100, unit: '%', improvement: 50 },
      { label: 'Portfolio Coverage', value: 100, previousValue: 60, unit: '%' },
      { label: 'Compliance Score', value: 98, previousValue: 85, unit: '%' }
    ],
    timeline: [
      {
        label: 'Risk Incidents',
        data: [100, 85, 70, 60, 50]
      },
      {
        label: 'Portfolio Coverage',
        data: [60, 70, 85, 95, 100]
      }
    ],
    category: 'risk-management',
    color: '#1AB354'
  }
];

export function getCaseStudy(id: string): CaseStudyData | undefined {
  return CASE_STUDIES.find(study => study.id === id);
}

export function getCaseStudiesByCategory(category: string): CaseStudyData[] {
  return CASE_STUDIES.filter(study => study.category === category);
}