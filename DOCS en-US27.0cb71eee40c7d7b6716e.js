(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/form.md?vue&type=template&id=2685e68a

const formvue_type_template_id_2685e68a_hoisted_1 = {
  class: "content element-doc"
};

const formvue_type_template_id_2685e68a_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form ");

const formvue_type_template_id_2685e68a_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form consists of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and so on. With form, you can collect, verify and submit data.")], -1);

const formvue_type_template_id_2685e68a_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "The component has been upgraded with a flex layout to replace the old float layout.")], -1);

const _hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Basic form ");

const _hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("It includes all kinds of input items, such as "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "input"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "select"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "radio"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "checkbox"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("In each "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" component, you need a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" field to be the container of your input item.")])], -1);

const _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"form\" label-width=\"120px\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"form.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"form.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"Pick a date\"\n        v-model=\"form.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"Pick a time\"\n        v-model=\"form.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\">\n    <el-switch v-model=\"form.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"form.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"form.resource\">\n      <el-radio label=\"Sponsor\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input type=\"textarea\" v-model=\"form.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_9 = {
  class: "tip"
};

const _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("W3C");

const _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" regulates that");

const _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("blockquote", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("i", null, "When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.")])], -1);

const _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("To prevent this behavior, you can add "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "@submit.prevent"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" on "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "<el-form>"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".")], -1);

const _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Inline form ");

const _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "When the vertical space is limited and the form is relatively simple, you can put it in one line.", -1);

const _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Set the "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "inline"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" and the form will be inline.")])], -1);

const _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form :inline=\"true\" :model=\"formInline\" class=\"demo-form-inline\">\n  <el-form-item label=\"Approved by\">\n    <el-input v-model=\"formInline.user\" placeholder=\"Approved by\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"formInline.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"onSubmit\">Query</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        formInline: {\n          user: '',\n          region: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Alignment ");

const _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Depending on your design, there are several different ways to align your label element.", -1);

const _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("The "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-position"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute decides how labels align, it can be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" or "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "left"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". When set to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "top"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", labels will be placed at the top of the form field.")])], -1);

const _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-radio-group v-model=\"labelPosition\" size=\"small\">\n  <el-radio-button label=\"left\">Left</el-radio-button>\n  <el-radio-button label=\"right\">Right</el-radio-button>\n  <el-radio-button label=\"top\">Top</el-radio-button>\n</el-radio-group>\n<div style=\"margin: 20px;\"></div>\n<el-form\n  :label-position=\"labelPosition\"\n  label-width=\"100px\"\n  :model=\"formLabelAlign\"\n>\n  <el-form-item label=\"Name\">\n    <el-input v-model=\"formLabelAlign.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-input v-model=\"formLabelAlign.region\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity form\">\n    <el-input v-model=\"formLabelAlign.type\"></el-input>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        labelPosition: 'right',\n        formLabelAlign: {\n          name: '',\n          region: '',\n          type: '',\n        },\n      }\n    },\n  }\n</script>\n")], -1);

const _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Validation ");

const _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "Form component allows you to verify your data, helping you find and correct errors.", -1);

const _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Just add the ");

const _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "rules", -1);

const _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute for ");

const _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Form", -1);

const _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" component, pass validation rules, and set ");

const _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "prop", -1);

const _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute for ");

const _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "Form-Item", -1);

const _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" as a specific key that needs to be validated. See more information at ");

