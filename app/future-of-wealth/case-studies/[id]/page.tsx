'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from 'next/link';
import { CASE_STUDIES, getCaseStudy } from '@/lib/case-studies';
import CaseStudyMetrics from '@/components/case-study-metrics';

interface CaseStudyPageProps {
  params: {
    id: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudy(params.id);
  
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Back Button */}
        <Link 
          href="/future-of-wealth"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Overview
        </Link>

        {/* Header Card */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm">
          <CardHeader className="pb-8 pt-12">
            <div className="flex items-center gap-2">
              <Badge 
                className="rounded-full px-4 py-1 text-sm text-white"
                style={{ backgroundColor: caseStudy.color }}
              >
                Case Study
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-4 py-1 text-sm"
                style={{ borderColor: caseStudy.color, color: caseStudy.color }}
              >
                {caseStudy.category.split('-').map(word => 
                  word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ')}
              </Badge>
            </div>
            <CardTitle className="text-4xl font-normal tracking-tight" style={{ color: caseStudy.color }}>
              {caseStudy.title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              {caseStudy.subtitle}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Case Study Content */}
        <CaseStudyMetrics caseStudy={caseStudy} />

        {/* Additional Resources */}
        <Card className="rounded-3xl border-none bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Additional Resources</h3>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://www.msci.com/research-and-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-gray-50"
              style={{ borderColor: caseStudy.color, color: caseStudy.color }}
            >
              Research & Insights
            </Link>
            <Link 
              href="https://www.msci.com/our-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-gray-50"
              style={{ borderColor: caseStudy.color, color: caseStudy.color }}
            >
              Solutions Overview
            </Link>
            <Link 
              href="https://www.msci.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-gray-50"
              style={{ borderColor: caseStudy.color, color: caseStudy.color }}
            >
              Contact Sales
            </Link>
          </div>
        </Card>

        {/* Related Case Studies */}
        <Card className="rounded-3xl border-none bg-white p-8 shadow-sm">
          <h3 className="mb-4 text-lg font-medium">Related Case Studies</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {CASE_STUDIES.filter(study => 
              study.id !== caseStudy.id && 
              study.category === caseStudy.category
            ).map(study => (
              <Link 
                key={study.id}
                href={`/future-of-wealth/case-studies/${study.id}`}
                className="group rounded-lg border p-4 transition-all hover:border-gray-300 hover:shadow-md"
              >
                <h4 className="font-medium" style={{ color: study.color }}>{study.title}</h4>
                <p className="mt-1 text-sm text-gray-600">{study.subtitle}</p>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}