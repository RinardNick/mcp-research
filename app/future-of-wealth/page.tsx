'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/case-studies';
import { MSCI_COLORS } from '@/lib/brand';

export default function FutureOfWealthPage() {
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
                Wealth Management
              </Badge>
            </div>
            <CardTitle className="text-4xl font-normal tracking-tight" style={{ color: MSCI_COLORS.primary }}>
              The Future of Wealth
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Creating a common language for modern investment management through AI innovation
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Overview Section */}
        <Card className="rounded-3xl border-none bg-white p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-medium" style={{ color: MSCI_COLORS.primary }}>
                Transforming Wealth Management
              </h2>
              <p className="mt-2 text-gray-600">
                MSCI is pioneering the future of wealth management by creating a unified language that connects institutional expertise with personalized client solutions. Our AI-powered platform enables wealth managers to deliver sophisticated investment strategies with unprecedented clarity and efficiency.
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-gray-800">Client Understanding</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Bridging the gap between complex investment strategies and client comprehension
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-gray-800">Portfolio Intelligence</h3>
                <p className="mt-1 text-sm text-gray-600">
                  AI-powered insights for better investment decisions and risk management
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-medium text-gray-800">Operational Excellence</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Streamlined processes for efficient portfolio management at scale
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium" style={{ color: MSCI_COLORS.primary }}>
            Case Studies
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {CASE_STUDIES.map(study => (
              <Link 
                key={study.id}
                href={`/future-of-wealth/case-studies/${study.id}`}
                className="group"
              >
                <Card className="h-full border-none shadow-sm transition-all hover:shadow-md">
                  <CardHeader>
                    <Badge 
                      className="w-fit rounded-full px-3 py-1 text-xs text-white"
                      style={{ backgroundColor: study.color }}
                    >
                      {study.category.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </Badge>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription>{study.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{study.summary}</p>
                    <div 
                      className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors group-hover:gap-3"
                      style={{ color: study.color }}
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <Card className="rounded-3xl border-none bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-medium" style={{ color: MSCI_COLORS.primary }}>
            Additional Resources
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <a 
              href="https://www.msci.com/technology-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="text-lg font-medium text-gray-800">Technology Solutions</h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore MSCI's suite of technology solutions for wealth management
              </p>
              <div 
                className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors group-hover:gap-3"
                style={{ color: MSCI_COLORS.primary }}
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
            <a 
              href="https://www.msci.com/research-and-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="text-lg font-medium text-gray-800">Research & Insights</h3>
              <p className="mt-2 text-sm text-gray-600">
                Access the latest research on AI in wealth management
              </p>
              <div 
                className="mt-4 flex items-center gap-2 text-sm font-medium transition-colors group-hover:gap-3"
                style={{ color: MSCI_COLORS.primary }}
              >
                View Research
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}