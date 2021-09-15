(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[299],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/zh-CN/custom-theme.md?vue&type=template&id=34be0580

const _hoisted_1 = {
  class: "content element-doc"
};

const _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("自定义主题 ");

const _hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Element Plus 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。我们提供了四种方法，可以进行不同程度的样式自定义。", -1);

const _hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("仅替换主题色 ");

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果仅希望更换 Element Plus 的主题色，推荐使用");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在线主题生成工具");

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。Element Plus 默认的主题色是鲜艳、友好的蓝色。通过替换主题色，能够让 Element Plus 的视觉更加符合具体项目的定位。");

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」和「搭配插件按需引入组件主题」部分）。", -1);

const _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("在项目中改变 SCSS 变量 ");

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>Element Plus 的 theme-chalk 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Element Plus 的样式变量。新建一个样式文件，例如 <code>element-variables.scss</code>，写入以下内容：</p><pre class=\"example-code\"><code class=\"hljs language-html\">/* 改变主题色变量 */ $--color-primary: teal; /* 改变 icon 字体路径变量，必需 */\n$--font-path: &quot;~element-plus/theme-chalk/fonts&quot;; @import\n&quot;~element-plus/packages/theme-chalk/src/index&quot;;\n</code><span class=\"lang-mark\">html</span></pre><p>之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Element Plus 编译好的 CSS 文件）：</p><pre class=\"example-code\"><code class=\"hljs language-JS\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;./element-variables.scss&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\n</code><span class=\"lang-mark\">JS</span></pre><div class=\"tip\"><p>需要注意的是，覆盖字体路径变量是必需的，将其赋值为 Element Plus 中 icon 图标所在的相对路径即可。</p></div>", 5);

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("命令行主题工具 ");

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "如果你的项目没有使用 SCSS，那么可以使用命令行主题工具进行深层次的主题定制：", -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "安装工具", -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">npm i element-theme -g\n</code><span class=\"lang-mark\">sh</span></pre><p>安装白垩主题，可以从 npm 安装或者从 GitHub 拉取最新代码。</p><pre class=\"example-code\"><code class=\"hljs language-shell\"><span class=\"hljs-meta\">#</span><span class=\"bash\"> 从 npm</span>\nnpm i element-theme-chalk -D\n<span class=\"hljs-meta\">\n#</span><span class=\"bash\"> 从 GitHub</span>\nnpm i https://github.com/ElementUI/theme-chalk -D\n</code><span class=\"lang-mark\">sh</span></pre>", 4);

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "初始化变量文件", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>主题生成工具安装成功后，如果全局安装可以在命令行里通过 <code>et</code> 调用工具，如果安装在当前目录下，需要通过 <code>node_modules/.bin/et</code> 访问到命令。执行 <code>-i</code> 初始化变量文件。默认输出到 <code>element-variables.scss</code>，当然你可以传参数指定文件输出目录。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et -i [可以自定义变量文件]\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ Generator variables file</span>\n</code><span class=\"lang-mark\">sh</span></pre><p>如果使用默认配置，执行后当前目录会有一个 <code>element-variables.scss</code> 文件。内部包含了主题所用到的所有变量，它们使用 SCSS 的格式定义。大致结构如下：</p><pre class=\"example-code\"><code class=\"hljs language-css\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-id\">#409EFF</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-primary-light-1</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 10%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 53a8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-2</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 20%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 66b1ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-3</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 30%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 79bbff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-4</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 40%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* 8cc5ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-5</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 50%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* a0cfff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-6</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 60%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* b3d8ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-7</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 70%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* c6e2ff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-8</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 80%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* d9ecff */</span>\n$<span class=\"hljs-selector-tag\">--color-primary-light-9</span>: <span class=\"hljs-selector-tag\">mix</span>($<span class=\"hljs-selector-tag\">--color-white</span>, $<span class=\"hljs-selector-tag\">--color-primary</span>, 90%) !<span class=\"hljs-selector-tag\">default</span>; <span class=\"hljs-comment\">/* ecf5ff */</span>\n\n$<span class=\"hljs-selector-tag\">--color-success</span>: <span class=\"hljs-selector-id\">#67c23a</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-warning</span>: <span class=\"hljs-selector-id\">#e6a23c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-danger</span>: <span class=\"hljs-selector-id\">#f56c6c</span> !<span class=\"hljs-selector-tag\">default</span>;\n$<span class=\"hljs-selector-tag\">--color-info</span>: <span class=\"hljs-selector-id\">#909399</span> !<span class=\"hljs-selector-tag\">default</span>;\n\n...\n</code><span class=\"lang-mark\">css</span></pre>", 4);

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "修改变量", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>直接编辑 <code>element-variables.scss</code> 文件，例如修改主题色为红色。</p><pre class=\"example-code\"><code class=\"hljs language-CSS\">$<span class=\"hljs-selector-tag\">--color-primary</span>: <span class=\"hljs-selector-tag\">red</span>;\n</code><span class=\"lang-mark\">CSS</span></pre>", 2);

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "编译主题", -1);

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>保存文件后，到命令行里执行 <code>et</code> 编译主题，如果你想启用 <code>watch</code> 模式，实时编译主题，增加 <code>-w</code> 参数；如果你在初始化时指定了自定义变量文件，则需要增加 <code>-c</code> 参数，并带上你的变量文件名。默认情况下编译的主题目录是放在 <code>./theme</code> 下，你可以通过 <code>-o</code> 参数指定打包目录。</p><pre class=\"example-code\"><code class=\"hljs language-shell\">et\n<span class=\"hljs-meta\">\n&gt;</span><span class=\"bash\"> ✔ build theme font</span>\n<span class=\"hljs-meta\">&gt;</span><span class=\"bash\"> ✔ build element theme</span>\n</code><span class=\"lang-mark\">sh</span></pre>", 2);

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("使用自定义主题 ");

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "引入自定义主题", -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>和引入默认主题一样，在代码里直接引用「在线主题编辑器」或「命令行工具」生成的主题的 <code>theme/index.css</code> 文件即可。</p><pre class=\"example-code\"><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;../theme/index.css&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n\ncreateApp(App).use(ElementPlus)\n</code><span class=\"lang-mark\">js</span></pre>", 2);

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("strong", null, "搭配插件按需引入组件主题", -1);

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])();

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<p>如果是搭配 <code>babel-plugin-component</code> 一起使用，只需要修改 <code>.babelrc</code> 的配置，指定 <code>styleLibraryName</code> 路径为自定义主题相对于 <code>.babelrc</code> 的路径，注意要加 <code>~</code>。</p><pre class=\"example-code\"><code class=\"hljs language-json\">{\n  <span class=\"hljs-attr\">&quot;plugins&quot;</span>: [\n    [\n      <span class=\"hljs-string\">&quot;component&quot;</span>,\n      {\n        <span class=\"hljs-attr\">&quot;libraryName&quot;</span>: <span class=\"hljs-string\">&quot;element-plus&quot;</span>,\n        <span class=\"hljs-attr\">&quot;styleLibraryName&quot;</span>: <span class=\"hljs-string\">&quot;~theme&quot;</span>\n      }\n    ]\n  ]\n}\n</code><span class=\"lang-mark\">json</span></pre>", 2);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("如果不清楚 ");

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "babel-plugin-component", -1);

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 是什么，请阅读 ");

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("a", {
  href: "./#/zh-CN/component/quickstart"
}, "快速上手", -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 一节。更多 ");

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "element-theme", -1);

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" 用法请参考");

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("项目仓库");

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("。");

