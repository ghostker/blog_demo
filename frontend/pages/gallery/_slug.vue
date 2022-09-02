<template>
  <div>
    <div
      v-if="headImageArea"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="getStrapiMedia(headImageArea.url)"
      uk-img
    >
      <h1 class="gallery-title">{{ gallery.description }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-expand">
        <div
          v-for="(photo, index) in bodyImageArea"
          id="banner"
          :key="index"
          class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
          :data-src="getStrapiMedia(photo.url)"
          uk-img
        ></div>
        <p v-if="gallery.published_at">
          {{ moment(gallery.published_at).format("MMM Do YY") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getStrapiMedia } from "../../utils/medias";
import { getMetaTags } from "../../utils/seo";

export default {
  async asyncData({ $strapi, params }) {
    const matchingGallery = await $strapi.find("galleries", {
      slug: params.slug,
    });
    console.log(matchingGallery);
    return {
      gallery: matchingGallery[0],
      global: await $strapi.find("global"),
    };
  },
  data() {
    return {
      apiUrl: process.env.strapiBaseUri,
    };
  },
  computed: {
    headImageArea() {
      return this.gallery.images[0];
    },
    bodyImageArea() {
      return this.gallery.images
        ? this.gallery.images.slice(1, this.gallery.length)
        : [];
    },
  },
  methods: {
    moment,
    getStrapiMedia,
  },
  head() {
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      metaTitle: this.gallery.title,
      metaDescription: this.gallery.description,
      shareImage: this.gallery.image,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
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
<style>
.gallery-title {
  text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
