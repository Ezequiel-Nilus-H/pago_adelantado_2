import { isArgentina } from '@/constans/country';
import mixpanel from 'mixpanel-browser';

const token = "7a4d1186ee5202d5087453024ca82160";

if (token) {
  mixpanel.init(token, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
  });
}

export const track = (event, props) => {
  const country = isArgentina() ? 'ar' : 'mx';
  let tier = localStorage.getItem('tier_id');
  if (!tier) tier = 'none';
  const isTesting = import.meta.env.VITE_MIXPANEL_TESTING === 'true';
  mixpanel.track(event, { ...props, country, tier, testing: isTesting });
};

export default mixpanel; 