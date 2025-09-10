# Growth11 - Digital Marketing & Tech Agency

## Overview

Growth11 is a digital marketing and technology agency website built by entrepreneurs who scaled Nojoto from bootstrap to 100 crore valuation. The platform showcases their comprehensive growth solutions including tech services (website building, SEO), marketing services (social media, performance marketing, influencer marketing), and product management. The site features case studies like Akiso Fashion (12L+ monthly revenue, 4X ROAS), partner brand showcases, and detailed service offerings designed to help businesses achieve sustainable revenue growth.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for Home, About, Services, Partners, Case Studies, Career, Blog, and Contact
- **UI Components**: Radix UI primitives with shadcn/ui component library following the "new-york" style variant
- **Styling**: Tailwind CSS with custom design system featuring vibrant pink/magenta primary colors (347 84% 48%) inspired by StarArtist, with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Server**: Express.js with TypeScript in ESM format
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Built-in support for connect-pg-simple session store
- **API Structure**: RESTful API with `/api` prefix, error handling middleware
- **Development**: Hot module replacement with Vite integration

### Design System
- **Typography**: Inter font family from Google Fonts for clean, professional appearance
- **Color Palette**: Primary brand color (vibrant pink/magenta), secondary light pink-gray, success green for metrics, with comprehensive dark mode support
- **Component Library**: Comprehensive UI components including navigation, hero sections, service cards, testimonials, contact forms, and partner logos
- **Layout**: Tailwind spacing system with consistent 4, 6, 8, 12, 16, 24 unit rhythm

### Data Architecture
- **Database Schema**: User management with PostgreSQL using Drizzle ORM migrations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Type Safety**: Full TypeScript integration with Zod schemas for runtime validation

### Performance & Optimization
- **Build Optimization**: Vite bundling with esbuild for server-side code
- **Asset Management**: Integrated asset handling with path resolution aliases
- **Development Tools**: Runtime error overlay, cartographer integration for Replit environment

## External Dependencies

### Core Technologies
- **Database**: PostgreSQL with Neon Database serverless driver (@neondatabase/serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI Framework**: Radix UI component primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Build Tools**: Vite with TypeScript support and React plugin

### Development & Deployment
- **Runtime**: Node.js with ES modules
- **Development**: TSX for TypeScript execution, Replit-specific development tools
- **Fonts**: Google Fonts integration (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography

### Third-party Integrations
- **Forms**: Hookform resolvers for form validation
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx and class-variance-authority for conditional styling
- **Carousel**: Embla Carousel for interactive content displays
- **Charts**: Recharts integration for data visualization

### Communication & Contact
- **WhatsApp Integration**: Direct messaging functionality with pre-filled messages
- **Phone Integration**: Click-to-call functionality
- **Contact Forms**: Comprehensive form handling with validation and toast notifications