function render(_ctx, _cache) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", _hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zi-ding-yi-zhu-ti",
    content: "自定义主题",
    href: "#zi-ding-yi-zhu-ti",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zi-ding-yi-zhu-ti"
    })]),
    _: 1
  }), _hoisted_3, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "jin-ti-huan-zhu-ti-se",
    content: "仅替换主题色",
    href: "#jin-ti-huan-zhu-ti-se",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#jin-ti-huan-zhu-ti-se"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://element-plus.github.io/theme-chalk-preview"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_6]),
    _: 1
  }), _hoisted_7]), _hoisted_8, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "zai-xiang-mu-zhong-gai-bian-scss-bian-liang",
    content: "在项目中改变 SCSS 变量",
    href: "#zai-xiang-mu-zhong-gai-bian-scss-bian-liang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_9, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#zai-xiang-mu-zhong-gai-bian-scss-bian-liang"
    })]),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "ming-ling-xing-zhu-ti-gong-ju",
    content: "命令行主题工具",
    href: "#ming-ling-xing-zhu-ti-gong-ju",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#ming-ling-xing-zhu-ti-gong-ju"
    })]),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "an-zhuang-gong-ju",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17, _hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#an-zhuang-gong-ju"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "chu-shi-hua-bian-liang-wen-jian",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_23, _hoisted_24, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#chu-shi-hua-bian-liang-wen-jian"
    })]),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "xiu-gai-bian-liang",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_29, _hoisted_30, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#xiu-gai-bian-liang"
    })]),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "bian-yi-zhu-ti",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33, _hoisted_34, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#bian-yi-zhu-ti"
    })]),
    _: 1
  }), _hoisted_35, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "shi-yong-zi-ding-yi-zhu-ti",
    content: "使用自定义主题",
    href: "#shi-yong-zi-ding-yi-zhu-ti",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#shi-yong-zi-ding-yi-zhu-ti"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "yin-ru-zi-ding-yi-zhu-ti",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38, _hoisted_39, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#yin-ru-zi-ding-yi-zhu-ti"
    })]),
    _: 1
  }), _hoisted_40, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "da-pei-cha-jian-an-xu-yin-ru-zu-jian-zhu-ti",
    content: "",
    href: "",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42, _hoisted_43, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#da-pei-cha-jian-an-xu-yin-ru-zu-jian-zhu-ti"
    })]),
    _: 1
  }), _hoisted_44, Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/ElementUI/element-theme"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), _hoisted_54]), Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/zh-CN/custom-theme.md?vue&type=template&id=34be0580

// CONCATENATED MODULE: ./website/docs/zh-CN/custom-theme.md

const script = {}
script.render = render

/* harmony default export */ var custom_theme = __webpack_exports__["default"] = (script);

/***/ })

}]);