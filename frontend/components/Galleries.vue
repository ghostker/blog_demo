<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <GalleryCard
          v-for="gallery in leftArea"
          :key="gallery.id"
          :gallery="gallery"
        />
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <GalleryCard
            v-for="gallery in rightArea"
            :key="gallery.id"
            :gallery="gallery"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GalleryCard from "./GalleryCard";

export default {
  components: {
    GalleryCard,
  },
  props: {
    galleries: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    leftAreaCount() {
      return Math.ceil(this.galleries.length / 5);
    },
    leftArea() {
      return this.galleries.slice(0, this.leftAreaCount);
    },
    rightArea() {
      return this.galleries.slice(this.leftAreaCount, this.galleries.length);
    },
  },
};
</script>
