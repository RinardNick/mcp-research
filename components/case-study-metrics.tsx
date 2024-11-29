'use client';

import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { CaseStudyData, MetricData } from '@/lib/case-studies';
import { MSCI_COLORS } from '@/lib/brand';

interface CaseStudyMetricsProps {
  caseStudy: CaseStudyData;
}

export const CaseStudyMetrics: React.FC<CaseStudyMetricsProps> = ({ caseStudy }) => {
  // Transform timeline data for chart
  const timelineData = caseStudy.timeline[0].data.map((_, index) => ({
    month: `Month ${index + 1}`,
    ...caseStudy.timeline.reduce((acc, series) => ({
      ...acc,
      [series.label]: series.data[index]
    }), {})
  }));

  const formatMetricValue = (metric: MetricData) => {
    if (metric.unit === '%') {
      return `${metric.value}%`;
    }
    if (metric.unit === 'minutes') {
      return `${metric.value}m`;
    }
    if (metric.value > 1000) {
      return `${(metric.value / 1000).toFixed(1)}k`;
    }
    return metric.value;
  };

  const getMetricChange = (metric: MetricData) => {
    if (metric.improvement) {
      return {
        value: metric.improvement,
        positive: true
      };
    }
    if (metric.previousValue) {
      const change = ((metric.value - metric.previousValue) / metric.previousValue) * 100;
      return {
        value: Math.abs(change),
        positive: change > 0
      };
    }
    return null;
  };

  return (
    <div className="space-y-8">
      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudy.metrics.map((metric, index) => {
          const change = getMetricChange(metric);
          return (
            <Card key={index} className="p-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-500">{metric.label}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-semibold">{formatMetricValue(metric)}</p>
                  {change && (
                    <div 
                      className={`flex items-center gap-1 text-sm ${
                        change.positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {change.positive ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      <span>{change.value.toFixed(0)}%</span>
                    </div>
                  )}
                </div>
                {metric.previousValue && (
                  <p className="text-xs text-gray-400">
                    Previous: {formatMetricValue({...metric, value: metric.previousValue})}
                  </p>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Timeline Chart */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-medium">Performance Over Time</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="month" 
                stroke="#64748B"
                fontSize={12}
              />
              <YAxis 
                stroke="#64748B"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  padding: '8px'
                }}
              />
              <Legend />
              {caseStudy.timeline.map((series, index) => (
                <Line
                  key={series.label}
                  type="monotone"
                  dataKey={series.label}
                  stroke={index === 0 ? MSCI_COLORS.primary : MSCI_COLORS.secondary}
                  strokeWidth={2}
                  dot={{
                    fill: index === 0 ? MSCI_COLORS.primary : MSCI_COLORS.secondary,
                    strokeWidth: 2
                  }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Impact Summary */}
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-700">Challenge</h4>
            <p className="mt-1 text-gray-600">{caseStudy.challenge}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700">Solution</h4>
            <p className="mt-1 text-gray-600">{caseStudy.solution}</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-700">Impact</h4>
            <p className="mt-1 text-gray-600">{caseStudy.impact}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CaseStudyMetrics;