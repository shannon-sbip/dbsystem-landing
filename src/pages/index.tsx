/* eslint-disable max-len */
import Head from "next/head";
import { useRouter } from "next/router";
const TITLE = "Food(lg) for food intake monitoring and disease management";
const DESCRIPTION = "A Dietary Nutrition-aided Healthcare Platform via Effective Food Recognition on a Localized Singaporean Food Dataset K. Zheng, T. Nguyen, J. H. S. Chong, C. E. Goh, M. Herschel, H. H. Lee, B. C. Ooi, W. Wang, J. Yip. Preprint, 2022.";
const APP_URL = "https://datam1ne.vercel.app/";
const IMAGE_URL = "https://datam1ne.vercel.app/cover.png";
const Home = () => {
  const router = useRouter();
  const seal = String(router.query.seal || "");
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="title" content={TITLE} />
        <meta
          name="description"
          content={DESCRIPTION}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:title" content={TITLE} />
        <meta
          property="og:description"
          content={DESCRIPTION}
        />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={APP_URL} />
        <meta property="twitter:title" content={TITLE} />
        <meta
          property="twitter:description"
          content={DESCRIPTION}
        />
        <meta property="twitter:image" content={IMAGE_URL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        title="app"
        src={`${APP_URL}/?seal=${seal}`}
        height="100%"
        width="100%"
      />
    </>
  );
};
export default Home;
