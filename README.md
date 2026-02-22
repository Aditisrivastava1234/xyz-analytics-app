# XYZ Retail Analytics Portal

> A professional full-stack analytics web application for XYZ Retail Chain — Bangalore

---

## 🏗 Project Overview

This project is a unified analytics solution for XYZ Retail Chain, combining:
- **Tableau Public** dashboards for Sales & Quality analytics
- **React.js** web application for dashboard access, navigation, and branding

---

## 📁 Project Structure

```
xyz-analytics/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.jsx              # App shell: Sidebar + main content + Footer
│   │   ├── Layout.module.css
│   │   ├── Sidebar.jsx             # Collapsible nav, XYZ logo, Navy gradient, active indicator bar
│   │   ├── Sidebar.module.css
│   │   ├── TopBar.jsx              # Glass-morphism header, breadcrumb, date, Live Data chip
│   │   ├── TopBar.module.css
│   │   ├── StatCard.jsx            # Reusable KPI card component
│   │   ├── StatCard.module.css
│   │   ├── TableauEmbed.jsx        # Smart iframe — /views/ URL, loading states, Tableau clip trick
│   │   ├── TableauEmbed.module.css
│   │   ├── Footer.jsx              # Three-column footer: logo, data credits, copyright year
│   │   └── Footer.module.css
│   ├── pages/
│   │   ├── Home.jsx                # Landing / overview page
│   │   ├── Home.module.css
│   │   ├── SalesDashboard.jsx      # Sales KPIs + Tableau embed
│   │   ├── QualityDashboard.jsx    # Quality KPIs + Tableau embed
│   │   ├── DashboardPage.module.css
│   │   ├── About.jsx               # Project info, assumptions, tech stack
│   │   └── About.module.css
│   ├── styles/
│   │   ├── theme.js                # MUI custom theme (brand colors + typography)
│   │   └── global.css              # Global styles, animations, scrollbar
│   ├── App.jsx                     # Root component with routing
│   └── index.js                    # React DOM entry point
├── package.json
└── README.md
```

---

## How to Run Locally

### Prerequisites
- Node.js v16 or higher — download from nodejs.org
- npm — bundled automatically with Node.js
- Chrome or Edge browser (recommended)

### Steps

```bash
# 1. Get the source code

# Option A: Extract the provided zip file to a local folder
# Option B: Clone from GitHub
git clone https://github.com/username/xyz-analytics.git
cd xyz-analytics

# 2. Install dependencies
# Downloads all required packages (React, Material UI, React Router, etc.)
npm install
# Expected output: ~1,500 packages installed. Takes 1–2 minutes on first run.

# 3. Start the development server
npm start

# 4. Open in browser
# http://localhost:3000
```

### Navigate the App
- **Home** — project overview, key metrics, dashboard navigation cards
- **Sales Dashboard** — embedded Tableau with Month & Outlet filter controls
- **Quality Dashboard** — embedded Tableau with defect, audit & KPI metrics
- **About** — design decisions, data sources, assumptions, tech stack

---

## 🔗 Updating Tableau Dashboard URLs

If dashboards show blank, update the embed URLs in:

```
src/components/TableauEmbed.jsx
```

```js
const TABLEAU_BASE_URLS = {
  sales: 'https://public.tableau.com/views/[WorkbookName]/SalesDashboard',
  quality: 'https://public.tableau.com/views/[WorkbookName]/QualityDashboard',
};
```

To find your workbook name: Tableau Public dashboard → Share → copy path from embed code URL.

### Tableau Embedding Strategy

Dashboards use the `/views/` URL format with **Automatic sizing** enabled in Tableau Desktop:

```
https://public.tableau.com/views/[WorkbookName]/[DashboardName]
  ?:embed=y&:showVizHome=no&:toolbar=bottom&:device=desktop&:render=false
```

- `:device=desktop` — prevents mobile-compressed layout inside the iframe
- `:toolbar=bottom` — keeps Month & Outlet filter controls accessible
- **Automatic sizing** in Tableau — dashboard scales to iframe width, no horizontal scroll
- **CSS clip trick**: iframe height `calc(100% + 50px)` hides the Tableau Public branding bar

---

## ☁️ Production Build & Netlify Deployment

```bash
npm run build
```

Creates an optimised `/build` folder. To deploy:

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `/build` folder onto the page
3. Netlify generates a live HTTPS URL instantly (free tier)

---

## 🎨 Design Decisions

### Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Teal | #18837E | Active nav, CTAs, KPI accents, links |
| Navy | #004975 | Sidebar background, headings, table headers |
| Pink | #DB3069 | Alert KPIs, negative metrics, warnings |
| Purple | #9882AC | Secondary metrics, satisfaction scores |
| White Smoke | #F2F2F2 | Page backgrounds, card surfaces |

### Typography
- **DM Sans** — modern and clean, suited to enterprise analytics dashboards

### Component Design
- All components use **CSS Modules** — zero inline styles, fully scoped
- **Reusable StatCard** accepts any color, icon, value, trend — works for both Sales and Quality
- **Collapsible Sidebar** — improves screen real estate on smaller screens
- **TableauEmbed** handles loading states, placeholder states, and error states

---

## 📊 Tableau Dashboards

### Sales Dashboard
- KPIs: Total Revenue, Profit, Avg Bill Value, Transactions, Footfall, Conversion Rate, Customer Satisfaction, Gross Margin
- Charts: Monthly Revenue Trend, Outlet-wise Revenue Bar, Profit Margin by Outlet, Satisfaction Heatmap
- Filters: Month, Outlet Name

### Quality Dashboard
- KPIs: Defect Rate, Return Rate, Complaints, Order Fulfillment, Stock Accuracy, Audit Compliance, Resolution Time, Cleanliness
- Charts: Defect/Return Trend, Outlet Quality Score, Complaints Bar, Quality Risk Flag
- Filters: Month, Outlet Name

---

## ⚙️ Assumptions

1. Data is considered clean and ready for analysis without row-level cleaning.
2. Month field stored as abbreviated text (Jan, Feb, ...) and converted using `MAKEDATE()` in Tableau.
3. All 10 outlets operate independently with no inter-outlet data dependencies.
4. KPI benchmarks (e.g. Defect Rate > 3% = High Risk) based on standard retail industry norms.
5. All financial values are in Indian Rupees (INR) as indicated by column naming.
6. The year 2024 represents a single complete fiscal period for analysis.
7. Customer Satisfaction Score is on a scale of 1–5.
8. Audit Compliance Score is on a scale of 0–100.
9. MoM Sales Growth is calculated month-over-month within the same calendar year.
10. On-Shelf Availability and Stock Accuracy are treated as independent quality measures.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React.js 18 | Frontend framework |
| Material UI v5 | Component library |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped component styles |
| Tableau Public | Dashboard hosting & visualization |
| Netlify | Deployment |

---

*XYZ Retail Analytics Portal • Interview Case Study — Bosch • Aditi Srivastava • 2024*