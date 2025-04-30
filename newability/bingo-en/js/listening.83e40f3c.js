(function (t) {
  function s(s) {
    for (
      var a, r, c = s[0], o = s[1], l = s[2], d = 0, p = [];
      d < c.length;
      d++
    )
      (r = c[d]),
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && p.push(i[r][0]),
        (i[r] = 0);
    for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    u && u(s);
    while (p.length) p.shift()();
    return n.push.apply(n, l || []), e();
  }
  function e() {
    for (var t, s = 0; s < n.length; s++) {
      for (var e = n[s], a = !0, c = 1; c < e.length; c++) {
        var o = e[c];
        0 !== i[o] && (a = !1);
      }
      a && (n.splice(s--, 1), (t = r((r.s = e[0]))));
    }
    return t;
  }
  var a = {},
    i = { listening: 0 },
    n = [];
  function r(s) {
    if (a[s]) return a[s].exports;
    var e = (a[s] = { i: s, l: !1, exports: {} });
    return t[s].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function (t, s, e) {
      r.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: e });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, s) {
      if ((1 & s && (t = r(t)), 8 & s)) return t;
      if (4 & s && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (r.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            e,
            a,
            function (s) {
              return t[s];
            }.bind(null, a)
          );
      return e;
    }),
    (r.n = function (t) {
      var s =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(s, "a", s), s;
    }),
    (r.o = function (t, s) {
      return Object.prototype.hasOwnProperty.call(t, s);
    }),
    (r.p = "");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = c.push.bind(c);
  (c.push = s), (c = c.slice());
  for (var l = 0; l < c.length; l++) s(c[l]);
  var u = o;
  n.push([1, "chunk-vendors", "chunk-common"]), e();
})({
  1: function (t, s, e) {
    t.exports = e("f7fb");
  },
  "2ba9": function (t, s, e) {
    "use strict";
    var a = e("5148"),
      i = e.n(a);
    i.a;
  },
  "36d3": function (t, s, e) {},
  5148: function (t, s, e) {},
  ae12: function (t, s, e) {
    "use strict";
    var a = e("f421"),
      i = e.n(a);
    i.a;
  },
  f421: function (t, s, e) {},
  f7fb: function (t, s, e) {
    "use strict";
    e.r(s);
    e("9a83");
    var a = e("f564"),
      i = (e("e566"), e("5d26")),
      n = (e("5fe4"), e("8ad4")),
      r = (e("e17f"), e("2241")),
      c = (e("4ddd"), e("9f14")),
      o = (e("a44c"), e("e27c")),
      l = (e("3c32"), e("417e")),
      u = (e("a909"), e("3acc")),
      d = (e("e7e5"), e("d399")),
      p = (e("66b9"), e("b650")),
      m = (e("e260"), e("e6cf"), e("cca6"), e("a79d"), e("2b0e")),
      h = e("3dfd"),
      f = e("8c4f"),
      v = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [
          e(
            "div",
            { staticClass: "panel-1" },
            [
              e(
                "div",
                { staticClass: "header d-flex al-c pos-s top-0 z-100" },
                [
                  t._m(0),
                  t.isBegin
                    ? e(
                        "div",
                        { staticClass: "ml-auto d-flex al-c act-wrap" },
                        [
                          t.isFinish
                            ? e(
                                "span",
                                {
                                  staticClass: "mr-10",
                                  on: {
                                    click: function (s) {
                                      return t.onSubmit(1);
                                    },
                                  },
                                },
                                [t._v("Try Again")]
                              )
                            : t._e(),
                          e(
                            "span",
                            { staticClass: "mr-10", on: { click: t.onSubmit } },
                            [t._v(" Next ")]
                          ),
                        ]
                      )
                    : t._e(),
                  e(
                    "div",
                    { staticClass: "pos-a top-0 right-0 pd-5" },
                    [
                      e("van-icon", {
                        staticClass: "op-touch",
                        attrs: { name: "close", size: "20" },
                        on: { click: t.onExit },
                      }),
                    ],
                    1
                  ),
                ]
              ),
              e(
                "el-row",
                [
                  e(
                    "el-col",
                    { staticClass: "left-part", attrs: { xs: 24, sm: 7 } },
                    [
                      t.curItem
                        ? e("div", { staticClass: "pd-20" }, [
                            e(
                              "div",
                              { staticClass: "bdb-dashed" },
                              t._l(t.baseInfo.items, function (s, a) {
                                return e(
                                  "div",
                                  { key: a, staticClass: "mb-20" },
                                  [
                                    e(
                                      "h2",
                                      {
                                        staticClass:
                                          "tt-capital op-touch d-flex al-c",
                                        class: [
                                          a == t.itemIdx
                                            ? "fz-18 color-1"
                                            : "fz-16 gray-6",
                                          {
                                            "gray ev-n":
                                              a != t.itemIdx && !t.isFinish,
                                          },
                                        ],
                                        on: {
                                          click: function (s) {
                                            return t.clickItem(a);
                                          },
                                        },
                                      },
                                      [
                                        t.showAnswer >= a + 1
                                          ? e("span", {
                                              staticClass:
                                                "iconfont icon-done fz-14 mr-10",
                                            })
                                          : !t.isFinish && a > t.itemIdx
                                          ? e("span", {
                                              staticClass:
                                                "iconfont icon-lock fz-14 mr-10",
                                            })
                                          : e("span", {
                                              staticClass:
                                                "iconfont fz-14 mr-10",
                                              class:
                                                a == t.itemIdx && t.isPlay
                                                  ? "icon-zanting"
                                                  : "icon-bofang",
                                            }),
                                        e("span", [t._v(t._s(s.part))]),
                                      ]
                                    ),
                                    t.isFinish
                                      ? e(
                                          "div",
                                          {
                                            staticClass: "mt-10 fz-14 gray",
                                            staticStyle: {
                                              "margin-left": "24px",
                                            },
                                          },
                                          [
                                            e("p", {
                                              domProps: {
                                                innerHTML: t._s(
                                                  t.resultArr[a].note
                                                ),
                                              },
                                            }),
                                          ]
                                        )
                                      : t._e(),
                                  ]
                                );
                              }),
                              0
                            ),
                            t.isBegin
                              ? e("div", [
                                  e(
                                    "h3",
                                    { staticClass: "mt-20 fz-15 gray-3" },
                                    [t._v("Directions:")]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "mt-10 fz-13 lh-15 gray ta-j ti-2",
                                    },
                                    [
                                      t._v(
                                        " " + t._s(t.curItemDir.content) + " "
                                      ),
                                    ]
                                  ),
                                  e(
                                    "div",
                                    { staticClass: "ta-c mt-30" },
                                    [
                                      1 == t.itemIdx && 0 == t.playIdx
                                        ? e("div", { staticClass: "mb-20" }, [
                                            e(
                                              "p",
                                              {
                                                staticClass:
                                                  "red-1 fz-13 fw-b mb-10",
                                              },
                                              [t._v("可根据需要勾选偏慢语速")]
                                            ),
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-flex flex-center",
                                              },
                                              [
                                                e(
                                                  "van-checkbox",
                                                  {
                                                    attrs: {
                                                      "checked-color":
                                                        "#19b6fe",
                                                      "icon-size": "16",
                                                    },
                                                    model: {
                                                      value: t.isSlow,
                                                      callback: function (s) {
                                                        t.isSlow = s;
                                                      },
                                                      expression: "isSlow",
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass: "fz-14",
                                                        class: t.isSlow
                                                          ? ""
                                                          : "gray-6",
                                                      },
                                                      [t._v("偏慢语速")]
                                                    ),
                                                  ]
                                                ),
                                              ],
                                              1
                                            ),
                                          ])
                                        : t._e(),
                                      e(
                                        "div",
                                        { staticClass: "mb-20" },
                                        [
                                          t.playItem
                                            ? e(
                                                "div",
                                                [
                                                  e(
                                                    "van-button",
                                                    {
                                                      attrs: { size: "small" },
                                                      on: {
                                                        click: function (s) {
                                                          return t.playNext();
                                                        },
                                                      },
                                                    },
                                                    [t._v("Skip")]
                                                  ),
                                                  e(
                                                    "van-button",
                                                    {
                                                      staticStyle: {
                                                        "margin-left": "15px",
                                                      },
                                                      attrs: { size: "small" },
                                                      on: {
                                                        click: t.togglePlay,
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(
                                                            t.isPlay
                                                              ? "Pause"
                                                              : "Play"
                                                          ) +
                                                          " "
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                                1
                                              )
                                            : [
                                                e(
                                                  "van-button",
                                                  {
                                                    attrs: { size: "small" },
                                                    on: { click: t.onReplay },
                                                  },
                                                  [t._v("Replay")]
                                                ),
                                              ],
                                        ],
                                        2
                                      ),
                                      t.playItem
                                        ? e("van-circle", {
                                            attrs: {
                                              rate: t.circleRate,
                                              speed: 100,
                                              clockwise: !t.playItem.breakSec,
                                              text: t.circleTxt,
                                              color: "#19b6fe",
                                            },
                                            nativeOn: {
                                              click: function (s) {
                                                return t.togglePlay(s);
                                              },
                                            },
                                            model: {
                                              value: t.circleVal,
                                              callback: function (s) {
                                                t.circleVal = s;
                                              },
                                              expression: "circleVal",
                                            },
                                          })
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                ])
                              : e("div", [
                                  e(
                                    "h3",
                                    { staticClass: "mt-20 fz-15 gray-3" },
                                    [t._v("冰果听力动态诊断有以下步骤:")]
                                  ),
                                  e(
                                    "div",
                                    {
                                      staticClass:
                                        "lh-15 p-mb-5 fz-12 gray mt-15",
                                    },
                                    [
                                      e("p", [
                                        t._v(
                                          " 1.您将听一篇正常语速的短文并完成听力理解题，以便了解您的听力技能; "
                                        ),
                                      ]),
                                      e("p", [
                                        t._v(
                                          " 2.再听一遍短文，并填写文中空缺的词汇，以便了解您的听力问题; "
                                        ),
                                      ]),
                                      e("p", [
                                        t._v(
                                          "3.听句子并填写空缺的词汇，以便进一步确定听力问题。"
                                        ),
                                      ]),
                                      e("p", [
                                        t._v(
                                          "经常做该练习，能有效、快速、有针对性地提高听力。"
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t.playItem
                                    ? e(
                                        "div",
                                        { staticClass: "mt-20 ta-c" },
                                        [
                                          e(
                                            "van-button",
                                            {
                                              attrs: {
                                                type: "primary",
                                                size: "small",
                                              },
                                              on: { click: t.togglePlay },
                                            },
                                            [t._v("开始答题")]
                                          ),
                                        ],
                                        1
                                      )
                                    : t._e(),
                                ]),
                          ])
                        : t._e(),
                    ]
                  ),
                  e(
                    "el-col",
                    {
                      staticClass: "pd-20 col-right",
                      attrs: { xs: 24, sm: 17 },
                    },
                    [
                      0 == t.itemIdx
                        ? e(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: t.isBegin,
                                  expression: "isBegin",
                                },
                              ],
                              staticClass: "lh-13",
                            },
                            [
                              e(
                                "el-row",
                                { attrs: { gutter: 20 } },
                                [
                                  t.showAnswer > 0
                                    ? e(
                                        "el-col",
                                        { attrs: { xs: 24, sm: 12 } },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "lh-2 fz-14" },
                                            t._l(
                                              t.passageLines,
                                              function (s, a) {
                                                return e(
                                                  "p",
                                                  {
                                                    key: a,
                                                    staticClass: "ti-2 mb-10",
                                                  },
                                                  [t._v(" " + t._s(s) + " ")]
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._l([0, 1], function (s) {
                                    return e(
                                      "el-col",
                                      { key: s, attrs: { xs: 24, sm: 12 } },
                                      t._l(
                                        t.listOne.slice(
                                          s * t.listOneHalfLen,
                                          t.listOneHalfLen * (s + 1)
                                        ),
                                        function (a, i) {
                                          return e(
                                            "div",
                                            { key: i, staticClass: "mcs-item" },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "mb-10 d-flex al-c",
                                                },
                                                [
                                                  e(
                                                    "span",
                                                    { staticClass: "seq-num" },
                                                    [
                                                      t._v(
                                                        t._s(
                                                          s * t.listOneHalfLen +
                                                            i +
                                                            1
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                  e("span", [
                                                    t._v(t._s(a.body)),
                                                  ]),
                                                ]
                                              ),
                                              e(
                                                "van-radio-group",
                                                {
                                                  attrs: {
                                                    disabled: t.isFinish,
                                                  },
                                                  model: {
                                                    value: a.choose,
                                                    callback: function (s) {
                                                      t.$set(a, "choose", s);
                                                    },
                                                    expression: "row.choose",
                                                  },
                                                },
                                                t._l(
                                                  a.options,
                                                  function (s, i) {
                                                    return e(
                                                      "van-radio",
                                                      {
                                                        key: i,
                                                        staticClass:
                                                          "mb-10 ml-2",
                                                        attrs: {
                                                          name: i,
                                                          "checked-color":
                                                            "#19b6fe",
                                                          "icon-size": 16,
                                                        },
                                                      },
                                                      [
                                                        e(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "fz-13 gray-6 ml-5 d-ib",
                                                          },
                                                          [
                                                            t.showAnswer &&
                                                            a.answer == i
                                                              ? e(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "color-ok",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      " " +
                                                                        t._s(
                                                                          s
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                )
                                                              : t.showAnswer &&
                                                                i == a.choose
                                                              ? e(
                                                                  "span",
                                                                  {
                                                                    staticClass:
                                                                      "red-1",
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      " " +
                                                                        t._s(
                                                                          s
                                                                        ) +
                                                                        " "
                                                                    ),
                                                                  ]
                                                                )
                                                              : e("span", [
                                                                  t._v(
                                                                    " " +
                                                                      t._s(s) +
                                                                      " "
                                                                  ),
                                                                ]),
                                                          ]
                                                        ),
                                                      ]
                                                    );
                                                  }
                                                ),
                                                1
                                              ),
                                            ],
                                            1
                                          );
                                        }
                                      ),
                                      0
                                    );
                                  }),
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : 1 == t.itemIdx
                        ? e(
                            "div",
                            { staticClass: "lh-2 dict-wrap fz-14" },
                            t._l(t.listTwo, function (s, a) {
                              return e(
                                "div",
                                { key: a, staticClass: "mb-20 ti-2" },
                                t._l(s.parts, function (a, i) {
                                  return e("span", { key: i }, [
                                    e("span", [t._v(t._s(a))]),
                                    i < s.parts.length - 1
                                      ? e("div", { staticClass: "d-i pos-r" }, [
                                          e("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.trim",
                                                value:
                                                  t.dictVal[s.startNum + i],
                                                expression:
                                                  "dictVal[row.startNum + p]",
                                                modifiers: { trim: !0 },
                                              },
                                            ],
                                            staticClass: "bdb-1",
                                            class:
                                              t.showAnswer >= 2
                                                ? t.isDictRight(s.startNum + i)
                                                  ? "color-ok"
                                                  : "red-1"
                                                : "",
                                            attrs: {
                                              type: "text",
                                              disabled: t.isFinish,
                                            },
                                            domProps: {
                                              value: t.dictVal[s.startNum + i],
                                            },
                                            on: {
                                              input: function (e) {
                                                e.target.composing ||
                                                  t.$set(
                                                    t.dictVal,
                                                    s.startNum + i,
                                                    e.target.value.trim()
                                                  );
                                              },
                                              blur: function (s) {
                                                return t.$forceUpdate();
                                              },
                                            },
                                          }),
                                          t.showAnswer >= 2 &&
                                          !t.isDictRight(s.startNum + i)
                                            ? e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "pos-a right-0 fz-12 color-ok",
                                                  staticStyle: { top: "-10px" },
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(
                                                        t.dictAnswers[
                                                          s.startNum + i
                                                        ]
                                                      ) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ])
                                      : t._e(),
                                  ]);
                                }),
                                0
                              );
                            }),
                            0
                          )
                        : 2 == t.itemIdx
                        ? e(
                            "div",
                            t._l(t.listThree, function (s, a) {
                              return e(
                                "div",
                                { key: a, staticClass: "mb-20 lh-15" },
                                [
                                  e("span", { staticClass: "seq-num" }, [
                                    t._v(t._s(a + 1)),
                                  ]),
                                  t._l(s.parts, function (i, n) {
                                    return e("span", { key: n }, [
                                      e("span", [t._v(t._s(i))]),
                                      n < s.parts.length - 1
                                        ? e(
                                            "div",
                                            { staticClass: "d-i pos-r" },
                                            [
                                              e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model.trim",
                                                    value: t.dict2Val[a],
                                                    expression: "dict2Val[j]",
                                                    modifiers: { trim: !0 },
                                                  },
                                                ],
                                                staticClass: "bdb-1",
                                                class:
                                                  t.showAnswer >= 3
                                                    ? t.dict2Val[a] == s.answer
                                                      ? "color-ok"
                                                      : "red-1"
                                                    : "",
                                                attrs: {
                                                  type: "text",
                                                  disabled: t.isFinish,
                                                },
                                                domProps: {
                                                  value: t.dict2Val[a],
                                                },
                                                on: {
                                                  input: function (s) {
                                                    s.target.composing ||
                                                      t.$set(
                                                        t.dict2Val,
                                                        a,
                                                        s.target.value.trim()
                                                      );
                                                  },
                                                  blur: function (s) {
                                                    return t.$forceUpdate();
                                                  },
                                                },
                                              }),
                                              t.showAnswer >= 3 &&
                                              t.dict2Val[a] != s.answer
                                                ? e(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "pos-a right-0 fz-12 color-ok",
                                                      staticStyle: {
                                                        top: "-10px",
                                                      },
                                                    },
                                                    [
                                                      t._v(
                                                        " " +
                                                          t._s(s.answer) +
                                                          " "
                                                      ),
                                                    ]
                                                  )
                                                : t._e(),
                                            ]
                                          )
                                        : t._e(),
                                    ]);
                                  }),
                                ],
                                2
                              );
                            }),
                            0
                          )
                        : t._e(),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      _ = [
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", [
            e("p", { staticClass: "fz-30" }, [t._v("Listening")]),
            e("p", { staticClass: "white-9 mt-5" }, [t._v("动态诊断")]),
          ]);
        },
      ],
      g =
        (e("99af"),
        e("4de4"),
        e("4160"),
        e("c975"),
        e("d81d"),
        e("ac1f"),
        e("466d"),
        e("5319"),
        e("1276"),
        e("159b"),
        e("96cf"),
        e("1da1")),
      w = /\[\[[^\]]+\]\]/,
      y = new Audio(
        "//qs-1252071497.cos.ap-beijing.myqcloud.com/upload/b771cc9e2863e33f1a7fd34f16dda995.mp4"
      ),
      b = {
        data: function () {
          return {
            baseInfo: {},
            itemIdx: 0,
            mcInfo: {},
            circleVal: 0,
            circleRate: 0,
            circleTxt: "",
            isPlay: !1,
            playList: [],
            playIdx: 0,
            dictAnswers: [],
            dictVal: [],
            dict2Val: [],
            showAnswer: 0,
            isBegin: !1,
            isSlow: !1,
          };
        },
        computed: {
          resultArr: function () {
            var t = this;
            return [
              {
                count: this.listOne.length,
                right: this.listOne.filter(function (t) {
                  return t.answer == t.choose;
                }).length,
              },
              {
                count: this.dictAnswers.length,
                right: this.dictVal.filter(function (s, e) {
                  return t.dictVal[e] == t.dictAnswers[e];
                }).length,
              },
              {
                count: this.listThree.length,
                right: this.listThree.filter(function (s, e) {
                  return t.dict2Val[e] == s.answer;
                }).length,
              },
            ].map(function (t) {
              t.rate = ((t.right / t.count) * 100) | 1;
              var s = t.rate > 60 ? "color-ok" : "red-1";
              return (
                (t.note = '<span class="'
                  .concat(s, '">准确率：')
                  .concat(t.right, "/")
                  .concat(t.count, "</span>")),
                t
              );
            });
          },
          isFinish: function () {
            return this.showAnswer >= this.baseItems.length;
          },
          baseItems: function () {
            return this.baseInfo.items || [];
          },
          curItem: function () {
            return this.baseItems[this.itemIdx];
          },
          curItemDir: function () {
            var t = this.curItem || {},
              s = t.dirs,
              e = void 0 === s ? [] : s;
            return e[0] || {};
          },
          playItem: function () {
            return this.playList[this.playIdx];
          },
          passageLines: function () {
            var t = this.mcInfo.passage;
            if (!t) return [];
            var s = t.split("<p>");
            return s.shift(), s;
          },
          listOne: function () {
            var t = this.mcInfo.mcs;
            return (t && t) || [];
          },
          listOneHalfLen: function () {
            return this.showAnswer
              ? this.listOne.length
              : (this.listOne.length / 2) | 1;
          },
          listTwo: function () {
            var t = this.mcInfo.dictation;
            if (!t) return [];
            var s = t.split("<p>");
            s.shift();
            var e = 0;
            return s.map(function (t) {
              var s = t.split(w),
                a = { parts: s, startNum: e };
              return (e += s.length - 1), a;
            });
          },
          listThree: function () {
            var t = this.mcInfo.dictations;
            return t
              ? t.map(function (t) {
                  t.parts = t.sentence.split(w);
                  var s = /\[\[(.+)\]\]/.exec(t.sentence);
                  return (t.answer = s ? s[1] : t.word), t;
                })
              : [];
          },
        },
        watch: {
          itemIdx: function () {
            this.setPlayList();
          },
          isPlay: function (t) {
            var s = this.playItem || {},
              e = s.audio,
              a = s.timer;
            a && clearInterval(a),
              e && e.pause(),
              t && ((this.isBegin = !0), this.startPlay());
          },
        },
        created: function () {
          var t = this;
          return Object(g["a"])(
            regeneratorRuntime.mark(function s() {
              return regeneratorRuntime.wrap(function (s) {
                while (1)
                  switch ((s.prev = s.next)) {
                    case 0:
                      return (s.next = 2), t.getBaseInfo();
                    case 2:
                      return (s.next = 4), t.getMaterial();
                    case 4:
                    case "end":
                      return s.stop();
                  }
              }, s);
            })
          )();
        },
        methods: {
          onSubmit: function (t) {
            var s = this;
            (this.isPlay = !1),
              setTimeout(function () {
                s.isFinish && 1 === t
                  ? ((s.itemIdx = 0), (s.showAnswer = 0))
                  : (s.itemIdx < s.baseItems.length - 1
                      ? s.itemIdx++
                      : (s.itemIdx = 0),
                    s.isFinish || s.showAnswer++,
                    window.scrollTo(0, 0)),
                  (s.playIdx = 0),
                  s.isFinish || (s.isPlay = !0);
              }, 10);
          },
          onExit: function () {
            window.close();
          },
          isDictRight: function (t) {
            return this.dictVal[t] == this.dictAnswers[t];
          },
          clickItem: function (t) {
            var s = this;
            this.showAnswer > t
              ? ((this.isPlay = !1),
                setTimeout(function () {
                  s.itemIdx = t;
                }, 10))
              : t == this.itemIdx
              ? this.togglePlay()
              : ((this.isPlay = !1),
                setTimeout(function () {
                  (s.itemIdx = t),
                    (s.playIdx = 0),
                    s.setPlayList(),
                    (s.isPlay = !0);
                }, 10));
          },
          togglePlay: function () {
            this.isPlay = !this.isPlay;
          },
          playNext: function () {
            var t = this;
            (this.isPlay = !1),
              setTimeout(function () {
                t.playIdx++, (t.isPlay = !0);
              }, 10);
          },
          onReplay: function () {
            (this.playIdx = 0), (this.isPlay = !0);
          },
          startPlay: function () {
            var t = this;
            if (this.playItem) {
              var s = this.playItem,
                e = s.path,
                a = s.slow_path,
                i = s.audio,
                n = s.breakSec,
                r = s.timer,
                c = s.restSec;
              r && clearInterval(r),
                e
                  ? (i ||
                      ((e = this.isSlow && 1 == this.itemIdx && a ? a : e),
                      (e =
                        "http://www.bingoenglish.com" +
                        e.replace(
                          "{MEDIA_PATH}/mediafile",
                          "/mediafile/voice_mp3"
                        )),
                      (i = this.playItem.audio = new Audio(e)),
                      (i.ontimeupdate = function () {
                        t.circleVal = parseInt(
                          (100 * i.currentTime) / i.duration
                        );
                        var s = parseInt(i.currentTime) + "s";
                        i.duration > 30 &&
                          (s += "/" + parseInt(i.duration) + "s"),
                          (t.circleTxt = s);
                      }),
                      (i.onended = function () {
                        t.playNext();
                      }),
                      (i.onpause = function () {
                        t.isPlay = !1;
                      })),
                    i.play())
                  : n &&
                    (i ||
                      ((i = this.playItem.audio = y),
                      (i.currentTime = 0),
                      (i.muted = !0),
                      (i.ontimeupdate = function () {
                        if (i.paused) return console.log(i.currentTime);
                        (c = Math.floor(n - i.currentTime)),
                          c < 0 && (c = 0),
                          (t.playItem.restSec = c),
                          (t.circleRate = parseInt((100 * c) / n)),
                          (t.circleTxt = c + "s");
                      }),
                      (i.onended = function () {
                        t.playNext();
                      }),
                      (i.onpause = function () {
                        t.isPlay = !1;
                      })),
                    i.play());
            } else this.isPlay = !1;
          },
          setPlayList: function () {
            var t = [this.curItemDir],
              s = this.mcInfo,
              e = s.media_path,
              a = s.media_path_slow,
              i = s.dictations;
            2 == this.itemIdx
              ? i.forEach(function (s) {
                  t.push({ breakSec: 6 }),
                    t.push({ path: s.number_media }),
                    t.push({ path: s.media_path });
                })
              : (t.push({ breakSec: 6 }),
                t.push({ path: e, slow_path: a }),
                0 == this.itemIdx &&
                  this.listOne.forEach(function (s) {
                    t.push({ breakSec: 6 }),
                      t.push({ path: s.number_media }),
                      t.push({ path: s.media_path });
                  })),
              (this.playList = t);
          },
          getBaseInfo: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.prev = 0),
                            (s.next = 3),
                            t.$http.get("bingo_info")
                          );
                        case 3:
                          (e = s.sent),
                            (a = e.data),
                            (t.baseInfo = a.directions),
                            (s.next = 10);
                          break;
                        case 8:
                          (s.prev = 8), (s.t0 = s["catch"](0));
                        case 10:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[0, 8]]
                );
              })
            )();
          },
          getMaterial: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a, i, n, r, c, o;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            t.$toast.loading(),
                            (s.prev = 1),
                            (e = t.$route.query.serNum),
                            (s.next = 5),
                            t.$http.get("bingo", {
                              params: { SERIAL_NUMBER: e, attrs: "MC" },
                            })
                          );
                        case 5:
                          (a = s.sent),
                            (i = a.data),
                            (n = i.MC.simulation_test.listening),
                            (r = n.mcs),
                            (c = n.dictation),
                            r.map(function (t) {
                              var s = [t.a, t.b, t.c];
                              return (
                                t.d && s.push(t.d),
                                (t.options = s.sort(function () {
                                  return 0.5 - Math.random();
                                })),
                                (t.answer = t.options.indexOf(t.a)),
                                t
                              );
                            }),
                            (t.mcInfo = n),
                            (o = c.match(/\[\[[^\]]+\]\]/gm)),
                            (t.dictAnswers = o.map(function (t) {
                              return t.replace("[[", "").replace("]]", "");
                            })),
                            t.setPlayList(),
                            (s.next = 18);
                          break;
                        case 16:
                          (s.prev = 16), (s.t0 = s["catch"](1));
                        case 18:
                          t.$toast.clear();
                        case 19:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[1, 16]]
                );
              })
            )();
          },
        },
      },
      x = { mixins: [b] },
      C = x,
      I = e("2877"),
      k = Object(I["a"])(C, v, _, !1, null, null, null),
      T = k.exports,
      P = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [
          e(
            "div",
            { staticClass: "panel-1" },
            [
              e(
                "div",
                { staticClass: "header d-flex al-c pos-s top-0 z-100" },
                [
                  t._m(0),
                  t.audio
                    ? e(
                        "div",
                        { staticClass: "ml-auto d-flex al-c act-wrap" },
                        [
                          t.showAnswer
                            ? e("span", { staticClass: "fz-14" }, [
                                t._v(
                                  " 正确率：" +
                                    t._s(t.okNum) +
                                    "/" +
                                    t._s(t.questions.length) +
                                    " "
                                ),
                              ])
                            : e(
                                "span",
                                {
                                  staticClass: "mr-10",
                                  on: { click: t.onSubmit },
                                },
                                [t._v(" Submit ")]
                              ),
                        ]
                      )
                    : t._e(),
                ]
              ),
              e(
                "el-row",
                [
                  e(
                    "el-col",
                    { staticClass: "left-part", attrs: { xs: 24, sm: 7 } },
                    [
                      t.audio
                        ? e("div", { staticClass: "pd-20" }, [
                            e("div", {}, [
                              e("p", { staticClass: "fz-18 mb-20" }, [
                                t._v(t._s(t.baseInfo.directions)),
                              ]),
                            ]),
                            e(
                              "div",
                              { staticClass: "mt-20" },
                              [
                                e(
                                  "div",
                                  { staticClass: "ta-c pd-10 mb-10" },
                                  [
                                    e(
                                      "van-button",
                                      {
                                        attrs: { size: "small" },
                                        on: {
                                          click: function (s) {
                                            t.isPlay = !t.isPlay;
                                          },
                                        },
                                      },
                                      [t._v(t._s(t.isPlay ? "Pause" : "Play"))]
                                    ),
                                  ],
                                  1
                                ),
                                e("van-slider", {
                                  on: {
                                    change: t.onChange,
                                    "drag-start": function (s) {
                                      t.isDrag = !0;
                                    },
                                    "drag-end": function (s) {
                                      t.isDrag = !1;
                                    },
                                  },
                                  model: {
                                    value: t.audioPerc,
                                    callback: function (s) {
                                      t.audioPerc = s;
                                    },
                                    expression: "audioPerc",
                                  },
                                }),
                                e(
                                  "div",
                                  { staticClass: "ta-c fz-13 mt-10 pd-10" },
                                  [t._v(" " + t._s(t.audioTime) + " ")]
                                ),
                              ],
                              1
                            ),
                          ])
                        : t._e(),
                    ]
                  ),
                  t.questions.length
                    ? e(
                        "el-col",
                        {
                          staticClass: "pd-20 col-right",
                          attrs: { xs: 24, sm: 17 },
                        },
                        [
                          e(
                            "div",
                            { staticClass: "lh-13" },
                            [
                              e(
                                "el-row",
                                { attrs: { gutter: 20 } },
                                [
                                  t.showAnswer
                                    ? e(
                                        "el-col",
                                        { attrs: { xs: 24, sm: 12 } },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "lh-2 fz-14 mb-20" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    t.passage.replace(
                                                      /\[\[|\]\]/g,
                                                      ""
                                                    )
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  t._l(t.questions, function (s, a) {
                                    return e(
                                      "el-col",
                                      { key: a, attrs: { xs: 24, sm: 12 } },
                                      [
                                        e(
                                          "div",
                                          { staticClass: "mcs-item" },
                                          [
                                            e(
                                              "div",
                                              {
                                                staticClass:
                                                  "mb-10 d-flex al-c",
                                              },
                                              [
                                                e(
                                                  "span",
                                                  { staticClass: "seq-num" },
                                                  [t._v(t._s(a + 1))]
                                                ),
                                                e("span", [t._v(t._s(s.body))]),
                                              ]
                                            ),
                                            e(
                                              "van-radio-group",
                                              {
                                                attrs: {
                                                  disabled: t.showAnswer,
                                                },
                                                model: {
                                                  value: s.choose,
                                                  callback: function (e) {
                                                    t.$set(s, "choose", e);
                                                  },
                                                  expression: "row.choose",
                                                },
                                              },
                                              t._l(s.options, function (a, i) {
                                                return e(
                                                  "van-radio",
                                                  {
                                                    key: i,
                                                    staticClass: "mb-10 ml-2",
                                                    attrs: {
                                                      name: i,
                                                      "checked-color":
                                                        "#19b6fe",
                                                      "icon-size": 16,
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "fz-13 gray-6 ml-5 d-ib",
                                                      },
                                                      [
                                                        t.showAnswer &&
                                                        s.answer == i
                                                          ? e(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "color-ok",
                                                              },
                                                              [
                                                                t._v(
                                                                  " " +
                                                                    t._s(a) +
                                                                    " "
                                                                ),
                                                              ]
                                                            )
                                                          : t.showAnswer &&
                                                            i == s.choose
                                                          ? e(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "red-1",
                                                              },
                                                              [
                                                                t._v(
                                                                  " " +
                                                                    t._s(a) +
                                                                    " "
                                                                ),
                                                              ]
                                                            )
                                                          : e("span", [
                                                              t._v(
                                                                " " +
                                                                  t._s(a) +
                                                                  " "
                                                              ),
                                                            ]),
                                                      ]
                                                    ),
                                                  ]
                                                );
                                              }),
                                              1
                                            ),
                                            t.showAnswer
                                              ? e(
                                                  "div",
                                                  {
                                                    staticClass: "mt-20 mb-20",
                                                  },
                                                  [
                                                    e(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "fz-12 color-1",
                                                      },
                                                      [t._v("答案解析：")]
                                                    ),
                                                    e(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "fz-12 mt-10 lh-15",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            s.choose ===
                                                              s.answer
                                                              ? s.right_comments
                                                              : s.wrong_comments
                                                          )
                                                        ),
                                                      ]
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ]
                                    );
                                  }),
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ]
                      )
                    : t._e(),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      A = [
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", [
            e("p", { staticClass: "fz-30" }, [t._v("Easy Listening")]),
            e("p", { staticClass: "white-9 mt-5" }, [t._v("轻松听")]),
          ]);
        },
      ];
    function z(t) {
      var s = ((t / 60) | 0) + ":" + (t % 60 | 0);
      return s.replace(/\b(\d)\b/g, "0$1");
    }
    var N = {
        data: function () {
          return {
            baseInfo: {},
            notes: [],
            passage: "",
            questions: [],
            title: "",
            audio: null,
            isPlay: !1,
            isDrag: !1,
            audioPerc: 0,
            showAnswer: !1,
            audioTime: "",
          };
        },
        computed: {
          okNum: function () {
            return this.questions.filter(function (t) {
              return t.answer == t.choose;
            }).length;
          },
        },
        watch: {
          isPlay: function (t) {
            t ? this.audio.play() : this.audio.pause();
          },
        },
        created: function () {
          this.getMaterial();
        },
        methods: {
          onChange: function (t) {
            (this.audio.currentTime = (this.audio.duration * t) / 100),
              (this.isPlay = !0);
          },
          onSubmit: function () {
            this.showAnswer = !0;
          },
          getMaterial: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a, i, n, r;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            t.$toast.loading(),
                            (s.prev = 1),
                            (e = t.$route.query.serNum),
                            (a = void 0 === e ? "L-5-112" : e),
                            (s.next = 5),
                            t.$http.get("bingo", {
                              params: {
                                tableName: "listening_activity",
                                SERIAL_NUMBER: a,
                                attrs: "CONTENT",
                              },
                            })
                          );
                        case 5:
                          (i = s.sent),
                            (n = i.data),
                            (r = n.CONTENT.listening),
                            (t.baseInfo = r.general_info),
                            (t.notes = r.notes.note),
                            (t.passage = r.passage),
                            (t.questions = r.questions.question.map(function (
                              t
                            ) {
                              var s = [t.a, t.b, t.c];
                              return (
                                t.d && s.push(t.d),
                                (t.choose = -1),
                                (t.options = s.sort(function () {
                                  return 0.5 - Math.random();
                                })),
                                (t.answer = t.options.indexOf(t.a)),
                                t
                              );
                            })),
                            (t.title = r.title),
                            (t.audio = new Audio(r.url.replace(":8080", ""))),
                            (t.audio.ontimeupdate = function () {
                              t.isDrag ||
                                (t.audioPerc = parseInt(
                                  (100 * t.audio.currentTime) / t.audio.duration
                                )),
                                (t.audioTime =
                                  z(t.audio.currentTime) +
                                  " / " +
                                  z(t.audio.duration));
                            }),
                            (t.audio.onended = function () {
                              t.isPlay = !1;
                            }),
                            (s.next = 20);
                          break;
                        case 18:
                          (s.prev = 18), (s.t0 = s["catch"](1));
                        case 20:
                          t.$toast.clear();
                        case 21:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[1, 18]]
                );
              })
            )();
          },
        },
      },
      $ = N,
      O = Object(I["a"])($, P, A, !1, null, null, null),
      R = O.exports,
      S = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [
          e("div", { staticClass: "panel-1" }, [
            e("div", { staticClass: "header d-flex al-c pos-s top-0 z-100" }, [
              t._m(0),
              e("div", { staticClass: "ml-auto d-flex al-c act-wrap" }, [
                t.showAnswer
                  ? e("span", { staticClass: "fz-14" }, [
                      t._v(
                        " 正确率：" +
                          t._s(t.okNum) +
                          "/" +
                          t._s(t.questions.length) +
                          " "
                      ),
                    ])
                  : e(
                      "span",
                      { staticClass: "mr-10", on: { click: t.onSubmit } },
                      [t._v(" Submit ")]
                    ),
              ]),
            ]),
            e(
              "div",
              { staticClass: "pd-15" },
              [
                e("div", { staticClass: "gray-6 ta-c fz-15 mb-30 mt-10" }, [
                  t._v(" " + t._s(t.directions) + " "),
                ]),
                e(
                  "el-row",
                  [
                    e(
                      "el-row",
                      { attrs: { gutter: 20 } },
                      [
                        e("el-col", { attrs: { xs: 24, sm: 12 } }, [
                          e(
                            "div",
                            { staticClass: "lh-2 fz-13 mb-20 ti-2" },
                            t._l(t.passageArr, function (s, a) {
                              return e("span", { key: a }, [
                                e("span", [t._v(t._s(s))]),
                                t.notes[a]
                                  ? e(
                                      "b",
                                      {
                                        staticClass: "color-1 op-touch",
                                        on: {
                                          click: function (s) {
                                            return t.showTip(t.notes[a]);
                                          },
                                        },
                                      },
                                      [t._v(" " + t._s(t.notes[a][0]) + " ")]
                                    )
                                  : t._e(),
                              ]);
                            }),
                            0
                          ),
                        ]),
                        e(
                          "el-col",
                          { attrs: { xs: 24, sm: 12 } },
                          t._l(t.questions, function (s, a) {
                            return e(
                              "div",
                              { key: a, staticClass: "mcs-item" },
                              [
                                e("div", { staticClass: "mb-10 d-flex al-c" }, [
                                  e("span", { staticClass: "seq-num" }, [
                                    t._v(t._s(a + 1)),
                                  ]),
                                  e("span", [t._v(t._s(s.body))]),
                                ]),
                                e(
                                  "van-radio-group",
                                  {
                                    attrs: { disabled: t.showAnswer },
                                    model: {
                                      value: s.choose,
                                      callback: function (e) {
                                        t.$set(s, "choose", e);
                                      },
                                      expression: "row.choose",
                                    },
                                  },
                                  t._l(s.options, function (a, i) {
                                    return e(
                                      "van-radio",
                                      {
                                        key: i,
                                        staticClass: "mb-10 ml-2",
                                        attrs: {
                                          name: i,
                                          "checked-color": "#19b6fe",
                                          "icon-size": 16,
                                        },
                                      },
                                      [
                                        e(
                                          "span",
                                          {
                                            staticClass:
                                              "fz-13 gray-6 ml-5 d-ib",
                                          },
                                          [
                                            t.showAnswer && s.answer == i
                                              ? e(
                                                  "span",
                                                  { staticClass: "color-ok" },
                                                  [t._v(" " + t._s(a) + " ")]
                                                )
                                              : t.showAnswer && i == s.choose
                                              ? e(
                                                  "span",
                                                  { staticClass: "red-1" },
                                                  [t._v(" " + t._s(a) + " ")]
                                                )
                                              : e("span", [
                                                  t._v(" " + t._s(a) + " "),
                                                ]),
                                          ]
                                        ),
                                      ]
                                    );
                                  }),
                                  1
                                ),
                                t.showAnswer
                                  ? e("div", { staticClass: "mt-20" }, [
                                      e("p", { staticClass: "fz-14 color-1" }, [
                                        t._v("答案解析："),
                                      ]),
                                      e(
                                        "p",
                                        { staticClass: "fz-12 mt-10 lh-15" },
                                        [
                                          t._v(
                                            t._s(
                                              s.choose === s.answer
                                                ? s.right_comments
                                                : s.wrong_comments
                                            )
                                          ),
                                        ]
                                      ),
                                    ])
                                  : t._e(),
                              ],
                              1
                            );
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
        ]);
      },
      E = [
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", [
            e("p", { staticClass: "fz-30" }, [t._v("Easy Reading")]),
            e("p", { staticClass: "white-9 mt-5" }, [t._v("轻松读")]),
          ]);
        },
      ],
      M =
        (e("a15b"),
        {
          data: function () {
            return {
              directions: "",
              passageArr: "",
              notes: [],
              questions: [],
              showAnswer: !1,
            };
          },
          computed: {
            okNum: function () {
              return this.questions.filter(function (t) {
                return t.answer == t.choose;
              }).length;
            },
          },
          created: function () {
            this.getMaterial();
          },
          methods: {
            showTip: function (t) {
              var s = t.join("：");
              this.$notify({ type: "success", message: s });
            },
            onSubmit: function () {
              this.showAnswer = !0;
            },
            getMaterial: function () {
              var t = this;
              return Object(g["a"])(
                regeneratorRuntime.mark(function s() {
                  var e, a, i, n, r, c;
                  return regeneratorRuntime.wrap(
                    function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            return (
                              t.$toast.loading(),
                              (s.prev = 1),
                              (e = t.$route.query.serNum),
                              (a = void 0 === e ? "R-29-192" : e),
                              (s.next = 5),
                              t.$http.get("bingo", {
                                params: {
                                  tableName: "reading_activity",
                                  SERIAL_NUMBER: a,
                                  attrs: "CONTENT",
                                },
                              })
                            );
                          case 5:
                            (i = s.sent),
                              (n = i.data),
                              (r = n.CONTENT.reading),
                              (t.directions = r.general_info.directions),
                              (t.notes = r.notes.note.map(function (t) {
                                var s = t.split(": ");
                                return s;
                              })),
                              (c = /\[\[[^\]]+\]\]/),
                              (t.passageArr = r.passage.split(c)),
                              (t.questions = r.questions.question.map(function (
                                t
                              ) {
                                var s = [t.a, t.b, t.c];
                                return (
                                  t.d && s.push(t.d),
                                  (t.choose = -1),
                                  (t.options = s.sort(function () {
                                    return 0.5 - Math.random();
                                  })),
                                  (t.answer = t.options.indexOf(t.a)),
                                  t
                                );
                              })),
                              console.log(r),
                              (s.next = 18);
                            break;
                          case 16:
                            (s.prev = 16), (s.t0 = s["catch"](1));
                          case 18:
                            t.$toast.clear();
                          case 19:
                          case "end":
                            return s.stop();
                        }
                    },
                    s,
                    null,
                    [[1, 16]]
                  );
                })
              )();
            },
          },
        }),
      j = M,
      q = Object(I["a"])(j, S, E, !1, null, null, null),
      L = q.exports,
      V = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [
          e(
            "div",
            { staticClass: "panel-1" },
            [
              t._m(0),
              e(
                "el-row",
                [
                  e(
                    "el-col",
                    { staticClass: "left-part", attrs: { xs: 24, sm: 8 } },
                    [
                      t.audioUrl
                        ? e("div", { staticClass: "pd-20" }, [
                            e("div", {}, [
                              e("p", { staticClass: "fz-18 mb-20" }, [
                                t._v(t._s(t.playItem.direction)),
                              ]),
                            ]),
                            e(
                              "div",
                              { staticClass: "mt-20" },
                              [
                                e(
                                  "div",
                                  { staticClass: "ta-c pd-10 mb-10" },
                                  [
                                    e(
                                      "van-button",
                                      {
                                        attrs: {
                                          size: "small",
                                          disabled:
                                            t.playIdx > 0 && t.playTimes >= 3,
                                        },
                                        on: {
                                          click: function (s) {
                                            t.isPlay = !t.isPlay;
                                          },
                                        },
                                      },
                                      [
                                        t._v(
                                          " " +
                                            t._s(t.isPlay ? "Pause" : "Play") +
                                            " "
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                e("van-slider", {
                                  class: { "ev-n": t.playIdx > 0 },
                                  on: {
                                    change: t.onChange,
                                    "drag-start": function (s) {
                                      t.isDrag = !0;
                                    },
                                    "drag-end": function (s) {
                                      t.isDrag = !1;
                                    },
                                  },
                                  model: {
                                    value: t.audioPerc,
                                    callback: function (s) {
                                      t.audioPerc = s;
                                    },
                                    expression: "audioPerc",
                                  },
                                }),
                                e(
                                  "div",
                                  { staticClass: "ta-c fz-13 mt-10 pd-10" },
                                  [t._v(" " + t._s(t.audioTime) + " ")]
                                ),
                              ],
                              1
                            ),
                          ])
                        : t._e(),
                      t.playIdx > 0
                        ? e("div", { staticClass: "pd-15" }, [
                            e("div", { staticClass: "fz-13 mb-20 gray" }, [
                              t.playTimes < 3
                                ? e("p", { staticClass: "mb-10" }, [
                                    t._v(
                                      " 您还有" +
                                        t._s(3 - t.playTimes) +
                                        "次机会，点击Play，再听一次。 "
                                    ),
                                  ])
                                : t._e(),
                              t.tryTimes < 3
                                ? e("p", [
                                    t._v(
                                      " 您还有" +
                                        t._s(3 - t.tryTimes) +
                                        "次试错机会，点击“检查答案”，将为您标识出错误位置。 "
                                    ),
                                  ])
                                : t._e(),
                            ]),
                            e("div", {
                              staticClass: "mt-10 mb-10 fz-14",
                              domProps: { innerHTML: t._s(t.wrongTxt) },
                            }),
                            e("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: t.myAns,
                                  expression: "myAns",
                                  modifiers: { trim: !0 },
                                },
                              ],
                              staticClass: "w100p pd-10 fz-14",
                              staticStyle: {
                                resize: "none",
                                border: "1px solid #aaa",
                              },
                              attrs: {
                                rows: "3",
                                placeholder: "请输入您听到的内容",
                              },
                              domProps: { value: t.myAns },
                              on: {
                                input: function (s) {
                                  s.target.composing ||
                                    (t.myAns = s.target.value.trim());
                                },
                                blur: function (s) {
                                  return t.$forceUpdate();
                                },
                              },
                            }),
                            e(
                              "div",
                              { staticClass: "mt-10 ta-c" },
                              [
                                e(
                                  "van-button",
                                  {
                                    attrs: { size: "small" },
                                    on: { click: t.checkAnswer },
                                  },
                                  [t._v("检查答案")]
                                ),
                              ],
                              1
                            ),
                          ])
                        : t._e(),
                    ]
                  ),
                  e("el-col", { attrs: { xs: 24, sm: 16 } }, [
                    e(
                      "ul",
                      { staticClass: "res-list" },
                      t._l(t.results, function (s, a) {
                        return e(
                          "li",
                          {
                            key: a,
                            staticClass: "d-flex al-start pd-10 fz-13 lh-15",
                          },
                          [
                            e("span", { staticClass: "seq-num" }, [
                              t._v(t._s(s.idx)),
                            ]),
                            e("div", [
                              e("p", [
                                e("span", { staticClass: "gray" }, [
                                  t._v("播放句子："),
                                ]),
                                t._v(t._s(s.sentence) + " "),
                              ]),
                              e("div", { staticClass: "mt-5" }, [
                                e("span", { staticClass: "gray" }, [
                                  t._v("我的答案："),
                                ]),
                                e("span", {
                                  domProps: { innerHTML: t._s(s.answer) },
                                }),
                              ]),
                              e("div", { staticClass: "mt-5" }, [
                                e("span", { staticClass: "gray" }, [
                                  t._v("得分："),
                                ]),
                                e(
                                  "span",
                                  {
                                    class: s.score < 100 ? "red-1" : "color-ok",
                                  },
                                  [t._v(t._s(s.score))]
                                ),
                              ]),
                            ]),
                          ]
                        );
                      }),
                      0
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      D = [
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e(
            "div",
            { staticClass: "header d-flex al-c pos-s top-0 z-100" },
            [
              e("div", [
                e("p", { staticClass: "fz-30" }, [t._v("Dictation")]),
                e("p", { staticClass: "white-9 mt-5" }, [t._v("全文听写")]),
              ]),
            ]
          );
        },
      ],
      U = (e("4d63"), e("25f0"), e("b85c"));
    function B(t) {
      var s = ((t / 60) | 0) + ":" + (t % 60 | 0);
      return s.replace(/\b(\d)\b/g, "0$1");
    }
    var F = {
        data: function () {
          return {
            audioUrl: "",
            passage: "",
            sentences: [],
            audio: null,
            isPlay: !1,
            audioPerc: 0,
            audioTime: "",
            isDrag: !1,
            results: [],
            wrongTxt: "",
            myAns: "",
            playIdx: 0,
            playMap: {},
            playTimes: 0,
            tryTimes: 0,
          };
        },
        computed: {
          playItem: function () {
            var t = this.sentences.length;
            if (0 == this.playIdx) {
              var s = this.sentences.filter(function (t) {
                return 1 == t.$.directshow;
              }).length;
              return {
                url: this.audioUrl,
                direction: "本文共"
                  .concat(t, "句（含")
                  .concat(s, "个样句），听完全文后开始逐句听写。"),
              };
            }
            var e = this.sentences[this.playIdx - 1],
              a = 1 == e.$.directshow;
            return {
              url: e.url,
              con: e.sentence,
              isTest: a,
              direction: "第"
                .concat(this.playIdx, "句(共")
                .concat(t, "句)")
                .concat(a ? "，此为例句" : "", "，请听写"),
            };
          },
        },
        watch: {
          isPlay: function () {
            var t = this,
              s = this.playMap[this.playIdx];
            s ||
              ((s = this.playMap[this.playIdx] =
                new Audio(this.playItem.url.replace(":8080", ""))),
              (this.playTimes = 0),
              (this.tryTimes = 0),
              (this.wrongTxt = ""),
              (this.myAns = "")),
              this.isPlay ? s.play() : s.pause(),
              (s.onended = function () {
                (t.isPlay = !1),
                  (t.playTimes += 1),
                  0 == t.playIdx
                    ? t.playNext()
                    : t.playItem.isTest && (t.myAns = t.playItem.con);
              }),
              (s.ontimeupdate = function () {
                t.isDrag ||
                  (t.audioPerc = parseInt((100 * s.currentTime) / s.duration)),
                  (t.audioTime = B(s.currentTime) + " / " + B(s.duration));
              });
          },
        },
        created: function () {
          this.getMaterial();
        },
        methods: {
          checkAnswer: function () {
            if (!this.myAns) return this.$toast("请输入答案");
            var t,
              s = this.myAns.split(/[\s.,]+/),
              e = [],
              a = this.playItem.con,
              i = !0,
              n = 0,
              r = a.split(/\s+/).length,
              c = Object(U["a"])(s);
            try {
              for (c.s(); !(t = c.n()).done; ) {
                var o = t.value;
                o &&
                  (new RegExp("\\b".concat(o, "\\b"), "i").test(a)
                    ? (e.push(o), (a = a.replace(o, "")), n++)
                    : (e.push('<u class="red-1 fw-b">'.concat(o, "</u>")),
                      (i = !1)));
              }
            } catch (u) {
              c.e(u);
            } finally {
              c.f();
            }
            var l = parseInt((100 * n) / r);
            l > 100 && (l = 100),
              l < 100 &&
              (i && e.push('<u class="red-1">(不完整)</u>'),
              (this.tryTimes += 1),
              (this.wrongTxt = e.join(" ")),
              this.tryTimes < 3)
                ? this.$toast("您还有".concat(3 - this.tryTimes, "此机会"))
                : (this.results.unshift({
                    sentence: this.playItem.con,
                    myAns: this.myAns,
                    answer: 100 == l ? this.myAns : this.wrongTxt,
                    score: l,
                    isOk: i,
                    idx: this.playIdx,
                  }),
                  this.playNext());
          },
          playNext: function () {
            var t = this;
            (this.isPlay = !1),
              this.playIdx++,
              setTimeout(function () {
                t.isPlay = !0;
              }, 10);
          },
          onChange: function (t) {
            if (!(this.playIdx > 0)) {
              var s = this.playMap[this.playIdx];
              s &&
                ((s.currentTime = (s.duration * t) / 100), (this.isPlay = !0));
            }
          },
          getMaterial: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a, i, n, r;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            t.$toast.loading(),
                            (s.prev = 1),
                            (e = t.$route.query.serNum),
                            (a = void 0 === e ? "L-6-158" : e),
                            (s.next = 5),
                            t.$http.get("bingo", {
                              params: {
                                tableName: "listening_follow",
                                SERIAL_NUMBER: a,
                                attrs: "CONTENT",
                              },
                            })
                          );
                        case 5:
                          (i = s.sent),
                            (n = i.data),
                            (r = n.CONTENT.dictation),
                            (t.sentences = r.sentences),
                            (t.passage = r.passage),
                            (t.audioUrl = r.audiofile),
                            (s.next = 15);
                          break;
                        case 13:
                          (s.prev = 13), (s.t0 = s["catch"](1));
                        case 15:
                          t.$toast.clear();
                        case 16:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[1, 13]]
                );
              })
            )();
          },
        },
      },
      H = F,
      J = (e("2ba9"), Object(I["a"])(H, V, D, !1, null, null, null)),
      W = J.exports,
      G = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [t._v(" d ")]);
      },
      K = [],
      Q = {
        created: function () {
          this.getMaterial();
        },
        methods: {
          getMaterial: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a, i, n;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.prev = 0),
                            (e = t.$route.query.serNum),
                            (a = void 0 === e ? "W-81-2" : e),
                            (s.next = 4),
                            t.$http.get("bingo", {
                              params: {
                                tableName: "writing",
                                SERIAL_NUMBER: a,
                              },
                            })
                          );
                        case 4:
                          (i = s.sent),
                            (n = i.data),
                            console.log(n),
                            (s.next = 11);
                          break;
                        case 9:
                          (s.prev = 9), (s.t0 = s["catch"](0));
                        case 11:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
        },
      },
      X = Q,
      Y = Object(I["a"])(X, G, K, !1, null, null, null),
      Z = Y.exports,
      tt = function () {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", [
          e("div", { staticClass: "panel-1 page-st" }, [
            e("div", { staticClass: "header d-flex al-c pos-s top-0 z-100" }, [
              t._m(0),
              e("div", { staticClass: "ml-auto d-flex al-c act-wrap" }, [
                t.showAnswer
                  ? e(
                      "div",
                      {
                        staticClass: "fz-13 fw-b bg-white pd-5",
                        class: t.okNum >= 3 ? "color-ok" : "red-1",
                      },
                      [
                        t._v(
                          " 正确率：" +
                            t._s(t.okNum) +
                            "/" +
                            t._s(t.sentences.length) +
                            " "
                        ),
                      ]
                    )
                  : e(
                      "span",
                      { staticClass: "mr-10", on: { click: t.onSubmit } },
                      [t._v(" Submit ")]
                    ),
              ]),
            ]),
            e(
              "div",
              { staticClass: "pd-10 bg-white" },
              [
                e("div", { staticClass: "mb-10 fz-14 lh-15" }, [
                  t._v(" " + t._s(t.direction) + " "),
                ]),
                t._l(t.sentences, function (s, a) {
                  return e("div", { key: a, staticClass: "item mb-20 lh-2" }, [
                    e(
                      "div",
                      {},
                      [
                        e("span", { staticClass: "seq-num" }, [
                          t._v(t._s(a + 1)),
                        ]),
                        t._l(s.parts, function (i, n) {
                          return e("span", { key: n }, [
                            e("span", [t._v(t._s(i))]),
                            n < s.parts.length - 1
                              ? e("div", { staticClass: "d-i pos-r" }, [
                                  e("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model.trim",
                                        value: t.dictVal[a],
                                        expression: "dictVal[i]",
                                        modifiers: { trim: !0 },
                                      },
                                    ],
                                    staticClass: "bdb-1",
                                    class: t.showAnswer
                                      ? t.isDictRight(s, a)
                                        ? "color-ok"
                                        : "red-1"
                                      : "",
                                    attrs: {
                                      type: "text",
                                      disabled: t.showAnswer,
                                    },
                                    domProps: { value: t.dictVal[a] },
                                    on: {
                                      input: function (s) {
                                        s.target.composing ||
                                          t.$set(
                                            t.dictVal,
                                            a,
                                            s.target.value.trim()
                                          );
                                      },
                                      blur: function (s) {
                                        return t.$forceUpdate();
                                      },
                                    },
                                  }),
                                ])
                              : t._e(),
                          ]);
                        }),
                      ],
                      2
                    ),
                    t.showAnswer
                      ? e(
                          "div",
                          { staticClass: "mt-10" },
                          [
                            e("div", { staticClass: "fz-12" }, [
                              e("span", { staticClass: "gray" }, [
                                t._v("分数："),
                              ]),
                              e("span", [t._v(t._s(s.score))]),
                            ]),
                            e("div", { staticClass: "fz-12 color-1" }, [
                              t._v("参考答案："),
                            ]),
                            t._l(s.answers, function (s, a) {
                              return e(
                                "p",
                                { key: a, staticClass: "fz-13 color-ok" },
                                [t._v(t._s(s))]
                              );
                            }),
                          ],
                          2
                        )
                      : t._e(),
                  ]);
                }),
              ],
              2
            ),
          ]),
        ]);
      },
      st = [
        function () {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", [
            e("p", { staticClass: "fz-30" }, [t._v("Translation")]),
            e("p", { staticClass: "white-9 mt-5" }, [t._v("句子翻译")]),
          ]);
        },
      ],
      et =
        (e("d3b7"),
        e("07ac"),
        e("6062"),
        e("3ca3"),
        e("498a"),
        e("ddb0"),
        e("2909")),
      at = {
        data: function () {
          return { direction: "", sentences: [], showAnswer: !1, dictVal: [] };
        },
        computed: {
          okNum: function () {
            var t = this;
            return this.sentences.filter(function (s, e) {
              return t.isDictRight(s, e);
            }).length;
          },
        },
        created: function () {
          this.getMaterial();
        },
        methods: {
          isDictRight: function (t, s) {
            var e,
              a = (this.dictVal[s] || "").replace(/\s+/g, " "),
              i = Object(U["a"])(t.answers);
            try {
              for (i.s(); !(e = i.n()).done; ) {
                var n = e.value,
                  r = n
                    .replace(")", ")?")
                    .replace(")? ", " )?")
                    .replace(/\[/g, "(")
                    .replace(/\]/g, ")")
                    .replace(/\//g, "|")
                    .trim(),
                  c = new RegExp(r);
                if (c.test(a)) return (t.score = 10), !0;
              }
            } catch (p) {
              i.e(p);
            } finally {
              i.f();
            }
            var o = t.answers[0],
              l = 0;
            if (a) {
              var u = Object(et["a"])(new Set(a.split(/\s+/)));
              l = u.filter(function (t) {
                return new RegExp("".concat(t)).test(o);
              }).length;
            }
            l > 8 && (l = 8);
            var d = o.replace(/\[[^\]]+\]/, "").split(/\s+/).length;
            return (t.score = parseInt((10 * l) / d)), !1;
          },
          onSubmit: function () {
            this.showAnswer = !0;
          },
          getMaterial: function () {
            var t = this;
            return Object(g["a"])(
              regeneratorRuntime.mark(function s() {
                var e, a, i, n, r;
                return regeneratorRuntime.wrap(
                  function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            t.$toast.loading(),
                            (s.prev = 1),
                            (e = t.$route.query.serNum),
                            (a = void 0 === e ? "ST-2051-2" : e),
                            (s.next = 5),
                            t.$http.get("bingo", {
                              params: {
                                tableName: "material_translation",
                                SERIAL_NUMBER: a,
                                attrs: "ENC_MATERIAL",
                              },
                            })
                          );
                        case 5:
                          (i = s.sent),
                            (n = i.data),
                            (r = n.ENC_MATERIAL.simulation_test.part.items[0]),
                            (t.sentences = r.items.map(function (t) {
                              return (
                                (t.parts = t.sentence.split(/_+/)),
                                (t.answers = Object.values(t.trans)
                                  .filter(function (t) {
                                    return !!t.trim();
                                  })
                                  .map(function (t) {
                                    return t
                                      .replace(/\[\[/g, "[")
                                      .replace(/\]\]/g, "]");
                                  })),
                                t
                              );
                            })),
                            (t.direction = r.directions),
                            (s.next = 14);
                          break;
                        case 12:
                          (s.prev = 12), (s.t0 = s["catch"](1));
                        case 14:
                          t.$toast.clear();
                        case 15:
                        case "end":
                          return s.stop();
                      }
                  },
                  s,
                  null,
                  [[1, 12]]
                );
              })
            )();
          },
        },
      },
      it = at,
      nt = (e("ae12"), Object(I["a"])(it, tt, st, !1, null, null, null)),
      rt = nt.exports;
    m["a"].use(f["a"]);
    var ct = new f["a"]({
        routes: [
          { component: T, path: "/" },
          { component: R, path: "/easy" },
          { component: L, path: "/reading" },
          { component: W, path: "/follow" },
          { component: Z, path: "/writing" },
          { component: rt, path: "/st" },
        ],
      }),
      ot = ct,
      lt = e("bc3a"),
      ut = e.n(lt),
      dt = ut.a.create({ baseURL: "https://tablo.fun/api/v1/media/en" });
    dt.interceptors.response.use(
      function (t) {
        return t;
      },
      function (t) {
        var s = t.response || {},
          e = s.data,
          a = void 0 === e ? {} : e,
          i = s.status,
          n = s.statusText,
          r = a.msg || n || (i ? "".concat(i, "错误") : t.message);
        return r && console.log(r), Promise.reject(t);
      }
    ),
      (m["a"].prototype.$http = dt);
    e("2af9"), e("36d3"), e("157a");
    m["a"].use(p["a"]),
      m["a"].use(d["a"]),
      m["a"].use(u["a"]),
      m["a"].use(l["a"]),
      m["a"].use(o["a"]),
      m["a"].use(c["a"]),
      m["a"].use(r["a"]),
      m["a"].use(n["a"]),
      m["a"].use(i["a"]),
      m["a"].use(a["a"]),
      (m["a"].config.productionTip = !1),
      new m["a"]({
        render: function (t) {
          return t(h["a"]);
        },
        router: ot,
      }).$mount("#app");
  },
});
