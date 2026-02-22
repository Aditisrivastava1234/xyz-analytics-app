import React from 'react';
import { Box, Card, Typography, Avatar } from '@mui/material';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import styles from './StatCard.module.css';

const StatCard = ({
  title,
  value,
  subtitle,
  icon,
  color = '#18837E',
  trend,
  trendValue,
  delay = 0,
}) => {
  const isPositive = trend === 'up';

  return (
    <Card
      className={`${styles.card} card-hover`}
      style={{ animationDelay: `${delay}ms`, '--card-color': color }}
    >
      <Box className={styles.topRow}>
        <Box className={styles.iconWrapper} style={{ background: `${color}18` }}>
          <Box style={{ color }}>{icon}</Box>
        </Box>
        {trendValue && (
          <Box
            className={styles.trendBadge}
            style={{
              background: isPositive
                ? 'rgba(76, 175, 80, 0.1)'
                : 'rgba(244, 67, 54, 0.1)',
              color: isPositive ? '#2E7D32' : '#C62828',
            }}
          >
            {isPositive ? (
              <TrendingUpRoundedIcon sx={{ fontSize: 14 }} />
            ) : (
              <TrendingDownRoundedIcon sx={{ fontSize: 14 }} />
            )}
            <Typography variant="caption" className={styles.trendText}>
              {trendValue}
            </Typography>
          </Box>
        )}
      </Box>

      <Box className={styles.valueSection}>
        <Typography variant="h4" className={styles.value} style={{ color }}>
          {value}
        </Typography>
        <Typography variant="body2" className={styles.title}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="caption" className={styles.subtitle}>
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box
        className={styles.bottomAccent}
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </Card>
  );
};

export default StatCard;
