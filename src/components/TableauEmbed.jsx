import React, { useState } from 'react';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
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

// :render=false + device=desktop forces Tableau to fill the iframe fully
// const buildEmbedUrl = (baseUrl) =>
//   `${baseUrl}?:embed=y&:showVizHome=no&:toolbar=bottom&:animate_transition=yes&:display_count=no&:tabs=no&:device=desktop&:render=false&:revert=all`;
const buildEmbedUrl = (baseUrl) =>
  `${baseUrl}?:embed=y&:showVizHome=no&:toolbar=bottom&:animate_transition=yes&:display_count=no&:tabs=no&:device=desktop&:revert=all`;
const TableauEmbed = ({ dashboardType, title }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const embedUrl = buildEmbedUrl(TABLEAU_BASE_URLS[dashboardType]);
  const viewerUrl = TABLEAU_VIEWER_URLS[dashboardType];

  return (
    <Box className={styles.embedWrapper}>
      {/* Header */}
      {/* <Box className={styles.embedHeader}>
        <Box className={styles.headerDots}>
          <span className={`${styles.dot} ${styles.dotRed}`} />
          <span className={`${styles.dot} ${styles.dotYellow}`} />
          <span className={`${styles.dot} ${styles.dotGreen}`} />
        </Box>
        <Box className={styles.urlBar}>
          <Typography variant="caption" className={styles.urlText}>
            public.tableau.com › {title}
          </Typography>
        </Box>
        <Button
          size="small"
          endIcon={<OpenInNewRoundedIcon sx={{ fontSize: '13px !important' }} />}
          onClick={() => window.open(viewerUrl, '_blank')}
          className={styles.openBtn}
        >
          Open Full View
        </Button>
      </Box> */}

      {/* Responsive iframe wrapper using padding-bottom aspect ratio trick */}
      <Box className={styles.iframeContainer}>
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
          src={embedUrl}
          title={title}
          onLoad={() => setTimeout(() => setLoading(false), 2000)}
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