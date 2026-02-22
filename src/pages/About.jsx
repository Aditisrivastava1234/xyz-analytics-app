import React from 'react';
import {
  Box, Typography, Grid, Card, CardContent,
  Chip, Divider, Avatar,
} from '@mui/material';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import TopBar from '../components/TopBar';
import styles from './About.module.css';

const TECH_STACK = [
  { name: 'React.js',      category: 'Frontend',       color: '#61DAFB', bg: '#E3F7FD' },
  { name: 'Material UI',   category: 'UI Library',     color: '#007FFF', bg: '#E3F0FF' },
  { name: 'React Router',  category: 'Navigation',     color: '#CA4245', bg: '#FDEAEA' },
  { name: 'CSS Modules',   category: 'Styling',        color: '#18837E', bg: '#E2F4F3' },
  { name: 'Tableau Public',category: 'Visualization',  color: '#004975', bg: '#E0EBF3' },
  { name: 'Netlify',       category: 'Hosting',        color: '#00AD9F', bg: '#E0F7F5' },
];

const ASSUMPTIONS = [
  'Data is considered clean and ready for analysis without row-level cleaning.',
  'Month field is stored as abbreviated text (Jan, Feb, …) and converted to a proper date field in Tableau using MAKEDATE().',
  'All 10 outlets operate independently with no inter-outlet data dependencies.',
  'KPI benchmarks (e.g., Defect Rate > 3% = High Risk) are based on standard retail industry norms.',
  'Financial values are in Indian Rupees (INR) as indicated by column naming.',
  'The year 2024 represents a single complete fiscal period for analysis.',
  'Customer Satisfaction Score is on a scale of 1–5.',
  'Audit Compliance Score is on a scale of 0–100.',
  'MoM Sales Growth is calculated month-over-month within the same year.',
  'On-Shelf KPI and Stock Accuracy are treated as independent quality measures.',
];

const DATA_SOURCES = [
  {
    name: 'xyz_Sales.xlsx',
    color: '#18837E',
    metrics: [
      'Monthly Revenue INR',
      'Transaction Count',
      'Average Bill Value (INR)',
      'Customer Footfall',
      'Conversion Rate %',
      'Gross Margin %',
      'Operating Cost (INR)',
      'Net Profit (INR)',
      'Inventory Turnover',
      'Customer Satisfaction Score',
      'MoM Sales Growth %',
    ],
  },
  {
    name: 'xyz_Quality.xlsx',
    color: '#004975',
    metrics: [
      'Return Rate %',
      'Defect Rate %',
      'Customer Complaints Count',
      'Order Fulfillment Accuracy %',
      'On-Shelf Availability %',
      'Stock Accuracy %',
      'Audit Compliance Score',
      'Avg Issue Resolution Time (hrs)',
      'Supplier Delivery Compliance %',
      'Store Cleanliness Score',
    ],
  },
];

const DESIGN_CHOICES = [
  {
    title: 'Brand-First Design',
    desc: "All colors, typography, and visual elements are derived directly from XYZ's brand palette — Teal (#18837E), Navy (#004975), Pink (#DB3069), Purple (#9882AC), and White Smoke (#F2F2F2). DM Sans used throughout for a modern, professional feel.",
    icon: <StorefrontRoundedIcon />,
    color: '#18837E',
  },
  {
    title: 'Component Architecture',
    desc: 'Built with fully reusable React components — Sidebar, TopBar, TableauEmbed, Footer — all scoped with CSS Modules. No inline styles. Routing handled by React Router v6 with Layout wrapper pattern.',
    icon: <CodeRoundedIcon />,
    color: '#004975',
  },
  {
    title: 'Tableau Integration',
    desc: 'Both dashboards published to Tableau Public with Automatic sizing, embedded via /views/ iframe URL format with :embed=y params. The "View on Tableau Public" bar is clipped via CSS overflow technique.',
    icon: <BarChartRoundedIcon />,
    color: '#DB3069',
  },
];

// ── Project-level summary numbers ──
const PROJECT_STATS = [
  { value: '10',   label: 'Retail Outlets',    color: '#DB3069' },
  { value: '2',    label: 'Live Dashboards',   color: '#004975' },
  { value: '2024', label: 'Fiscal Year',        color: '#9882AC' },
];

