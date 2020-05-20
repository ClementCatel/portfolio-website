<template>
  <v-app>
    <v-app-bar app height="73" elevation="0" color="white">
      <v-toolbar-title
        :class="{ 'px-10': $vuetify.breakpoint.mdAndUp }"
        v-text="title"
        @click="goTo('#hero')"
      ></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="goTo('#about-me')">à propos de moi</v-btn>
        <v-btn text @click="goTo('#portfolio')">Portfolio</v-btn>
        <v-btn text @click="goTo('#contact')">Contact</v-btn>
      </v-toolbar-items>

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon
            v-on="on"
            class="hidden-md-and-up"
          ></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item @click="goTo('#about-me')">
            <v-list-item-title>A propos de moi</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#portfolio')">
            <v-list-item-title>Portfolio</v-list-item-title>
          </v-list-item>
          <v-list-item @click="goTo('#contact')">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <section id="hero">
        <v-parallax src="../assets/images/hero.svg" height="675">
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
              <v-layout column align-left class="white--text">
                <div class="text-left">
                  <v-btn
                    data-aos="fade-right"
                    rounded
                    dark
                    small
                    depressed
                    class="mt-5 text-lowercase"
                    color="rgba(255, 255, 255, 0.1)"
                    href="mailto:clement.catel4@gmail.com"
                    ><v-icon left small color="blue lighten-3">mdi-at</v-icon
                    >clement.catel4@gmail.com</v-btn
                  >
                </div>
                <h1
                  class="display-3 my-5 mt-10 font-weight-light"
                  data-aos="fade-right"
                >
                  Clément Catel
                </h1>
                <h2
                  class="my-5 headline text-left font-weight-light"
                  data-aos="fade-right"
                >
                  Apprenti développeur Web
                </h2>

                <div class="text-left" data-aos="fade-right">
                  <v-btn
                    rounded
                    dark
                    large
                    class="mt-5 elevation-5"
                    color="blue lighten-2"
                    @click="goTo('#about-me')"
                    >En savoir plus</v-btn
                  >
                </div>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>

      <section id="about-me">
        <v-layout wrap class="my-12" align-center justify-center>
          <v-flex xs10 sm6 class="my-5 mb-12">
            <div class="text-center">
              <h3 class="display-3">A propos de moi</h3>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container>
              <v-layout row wrap justify-center>
                <v-flex xs12 sm10 md8 lg6>
                  <v-card flat class="transparent">
                    <v-layout justify-center>
                      <v-avatar
                        size="150"
                        class="elevation-8 mb-5"
                        data-aos="fade-up"
                      >
                        <img
                          src="../assets/images/clementcatel.jpg"
                          alt="clément catel"
                        />
                      </v-avatar>
                    </v-layout>
                    <!-- <v-card-title primary-title class="layout row justify-center mb-8">
                      <div class="display-1">Clément Catel</div>
                    </v-card-title> -->
                    <v-card-text class="title mt-5" data-aos="fade-up">
                      <p class="font-weight-light py-3 text-justify">
                        Hello! Je suis Clément Catel, développeur web junior.
                        Passionné d'informatique, de nouvelles technologies et
                        de design depuis plusieurs années, j'ai décidé
                        d'orienter mon parcours professionnel vers le monde de
                        l'informatique et plus particulièrement celui du
                        développement web.
                      </p>

                      <p class="font-weight-light py-3 text-justify">
                        Je suis titulaire d'un DUT en Informatique. Formation
                        durant laquelle j'ai pu acquérir une première expérience
                        en tant que développeur Web et Webdesigner aux côtés
                        d'Alexandre Maurouard, lors d'un stage de 3 mois dans sa
                        société :
                        <a
                          href="https://alexandremaurouard.fr/"
                          target="_blank"
                          class="link"
                          >Alexandre Maurouard Freelance</a
                        >.
                      </p>

                      <p class="font-weight-light py-3 text-justify">
                        Je prépare actuellement un diplôme de chef de projet SI
                        au sein d'une formation de 3 ans, à
                        <a
                          href="https://www.institut-g4.fr/"
                          target="_blank"
                          class="link"
                          >l'institut G4</a
                        >
                        de Paris. Effectuant mon cursus en alternance, je
                        recherche une entreprise dans laquelle je pourrai mettre
                        à profit mes compétences et ma motivation mais aussi
                        enrichir mes connaissances ainsi que mon expérience.
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="portfolio">
        <v-layout row align-center justify-center class="mx-0">
          <v-flex xs10 sm8 class="my-5 mb-12">
            <div class="text-center">
              <h3 class="display-3">Portfolio</h3>
            </div>
          </v-flex>
          <v-flex xs12 sm10 md8 xl6>
            <v-container grid-list-sm fluid class="px-0 mb-12">
              <v-layout wrap justify-center class="mx-0" data-aos="fade-up">
                <v-flex
                  v-for="(project, index) in projects"
                  :key="index"
                  xs10
                  sm8
                  md6
                  lg4
                  d-flex
                  child-flex
                >
                  <v-hover v-slot:default="{ hover }">
                    <v-card tile :elevation="hover ? 12 : 2">
                      <v-img
                        :src="project.image"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      >
                        <v-fade-transition>
                          <v-overlay
                            v-if="hover"
                            absolute
                            color="primary"
                            opacity="0.95"
                          >
                            <!-- <v-card-title
                              class="title white--text fill-height absolute"
                            > -->
                            <v-layout
                              fill-height
                              column
                              justify-space-between
                              class="px-3"
                            >
                              <p class="mt-4 title text-left">
                                {{ project.title }}
                              </p>

                              <div>
                                <p
                                  class="body-1 font-weight-light text-left mb-2"
                                >
                                  {{ project.description }}
                                </p>
                              </div>

                              <div class="align-self-center">
                                <v-btn
                                  v-if="project.sourcelink"
                                  large
                                  icon
                                  :href="project.sourcelink"
                                  target="_blank"
                                >
                                  <v-icon class="white--text"
                                    >mdi-code-tags</v-icon
                                  >
                                </v-btn>
                                <v-btn
                                  large
                                  icon
                                  :href="project.link"
                                  target="_blank"
                                >
                                  <v-icon class="white--text">mdi-web</v-icon>
                                </v-btn>
                              </div>
                            </v-layout>
                            <!-- </v-card-title> -->
                          </v-overlay>
                        </v-fade-transition>
                        <template v-slot:placeholder>
                          <v-layout
                            fill-height
                            align-center
                            justify-center
                            ma-0
                          >
                            <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                            ></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                    </v-card>
                  </v-hover>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section id="contact">
        <v-layout row class="my-12 mx-0" align-center justify-center>
          <v-flex xs10 sm6 class="my-5 mb-12">
            <div class="text-center">
              <h3 class="display-3">Me contacter</h3>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-layout row justify-center class="mx-0">
              <v-flex xs10 md6>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <v-text-field
                    label="Nom"
                    type="text"
                    name="name"
                    solo
                  ></v-text-field>
                  <v-text-field
                    label="Email"
                    type="email"
                    name="email"
                    solo
                  ></v-text-field>
                  <v-textarea solo name="message" label="Message"></v-textarea>
                  <v-layout justify-center>
                    <v-btn
                      dark
                      rounded
                      large
                      class="mt-5 elevation-5"
                      color="blue lighten-2"
                      type="submit"
                      >Envoyer</v-btn
                    >
                  </v-layout>
                </form>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </section>

      <v-footer dark padless class="primary white--text text-center pt-3">
        <v-layout justify-center wrap>
          <v-btn
            class="mx-4 white--text"
            icon
            href="https://www.linkedin.com/in/cl%C3%A9ment-catel/"
            target="_blank"
          >
            <v-icon size="24px">mdi-linkedin</v-icon>
          </v-btn>
          <v-btn
            class="mx-4 white--text"
            icon
            href="https://github.com/ClementCatel"
            target="_blank"
          >
            <v-icon size="24px">mdi-github-circle</v-icon>
          </v-btn>
          <v-flex py-4 text-center white--text xs12>
            {{ new Date().getFullYear() }} © Clément Catel
          </v-flex>
        </v-layout>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Clément Catel",
      projects: [
        {
          image: require("../assets/images/personnal-site.png"),
          title: "Site Portfolio",
          description:
            "Site portfolio personnel utilisant le framework Vue.js avec Vuetify",
          sourcelink: "https://github.com/ClementCatel/personnal-site",
          link: "#"
        },
        {
          image: require("../assets/images/resto-fontaines.png"),
          title: "Restaurant Les Fontaines",
          description:
            "Réalisé lors de mon stage chez Alexandre Maurouard Freelance, en collaboration avec Alexandre Maurouard et un autre stagiaire",
          sourcelink: null,
          link: "https://restaurant-les-fontaines.com/"
        },
        {
          image: require("../assets/images/nsc.png"),
          title: "Noël Sciage Carrotage",
          description:
            "Réalisé lors de mon stage chez Alexandre Maurouard Freelance, en collaboration avec Alexandre Maurouard et un autre stagiaire",
          sourcelink: null,
          link: "https://noelsciagecarottage.fr/"
        },
        {
          image: require("../assets/images/goodbail.png"),
          title: "Goodbail",
          description:
            "Goodbail est une application web permettant de générer des quittances de loyer personnalisées au format .pdf",
          sourcelink: "https://github.com/ClementCatel/quittance",
          link: "https://good-bail.com/"
        }
      ]
    };
  },

  methods: {
    goTo(dest) {
      this.$vuetify.goTo(dest, { duration: 800, easing: "easeInOutCubic" });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");

.v-toolbar__title {
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 26px;
  cursor: pointer;
}

.link {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}
.link:hover {
  color: black;
}

h2 {
  opacity: 0.8;
}
</style>
