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
          <div v-if="isLogged" class="uk-navbar-item">
            <div class="uk-button-group">
              <button
                class="uk-button btn-small uk-button-default"
                @click="onLogout"
              >
                Logout
              </button>
            </div>
          </div>
          <div v-else class="uk-navbar-item">
            <form action="javascript:void(0)">
              <input
                v-model="email"
                class="uk-input uk-form-width-small"
                type="email"
                placeholder="Email:"
              />
              <input
                v-model="password"
                class="uk-input uk-form-width-small"
                type="password"
                placeholder="Password:"
              />
              <input
                v-if="isRegister"
                v-model="rePassword"
                class="uk-input uk-form-width-small"
                type="password"
                placeholder="Repeat Password:"
              />
              <div class="uk-button-group">
                <button
                  :class="[
                    'uk-button btn-small',
                    isRegister ? 'uk-button-default' : 'uk-button-primary',
                  ]"
                  @click="onLogin"
                >
                  Login
                </button>
                <button
                  :class="[
                    'uk-button btn-small',
                    isRegister
                      ? 'uk-button-primary'
                      : 'uk-button-default uk-background-default',
                  ]"
                  @click="onRegister"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
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
  data() {
    return {
      currentIndex: 0,
      categories: [],
      isLogged: false,
      isRegister: false,
      email: "",
      password: "",
      rePassword: "",
    };
  },
  async mounted() {
    this.$set(this, "currentIndex", 0);
    this.checkLogged();
  },
  methods: {
    async onLogin() {
      if (this.isRegister) {
        this.$set(this, "rePassword", "");
        return this.$set(this, "isRegister", false);
      }
      try {
        await this.$strapi.login({
          identifier: this.email,
          password: this.password,
        });
        this.setToken();
      } catch (err) {
        if (err.message.includes("Identifier or password invalid."))
          return this.$uikit.notification(
            "email or password invalid.",
            "danger"
          );
        console.error(err);
      }
    },
    async checkLogged() {
      try {
        this.user = await this.$strapi.fetchUser();
        if (!this.user) throw new Error("not user");
        this.$set(this, "isLogged", true);
      } catch (err) {
        console.log(err);
      }
    },
    async onRegister() {
      if (!this.isRegister) {
        this.$set(this, "rePassword", "");
        return this.$set(this, "isRegister", true);
      }
      try {
        const regSpecialChar = new RegExp(
          "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]"
        );
        const regEmail = new RegExp(
          "^([a-zA-Z]|[0-9])(\\w|\\-)+@[a-zA-Z0-9]+\\.([a-zA-Z]{2,4})$"
        );
        const regPassword = new RegExp("^(?=\\S*[a-z])(?=\\S*\\d)\\S{8,}$");
        if (!this.email || !regEmail.test(this.email))
          return this.$uikit.notification("Email violation", "danger");
        if (!this.password || !regPassword.test(this.password))
          return this.$uikit.notification("Password violation", "danger");
        if (this.password !== this.rePassword)
          return this.$uikit.notification(
            "Two passwords are different",
            "danger"
          );
        await this.$strapi.register({
          email: this.email,
          username: this.email.split("@")[0].replace(regSpecialChar, ""),
          password: this.password,
        });
      } catch (err) {
        console.error(err);
      }
    },
    setToken() {
      this.$set(this, "email", "");
      this.$set(this, "password", "");
      this.$set(this, "rePassword", "");
      this.checkLogged();
    },
    async onLogout() {
      try {
        await this.$strapi.logout();
        this.setToken();
        this.checkLogged();
      } catch (err) {
        console.error(err);
      }
    },
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
.btn-small {
  width: 100px;
  text-align: center;
  padding: 0;
  margin-left: -5px;
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
