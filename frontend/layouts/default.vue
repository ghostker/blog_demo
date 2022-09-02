<template>
  <div>
    <header class="short-header uk-flex">
      <nav class="uk-navbar-container uk-flex" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li class="main-title">
              <nuxt-link to="/" tag="a" class="uk-heading-large"
                >Ke zhang's Blog</nuxt-link
              >
            </li>
          </ul>
        </div>

        <div class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li
              :class="[currentIndex === 0 ? 'uk-active' : '']"
              @click="onNavChanged(0)"
            >
              <nuxt-link to="/" tag="a"> Home </nuxt-link>
            </li>
            <li
              :class="
                categories.map((v) => v.id).includes(currentIndex)
                  ? 'uk-active'
                  : ''
              "
            >
              <nuxt-link to="/" tag="a"> Categories </nuxt-link>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <template v-for="category in categories">
                    <li
                      :key="category.id"
                      :class="[
                        'uk-nav-divider',
                        currentIndex === category.id ? 'uk-active' : '',
                      ]"
                      @click="onNavChanged(category.id)"
                    >
                      <nuxt-link
                        :to="{
                          name: 'categories-slug',
                          params: { slug: category.slug },
                        }"
                        tag="a"
                      >
                        {{ category.name }}
                      </nuxt-link>
                    </li>
                  </template>
                </ul>
              </div>
            </li>
            <li
              :class="[currentIndex === -2 ? 'uk-active' : '']"
              @click="onNavChanged(-2)"
            >
              <nuxt-link
                :to="{
                  name: 'galleries-slug',
                  params: { slug: 'gallery' },
                }"
                tag="a"
              >
                Gallery
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- <div id="modal-full" class="uk-modal-full" uk-modal>
      <div class="uk-modal-dialog">
        <button
          class="uk-modal-close-full uk-close-large"
          type="button"
          uk-close
        />
        <div
          class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
          uk-grid
        >
          <div
            class="uk-background-cover"
            style="
              background-image: url('https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3308&q=80 3308w');
            "
            uk-height-viewport
          />
          <div class="uk-padding-large">
            <h1 style="font-family: Staatliches">Strapi blog</h1>
            <div class="uk-width-1-2@s">
              <ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>
                <li v-for="category in categories" :key="category.id">
                  <nuxt-link
                    class="uk-modal-close"
                    :to="{
                      name: 'categories-slug',
                      params: { slug: category.slug },
                    }"
                    tag="a"
                  >
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <p class="uk-text-light">Built with strapi</p>
          </div>
        </div>
      </div>
    </div> -->
    <nuxt />
  </div>
</template>

<script>
export default {
  async fetch() {
    this.categories = await this.$strapi.find("categories");
  },
  data: function () {
    return {
      currentIndex: 0,
      categories: [],
    };
  },
  mounted() {
    this.$set(this, "currentIndex", 0);
  },
  methods: {
    onNavChanged(index) {
      this.$set(this, "currentIndex", index);
    },
  },
};
</script>
<style>
.row:before,
.row:after {
  content: "";
  display: table;
}
.main-title {
  width: 190px;
}
.main-title a {
  font-size: 1.2rem !important;
}
.short-header {
  line-height: 3rem;
  width: 100%;
  background: #dbdbdb url(~@/static/escheresque.png) repeat;
  background-size: 46px 29px;
  height: 130px;
  border-bottom: 1px solid #e5e5e5;
}

.uk-navbar-container {
  background: none !important;
  height: auto;
  max-width: 1290px;
  margin: 25px;
  width: 100%;
}
</style>