const _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"120px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"Activity name\" prop=\"name\">\n    <el-input v-model=\"ruleForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\" prop=\"region\">\n    <el-select v-model=\"ruleForm.region\" placeholder=\"Activity zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\" required>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date1\">\n        <el-date-picker\n          type=\"date\"\n          placeholder=\"Pick a date\"\n          v-model=\"ruleForm.date1\"\n          style=\"width: 100%;\"\n        ></el-date-picker>\n      </el-form-item>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-form-item prop=\"date2\">\n        <el-time-picker\n          placeholder=\"Pick a time\"\n          v-model=\"ruleForm.date2\"\n          style=\"width: 100%;\"\n        ></el-time-picker>\n      </el-form-item>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Instant delivery\" prop=\"delivery\">\n    <el-switch v-model=\"ruleForm.delivery\"></el-switch>\n  </el-form-item>\n  <el-form-item label=\"Activity type\" prop=\"type\">\n    <el-checkbox-group v-model=\"ruleForm.type\">\n      <el-checkbox label=\"Online activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Promotion activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Offline activities\" name=\"type\"></el-checkbox>\n      <el-checkbox label=\"Simple brand exposure\" name=\"type\"></el-checkbox>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\" prop=\"resource\">\n    <el-radio-group v-model=\"ruleForm.resource\">\n      <el-radio label=\"Sponsorship\"></el-radio>\n      <el-radio label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item label=\"Activity form\" prop=\"desc\">\n    <el-input type=\"textarea\" v-model=\"ruleForm.desc\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Create</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        ruleForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        rules: {\n          name: [\n            {\n              required: true,\n              message: 'Please input Activity name',\n              trigger: 'blur',\n            },\n            {\n              min: 3,\n              max: 5,\n              message: 'Length should be 3 to 5',\n              trigger: 'blur',\n            },\n          ],\n          region: [\n            {\n              required: true,\n              message: 'Please select Activity zone',\n              trigger: 'change',\n            },\n          ],\n          date1: [\n            {\n              type: 'date',\n              required: true,\n              message: 'Please pick a date',\n              trigger: 'change',\n            },\n          ],\n          date2: [\n            {\n              type: 'date',\n              required: true,\n              message: 'Please pick a time',\n              trigger: 'change',\n            },\n          ],\n          type: [\n            {\n              type: 'array',\n              required: true,\n              message: 'Please select at least one activity type',\n              trigger: 'change',\n            },\n          ],\n          resource: [\n            {\n              required: true,\n              message: 'Please select activity resource',\n              trigger: 'change',\n            },\n          ],\n          desc: [\n            {\n              required: true,\n              message: 'Please input activity form',\n              trigger: 'blur',\n            },\n          ],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom validation rules ");

const _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "This example shows how to customize your own validation rules to finish a two-factor password verification.", -1);

const _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Here we use "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "status-icon"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" to reflect validation result as an icon.")])], -1);

const _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"ruleForm\"\n  status-icon\n  :rules=\"rules\"\n  ref=\"ruleForm\"\n  label-width=\"120px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item label=\"Password\" prop=\"pass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.pass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"Confirm\" prop=\"checkPass\">\n    <el-input\n      type=\"password\"\n      v-model=\"ruleForm.checkPass\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item label=\"Age\" prop=\"age\">\n    <el-input v-model.number=\"ruleForm.age\"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('ruleForm')\">Submit</el-button>\n    <el-button @click=\"resetForm('ruleForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      var checkAge = (rule, value, callback) => {\n        if (!value) {\n          return callback(new Error('Please input the age'))\n        }\n        setTimeout(() => {\n          if (!Number.isInteger(value)) {\n            callback(new Error('Please input digits'))\n          } else {\n            if (value < 18) {\n              callback(new Error('Age must be greater than 18'))\n            } else {\n              callback()\n            }\n          }\n        }, 1000)\n      }\n      var validatePass = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password'))\n        } else {\n          if (this.ruleForm.checkPass !== '') {\n            this.$refs.ruleForm.validateField('checkPass')\n          }\n          callback()\n        }\n      }\n      var validatePass2 = (rule, value, callback) => {\n        if (value === '') {\n          callback(new Error('Please input the password again'))\n        } else if (value !== this.ruleForm.pass) {\n          callback(new Error(\"Two inputs don't match!\"))\n        } else {\n          callback()\n        }\n      }\n      return {\n        ruleForm: {\n          pass: '',\n          checkPass: '',\n          age: '',\n        },\n        rules: {\n          pass: [{ validator: validatePass, trigger: 'blur' }],\n          checkPass: [{ validator: validatePass2, trigger: 'blur' }],\n          age: [{ validator: checkAge, trigger: 'blur' }],\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_40 = {
  class: "tip"
};

const _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Custom validate callback function must be called. See more advanced usage at ");

const _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(".");

const _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Delete or add form items dynamically ");

const _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, "In addition to passing all validation rules at once on the form component, you can also pass the validation rules or delete rules on a single form field dynamically.")], -1);

const _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"dynamicValidateForm\"\n  ref=\"dynamicValidateForm\"\n  label-width=\"120px\"\n  class=\"demo-dynamic\"\n>\n  <el-form-item\n    prop=\"email\"\n    label=\"Email\"\n    :rules=\"[\n      { required: true, message: 'Please input email address', trigger: 'blur' },\n      { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }\n    ]\"\n  >\n    <el-input v-model=\"dynamicValidateForm.email\"></el-input>\n  </el-form-item>\n  <el-form-item\n    v-for=\"(domain, index) in dynamicValidateForm.domains\"\n    :label=\"'Domain' + index\"\n    :key=\"domain.key\"\n    :prop=\"'domains.' + index + '.value'\"\n    :rules=\"{\n      required: true, message: 'domain can not be null', trigger: 'blur'\n    }\"\n  >\n    <el-input v-model=\"domain.value\"></el-input\n    ><el-button @click.prevent=\"removeDomain(domain)\">Delete</el-button>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('dynamicValidateForm')\"\n      >Submit</el-button\n    >\n    <el-button @click=\"addDomain\">New domain</el-button>\n    <el-button @click=\"resetForm('dynamicValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        dynamicValidateForm: {\n          domains: [\n            {\n              key: 1,\n              value: '',\n            },\n          ],\n          email: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n      removeDomain(item) {\n        var index = this.dynamicValidateForm.domains.indexOf(item)\n        if (index !== -1) {\n          this.dynamicValidateForm.domains.splice(index, 1)\n        }\n      },\n      addDomain() {\n        this.dynamicValidateForm.domains.push({\n          key: Date.now(),\n          value: '',\n        })\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Number Validate ");

