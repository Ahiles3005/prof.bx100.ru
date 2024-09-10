<template>
  <div class="mobile-main-menu__icon">
    <img :src="src ? src : `${SITE_TEMPLATE_PATH}/images/demo/iphone.svg`"
         v-if="currentLevelDepth"
         :alt="`Изображение раздела «${ name }»`"
         class="mobile-main-menu__icon"
         loading="lazy"
         width="24" height="24">
    <!-- На первом уровне показываем статические svg иконки -->
    <svg v-else width="24" height="24">
      <use :xlink:href="getIconFromLabel(name)"></use>
    </svg>
  </div>
</template>

<script>
const {SITE_TEMPLATE_PATH} = window.bxConstants;

const sectionNameToIcon = {
  "Каталог": "icon_burger",
  "Избранное": "icon_like",
  "Сравнение": "icon_compare",
  "Корзина": "icon_cart",
  "Назад": "icon_go-back",
};

export default {
  name: `ItemIcon`,
  data() {
    return {
      SITE_TEMPLATE_PATH
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    currentLevelDepth: {
      type: Number,
    },
    src: {
      type: String,
    },
  },
  methods: {
    getIconFromLabel(label) {
      return `#${sectionNameToIcon[label]}`;
    }
  },
};
</script>
