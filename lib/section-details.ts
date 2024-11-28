interface Source {
  title: string;
  description: string;
  url: string;
}

interface SectionDetail {
  id: string;
  title: string;
  color: string;
  summary: string;
  content: string[];
  sources: Source[];
}

const sectionDetails: Record<string, SectionDetail> = {
  'key-features': {
    id: 'key-features',
    title: 'Key Features & Everyday Impact',
    color: '#4285F4',
    summary: "The Model Context Protocol introduces groundbreaking features that will transform how we interact with AI in our daily lives. From smarter digital assistants to more personalized services, MCP's capabilities extend far beyond technical implementations to enhance everyday user experiences.",
    content: [
      "The Model Context Protocol (MCP) represents a significant leap forward in making AI more useful and accessible in our daily lives. At its core, MCP acts as a universal translator between AI systems and the data they need to help us, much like how a web browser helps us access information on the internet.",
      "For the average person, this means AI assistants will become significantly more helpful in everyday tasks. Imagine your AI assistant being able to effortlessly access your calendar, email, and work documents to help you prepare for meetings, summarize important information, or find specific details you need. All of this while maintaining strict privacy and security controls.",
      "One of the most impactful features is MCP's ability to connect AI with various data sources seamlessly. This means your AI assistant could help you manage your smart home devices, track your fitness goals, or even help with shopping by understanding your preferences and past purchases. The protocol ensures these interactions are natural and intuitive, without requiring any technical knowledge from the user.",
      "For businesses and organizations, MCP enables AI systems to better understand and utilize organizational knowledge, making services more efficient and personalized. This could mean better customer service, more accurate recommendations, and smoother interactions with various business tools and platforms.",
      "The protocol's standardized approach also means that as new AI capabilities emerge, they can be quickly integrated into existing systems. This future-proofs the technology and ensures that users will continually benefit from improvements in AI technology without needing to learn new interfaces or systems."
    ],
    sources: [
      {
        title: 'Model Context Protocol: Bridging AI and Real-World Data',
        description: 'A comprehensive overview of how MCP connects AI systems with everyday applications',
        url: 'https://medium.com/@kuruyavuz3/introducing-the-model-context-protocol-mcp-bridging-ai-and-real-world-data-494837bf0da6'
      },
      {
        title: 'Connecting AI Tools to Everyday Data Sources',
        description: 'Detailed explanation of MCPs impact on daily AI interactions',
        url: 'https://medium.com/ai-unscripted/model-context-protocol-mcp-claudes-new-feature-explained-a232d23a6afa'
      }
    ]
  },
  'developer-impact': {
    id: 'developer-impact',
    title: 'Impact on Development & Innovation',
    color: '#DB4437',
    summary: "The Model Context Protocol is revolutionizing how developers create AI-powered applications, leading to faster innovation and more sophisticated consumer applications that will benefit everyone, from business professionals to everyday users.",
    content: [
      "The impact of MCP on development extends far beyond technical improvements, ultimately leading to better and more accessible AI applications for everyone. Think of MCP as a universal power adapter for AI - it allows different AI systems to easily connect with various data sources and tools, much like how a power adapter lets you use your devices anywhere in the world.",
      "For non-technical users, this means AI applications will become more capable and easier to use. Rather than having to manually input information or switch between different apps, AI assistants powered by MCP can seamlessly access the information they need to help you. This could mean more natural conversations with AI, better recommendations, and more personalized experiences across all your devices and applications.",
      "In the workplace, MCP enables AI tools to better understand your work context. They can help summarize meetings, draft emails, or find relevant documents by understanding the full context of your work environment. This means less time spent on administrative tasks and more time focusing on important work.",
      "The protocol also enhances privacy and security by providing standardized ways to control what information AI systems can access. Users can feel more confident about using AI tools, knowing they have clear control over their data and how it's used.",
      "Looking ahead, MCP's impact will grow as more developers adopt the standard. This means more innovative applications, better integration between different AI services, and ultimately, a more seamless and helpful AI experience for everyone."
    ],
    sources: [
      {
        title: 'Anthropics MCP Simplifies AI-Data Integration',
        description: 'How MCP is making AI development more accessible and impactful',
        url: 'https://theaitrack.com/anthropic-mcp-universal-ai-data-integration/'
      },
      {
        title: 'The Next Frontier of Customer Engagement',
        description: 'Analysis of how MCP will transform customer service and business applications',
        url: 'https://www.mckinsey.com/capabilities/operations/our-insights/the-next-frontier-of-customer-engagement-ai-enabled-customer-service'
      }
    ]
  },
  'use-cases': {
    id: 'use-cases',
    title: 'Practical Applications & Use Cases',
    color: '#F4B400',
    summary: "MCP enables a wide range of practical applications that will transform how we work, learn, and interact with technology in our daily lives. From enhanced personal assistants to sophisticated business tools, MCP is making AI more accessible and useful for everyone.",
    content: [
      "The Model Context Protocol is enabling practical applications that will transform how we interact with AI in our daily lives. These aren't just technical improvements - they're real-world solutions that make technology more helpful and accessible for everyone.",
      "In education, MCP-enabled AI tutors can better understand a student's learning style and progress by accessing their homework, test results, and learning patterns. This leads to more personalized learning experiences and better educational outcomes, without requiring students or teachers to be tech experts.",
      "For healthcare, MCP allows AI systems to safely and securely access relevant medical information, helping doctors make more informed decisions and providing patients with better care. Imagine an AI assistant that can help schedule appointments, remind you about medications, and provide relevant health information based on your personal medical history.",
      "In the workplace, MCP-powered tools can transform productivity by understanding your work context. They can help prepare for meetings by analyzing relevant documents and previous discussions, draft emails that match your writing style, or find specific information across multiple platforms and documents.",
      "For everyday users, MCP enables smarter home automation, more personalized entertainment recommendations, and better shopping experiences. Your AI assistant could help manage your smart home devices, suggest movies based on your viewing history, or help you find products that match your preferences across different online stores."
    ],
    sources: [
      {
        title: 'Real-World Applications of AI Everyone Should Know About',
        description: 'Overview of practical AI applications enabled by technologies like MCP',
        url: 'https://www.forbes.com/sites/bernardmarr/2023/05/10/15-amazing-real-world-applications-of-ai-everyone-should-know-about/'
      },
      {
        title: 'The Impact of AI Assistants on Consumer Behavior',
        description: 'How AI protocols like MCP are changing how we interact with technology',
        url: 'https://www.pwc.com/us/en/services/consulting/library/consumer-intelligence-series/voice-assistants.html'
      }
    ]
  },
  'adoption': {
    id: 'adoption',
    title: 'Current Adoption & Future Outlook',
    color: '#0F9D58',
    summary: "The adoption of MCP is rapidly growing across various sectors, from major tech companies to everyday applications. This widespread adoption promises to make AI more accessible and useful for everyone, transforming how we interact with technology in our daily lives.",
    content: [
      "The adoption of the Model Context Protocol is gaining momentum across various sectors, promising to make AI more accessible and useful for everyone. This isn't just a technical trend - it's a transformation in how we'll interact with AI in our daily lives.",
      "Major technology companies and platforms are already incorporating MCP into their products and services. This means everyday users will soon experience more capable and intuitive AI assistants across their favorite apps and devices, without needing to understand the technical details behind these improvements.",
      "In the business world, companies are using MCP to enhance customer service, streamline operations, and create more personalized experiences. This translates to better service for customers, more efficient business processes, and new innovative solutions that benefit everyone.",
      "Educational institutions are exploring MCP to create more effective learning tools and personalized educational experiences. This could transform how students learn, making education more accessible and adaptable to individual needs.",
      "Looking ahead, the future of MCP adoption looks promising. As more developers and companies adopt the protocol, we can expect to see new and innovative applications that make AI more helpful in our daily lives. This could include everything from smarter home automation to more sophisticated healthcare applications."
    ],
    sources: [
      {
        title: 'The Next Frontier of AI Development',
        description: 'Analysis of current trends and future outlook for AI protocols like MCP',
        url: 'https://venturebeat.com/data-infrastructure/anthropic-releases-model-context-protocol-to-standardize-ai-data-integration/'
      },
      {
        title: 'AI\'s Impact on Consumer Behavior and Expectations',
        description: 'How standardized AI protocols are changing consumer interactions',
        url: 'https://www.forbes.com/councils/forbestechcouncil/2023/08/31/ais-impact-on-the-future-of-consumer-behavior-and-expectations/'
      }
    ]
  }
};

export function getSectionDetails(id: string): SectionDetail | undefined {
  return sectionDetails[id];
}

export function getAllSectionIds(): string[] {
  return Object.keys(sectionDetails);
}