const _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Number Validate need a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, ".number"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" modifier added on the input "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "v-model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" binding，it's used to transform the string value to the number which is provided by Vuejs.")])], -1);

const _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form\n  :model=\"numberValidateForm\"\n  ref=\"numberValidateForm\"\n  label-width=\"100px\"\n  class=\"demo-ruleForm\"\n>\n  <el-form-item\n    label=\"age\"\n    prop=\"age\"\n    :rules=\"[\n      { required: true, message: 'age is required'},\n      { type: 'number', message: 'age must be a number'}\n    ]\"\n  >\n    <el-input\n      type=\"age\"\n      v-model.number=\"numberValidateForm.age\"\n      autocomplete=\"off\"\n    ></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type=\"primary\" @click=\"submitForm('numberValidateForm')\"\n      >Submit</el-button\n    >\n    <el-button @click=\"resetForm('numberValidateForm')\">Reset</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: '',\n        },\n      }\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert('submit!')\n          } else {\n            console.log('error submit!!')\n            return false\n          }\n        })\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields()\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("When an "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is nested in another "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(", its label width will be "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "0"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". You can set "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" on that "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "el-form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" if needed.")])], -1);

const _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Size control ");

const _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("All components in a Form inherit their "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute from that Form. Similarly, FormItem also has a "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" attribute.")], -1);

const _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Still you can fine tune each component's "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" if you don't want that component to inherit its size from From or FormIten.")])], -1);

const _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", {
  class: "html"
}, "<el-form ref=\"form\" :model=\"sizeForm\" label-width=\"120px\" size=\"mini\">\n  <el-form-item label=\"Activity name\">\n    <el-input v-model=\"sizeForm.name\"></el-input>\n  </el-form-item>\n  <el-form-item label=\"Activity zone\">\n    <el-select v-model=\"sizeForm.region\" placeholder=\"please select your zone\">\n      <el-option label=\"Zone one\" value=\"shanghai\"></el-option>\n      <el-option label=\"Zone two\" value=\"beijing\"></el-option>\n    </el-select>\n  </el-form-item>\n  <el-form-item label=\"Activity time\">\n    <el-col :span=\"11\">\n      <el-date-picker\n        type=\"date\"\n        placeholder=\"Pick a date\"\n        v-model=\"sizeForm.date1\"\n        style=\"width: 100%;\"\n      ></el-date-picker>\n    </el-col>\n    <el-col class=\"line\" :span=\"2\">-</el-col>\n    <el-col :span=\"11\">\n      <el-time-picker\n        placeholder=\"Pick a time\"\n        v-model=\"sizeForm.date2\"\n        style=\"width: 100%;\"\n      ></el-time-picker>\n    </el-col>\n  </el-form-item>\n  <el-form-item label=\"Activity type\">\n    <el-checkbox-group v-model=\"sizeForm.type\">\n      <el-checkbox-button\n        label=\"Online activities\"\n        name=\"type\"\n      ></el-checkbox-button>\n      <el-checkbox-button\n        label=\"Promotion activities\"\n        name=\"type\"\n      ></el-checkbox-button>\n    </el-checkbox-group>\n  </el-form-item>\n  <el-form-item label=\"Resources\">\n    <el-radio-group v-model=\"sizeForm.resource\" size=\"medium\">\n      <el-radio border label=\"Sponsor\"></el-radio>\n      <el-radio border label=\"Venue\"></el-radio>\n    </el-radio-group>\n  </el-form-item>\n  <el-form-item size=\"large\">\n    <el-button type=\"primary\" @click=\"onSubmit\">Create</el-button>\n    <el-button>Cancel</el-button>\n  </el-form-item>\n</el-form>\n\n<script>\n  export default {\n    data() {\n      return {\n        sizeForm: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n      }\n    },\n    methods: {\n      onSubmit() {\n        console.log('submit!')\n      },\n    },\n  }\n</script>\n")], -1);

const _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Attributes ");

