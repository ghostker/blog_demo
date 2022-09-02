<template>
  <nuxt-link
    :key="gallery.id"
    :to="{ name: 'gallery-slug', params: { slug: gallery.slug } }"
    class="uk-link-reset"
  >
    <div class="uk-card uk-card-small uk-card-muted">
      <div class="uk-card-media-top uk-position-relative">
        <ul class="uk-height-medium uk-slide-items">
          <li
            class="uk-slider-container uk-position-top uk-height-1-1 uk-box-shadow-small"
          >
            <div
              class="uk-cover-container uk-height-1-1"
              style="z-index: 6; left: 5px; top: 0"
            >
              <img
                uk-img="target: !.uk-slide-items"
                uk-cover
                :data-src="getStrapiMedia(gallery.images[0].url)"
              />
            </div>
          </li>
          <li
            v-if="gallery.images[1]"
            class="uk-slider-container uk-position-top uk-height-1-1 uk-box-shadow-small"
            style="z-index: 3; left: 0; top: 5px"
          >
            <div class="uk-cover-container uk-height-1-1">
              <img
                uk-img="target: !.uk-slide-items"
                uk-cover
                :data-src="getStrapiMedia(gallery.images[1].url)"
              />
            </div>
          </li>
          <li
            v-if="gallery.images[2]"
            class="uk-slider-container uk-position-top uk-height-1-1"
            style="z-index: 1; left: -5px; top: 10px"
          >
            <div class="uk-cover-container uk-height-1-1">
              <img
                uk-img="target: !.uk-slide-items"
                uk-cover
                :data-src="getStrapiMedia(gallery.images[2].url)"
              />
            </div>
          </li>
        </ul>
      </div>
      <div class="uk-card-body">
        <p id="title" class="uk-text-large">{{ gallery.description }}</p>
        <hr class="uk-divider-small" />
        <div class="uk-grid-small uk-flex-left" data-uk-grid="true">
          <div>
            <img
              class="avatar"
              :src="getStrapiMedia(gallery.author.picture.url)"
              style="position: static; border-radius: 50%; object-fit: cover"
              width="40px"
              height="40px"
              :alt="gallery.title"
            />
          </div>
          <div class="uk-width-expand">
            <p class="uk-margin-remove-bottom">{{ gallery.author.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { getStrapiMedia } from "../utils/medias";

export default {
  props: {
    gallery: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
<style>
.slideshow {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
