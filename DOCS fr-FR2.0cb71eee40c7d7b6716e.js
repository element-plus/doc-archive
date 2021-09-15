(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/avatar.md?vue&type=template&id=92bbb8ae

const avatarvue_type_template_id_92bbb8ae_hoisted_1 = {
  class: "content element-doc"
};

const avatarvue_type_template_id_92bbb8ae_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Avatar avatar ");

const avatarvue_type_template_id_92bbb8ae_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Avatars can be used to represent people or objects. It supports images, Icons, or characters. Les avatars peuvent être utilisés pour représenter des personnes ou des objets. Les images, icônes et les caractères sont supportés.", -1);

const avatarvue_type_template_id_92bbb8ae_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic ");

const avatarvue_type_template_id_92bbb8ae_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("utilisez les prop "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "shape"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" et"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, " size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" pour définir la forme et la taille de l'avatar")], -1);

const avatarvue_type_template_id_92bbb8ae_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <el-row class=\"demo-avatar demo-basic\">\n    <el-col :span=\"12\">\n      <div class=\"sub-title\">cercle</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\">\n          <el-avatar :size=\"50\" :src=\"circleUrl\"></el-avatar>\n        </div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar :size=\"size\" :src=\"circleUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>\n    <el-col :span=\"12\">\n      <div class=\"sub-title\">carré</div>\n      <div class=\"demo-basic--circle\">\n        <div class=\"block\">\n          <el-avatar shape=\"square\" :size=\"50\" :src=\"squareUrl\"></el-avatar>\n        </div>\n        <div class=\"block\" v-for=\"size in sizeList\" :key=\"size\">\n          <el-avatar shape=\"square\" :size=\"size\" :src=\"squareUrl\"></el-avatar>\n        </div>\n      </div>\n    </el-col>\n  </el-row>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        circleUrl:\n          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',\n        squareUrl:\n          'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',\n        sizeList: ['large', 'medium', 'small'],\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',\n        squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',\n        sizeList: ['large', 'medium', 'small'],\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Types ");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Les images, icônes et les caractères sont supportés.", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <div>\n      <el-avatar icon=\"el-icon-user-solid\"></el-avatar>\n    </div>\n    <div>\n      <el-avatar\n        src=\"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png\"\n      ></el-avatar>\n    </div>\n    <div>\n      <el-avatar> user </el-avatar>\n    </div>\n  </div>\n</template>\n")], -1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("fallback en cas d'erreur de chargement d'image ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "fallback en cas d'erreur de chargement d'image", -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-type\">\n    <el-avatar :size=\"60\" src=\"https://empty\" @error=\"errorHandler\">\n      <img\n        src=\"https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png\"\n      />\n    </el-avatar>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      errorHandler() {\n        return true\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n  import { defineComponent } from 'vue'\n  export default defineComponent({\n    setup() {\n      const errorHandler = () => true;\n      return {\n        errorHandler,\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Comment l'image s'adapte à son conteneur ");

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Défini comment l'image s'adapte à son conteneur, pareil que ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("object-fit");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<template>\n  <div class=\"demo-fit\">\n    <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n      <span class=\"title\">{{ fit }}</span>\n      <el-avatar shape=\"square\" :size=\"100\" :fit=\"fit\" :src=\"url\"></el-avatar>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n      }\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, reactive, toRefs } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n</setup>\n-->\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>Défini le type de représentation sur Icon, plus d’informations sur le composant Icon</td><td>string</td><td></td><td></td></tr><tr><td>size</td><td>Défini la taille de l&#39;avatar</td><td>number/string</td><td>number / large / medium / small</td><td>large</td></tr><tr><td>shape</td><td>Défini la forme de l&#39;avatar</td><td>string</td><td>circle / square</td><td>circle</td></tr><tr><td>src</td><td>L&#39;adresse de l&#39;image pour un avatar image</td><td>string</td><td></td><td></td></tr><tr><td>srcSet</td><td>Une liste d&#39;un ou plusieurs string séparés par des virgules indiquant un ensemble de sources d&#39;images possibles que le user agent peut utiliser</td><td>string</td><td></td><td></td></tr><tr><td>alt</td><td>Cet attribut définit une description textuelle alternative de l&#39;image</td><td>string</td><td></td><td></td></tr><tr><td>fit</td><td>Défini comment l&#39;image s&#39;adapte à son conteneur</td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>cover</td></tr></tbody></table>", 1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Évènements ");

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Paramètres")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "handler en cas d'erreur de chargement de l'image, renvoie false pour éviter le fallback par défaut"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "(e: Event)")])])], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slot ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "| Slot Name | Description | | default | personnalise le contenu de l'avatar |", -1);