const _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>model</td><td>data of form component</td><td>object</td><td>—</td><td>—</td></tr><tr><td>rules</td><td>validation rules of form</td><td>object</td><td>—</td><td>—</td></tr><tr><td>inline</td><td>whether the form is inline</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>label-position</td><td>position of label. If set to &#39;left&#39; or &#39;right&#39;, <code>label-width</code> prop is also required</td><td>string</td><td>left / right / top</td><td>right</td></tr><tr><td>label-width</td><td>width of label, e.g. &#39;50px&#39;. All its direct child form items will inherit this value. Width <code>auto</code> is supported.</td><td>string / number</td><td>—</td><td>—</td></tr><tr><td>label-suffix</td><td>suffix of the label</td><td>string</td><td>—</td><td>—</td></tr><tr><td>hide-required-asterisk</td><td>whether required fields should have a red asterisk (star) beside their labels</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-message</td><td>whether to show the error message</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>inline-message</td><td>whether to display the error message inline with the form item</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>status-icon</td><td>whether to display an icon indicating the validation result</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>validate-on-rule-change</td><td>whether to trigger validation when the <code>rules</code> prop is changed</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>control the size of components in this form</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>disabled</td><td>whether to disabled all components in this form. If set to true, it cannot be overridden by its inner components&#39; <code>disabled</code> prop</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>", 1);

const _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Methods ");

const _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>validate</td><td>validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted</td><td>Function(callback: Function(boolean, object))</td></tr><tr><td>validateField</td><td>validate one or several form items</td><td>Function(props: string | array, callback: Function(errorMessage: string))</td></tr><tr><td>resetFields</td><td>reset all the fields and remove validation result</td><td>—</td></tr><tr><td>scrollToField</td><td>Scroll to the specified form field</td><td>Function(prop: string)</td></tr><tr><td>clearValidate</td><td>clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields&#39; validation messages will be cleared</td><td>Function(props: string | array)</td></tr></tbody></table>", 1);

const _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form Events ");

const _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Event Name"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Parameters")])]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "validate"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "triggers after a form item is validated"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prop name of the form item being validated, whether validation is passed and the error message if not")])])], -1);

const _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Attributes ");

const _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Accepted Values"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("th", null, "Default")])], -1);

const _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "prop"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("a key of "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "model"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(". In the use of validate and resetFields method, the attribute is required")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("keys of model that passed to "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "form")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td")], -1);

const _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "label-width"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("width of label, e.g. '50px'. Width "), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("code", null, "auto"), /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])(" is supported.")]), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string / number"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "required"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether the field is required or not, will be determined by validation rules if omitted"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "rules", -1);

const _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("validation rules of form, see the following table, more advanced usage at ");

const _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("async-validator");

const _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "object / array", -1);

const _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_72 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—", -1);

const _hoisted_73 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "field error message, set its value and the field will validate error and show this message immediately"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_74 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "show-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "whether to show the error message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "true")], -1);

const _hoisted_75 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "inline-message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "inline style validate message"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "false")], -1);

const _hoisted_76 = /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "control the size of components in this form-item"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "medium / small / mini"), /*#__PURE__*/Object(vue_esm_browser_prod["createElementVNode"])("td", null, "—")], -1);

const _hoisted_77 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Rules ");

const _hoisted_78 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>trigger</td><td>how the validator is triggered</td><td>string</td><td>blur / change</td><td>—</td></tr></tbody></table>", 1);

const _hoisted_79 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Slots ");

const _hoisted_80 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>content of Form Item</td></tr><tr><td>label</td><td>Custom content to display on label. The scope parameter is { label }</td></tr><tr><td>error</td><td>Custom content to display validation message. The scope parameter is { error }</td></tr></tbody></table>", 1);

const _hoisted_81 = /*#__PURE__*/Object(vue_esm_browser_prod["createTextVNode"])("Form-Item Methods ");

const _hoisted_82 = /*#__PURE__*/Object(vue_esm_browser_prod["createStaticVNode"])("<table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>resetField</td><td>reset current field and remove validation result</td><td>—</td></tr><tr><td>clearValidate</td><td>remove validation status of the field</td><td>—</td></tr></tbody></table>", 1);

