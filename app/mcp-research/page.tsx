'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Link as LinkIcon, GitFork, Code2, Database, Zap } from "lucide-react";
import Link from 'next/link';
import { accordionSections } from "@/lib/config";
import { getSectionDetails } from "@/lib/section-details";
import { MSCI_COLORS } from "@/lib/brand";

export default function MCPResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto mt-20 max-w-4xl space-y-8">
        {/* Search Bar - MSCI Style */}
        <div className="mx-auto max-w-2xl">
          <div className="flex h-14 items-center justify-between rounded-2xl border bg-white px-6 shadow-sm transition-shadow hover:shadow-md">
            <span className="font-medium" style={{ color: MSCI_COLORS.primary }}>
              Model Context Protocol
            </span>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: MSCI_COLORS.primary }}></div>
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: MSCI_COLORS.secondary }}></div>
              <div className="h-4 w-4 rounded-full" style={{ backgroundColor: MSCI_COLORS.accent }}></div>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="pb-8 pt-12">
            <div className="flex items-center gap-2">
              <Badge 
                className="rounded-full px-4 py-1 text-sm text-white"
                style={{ backgroundColor: MSCI_COLORS.primary }}
              >
                Technical Standard
              </Badge>
              <Badge 
                variant="outline" 
                className="rounded-full px-4 py-1 text-sm"
                style={{ borderColor: MSCI_COLORS.primary, color: MSCI_COLORS.primary }}
              >
                2024
              </Badge>
            </div>
            <CardTitle 
              className="text-4xl font-normal tracking-tight"
              style={{ color: MSCI_COLORS.primary }}
            >
              Model Context Protocol (MCP)
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              An open standard enabling seamless integration between AI systems and investment data
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Overview Alert */}
        <Alert 
          className="rounded-2xl border-none p-6 transition-shadow hover:shadow-sm"
          style={{ backgroundColor: `${MSCI_COLORS.primary}10` }}
        >
          <AlertCircle className="h-6 w-6" style={{ color: MSCI_COLORS.primary }} />
          <AlertTitle 
            className="text-lg font-medium"
            style={{ color: MSCI_COLORS.primary }}
          >
            Core Purpose
          </AlertTitle>
          <AlertDescription className="mt-2 text-gray-700">
            MCP provides a standardized way to connect LLMs with investment context, enabling seamless integration between AI applications and wealth management data sources.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <Card className="rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <ScrollArea className="h-[600px] pr-4">
              <Accordion type="single" collapsible className="space-y-4">
                {accordionSections.map((section, index) => {
                  return (
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
                        
                        {/* Read More Link */}
                        <Link
                          href={`/details/${section.id}`}
                          className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white p-4 text-left transition-all hover:border-[#4285F4] hover:shadow-sm"
                          style={{ color: MSCI_COLORS.primary }}
                        >
                          <span className="font-medium">Read detailed analysis</span>
                          <span className="text-xl">→</span>
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Footer Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://www.msci.com/technology-solutions" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-white shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: MSCI_COLORS.primary }}
          >
            <LinkIcon className="h-5 w-5" />
            <span className="font-medium">MSCI Technology</span>
          </a>
          <a 
            href="https://github.com/modelcontextprotocol" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl px-8 py-4 text-white shadow-sm transition-all hover:shadow-md"
            style={{ backgroundColor: MSCI_COLORS.primary }}
          >
            <GitFork className="h-5 w-5" />
            <span className="font-medium">Technical Docs</span>
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-12 rounded-3xl border border-gray-100 bg-white p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {['MSCI Research', 'Documentation', 'Developer Resources', 'Contact'].map((item, index) => (
              <React.Fragment key={item}>
                <button 
                  className="rounded-full px-4 py-2 transition-colors hover:bg-gray-50"
                  style={{ color: MSCI_COLORS.primary }}
                >
                  {item}
                </button>
                {index < 3 && (
                  <span className="text-gray-300">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}