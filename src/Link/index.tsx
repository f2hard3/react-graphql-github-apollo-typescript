import React from 'react';

interface LinkProps {
  children: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, ...props }) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default Link;