import { Zap, Code2, Database, GitFork, Link } from "lucide-react";
import type { AccordionData, ExternalLink } from "./types";

export const accordionSections: AccordionData[] = [
  {
    id: "key-features",
    title: "Key Features",
    icon: Zap,
    content: [
      "Universal standard for AI-data integration",
      "Seamless connection to content repositories",
      "Integration with business tools",
      "Support for development environments",
      "Flexible, extensible architecture"
    ]
  },
  {
    id: "developer-impact",
    title: "Impact on Development",
    icon: Code2,
    content: [
      "Simplified integration of LLMs with external systems",
      "Standardized approach to context handling",
      "Reduced development time for AI-powered applications",
      "Enhanced flexibility in AI workflows",
      "Future marketplace potential for MCP servers"
    ]
  },
  {
    id: "use-cases",
    title: "Primary Use Cases",
    icon: Database,
    content: [
      "AI-powered IDEs and development tools",
      "Enhanced chat interfaces",
      "Custom AI workflows",
      "Enterprise data integration",
      "Content repository connections"
    ]
  },
  {
    id: "adoption",
    title: "Current Adoption & Future",
    icon: GitFork,
    content: [
      "Already implemented by major tools like Zed and Cody",
      "Growing community of developers",
      "Waiting for HTTP transport support for wider adoption",
      "Potential for plugin marketplace development",
      "Integration with existing AI workflows"
    ]
  }
];