function formvue_type_template_id_2685e68a_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_app_link = Object(vue_esm_browser_prod["resolveComponent"])("app-link");

  const _component_app_heading = Object(vue_esm_browser_prod["resolveComponent"])("app-heading");

  const _component_element_demo0 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo0");

  const _component_demo_block = Object(vue_esm_browser_prod["resolveComponent"])("demo-block");

  const _component_element_demo1 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo1");

  const _component_element_demo2 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo2");

  const _component_element_demo3 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo3");

  const _component_element_demo4 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo4");

  const _component_element_demo5 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo5");

  const _component_element_demo6 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo6");

  const _component_element_demo7 = Object(vue_esm_browser_prod["resolveComponent"])("element-demo7");

  const _component_right_nav = Object(vue_esm_browser_prod["resolveComponent"])("right-nav");

  return Object(vue_esm_browser_prod["openBlock"])(), Object(vue_esm_browser_prod["createElementBlock"])("section", formvue_type_template_id_2685e68a_hoisted_1, [Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form",
    content: "Form",
    href: "#form",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [formvue_type_template_id_2685e68a_hoisted_2, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form"
    })]),
    _: 1
  }), formvue_type_template_id_2685e68a_hoisted_3, formvue_type_template_id_2685e68a_hoisted_4, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "basic-form",
    content: "Basic form",
    href: "#basic-form",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_5, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#basic-form"
    })]),
    _: 1
  }), _hoisted_6, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo0)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_8]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_7]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_9, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_10]),
    _: 1
  }), _hoisted_11]), _hoisted_12, _hoisted_13]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "inline-form",
    content: "Inline form",
    href: "#inline-form",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_14, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#inline-form"
    })]),
    _: 1
  }), _hoisted_15, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo1)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_17]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_16]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "alignment",
    content: "Alignment",
    href: "#alignment",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_18, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#alignment"
    })]),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo2)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_21]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_20]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "validation",
    content: "Validation",
    href: "#validation",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_22, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#validation"
    })]),
    _: 1
  }), _hoisted_23, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo3)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_35]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createElementVNode"])("div", null, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      href: "https://github.com/yiminghe/async-validator"
    }, {
      default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_33]),
      _: 1
    }), _hoisted_34])])]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "custom-validation-rules",
    content: "Custom validation rules",
    href: "#custom-validation-rules",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_36, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#custom-validation-rules"
    })]),
    _: 1
  }), _hoisted_37, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo4)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_39]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_38]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("div", _hoisted_40, [Object(vue_esm_browser_prod["createElementVNode"])("p", null, [_hoisted_41, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_42]),
    _: 1
  }), _hoisted_43])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "delete-or-add-form-items-dynamically",
    content: "Delete or add form items dynamically",
    href: "#delete-or-add-form-items-dynamically",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_44, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#delete-or-add-form-items-dynamically"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo5)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_46]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_45]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "number-validate",
    content: "Number Validate",
    href: "#number-validate",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_47, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#number-validate"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo6)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_49]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_48]),
    _: 1
  }), _hoisted_50, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "size-control",
    content: "Size control",
    href: "#size-control",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_51, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#size-control"
    })]),
    _: 1
  }), _hoisted_52, Object(vue_esm_browser_prod["createVNode"])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["withCtx"])(() => [Object(vue_esm_browser_prod["createVNode"])(_component_element_demo7)]),
    highlight: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_54]),
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_53]),
    _: 1
  }), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-attributes",
    content: "Form Attributes",
    href: "#form-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_55, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-attributes"
    })]),
    _: 1
  }), _hoisted_56, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-methods",
    content: "Form Methods",
    href: "#form-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_57, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-methods"
    })]),
    _: 1
  }), _hoisted_58, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-events",
    content: "Form Events",
    href: "#form-events",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_59, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-events"
    })]),
    _: 1
  }), _hoisted_60, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-attributes",
    content: "Form-Item Attributes",
    href: "#form-item-attributes",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_61, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-attributes"
    })]),
    _: 1
  }), Object(vue_esm_browser_prod["createElementVNode"])("table", null, [_hoisted_62, Object(vue_esm_browser_prod["createElementVNode"])("tbody", null, [_hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, Object(vue_esm_browser_prod["createElementVNode"])("tr", null, [_hoisted_67, Object(vue_esm_browser_prod["createElementVNode"])("td", null, [_hoisted_68, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
    href: "https://github.com/yiminghe/async-validator"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_69]),
    _: 1
  })]), _hoisted_70, _hoisted_71, _hoisted_72]), _hoisted_73, _hoisted_74, _hoisted_75, _hoisted_76])]), Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "rules",
    content: "Rules",
    href: "#rules",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_77, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#rules"
    })]),
    _: 1
  }), _hoisted_78, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-slots",
    content: "Form-Item Slots",
    href: "#form-item-slots",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_79, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-slots"
    })]),
    _: 1
  }), _hoisted_80, Object(vue_esm_browser_prod["createVNode"])(_component_app_heading, {
    id: "form-item-methods",
    content: "Form-Item Methods",
    href: "#form-item-methods",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["withCtx"])(() => [_hoisted_81, Object(vue_esm_browser_prod["createVNode"])(_component_app_link, {
      class: "header-anchor",
      href: "#form-item-methods"
    })]),
    _: 1
  }), _hoisted_82, Object(vue_esm_browser_prod["createVNode"])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/en-US/form.md?vue&type=template&id=2685e68a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--3-0!./website/md-loader!./website/docs/en-US/form.md?vue&type=script&lang=ts

