(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[255],{

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/page-header.md?vue&type=template&id=1310f6f9

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("PageHeader ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "If path of the page is simple, it is recommended to use PageHeader instead of the Breadcrumb.", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic usage ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-page-header @back=\"goBack\" content=\"detail\"> </el-page-header>\n\n<script>\n  export default {\n    methods: {\n      goBack() {\n        console.log('go back')\n      },\n    },\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const goBack = () => {\n        console.log('go back');\n      };\n\n      return {\n        goBack,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom icon ");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-page-header icon=\"el-icon-arrow-left\" content=\"detail\"></el-page-header>\n")], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Attributes ");

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>icon</td><td>icon</td><td>string</td><td>—</td><td>el-icon-back</td></tr><tr><td>title</td><td>main title</td><td>string</td><td>—</td><td>Back</td></tr><tr><td>content</td><td>content</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Events ");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "back"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers when right side is clicked"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")])])], -1);

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Slots ");

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>custom icon</td></tr><tr><td>title</td><td>title content</td></tr><tr><td>content</td><td>content</td></tr></tbody></table>", 1);

function page_headervue_type_template_id_1310f6f9_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "pageheader",
    content: "PageHeader",
    href: "#pageheader",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#pageheader"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-usage",
    content: "Basic usage",
    href: "#basic-usage",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-usage"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-icon",
    content: "Custom icon",
    href: "#custom-icon",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-icon"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "attributes",
    content: "Attributes",
    href: "#attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#attributes"
    })]),
    _: 1
  }), _hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "events",
    content: "Events",
    href: "#events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#events"
    })]),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "slots",
    content: "Slots",
    href: "#slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_12, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#slots"
    })]),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/page-header.md?vue&type=template&id=1310f6f9

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/jp/page-header.md?vue&type=script&lang=ts

/* harmony default export */ var page_headervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_page_header = _resolveComponent("el-page-header");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_page_header, {
          onBack: _ctx.goBack,
          content: "detail"
        }, null, 8, ["onBack"])]);
      }

      const democomponentExport = {
        methods: {
          goBack() {
            console.log('go back');
          }

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
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      function render(_ctx, _cache) {
        const _component_el_page_header = _resolveComponent("el-page-header");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_page_header, {
          icon: "el-icon-arrow-left",
          content: "detail"
        })]);
      }

      const democomponentExport = {};
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/page-header.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/page-header.md



page_headervue_type_script_lang_ts.render = page_headervue_type_template_id_1310f6f9_render

/* harmony default export */ var page_header = __webpack_exports__["default"] = (page_headervue_type_script_lang_ts);

/***/ })

}]);