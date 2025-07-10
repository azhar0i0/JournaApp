import { Calculator, TrendingUp, BarChart3, Users } from "lucide-react";
import { Service } from "@/types/services";
import bookkeepingImage from "@/assets/services-bookkeeping.jpg";
import valuationImage from "@/assets/services-valuation.jpg";
import pricingImage from "@/assets/services-pricing.jpg";
import cfoImage from "@/assets/services-cfo.jpg";

export const services: Service[] = [
  {
    icon: Calculator,
    title: "Bookkeeping and Accounting Advisory",
    description: "Ensuring accurate and timely recording of all financial transactions, forming the foundation of sound financial management.",
    fullDescription: "This service ensures the accurate and timely recording of all financial transactions, forming the foundation of sound financial management. Accounting advisory extends beyond transactional recording to provide strategic analysis of financial data. It assists in developing robust internal controls, managing cash flow, and generating insightful reports to support informed business decisions.",
    image: bookkeepingImage,
    features: [
      "Accurate transaction recording",
      "Strategic financial analysis", 
      "Internal controls development",
      "Cash flow management",
      "Insightful financial reporting"
    ]
  },
  {
    icon: TrendingUp,
    title: "Company Valuations",
    description: "Professional business valuation services for strategic transactions, mergers, acquisitions, and financial planning.",
    fullDescription: "Company valuation is the process of determining the objective economic worth of a business or a specific company unit. A formal valuation is essential for various strategic purposes, including mergers and acquisitions, capital financing, shareholder transactions, and tax or litigation matters. The process involves rigorous analytical methods to produce a defensible and well-supported opinion of value.",
    image: valuationImage,
    features: [
      "Objective economic worth assessment",
      "Merger & acquisition support",
      "Capital financing guidance",
      "Shareholder transaction analysis",
      "Tax and litigation support"
    ]
  },
  {
    icon: BarChart3,
    title: "Costing and Pricing Analysis",
    description: "Comprehensive cost analysis and strategic pricing to optimize profitability and market positioning.",
    fullDescription: "A detailed analysis of product and service costing is undertaken to identify and allocate all direct and indirect costs associated with a company's offerings. This foundational cost data enables a thorough pricing analysis, which is critical for establishing pricing structures that support profit margin targets while maintaining a competitive market position. The service is integral to profitability optimization and strategic portfolio management.",
    image: pricingImage,
    features: [
      "Direct & indirect cost allocation",
      "Comprehensive pricing analysis",
      "Profit margin optimization",
      "Competitive positioning strategy",
      "Strategic portfolio management"
    ]
  },
  {
    icon: Users,
    title: "Fractional CFO Services",
    description: "Senior-level financial leadership on a flexible, part-time basis for strategic financial oversight.",
    fullDescription: "Fractional CFO services provide businesses with access to senior-level financial leadership on a flexible, part-time, or project basis. This offering is designed for organizations requiring strategic financial oversight without the commitment of a full-time executive. Responsibilities include strategic planning, financial forecasting, capital structure management, and providing high-level guidance to the management team.",
    image: cfoImage,
    features: [
      "Strategic planning & forecasting",
      "Capital structure management",
      "Senior-level guidance",
      "Flexible engagement models",
      "Cost-effective leadership"
    ]
  },
  {
    icon: Calculator,
    title: "Canadian Corporate and Personal Income Taxes",
    description: "Comprehensive tax compliance and strategic planning under Canadian tax legislation for corporations and individuals.",
    fullDescription: "This area of service focuses on comprehensive tax compliance and strategic planning under Canadian tax legislation. For corporations, this includes the preparation and filing of T2 income tax returns and the development of tax-minimization strategies. For individuals, it involves the preparation of personal tax filings and advisory on matters such as investment and retirement planning to ensure tax efficiency and compliance.",
    image: bookkeepingImage,
    features: [
      "T2 corporate tax returns",
      "Personal tax preparation",
      "Tax minimization strategies",
      "Investment planning advisory",
      "Retirement planning optimization"
    ]
  },
  {
    icon: BarChart3,
    title: "Business Plans",
    description: "Comprehensive business plan development for strategic growth and capital acquisition.",
    fullDescription: "The development of a formal business plan involves the creation of a comprehensive document that articulates a company's strategic, operational, and financial objectives. A complete business plan includes a thorough market analysis, a description of the management structure, detailed marketing and sales strategies, and robust financial projections. This document is a critical tool for securing capital and serves as a strategic roadmap for growth.",
    image: pricingImage,
    features: [
      "Market analysis & research",
      "Management structure planning",
      "Marketing & sales strategies",
      "Financial projections",
      "Capital acquisition support"
    ]
  },
  {
    icon: Users,
    title: "ERP Implementation Support and Assistance",
    description: "Specialized assistance for Enterprise Resource Planning system selection, deployment, and optimization.",
    fullDescription: "ERP implementation support offers specialized assistance to businesses during the selection, deployment, and optimization of Enterprise Resource Planning systems. The service provides project management, system configuration guidance, data migration oversight, and user training. The objective is to facilitate a seamless transition, ensuring the ERP system is effectively integrated into business processes to enhance efficiency and maximize the return on investment. We specialize in the migrations of Quickbooks, Zoho, Microsoft Dynamics 365 and F&O, and NetSuite.",
    image: cfoImage,
    features: [
      "System selection guidance",
      "Project management",
      "Data migration oversight",
      "User training programs",
      "ROI optimization"
    ]
  },
];