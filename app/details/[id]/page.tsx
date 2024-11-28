'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Link from 'next/link';
import { getSectionDetails } from '@/lib/section-details';

interface DetailsPageProps {
  params: {
    id: string;
  };
}

export default function DetailsPage({ params }: DetailsPageProps) {
  const section = getSectionDetails(params.id);
  
  if (!section) {
    notFound();
  }

  const { title, color, summary, content, sources } = section;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-gray-600 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Overview
        </Link>

        {/* Main Content */}
        <Card className="overflow-hidden rounded-3xl border-none bg-white shadow-sm">
          <CardHeader className="border-b border-gray-100 pb-8 pt-12">
            <Badge 
              className="w-fit rounded-full px-4 py-1 text-sm text-white"
              style={{ backgroundColor: color }}
            >
              Detailed Analysis
            </Badge>
            <CardTitle className="text-4xl font-normal tracking-tight text-gray-800">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Impact on everyday life and future applications
            </CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            {/* AI Summary */}
            <Alert className="mb-8 rounded-2xl border-none bg-gray-50 p-6">
              <AlertDescription className="text-lg text-gray-700">
                {summary}
              </AlertDescription>
            </Alert>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Sources */}
            <div className="mt-12 space-y-4 rounded-2xl bg-gray-50 p-6">
              <h3 className="text-xl font-medium text-gray-800">Sources & Further Reading</h3>
              <div className="space-y-3">
                {sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-[#4285F4] hover:shadow-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">{source.title}</h4>
                      <p className="text-sm text-gray-600">{source.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}