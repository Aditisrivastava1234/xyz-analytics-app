import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Typography, Button, Grid, Card, CardContent,
  Chip, Avatar, Divider,
} from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import TopBar from '../components/TopBar';
import styles from './Home.module.css';

// ── Corrected from actual Tableau dashboards ──
const QUICK_STATS = [
  { label: 'Total Outlets',  value: '10',        icon: <StorefrontRoundedIcon />,    color: '#18837E' },
  { label: 'City',           value: 'Bangalore',  icon: <LocationOnRoundedIcon />,    color: '#004975' },
  { label: 'Data Period',    value: '2024',       icon: <CalendarTodayRoundedIcon />, color: '#DB3069' },
  { label: 'Live Dashboards',value: '2',          icon: <DashboardRoundedIcon />,     color: '#9882AC' },
];

const DASHBOARD_CARDS = [
  {
    title: 'Sales Dashboard',
    description:
      'Track total revenue, profit margins, average bill value, monthly sales trends, and outlet-wise revenue & net profit performance across all 10 Bangalore outlets.',
    icon: <TrendingUpRoundedIcon sx={{ fontSize: 32 }} />,
    color: '#18837E',
    path: '/sales',
    tags: ['Revenue', 'Profit', 'Transactions', 'MoM Growth'],
    kpis: [
      '₹781.8M Total Sales',
      '₹91.4M Total Profit',
      '₹800.9 Avg Bill Value',
      '976.1K Total Transactions',
      'MoM Sales Growth Tracker',
    ],
  },
  {
    title: 'Quality Dashboard',
    description:
      'Monitor overall quality score, defect rates, return rates, audit compliance, order fulfillment accuracy, resolution time, and on-shelf KPI across all outlets.',
    icon: <VerifiedRoundedIcon sx={{ fontSize: 32 }} />,
    color: '#004975',
    path: '/quality',
    tags: ['Defect Rate', 'Audit Score', 'Fulfillment', 'On-Shelf KPI'],
    kpis: [
      '97.0 Overall Quality Score',
      '1.2% Defect Rate',
      '94.27% Audit Score',
      '97.8% Order Fulfillment',
      '21.84 hrs Avg Resolution Time',
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.pageWrapper}>
      <TopBar
        title="XYZ Analytics Portal"
        subtitle="Retail intelligence across 10 Bangalore outlets"
        breadcrumb="Home"
      />

      <Box className={styles.content}>
        {/* ── Hero ── */}
        <Box className={styles.heroSection}>
          <Box className={styles.heroBg} />
          <Box className={styles.heroContent}>
            <Chip label="Bangalore Retail Chain • 10 Outlets" className={styles.heroBadge} />
            <Typography variant="h2" className={styles.heroTitle}>
              Welcome to <span className={styles.heroAccent}>XYZ Analytics</span>
            </Typography>
            <Typography variant="body1" className={styles.heroSubtitle}>
              A unified, data-driven analytics portal delivering sales performance
              and quality insights — built for XYZ Retail's leadership team
              to make faster, smarter decisions across all 10 Bangalore outlets.
            </Typography>
            <Box className={styles.heroCta}>
              <Button
                variant="contained"
                endIcon={<TrendingUpRoundedIcon />}
                onClick={() => navigate('/sales')}
                className={styles.ctaPrimary}
              >
                View Sales Dashboard
              </Button>
              <Button
                variant="outlined"
                endIcon={<VerifiedRoundedIcon />}
                onClick={() => navigate('/quality')}
                className={styles.ctaSecondary}
              >
                View Quality Dashboard
              </Button>
            </Box>
          </Box>

          {/* Quick Stats */}
          <Grid container spacing={2} className={styles.statsRow}>
            {QUICK_STATS.map((stat, i) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <Box className={styles.quickStat} style={{ animationDelay: `${i * 100}ms` }}>
                  <Avatar
                    className={styles.statAvatar}
                    style={{ background: `${stat.color}18`, color: stat.color }}
                  >
                    {stat.icon}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" className={styles.statValue}>{stat.value}</Typography>
                    <Typography variant="caption" className={styles.statLabel}>{stat.label}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Dashboard Cards ── */}
        <Box className={styles.section}>
          <Typography variant="overline" className={styles.sectionLabel}>Analytics Dashboards</Typography>
          <Typography variant="h4" className={styles.sectionTitle}>Explore Your Data</Typography>

          <Grid container spacing={3} className={styles.dashboardCards}>
            {DASHBOARD_CARDS.map((card, i) => (
              <Grid item xs={12} md={6} key={card.title}>
                <Card
                  className={`${styles.dashCard} card-hover`}
                  style={{ animationDelay: `${i * 150}ms` }}
                  onClick={() => navigate(card.path)}
                >
                  <CardContent className={styles.dashCardContent}>
                    <Box className={styles.dashCardHeader}>
                      <Avatar
                        className={styles.dashCardIcon}
                        style={{ background: `${card.color}15`, color: card.color }}
                      >
                        {card.icon}
                      </Avatar>
                      <ArrowForwardRoundedIcon className={styles.dashCardArrow} style={{ color: card.color }} />
                    </Box>

                    <Typography variant="h5" className={styles.dashCardTitle} style={{ color: card.color }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className={styles.dashCardDesc}>
                      {card.description}
                    </Typography>

                    <Box className={styles.kpiList}>
                      {card.kpis.map((kpi) => (
                        <Typography key={kpi} variant="caption" className={styles.kpiItem}>
                          ✓ {kpi}
                        </Typography>
                      ))}
                    </Box>

                    <Divider className={styles.dashCardDivider} />

                    <Box className={styles.tagRow}>
                      {card.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          className={styles.tag}
                          style={{
                            background: `${card.color}10`,
                            color: card.color,
                            borderColor: `${card.color}25`,
                          }}
                        />
                      ))}
                    </Box>

                    <Box className={styles.dashCardAccent} style={{ background: card.color }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Key Metrics Summary ── */}
        <Box className={styles.metricsSection}>
          <Typography variant="overline" className={styles.sectionLabel}>At a Glance</Typography>
          <Typography variant="h5" className={styles.sectionTitle}>Key Business Numbers</Typography>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            {[
              { label: 'Total Revenue',       value: '₹781.8M',  color: '#18837E', sub: 'Full Year 2024' },
              { label: 'Total Profit',         value: '₹91.4M',  color: '#004975', sub: 'After operating costs' },
              { label: 'Avg Bill Value',       value: '₹800.9',  color: '#DB3069', sub: 'Per transaction' },
              { label: 'Total Transactions',   value: '976.1K',  color: '#9882AC', sub: 'Across all outlets' },
              { label: 'Overall Quality Score',value: '97.0',    color: '#18837E', sub: 'All outlets avg' },
              { label: 'Audit Compliance',     value: '94.27%',  color: '#004975', sub: 'Score average' },
              { label: 'Defect Rate',          value: '1.2%',    color: '#DB3069', sub: 'Product defect pct' },
              { label: 'Order Fulfillment',    value: '97.8%',   color: '#9882AC', sub: 'Fulfillment accuracy' },
            ].map((m) => (
              <Grid item xs={6} sm={3} key={m.label}>
                <Box className={styles.metricCard} style={{ borderTop: `3px solid ${m.color}` }}>
                  <Typography className={styles.metricValue} style={{ color: m.color }}>
                    {m.value}
                  </Typography>
                  <Typography className={styles.metricLabel}>{m.label}</Typography>
                  <Typography className={styles.metricSub}>{m.sub}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ── Data Sources ── */}
        <Box className={styles.dataSection}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" className={styles.sectionLabel}>Data Foundation</Typography>
              <Typography variant="h5" className={styles.sectionTitle}>What Powers This Portal</Typography>
              <Typography variant="body2" className={styles.dataText}>
                All analytics are derived from two comprehensive datasets covering
                XYZ Retail's 10 Bangalore outlets for the full year 2024. The data
                is modeled and visualized through Tableau Public, then seamlessly
                embedded into this React application.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className={styles.dataCards}>
                {[
                  {
                    name: 'xyz_Sales.xlsx',
                    desc: '10 outlets × 12 months × 11 metrics',
                    detail: 'Revenue, Profit, Bill Value, Transactions, MoM Growth, Footfall, Conversion Rate, Gross Margin',
                    color: '#18837E',
                  },
                  {
                    name: 'xyz_Quality.xlsx',
                    desc: '10 outlets × 12 months × 10 quality KPIs',
                    detail: 'Quality Score, Return Rate, Defect Rate, Audit Score, Fulfillment, Resolution Time, On-Shelf KPI',
                    color: '#004975',
                  },
                ].map((d) => (
                  <Box key={d.name} className={styles.dataCard} style={{ borderLeft: `4px solid ${d.color}` }}>
                    <Typography variant="body2" className={styles.dataCardName} style={{ color: d.color }}>
                      {d.name}
                    </Typography>
                    <Typography variant="caption" className={styles.dataCardDesc}>{d.desc}</Typography>
                    <Typography variant="caption" className={styles.dataCardDetail}>{d.detail}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;