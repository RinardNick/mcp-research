import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MCPSummary } from '@/components/mcp-summary';
import { accordionSections, externalLinks } from '@/lib/config';

describe('MCPSummary', () => {
  it('renders the main title', () => {
    render(<MCPSummary />);
    expect(screen.getByText('Model Context Protocol (MCP)')).toBeInTheDocument();
  });

  it('renders all accordion sections', () => {
    render(<MCPSummary />);
    accordionSections.forEach(section => {
      expect(screen.getByText(section.title)).toBeInTheDocument();
    });
  });

  it('renders badges', () => {
    render(<MCPSummary />);
    expect(screen.getByText('New Standard')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('has working external links', () => {
    render(<MCPSummary />);
    externalLinks.forEach(link => {
      const element = screen.getByText(link.text).closest('a');
      expect(element).toHaveAttribute('href', link.url);
    });
  });

  it('expands accordion items on click', async () => {
    render(<MCPSummary />);
    const user = userEvent.setup();
    
    // Click the first section
    await user.click(screen.getByText(accordionSections[0].title));
    
    // Check if content is visible
    expect(screen.getByText(accordionSections[0].content[0])).toBeVisible();
  });
});