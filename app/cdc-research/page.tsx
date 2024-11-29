'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Stethoscope, Users, AlertTriangle, TrendingDown } from "lucide-react";

const sections = [
  {
    id: 'staff-impact',
    title: 'Staff Impact & Burnout',
    icon: Users,
    color: '#DB4437',
    content: [
      'Healthcare workers experiencing severe PTSD and burnout from extended restrictive protocols',
      'Increased workload and staff shortages due to strict isolation requirements',
      'Mental health challenges with limited support systems',
      'High turnover rates impacting care continuity',
      'Staff reporting anxiety and exhaustion from prolonged PPE use'
    ]
  },
  {
    id: 'care-quality',
    title: 'Care Quality Concerns',
    icon: Stethoscope,
    color: '#F4B400',
    content: [
      'Reduced patient interaction due to excessive contact restrictions',
      'Delayed response times from multiple PPE changes requirements',
      'Limited ability to provide personal care due to protocol constraints',
      'Decreased social interaction affecting resident mental health',
      'Compromised rehabilitation services due to distancing requirements'
    ]
  },
  {
    id: 'protocol-issues',
    title: 'Protocol Implementation Issues',
    icon: AlertTriangle,
    color: '#4285F4',
    content: [
      'Inconsistent and frequently changing CDC guidelines causing confusion',
      'Excessive documentation requirements taking time away from patient care',
      'Impractical isolation protocols for dementia patients',
      'Overly restrictive visitor policies affecting patient well-being',
      'Resource-intensive testing requirements straining facility budgets'
    ]
  },
  {
    id: 'industry-impact',
    title: 'Industry-Wide Effects',
    icon: TrendingDown,
    color: '#0F9D58',
    content: [
      'Significant increase in operating costs due to protocol requirements',
      'Rising insurance and liability concerns',
      'Decreased facility occupancy rates due to restrictive policies',
      'Staff recruitment and retention challenges',
      'Reduced quality metrics affecting facility ratings'
    ]
  }
];

export default function CDCResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto mt-20 max-w-4xl space-y-8">
        {/* Header Section */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="pb-8 pt-12">
            <div className="flex items-center gap-2">
              <Badge className="rounded-full bg-[#DB4437] px-4 py-1 text-sm text-white hover:bg-[#DB4437]/90">
                Critical Analysis
              </Badge>
              <Badge variant="outline" className="rounded-full border-[#DB4437] px-4 py-1 text-sm text-[#DB4437]">
                2024 Update
              </Badge>
            </div>
            <CardTitle className="text-4xl font-normal tracking-tight text-gray-800">
              CDC Protocol Impact Analysis
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Examining the unintended consequences of post-COVID restrictions on skilled nursing facilities
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Overview Alert */}
        <Alert className="rounded-2xl border-none bg-[#DB4437]/10 p-6 transition-shadow hover:shadow-sm">
          <AlertCircle className="h-6 w-6 text-[#DB4437]" />
          <AlertTitle className="text-lg font-medium text-[#DB4437]">Critical Industry Concerns</AlertTitle>
          <AlertDescription className="mt-2 text-gray-700">
            Post-COVID protocols have created significant challenges for skilled nursing facilities, leading to staff burnout, compromised care quality, and operational difficulties that continue to impact the industry.
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
                    style={{ borderLeft: `4px solid ${section.color}` }}
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-gray-50 p-2">
                          <section.icon className="h-6 w-6" style={{ color: section.color }} />
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
                            style={{ backgroundColor: section.color }}
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

        {/* Additional Resources Footer */}
        <footer className="mt-12 rounded-3xl border border-gray-100 bg-white p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <a 
              href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/nursing-homes-facility-wide-testing.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50"
            >
              CDC Guidelines
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="https://www.cms.gov/nursing-homes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50"
            >
              CMS Resources
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="https://www.ahcancal.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50"
            >
              Industry Updates
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}