const About = () => {
  return (
    <Box className={styles.pageWrapper}>
      <TopBar
        // title="About This Project"
        subtitle="Design decisions, data sources, and technical stack"
        breadcrumb="Home / About"
      />

      <Box className={styles.content}>
        {/* ── Hero ── */}
        <Box className={styles.heroSection}>
          <Box className={styles.heroBg} />
          <Box className={styles.heroInner}>
            <Chip
              icon={<InfoRoundedIcon sx={{ fontSize: '14px !important' }} />}
              label="About This Project"
              className={styles.heroBadge}
            />
            <Typography variant="h3" className={styles.heroTitle}>
              XYZ Retail Chain —{' '}
              <span className={styles.accent}>Sales & Quality Analytics Portal</span>
            </Typography>
            <Typography variant="body1" className={styles.heroDesc}>
              A full-stack analytics solution built for XYZ Retail's leadership team —
              combining Tableau Public dashboards with a React-based web application
              for unified, brand-consistent business intelligence across all 10
              Bangalore outlets.
            </Typography>

            {/* Project Stats Row */}
            <Box className={styles.statsRow}>
              {PROJECT_STATS.map((s) => (
                <Box key={s.label} className={styles.statBox}>
                  <Typography className={styles.statValue} style={{ color: s.color }}>
                    {s.value}
                  </Typography>
                  <Typography className={styles.statLabel}>{s.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box className={styles.mainContent}>

          {/* ── Design Choices ── */}
          <Box className={styles.section}>
            <Typography variant="overline" className={styles.sectionLabel}>Design Philosophy</Typography>
            <Typography variant="h5" className={styles.sectionTitle}>Key Design Decisions</Typography>
            <Grid container spacing={3}>
              {DESIGN_CHOICES.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Card className={`${styles.designCard} card-hover`}>
                    <CardContent className={styles.designCardContent}>
                      <Avatar
                        className={styles.designIcon}
                        style={{ background: `${item.color}15`, color: item.color }}
                      >
                        {item.icon}
                      </Avatar>
                      <Typography variant="h6" className={styles.designTitle} style={{ color: item.color }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" className={styles.designDesc}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mx: 4 }} />

          {/* ── Data Sources ── */}
          <Box className={styles.section}>
            <Typography variant="overline" className={styles.sectionLabel}>Data Sources</Typography>
            <Typography variant="h5" className={styles.sectionTitle}>Datasets Used</Typography>
            <Grid container spacing={3}>
              {DATA_SOURCES.map((ds) => (
                <Grid item xs={12} md={6} key={ds.name}>
                  <Card className={styles.dataCard} style={{ borderTop: `4px solid ${ds.color}` }}>
                    <CardContent>
                      <Typography variant="h6" className={styles.dataCardName} style={{ color: ds.color }}>
                        {ds.name}
                      </Typography>
                      <Typography variant="caption" className={styles.dataCardSub}>
                        10 outlets × 12 months × {ds.metrics.length} metrics
                      </Typography>
                      <Box className={styles.metricsList}>
                        {ds.metrics.map((m) => (
                          <Box key={m} className={styles.metricItem}>
                            <CheckCircleRoundedIcon sx={{ fontSize: 14, color: ds.color, flexShrink: 0 }} />
                            <Typography variant="caption" className={styles.metricText}>{m}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mx: 4 }} />

          {/* ── Assumptions ── */}
          <Box className={styles.section}>
            <Typography variant="overline" className={styles.sectionLabel}>Assumptions</Typography>
            <Typography variant="h5" className={styles.sectionTitle}>Assumptions Made</Typography>
            <Card className={styles.assumptionsCard}>
              <CardContent>
                {ASSUMPTIONS.map((a, i) => (
                  <Box key={i} className={styles.assumptionItem}>
                    <Box
                      className={styles.assumptionNumber}
                      style={{ background: i % 2 === 0 ? '#18837E' : '#004975' }}
                    >
                      {i + 1}
                    </Box>
                    <Typography variant="body2" className={styles.assumptionText}>{a}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Box>

          <Divider sx={{ mx: 4 }} />

          {/* ── Tech Stack ── */}
          <Box className={styles.section}>
            <Typography variant="overline" className={styles.sectionLabel}>Technology</Typography>
            <Typography variant="h5" className={styles.sectionTitle}>Tech Stack</Typography>
            <Box className={styles.techGrid}>
              {TECH_STACK.map((tech) => (
                <Box
                  key={tech.name}
                  className={`${styles.techChip} card-hover`}
                  style={{ background: tech.bg, borderColor: `${tech.color}30` }}
                >
                  <Typography variant="body2" className={styles.techName} style={{ color: tech.color }}>
                    {tech.name}
                  </Typography>
                  <Typography variant="caption" className={styles.techCategory}>
                    {tech.category}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default About;