function avatarvue_type_template_id_92bbb8ae_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", avatarvue_type_template_id_92bbb8ae_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "avatar-avatar",
    content: "Avatar avatar",
    href: "#avatar-avatar",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_92bbb8ae_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#avatar-avatar"
    })]),
    _: 1
  }), avatarvue_type_template_id_92bbb8ae_hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic",
    content: "Basic",
    href: "#basic",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_92bbb8ae_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic"
    })]),
    _: 1
  }), avatarvue_type_template_id_92bbb8ae_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [avatarvue_type_template_id_92bbb8ae_hoisted_6]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "types",
    content: "Types",
    href: "#types",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#types"
    })]),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "fallback-en-cas-d-erreur-de-chargement-d-image",
    content: "fallback en cas d'erreur de chargement d'image",
    href: "#fallback-en-cas-d-erreur-de-chargement-d-image",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#fallback-en-cas-d-erreur-de-chargement-d-image"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "comment-l-image-s-adapte-a-son-conteneur",
    content: "Comment l'image s'adapte à son conteneur",
    href: "#comment-l-image-s-adapte-a-son-conteneur",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#comment-l-image-s-adapte-a-son-conteneur"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15]),
    _: 1
  }), _hoisted_16]), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "evenements",
    content: "Évènements",
    href: "#evenements",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#evenements"
    })]),
    _: 1
  }), _hoisted_21, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slot",
    content: "Slot",
    href: "#slot",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slot"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md?vue&type=template&id=92bbb8ae

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/fr-FR/avatar.md?vue&type=script&lang=ts

/* harmony default export */ var avatarvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        withCtx: _withCtx
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "cercle", -1);

      const _hoisted_2 = {
        class: "demo-basic--circle"
      };
      const _hoisted_3 = {
        class: "block"
      };

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", {
        class: "sub-title"
      }, "carré", -1);

      const _hoisted_5 = {
        class: "demo-basic--circle"
      };
      const _hoisted_6 = {
        class: "block"
      };

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_row = _resolveComponent("el-row");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_row, {
          class: "demo-avatar demo-basic"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_1, _createElementVNode("div", _hoisted_2, [_createElementVNode("div", _hoisted_3, [_createVNode(_component_el_avatar, {
              size: 50,
              src: _ctx.circleUrl
            }, null, 8, ["src"])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.sizeList, size => {
              return _openBlock(), _createElementBlock("div", {
                class: "block",
                key: size
              }, [_createVNode(_component_el_avatar, {
                size: size,
                src: _ctx.circleUrl
              }, null, 8, ["size", "src"])]);
            }), 128))])]),
            _: 1
          }), _createVNode(_component_el_col, {
            span: 12
          }, {
            default: _withCtx(() => [_hoisted_4, _createElementVNode("div", _hoisted_5, [_createElementVNode("div", _hoisted_6, [_createVNode(_component_el_avatar, {
              shape: "square",
              size: 50,
              src: _ctx.squareUrl
            }, null, 8, ["src"])]), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.sizeList, size => {
              return _openBlock(), _createElementBlock("div", {
                class: "block",
                key: size
              }, [_createVNode(_component_el_avatar, {
                shape: "square",
                size: size,
                src: _ctx.squareUrl
              }, null, 8, ["size", "src"])]);
            }), 128))])]),
            _: 1
          })]),
          _: 1
        })]);
      }

      const democomponentExport = {
        data() {
          return {
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
            sizeList: ['large', 'medium', 'small']
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo1": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        createTextVNode: _createTextVNode,
        withCtx: _withCtx,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-type"
      };

      const _hoisted_2 = /*#__PURE__*/_createTextVNode(" user ");

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createElementVNode("div", null, [_createVNode(_component_el_avatar, {
          icon: "el-icon-user-solid"
        })]), _createElementVNode("div", null, [_createVNode(_component_el_avatar, {
          src: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        })]), _createElementVNode("div", null, [_createVNode(_component_el_avatar, null, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        })])])]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-type"
      };

      const _hoisted_2 = /*#__PURE__*/_createElementVNode("img", {
        src: "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [_createVNode(_component_el_avatar, {
          size: 60,
          src: "https://empty",
          onError: _ctx.errorHandler
        }, {
          default: _withCtx(() => [_hoisted_2]),
          _: 1
        }, 8, ["onError"])])]);
      }

      const democomponentExport = {
        methods: {
          errorHandler() {
            return true;
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        toDisplayString: _toDisplayString,
        createElementVNode: _createElementVNode,
        resolveComponent: _resolveComponent,
        createVNode: _createVNode
      } = vue_esm_browser_prod;
      const _hoisted_1 = {
        class: "demo-fit"
      };
      const _hoisted_2 = {
        class: "title"
      };

      function render(_ctx, _cache) {
        const _component_el_avatar = _resolveComponent("el-avatar");

        return _openBlock(), _createElementBlock("div", null, [_createElementVNode("div", _hoisted_1, [(_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.fits, fit => {
          return _openBlock(), _createElementBlock("div", {
            class: "block",
            key: fit
          }, [_createElementVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_el_avatar, {
            shape: "square",
            size: 100,
            fit: fit,
            src: _ctx.url
          }, null, 8, ["fit", "src"])]);
        }), 128))])]);
      }

      const democomponentExport = {
        data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/avatar.md



avatarvue_type_script_lang_ts.render = avatarvue_type_template_id_92bbb8ae_render

/* harmony default export */ var avatar = __webpack_exports__["default"] = (avatarvue_type_script_lang_ts);

/***/ })

}]);