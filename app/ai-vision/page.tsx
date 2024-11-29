'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Brain, 
  Users, 
  BarChart3, 
  Shield, 
  Workflow,
  Zap
} from "lucide-react";
import { MSCI_COLORS } from "@/lib/brand";

const sections = [
  {
    id: 'portfolio-optimization',
    title: 'Portfolio Intelligence',
    icon: Brain,
    content: [
      'Real-time portfolio analysis and rebalancing recommendations',
      'AI-powered risk assessment and management',
      'Automated tax-loss harvesting at scale',
      'Dynamic asset allocation based on market conditions',
      'Intelligent factor investing and ESG integration'
    ]
  },
  {
    id: 'common-language',
    title: 'Investment Communication',
    icon: Users,
    content: [
      'Creating a standardized language for investment goals and strategies',
      'Bridging communication between institutional and retail investments',
      'Translating complex strategies into clear client explanations',
      'Enabling consistent messaging across wealth management teams',
      'Facilitating better understanding between advisors and clients'
    ]
  },
  {
    id: 'personalization',
    title: 'Client Personalization',
    icon: BarChart3,
    content: [
      'Custom portfolio construction based on individual preferences',
      'AI-driven goal tracking and scenario analysis',
      'Personalized investment recommendations at scale',
      'Automated portfolio adjustments based on life events',
      'Individual ESG preference integration'
    ]
  },
  {
    id: 'risk-compliance',
    title: 'Risk & Compliance',
    icon: Shield,
    content: [
      'Automated compliance monitoring and reporting',
      'Real-time risk assessment across portfolios',
      'Predictive analytics for market risk',
      'Systematic policy implementation',
      'Enhanced fraud detection and prevention'
    ]
  },
  {
    id: 'operational-efficiency',
    title: 'Operational Excellence',
    icon: Workflow,
    content: [
      'Automated portfolio rebalancing and trading',
      'Streamlined client onboarding and documentation',
      'Efficient data aggregation and analysis',
      'Automated reporting and client communications',
      'Integrated workflow optimization'
    ]
  },
  {
    id: 'future-innovations',
    title: 'Next-Gen Capabilities',
    icon: Zap,
    content: [
      'Advanced natural language portfolio interfaces',
      'Real-time market sentiment analysis',
      'Predictive analytics for client behavior',
      'Cross-asset class optimization',
      'Intelligent tax-aware investing'
    ]
  }
];

export default function AIWealthPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto mt-20 max-w-4xl space-y-8">
        {/* Header Section */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="pb-8 pt-12">
            <div className="flex items-center gap-2">
              <Badge 
                className="rounded-full px-4 py-1 text-sm text-white"
                style={{ backgroundColor: MSCI_COLORS.primary }}
              >
                Innovation
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-4 py-1 text-sm"
                style={{ borderColor: MSCI_COLORS.primary, color: MSCI_COLORS.primary }}
              >
                Wealth Technology
              </Badge>
            </div>
            <CardTitle 
              className="text-4xl font-normal tracking-tight"
              style={{ color: MSCI_COLORS.primary }}
            >
              AI in Wealth Management
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Creating a common language for modern investment management
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Overview Alert */}
        <Alert 
          className="rounded-2xl border-none p-6 transition-shadow hover:shadow-sm"
          style={{ backgroundColor: `${MSCI_COLORS.primary}10` }}
        >
          <AlertTitle 
            className="text-lg font-medium"
            style={{ color: MSCI_COLORS.primary }}
          >
            Transforming Wealth Management
          </AlertTitle>
          <AlertDescription className="mt-2 text-gray-700">
            MSCI is leveraging artificial intelligence to create a unified language for wealth management, connecting institutional expertise with personalized client solutions. Our technology empowers advisors to deliver sophisticated investment strategies with unprecedented clarity and efficiency.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <Card className="rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <ScrollArea className="h-[600px] pr-4">
              <Accordion type="single" collapsible className="space-y-4">
                {sections.map((section) => (
                  <AccordionItem 
                    key={section.id} 
                    value={section.id} 
                    className="rounded-2xl border border-gray-100 px-6 py-4 shadow-sm transition-all hover:shadow-md"
                    style={{ borderLeft: `4px solid ${MSCI_COLORS.primary}` }}
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-gray-50 p-2">
                          <section.icon 
                            className="h-6 w-6"
                            style={{ color: MSCI_COLORS.primary }}
                          />
                        </div>
                        <span className="text-lg font-medium text-gray-800">
                          {section.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      {section.content.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-3 rounded-xl bg-gray-50 p-4 transition-shadow hover:shadow-sm"
                        >
                          <span 
                            className="mt-1.5 h-2 w-2 rounded-full" 
                            style={{ backgroundColor: MSCI_COLORS.primary }}
                          ></span>
                          <p className="text-gray-600">{item}</p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Resources Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://www.msci.com/our-solutions/wealth-manager" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-white shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: MSCI_COLORS.primary }}
          >
            <span className="font-medium">Wealth Solutions</span>
          </a>
          <a 
            href="https://www.msci.com/research-and-insights" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-white shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: MSCI_COLORS.primary }}
          >
            <span className="font-medium">Research & Insights</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 rounded-3xl border border-gray-100 bg-white p-8">
          <div className="text-center">
            <p className="text-gray-600">
              Discover how MSCI is shaping the future of wealth management through innovative AI solutions.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}