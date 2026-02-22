import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import styles from './TableauEmbed.module.css';

const TABLEAU_BASE_URLS = {
  sales:
    'https://public.tableau.com/views/XYZRetailSalesQualityAnalyticsDashboard/SalesDashboard',
  quality:
    'https://public.tableau.com/views/XYZRetailSalesQualityAnalyticsDashboard/QualityDashboard',
};

const TABLEAU_VIEWER_URLS = {
  sales:
    'https://public.tableau.com/app/profile/aditi.srivastava6534/viz/XYZRetailSalesQualityAnalyticsDashboard/SalesDashboard?publish=yes',
  quality:
    'https://public.tableau.com/app/profile/aditi.srivastava6534/viz/XYZRetailSalesQualityAnalyticsDashboard/QualityDashboard?publish=yes',
};

const buildEmbedUrl = (baseUrl, isMobile) => {
  // On mobile: use device=phone so Tableau serves the Phone layout (which you've configured)
  // On desktop: use device=desktop
  const device = isMobile ? 'phone' : 'desktop';
  return `${baseUrl}?:embed=y&:showVizHome=no&:toolbar=bottom&:animate_transition=yes&:display_count=no&:tabs=no&:device=${device}&:revert=all`;
};

const TableauEmbed = ({ dashboardType, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  // Re-check on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset loading state when device type changes
  useEffect(() => {
    setLoading(true);
    setError(false);
  }, [isMobile]);

  const embedUrl  = buildEmbedUrl(TABLEAU_BASE_URLS[dashboardType], isMobile);
  const viewerUrl = TABLEAU_VIEWER_URLS[dashboardType];

  return (
    <Box className={styles.embedWrapper}>
      <Box className={`${styles.iframeContainer} ${isMobile ? styles.iframeContainerMobile : ''}`}>
        {loading && !error && (
          <Box className={styles.loadingOverlay}>
            <CircularProgress size={36} sx={{ color: '#18837E' }} />
            <Typography variant="body2" className={styles.loadingText}>
              Loading {title}...
            </Typography>
            <Typography variant="caption" className={styles.loadingHint}>
              This may take a few seconds
            </Typography>
          </Box>
        )}

        {error && (
          <Box className={styles.errorState}>
            <Typography className={styles.errorTitle}>⚠️ Dashboard unavailable</Typography>
            <Typography variant="body2" className={styles.errorText}>
              Could not embed the dashboard. Open it directly in Tableau Public.
            </Typography>
            <Button
              variant="contained"
              onClick={() => window.open(viewerUrl, '_blank')}
              sx={{
                mt: 2,
                background: '#18837E',
                borderRadius: '8px',
                textTransform: 'none',
                fontFamily: 'DM Sans',
              }}
            >
              Open in Tableau Public
            </Button>
          </Box>
        )}

        <iframe
          key={embedUrl}  /* force re-mount when URL changes */
          src={embedUrl}
          title={title}
          onLoad={() => setTimeout(() => setLoading(false), 2500)}
          onError={() => { setLoading(false); setError(true); }}
          className={styles.iframe}
          frameBorder="0"
          allowFullScreen
          scrolling="no"
        />
      </Box>
    </Box>
  );
};

export default TableauEmbed;