/* harmony default export */ var formvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.form,
          "label-width": "120px"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.form.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.form.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.form.region = $event),
              placeholder: "please select your zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "Pick a date",
                modelValue: _ctx.form.date1,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.form.date1 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                placeholder: "Pick a time",
                modelValue: _ctx.form.date2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.form.date2 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Instant delivery"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.form.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.form.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.form.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.form.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Promotion activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Offline activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Simple brand exposure",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.form.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.form.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "Sponsor"
              }), _createVNode(_component_el_radio, {
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "textarea",
              modelValue: _ctx.form.desc,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.form.desc = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
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
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Query");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          inline: true,
          model: _ctx.formInline,
          class: "demo-form-inline"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Approved by"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formInline.user,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.formInline.user = $event),
              placeholder: "Approved by"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.formInline.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formInline.region = $event),
              placeholder: "Activity zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            formInline: {
              user: '',
              region: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo2": function () {
      const {
        createTextVNode: _createTextVNode,
        resolveComponent: _resolveComponent,
        withCtx: _withCtx,
        createVNode: _createVNode,
        createElementVNode: _createElementVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Left");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Right");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Top");

      const _hoisted_4 = /*#__PURE__*/_createElementVNode("div", {
        style: {
          "margin": "20px"
        }
      }, null, -1);

      function render(_ctx, _cache) {
        const _component_el_radio_button = _resolveComponent("el-radio-button");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.labelPosition,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.labelPosition = $event),
          size: "small"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_radio_button, {
            label: "left"
          }, {
            default: _withCtx(() => [_hoisted_1]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "right"
          }, {
            default: _withCtx(() => [_hoisted_2]),
            _: 1
          }), _createVNode(_component_el_radio_button, {
            label: "top"
          }, {
            default: _withCtx(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), _hoisted_4, _createVNode(_component_el_form, {
          "label-position": _ctx.labelPosition,
          "label-width": "100px",
          model: _ctx.formLabelAlign
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.name,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.formLabelAlign.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.region,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.formLabelAlign.region = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.formLabelAlign.type,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.formLabelAlign.type = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["label-position", "model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              region: '',
              type: ''
            }
          };
        }

      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo3": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_switch = _resolveComponent("el-switch");

        const _component_el_checkbox = _resolveComponent("el-checkbox");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name",
            prop: "name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.ruleForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.ruleForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone",
            prop: "region"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.ruleForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ruleForm.region = $event),
              placeholder: "Activity zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time",
            required: ""
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_form_item, {
                prop: "date1"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                  type: "date",
                  placeholder: "Pick a date",
                  modelValue: _ctx.ruleForm.date1,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.ruleForm.date1 = $event),
                  style: {
                    "width": "100%"
                  }
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_form_item, {
                prop: "date2"
              }, {
                default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                  placeholder: "Pick a time",
                  modelValue: _ctx.ruleForm.date2,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.ruleForm.date2 = $event),
                  style: {
                    "width": "100%"
                  }
                }, null, 8, ["modelValue"])]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Instant delivery",
            prop: "delivery"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_switch, {
              modelValue: _ctx.ruleForm.delivery,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.ruleForm.delivery = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type",
            prop: "type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.ruleForm.type,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.ruleForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Promotion activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Offline activities",
                name: "type"
              }), _createVNode(_component_el_checkbox, {
                label: "Simple brand exposure",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources",
            prop: "resource"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.ruleForm.resource,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => _ctx.ruleForm.resource = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                label: "Sponsorship"
              }), _createVNode(_component_el_radio, {
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity form",
            prop: "desc"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "textarea",
              modelValue: _ctx.ruleForm.desc,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => _ctx.ruleForm.desc = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[8] || (_cache[8] = $event => _ctx.submitForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[9] || (_cache[9] = $event => _ctx.resetForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      const democomponentExport = {
        data() {
          return {
            ruleForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            rules: {
              name: [{
                required: true,
                message: 'Please input Activity name',
                trigger: 'blur'
              }, {
                min: 3,
                max: 5,
                message: 'Length should be 3 to 5',
                trigger: 'blur'
              }],
              region: [{
                required: true,
                message: 'Please select Activity zone',
                trigger: 'change'
              }],
              date1: [{
                type: 'date',
                required: true,
                message: 'Please pick a date',
                trigger: 'change'
              }],
              date2: [{
                type: 'date',
                required: true,
                message: 'Please pick a time',
                trigger: 'change'
              }],
              type: [{
                type: 'array',
                required: true,
                message: 'Please select at least one activity type',
                trigger: 'change'
              }],
              resource: [{
                required: true,
                message: 'Please select activity resource',
                trigger: 'change'
              }],
              desc: [{
                required: true,
                message: 'Please input activity form',
                trigger: 'blur'
              }]
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo4": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.ruleForm,
          "status-icon": "",
          rules: _ctx.rules,
          ref: "ruleForm",
          "label-width": "120px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Password",
            prop: "pass"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "password",
              modelValue: _ctx.ruleForm.pass,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.ruleForm.pass = $event),
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Confirm",
            prop: "checkPass"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "password",
              modelValue: _ctx.ruleForm.checkPass,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.ruleForm.checkPass = $event),
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Age",
            prop: "age"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.ruleForm.age,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.ruleForm.age = $event),
              modelModifiers: {
                number: true
              }
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[3] || (_cache[3] = $event => _ctx.submitForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[4] || (_cache[4] = $event => _ctx.resetForm('ruleForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model", "rules"])]);
      }

      const democomponentExport = {
        data() {
          var checkAge = (rule, value, callback) => {
            if (!value) {
              return callback(new Error('Please input the age'));
            }

            setTimeout(() => {
              if (!Number.isInteger(value)) {
                callback(new Error('Please input digits'));
              } else {
                if (value < 18) {
                  callback(new Error('Age must be greater than 18'));
                } else {
                  callback();
                }
              }
            }, 1000);
          };

          var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the password'));
            } else {
              if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
              }

              callback();
            }
          };

          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('Please input the password again'));
            } else if (value !== this.ruleForm.pass) {
              callback(new Error("Two inputs don't match!"));
            } else {
              callback();
            }
          };

          return {
            ruleForm: {
              pass: '',
              checkPass: '',
              age: ''
            },
            rules: {
              pass: [{
                validator: validatePass,
                trigger: 'blur'
              }],
              checkPass: [{
                validator: validatePass2,
                trigger: 'blur'
              }],
              age: [{
                validator: checkAge,
                trigger: 'blur'
              }]
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo5": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        renderList: _renderList,
        Fragment: _Fragment,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock,
        createTextVNode: _createTextVNode,
        withModifiers: _withModifiers,
        createBlock: _createBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Delete");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("New domain");

      const _hoisted_4 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.dynamicValidateForm,
          ref: "dynamicValidateForm",
          "label-width": "120px",
          class: "demo-dynamic"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            prop: "email",
            label: "Email",
            rules: [{
              required: true,
              message: 'Please input email address',
              trigger: 'blur'
            }, {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change']
            }]
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.dynamicValidateForm.email,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.dynamicValidateForm.email = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(_ctx.dynamicValidateForm.domains, (domain, index) => {
            return _openBlock(), _createBlock(_component_el_form_item, {
              label: 'Domain' + index,
              key: domain.key,
              prop: 'domains.' + index + '.value',
              rules: {
                required: true,
                message: 'domain can not be null',
                trigger: 'blur'
              }
            }, {
              default: _withCtx(() => [_createVNode(_component_el_input, {
                modelValue: domain.value,
                "onUpdate:modelValue": $event => domain.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]), _createVNode(_component_el_button, {
                onClick: _withModifiers($event => _ctx.removeDomain(domain), ["prevent"])
              }, {
                default: _withCtx(() => [_hoisted_1]),
                _: 2
              }, 1032, ["onClick"])]),
              _: 2
            }, 1032, ["label", "prop"]);
          }), 128)), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.submitForm('dynamicValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _ctx.addDomain
            }, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = $event => _ctx.resetForm('dynamicValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_4]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            dynamicValidateForm: {
              domains: [{
                key: 1,
                value: ''
              }],
              email: ''
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          },

          removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);

            if (index !== -1) {
              this.dynamicValidateForm.domains.splice(index, 1);
            }
          },

          addDomain() {
            this.dynamicValidateForm.domains.push({
              key: Date.now(),
              value: ''
            });
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo6": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("Submit");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Reset");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          model: _ctx.numberValidateForm,
          ref: "numberValidateForm",
          "label-width": "100px",
          class: "demo-ruleForm"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "age",
            prop: "age",
            rules: [{
              required: true,
              message: 'age is required'
            }, {
              type: 'number',
              message: 'age must be a number'
            }]
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              type: "age",
              modelValue: _ctx.numberValidateForm.age,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.numberValidateForm.age = $event),
              modelModifiers: {
                number: true
              },
              autocomplete: "off"
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, null, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[1] || (_cache[1] = $event => _ctx.submitForm('numberValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = $event => _ctx.resetForm('numberValidateForm'))
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            numberValidateForm: {
              age: ''
            }
          };
        },

        methods: {
          submitForm(formName) {
            this.$refs[formName].validate(valid => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },

          resetForm(formName) {
            this.$refs[formName].resetFields();
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }(),
    "element-demo7": function () {
      const {
        resolveComponent: _resolveComponent,
        createVNode: _createVNode,
        withCtx: _withCtx,
        createTextVNode: _createTextVNode,
        openBlock: _openBlock,
        createElementBlock: _createElementBlock
      } = vue_esm_browser_prod;

      const _hoisted_1 = /*#__PURE__*/_createTextVNode("-");

      const _hoisted_2 = /*#__PURE__*/_createTextVNode("Create");

      const _hoisted_3 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        const _component_el_input = _resolveComponent("el-input");

        const _component_el_form_item = _resolveComponent("el-form-item");

        const _component_el_option = _resolveComponent("el-option");

        const _component_el_select = _resolveComponent("el-select");

        const _component_el_date_picker = _resolveComponent("el-date-picker");

        const _component_el_col = _resolveComponent("el-col");

        const _component_el_time_picker = _resolveComponent("el-time-picker");

        const _component_el_checkbox_button = _resolveComponent("el-checkbox-button");

        const _component_el_checkbox_group = _resolveComponent("el-checkbox-group");

        const _component_el_radio = _resolveComponent("el-radio");

        const _component_el_radio_group = _resolveComponent("el-radio-group");

        const _component_el_button = _resolveComponent("el-button");

        const _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createElementBlock("div", null, [_createVNode(_component_el_form, {
          ref: "form",
          model: _ctx.sizeForm,
          "label-width": "120px",
          size: "mini"
        }, {
          default: _withCtx(() => [_createVNode(_component_el_form_item, {
            label: "Activity name"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_input, {
              modelValue: _ctx.sizeForm.name,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => _ctx.sizeForm.name = $event)
            }, null, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity zone"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_select, {
              modelValue: _ctx.sizeForm.region,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => _ctx.sizeForm.region = $event),
              placeholder: "please select your zone"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_option, {
                label: "Zone one",
                value: "shanghai"
              }), _createVNode(_component_el_option, {
                label: "Zone two",
                value: "beijing"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity time"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_date_picker, {
                type: "date",
                placeholder: "Pick a date",
                modelValue: _ctx.sizeForm.date1,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => _ctx.sizeForm.date1 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            }), _createVNode(_component_el_col, {
              class: "line",
              span: 2
            }, {
              default: _withCtx(() => [_hoisted_1]),
              _: 1
            }), _createVNode(_component_el_col, {
              span: 11
            }, {
              default: _withCtx(() => [_createVNode(_component_el_time_picker, {
                placeholder: "Pick a time",
                modelValue: _ctx.sizeForm.date2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => _ctx.sizeForm.date2 = $event),
                style: {
                  "width": "100%"
                }
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Activity type"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_checkbox_group, {
              modelValue: _ctx.sizeForm.type,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => _ctx.sizeForm.type = $event)
            }, {
              default: _withCtx(() => [_createVNode(_component_el_checkbox_button, {
                label: "Online activities",
                name: "type"
              }), _createVNode(_component_el_checkbox_button, {
                label: "Promotion activities",
                name: "type"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            label: "Resources"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_radio_group, {
              modelValue: _ctx.sizeForm.resource,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => _ctx.sizeForm.resource = $event),
              size: "medium"
            }, {
              default: _withCtx(() => [_createVNode(_component_el_radio, {
                border: "",
                label: "Sponsor"
              }), _createVNode(_component_el_radio, {
                border: "",
                label: "Venue"
              })]),
              _: 1
            }, 8, ["modelValue"])]),
            _: 1
          }), _createVNode(_component_el_form_item, {
            size: "large"
          }, {
            default: _withCtx(() => [_createVNode(_component_el_button, {
              type: "primary",
              onClick: _ctx.onSubmit
            }, {
              default: _withCtx(() => [_hoisted_2]),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, null, {
              default: _withCtx(() => [_hoisted_3]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["model"])]);
      }

      const democomponentExport = {
        data() {
          return {
            sizeForm: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          };
        },

        methods: {
          onSubmit() {
            console.log('submit!');
          }

        }
      };
      return {
        render,
        ...democomponentExport
      };
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/en-US/form.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/en-US/form.md



formvue_type_script_lang_ts.render = formvue_type_template_id_2685e68a_render

/* harmony default export */ var en_US_form = __webpack_exports__["default"] = (formvue_type_script_lang_ts);

/***/ })

}]);