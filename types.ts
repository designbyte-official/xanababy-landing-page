import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular: boolean;
  color: string;
}