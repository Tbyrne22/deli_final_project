
export const pageview = (measurementId, url) => {
    window.gtag("config", measurementId, {
      page_path: url
    });
};
  