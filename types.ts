import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeStats: { label: string; value: string | number }[];
  afterStats: { label: string; value: string | number }[];
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}