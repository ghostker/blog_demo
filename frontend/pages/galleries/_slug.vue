<template>
  <div>
    <client-only>
      <div class="uk-section">
        <div class="uk-container uk-container-large">
          <h1>Gallery</h1>
          <Galleries :galleries="galleries || []" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import Galleries from "../../components/Galleries";
import { getMetaTags } from "../../utils/seo";
import { getStrapiMedia } from "../../utils/medias";

export default {
  components: {
    Galleries,
  },
  async asyncData({ $strapi }) {
    return {
      galleries: await $strapi.find("galleries"),
      global: await $strapi.find("global"),
    };
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: `gallery`,
      metaDescription: `All photo about `,
    };

    return {
      title: fullSeo.metaTitle,
      titleTemplate: `%s | ${siteName}`,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: "favicon",
          href: getStrapiMedia(favicon.url),
        },
      ],
    };
  },
};
</script>
