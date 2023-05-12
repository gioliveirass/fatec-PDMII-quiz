// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const theme_data = flutter_sdk.src__material__theme_data;
  const colors = flutter_sdk.src__material__colors;
  const framework = flutter_sdk.src__widgets__framework;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const container = flutter_sdk.src__widgets__container;
  const alignment = flutter_sdk.src__painting__alignment;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_style = flutter_sdk.src__painting__text_style;
  const checkbox_list_tile = flutter_sdk.src__material__checkbox_list_tile;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const dialog = flutter_sdk.src__material__dialog;
  const text_button = flutter_sdk.src__material__text_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $add = dartx.add;
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $forEach = dartx.forEach;
  var $length = dartx.length;
  var $join = dartx.join;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    IdentityMapOfString$bool: () => (T.IdentityMapOfString$bool = dart.constFn(_js_helper.IdentityMap$(core.String, core.bool)))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    boolN: () => (T.boolN = dart.constFn(dart.nullable(core.bool)))(),
    boolNTovoid: () => (T.boolNTovoid = dart.constFn(dart.fnType(dart.void, [T.boolN()])))(),
    StringAndboolTovoid: () => (T.StringAndboolTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.bool])))(),
    ObjectN: () => (T.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    BuildContextToAlertDialog: () => (T.BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Questionário"
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Vizualizar alternativas selecionadas"
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "Alternativas selecionadas"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: null,
        [Text_textSpan]: null,
        [Text_data]: "OK"
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({title: "Questioário", debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue}), home: new main.Homepage.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var Widget_key = dart.privateName(framework, "Widget.key");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main.Homepage = class Homepage extends framework.StatelessWidget {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: C[1] || CT.C1}), body: new container.Container.new({alignment: alignment.Alignment.topLeft, child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([new main.CheckboxSample.new({checked: new (T.IdentityMapOfString$bool()).from(["Chocolate", false, "Morango", false, "Abacaxi", false]), question: "Selecione os sabores de bolo que você mais gosta:"}), new main.CheckboxSample.new({checked: new (T.IdentityMapOfString$bool()).from(["Amarelo", false, "Verde", false, "Roxo", false]), question: "Selecione quais cores você gosta"})])})})});
    }
    static ['_#new#tearOff']() {
      return new main.Homepage.new();
    }
  };
  (main.Homepage.new = function() {
    main.Homepage.__proto__.new.call(this);
    ;
  }).prototype = main.Homepage.prototype;
  dart.addTypeTests(main.Homepage);
  dart.addTypeCaches(main.Homepage);
  dart.setMethodSignature(main.Homepage, () => ({
    __proto__: dart.getMethods(main.Homepage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.Homepage, I[0]);
  var checked$ = dart.privateName(main, "CheckboxSample.checked");
  var question$ = dart.privateName(main, "CheckboxSample.question");
  main.CheckboxSample = class CheckboxSample extends framework.StatefulWidget {
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get question() {
      return this[question$];
    }
    set question(value) {
      super.question = value;
    }
    static ['_#new#tearOff'](opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let checked = opts && 'checked' in opts ? opts.checked : null;
      let question = opts && 'question' in opts ? opts.question : null;
      return new main.CheckboxSample.new({key: key, checked: checked, question: question});
    }
    createState() {
      return new main.CheckboxSampleState.new({checked: this.checked, question: this.question});
    }
  };
  (main.CheckboxSample.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let question = opts && 'question' in opts ? opts.question : null;
    this[checked$] = checked;
    this[question$] = question;
    main.CheckboxSample.__proto__.new.call(this, {key: key});
    ;
  }).prototype = main.CheckboxSample.prototype;
  dart.addTypeTests(main.CheckboxSample);
  dart.addTypeCaches(main.CheckboxSample);
  dart.setMethodSignature(main.CheckboxSample, () => ({
    __proto__: dart.getMethods(main.CheckboxSample.__proto__),
    createState: dart.fnType(main.CheckboxSampleState, [])
  }));
  dart.setLibraryUri(main.CheckboxSample, I[0]);
  dart.setFieldSignature(main.CheckboxSample, () => ({
    __proto__: dart.getFields(main.CheckboxSample.__proto__),
    checked: dart.finalFieldType(core.Map$(core.String, core.bool)),
    question: dart.finalFieldType(core.String)
  }));
  var checked$0 = dart.privateName(main, "CheckboxSampleState.checked");
  var question$0 = dart.privateName(main, "CheckboxSampleState.question");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  var _buildCheckboxes = dart.privateName(main, "_buildCheckboxes");
  var _showSelected = dart.privateName(main, "_showSelected");
  main.CheckboxSampleState = class CheckboxSampleState extends framework.State$(main.CheckboxSample) {
    get checked() {
      return this[checked$0];
    }
    set checked(value) {
      super.checked = value;
    }
    get question() {
      return this[question$0];
    }
    set question(value) {
      super.question = value;
    }
    static ['_#new#tearOff'](opts) {
      let checked = opts && 'checked' in opts ? opts.checked : null;
      let question = opts && 'question' in opts ? opts.question : null;
      return new main.CheckboxSampleState.new({checked: checked, question: question});
    }
    build(context) {
      return new basic.Padding.new({padding: C[2] || CT.C2, child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: this[_buildCheckboxes]()})});
    }
    [_buildCheckboxes]() {
      let checkboxes = T.JSArrayOfWidget().of([]);
      checkboxes[$add](new text.Text.new(this.question, {style: new text_style.TextStyle.new({fontSize: 24, color: colors.Colors.blue})}));
      this.checked[$forEach](dart.fn((key, value) => {
        checkboxes[$add](new checkbox_list_tile.CheckboxListTile.new({title: new text.Text.new(key), value: value, onChanged: dart.fn(newValue => {
            this.setState(dart.fn(() => {
              let t2, t1, t0, t2$, t1$, t0$, t2$0, t1$0, t0$0;
              newValue != null ? this.checked[$_get](key) === true ? (t0 = this.checked, t1 = key, t2 = false, t0[$_set](t1, t2), t2) : (t0$ = this.checked, t1$ = key, t2$ = true, t0$[$_set](t1$, t2$), t2$) : (t0$0 = this.checked, t1$0 = key, t2$0 = false, t0$0[$_set](t1$0, t2$0), t2$0);
            }, T.VoidTovoid()));
          }, T.boolNTovoid())}));
      }, T.StringAndboolTovoid()));
      checkboxes[$add](new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
          this[_showSelected]();
        }, T.VoidTovoid()), child: C[3] || CT.C3}));
      return checkboxes;
    }
    [_showSelected]() {
      let selected = T.JSArrayOfString().of([]);
      this.checked[$forEach](dart.fn((key, value) => {
        if (value) {
          selected[$add](key);
        }
      }, T.StringAndboolTovoid()));
      dialog.showDialog(dart.dynamic, {context: this.context, builder: dart.fn(context => new dialog.AlertDialog.new({title: C[4] || CT.C4, content: selected[$length] !== 0 ? new text.Text.new(selected[$join](", ")) : new text.Text.new("Nenhuma alternativa selecionada"), actions: T.JSArrayOfWidget().of([new text_button.TextButton.new({onPressed: dart.fn(() => {
                navigator.Navigator.of(context).pop(T.ObjectN());
              }, T.VoidTovoid()), child: C[5] || CT.C5})])}), T.BuildContextToAlertDialog())});
    }
  };
  (main.CheckboxSampleState.new = function(opts) {
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let question = opts && 'question' in opts ? opts.question : null;
    this[checked$0] = checked;
    this[question$0] = question;
    main.CheckboxSampleState.__proto__.new.call(this);
    ;
  }).prototype = main.CheckboxSampleState.prototype;
  dart.addTypeTests(main.CheckboxSampleState);
  dart.addTypeCaches(main.CheckboxSampleState);
  dart.setMethodSignature(main.CheckboxSampleState, () => ({
    __proto__: dart.getMethods(main.CheckboxSampleState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_buildCheckboxes]: dart.fnType(core.List$(framework.Widget), []),
    [_showSelected]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(main.CheckboxSampleState, I[0]);
  dart.setFieldSignature(main.CheckboxSampleState, () => ({
    __proto__: dart.getFields(main.CheckboxSampleState.__proto__),
    checked: dart.finalFieldType(core.Map$(core.String, core.bool)),
    question: dart.finalFieldType(core.String)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;UC/C4B;AACxB,YAAO,iCACE,2CACqB,cACrB,yCACiB,4BAEjB;IAEX;;;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;UAI8B;AACxB,YAAO,oCACG,sDAGF,wCACiB,oCACd,oCACsB,iCACjB,wBACR,sCACW,yCACP,aAAa,OACb,WAAW,OACX,WAAW,mBAEH,uDAEZ,sCACW,yCACP,WAAW,OACX,SAAS,OACT,QAAQ,mBAEA;IAMtB;;;;;;;;EACJ;;;;;;;;;;;IAG0B;;;;;;IACX;;;;;;;;;;;;;AAWwB,wDAC1B,wBACC;IACX;;;QAVQ;QACS;QACA;IADA;IACA;AAEd,uDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;IAUK;;;;;;IACX;;;;;;;;;;;UAKa;AACxB,YAAO,uDAEI,0CACkC,yCAC7B;IAGlB;;AAGe,uBAAa;AAOzB,MALD,AAAW,UAAD,OACR,kBACE,uBACO,wCAAoB,WAAoB;AAqBjD,MAjBF,AAAQ,uBAAQ,SAAQ,KAAU;AAgB/B,QAfD,AAAW,UAAD,OACR,oDACS,kBAAK,GAAG,UACR,KAAK,aAED,QAAE;AAOT,YANF,cAAS;;AAKiB,cAJxB,AAAS,QAAD,WACJ,AAAO,AAAM,oBAAL,GAAG,MAAK,QACP,KAAP,mBAAQ,GAAG,OAAI,OAAR,0BACA,MAAP,oBAAQ,GAAG,QAAI,MAAR,8BACF,OAAP,qBAAQ,GAAG,SAAI,OAAR;;;;AAcpB,MAPD,AAAW,UAAD,OACR,mDACa;AACM,UAAf;;AAKN,YAAO,WAAU;IACnB;;AAGe,qBAAW;AAMtB,MAJF,AAAQ,uBAAQ,SAAQ,KAAU;AAChC,YAAI,KAAK;AACU,UAAjB,AAAS,QAAD,OAAK,GAAG;;;AAsBnB,MAlBD,0CACW,uBACA,QAAc,WACd,2DAEI,AAAS,AAAO,QAAR,cAAW,IACxB,kBAAK,AAAS,QAAD,QAAM,SACnB,kBAAK,6CACA,wBACP,2CACa;AACkB,gBAAjB,AAAY,uBAAT,OAAO;;IAQlC;;;QAjFmC;QAAuB;IAAvB;IAAuB;AAA1D;;EAAoE;;;;;;;;;;;;;;;;AA3ErD,IAAf,eAAO;EACT;;ECGwB","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
