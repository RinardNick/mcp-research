'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, Link as LinkIcon, GitFork, Code2, Database, Zap, Menu, ArrowRight } from "lucide-react";
import Link from 'next/link';
import { accordionSections } from "@/lib/config";
import { getSectionDetails } from "@/lib/section-details";

export interface MCPSummaryProps {
  className?: string;
}

const GOOGLE_COLORS = ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'];

export const MCPSummary: React.FC<MCPSummaryProps> = ({ className }) => {
  return (
    <div className={`min-h-screen bg-gray-50 p-6 ${className}`}>
      {/* Material 3 App Bar */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center bg-white px-4 shadow-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#4285F4]"></div>
              <span className="text-lg font-normal text-gray-800">MCP Research</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#DB4437]"></div>
            <div className="h-8 w-8 rounded-full bg-[#F4B400]"></div>
            <div className="h-8 w-8 rounded-full bg-[#0F9D58]"></div>
          </div>
        </div>
      </div>

      {/* Main Content with top padding for app bar */}
      <div className="mx-auto mt-20 max-w-4xl space-y-8">
        {/* Search Bar - Material 3 Style */}
        <div className="mx-auto max-w-2xl">
          <div className="flex h-14 items-center justify-between rounded-2xl border bg-white px-6 shadow-sm transition-shadow hover:shadow-md">
            <span className="font-medium text-[#4285F4]">Model Context Protocol</span>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-[#DB4437]"></div>
              <div className="h-4 w-4 rounded-full bg-[#F4B400]"></div>
              <div className="h-4 w-4 rounded-full bg-[#4285F4]"></div>
              <div className="h-4 w-4 rounded-full bg-[#0F9D58]"></div>
            </div>
          </div>
        </div>

        {/* Header Section - Material 3 Card */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardHeader className="pb-8 pt-12">
            <div className="flex items-center gap-2">
              <Badge className="rounded-full bg-[#4285F4] px-4 py-1 text-sm text-white hover:bg-[#4285F4]/90">
                New Standard
              </Badge>
              <Badge variant="outline" className="rounded-full border-[#4285F4] px-4 py-1 text-sm text-[#4285F4]">
                2024
              </Badge>
            </div>
            <CardTitle className="text-4xl font-normal tracking-tight text-gray-800">
              Model Context Protocol (MCP)
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              An open standard revolutionizing how AI assistants connect with data sources
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Overview Alert - Material 3 Style */}
        <Alert className="rounded-2xl border-none bg-[#4285F4]/10 p-6 transition-shadow hover:shadow-sm">
          <AlertCircle className="h-6 w-6 text-[#4285F4]" />
          <AlertTitle className="text-lg font-medium text-[#4285F4]">Core Purpose</AlertTitle>
          <AlertDescription className="mt-2 text-gray-700">
            MCP provides a standardized way to connect LLMs with the context they need, enabling seamless integration between AI applications and external data sources.
          </AlertDescription>
        </Alert>

        {/* Main Content - Material 3 Card */}
        <Card className="rounded-3xl border-none bg-white shadow-sm transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <ScrollArea className="h-[600px] pr-4">
              <Accordion type="single" collapsible className="space-y-4">
                {accordionSections.map((section, index) => {
                  const color = GOOGLE_COLORS[index % GOOGLE_COLORS.length];
                  const detailedSection = getSectionDetails(section.id);
                  
                  return (
                    <AccordionItem 
                      key={section.id} 
                      value={section.id} 
                      className="rounded-2xl border border-gray-100 px-6 py-4 shadow-sm transition-all hover:shadow-md"
                      style={{ borderLeft: `4px solid ${color}` }}
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-gray-50 p-2">
                            <section.icon className="h-6 w-6" style={{ color }} />
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
                              style={{ backgroundColor: color }}
                            ></span>
                            <p className="text-gray-600">{item}</p>
                          </div>
                        ))}
                        
                        {/* Read More Link */}
                        <Link
                          href={`/details/${section.id}`}
                          className="mt-4 flex w-full items-center justify-between rounded-xl border border-gray-100 bg-white p-4 text-left transition-all hover:border-[#4285F4] hover:shadow-sm"
                          style={{ color }}
                        >
                          <span className="font-medium">Read detailed analysis</span>
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Footer Links - Material 3 Style */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a 
            href="https://modelcontextprotocol.io" 
            className="flex items-center gap-3 rounded-2xl bg-[#4285F4] px-8 py-4 text-white shadow-sm transition-all hover:bg-[#4285F4]/90 hover:shadow-md"
          >
            <LinkIcon className="h-5 w-5" />
            <span className="font-medium">Official Documentation</span>
          </a>
          <a 
            href="https://github.com/modelcontextprotocol" 
            className="flex items-center gap-3 rounded-2xl bg-[#4285F4] px-8 py-4 text-white shadow-sm transition-all hover:bg-[#4285F4]/90 hover:shadow-md"
          >
            <GitFork className="h-5 w-5" />
            <span className="font-medium">GitHub Repository</span>
          </a>
        </div>

        {/* Material 3 Footer */}
        <footer className="mt-12 rounded-3xl border border-gray-100 bg-white p-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {['Model Context Protocol', 'Documentation', 'Developer Resources', 'GitHub'].map((item, index) => (
              <React.Fragment key={item}>
                <button className="rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-gray-50">
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
};

export default MCPSummary;