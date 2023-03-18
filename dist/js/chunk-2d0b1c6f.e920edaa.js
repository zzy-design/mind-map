(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1c6f"],{"20fa":function(s,v,e){"use strict";e.r(v);var i=function(){var s=this;s._self._c;return s._m(0)},_=[function(){var s=this,v=s._self._c;return v("div",[v("h1",[s._v("AssociativeLine 插件")]),v("blockquote",[v("p",[s._v("v0.4.5+")])]),v("p",[s._v("该插件用于支持添加关联线。")]),v("p",[s._v("该插件目前功能比较简陋，不支持修改关联线的控制点，不支持在关联线上添加文字。")]),v("h2",[s._v("注册")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MindMap "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map'")]),s._v("\n"),v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" AssociativeLine "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/AssociativeLine.js'")]),s._v("\n\nMindMap.usePlugin(AssociativeLine)\n")])]),v("p",[s._v("注册完且实例化"),v("code",[s._v("MindMap")]),s._v("后可通过"),v("code",[s._v("mindMap.associativeLine")]),s._v("获取到该实例。")]),v("h2",[s._v("配置")]),v("p",[s._v("支持修改关联线的粗细和颜色，分为默认状态和激活状态。配置如下：")]),v("ul",[v("li",[v("p",[v("code",[s._v("associativeLineWidth")]),s._v("：关联线默认状态的粗细，默认值为"),v("code",[s._v("2")])])]),v("li",[v("p",[v("code",[s._v("associativeLineColor")]),s._v("：关联线默认状态的颜色，默认值为"),v("code",[s._v("rgb(51, 51, 51)")])])]),v("li",[v("p",[v("code",[s._v("associativeLineActiveWidth")]),s._v("：关联线激活状态的粗细，默认值为"),v("code",[s._v("8")])])]),v("li",[v("p",[v("code",[s._v("associativeLineActiveColor")]),s._v("：关联线激活状态的颜色，默认值为"),v("code",[s._v("rgba(2, 167, 240, 1)")])])])]),v("p",[s._v("配置以主题的方式提供，所以如果想要修改这四个属性，可以通过"),v("code",[s._v("mindMap.setThemeConfig(config)")]),s._v("方法进行修改。")]),v("h2",[s._v("属性")]),v("h3",[s._v("mindMap.associativeLine.lineList")]),v("p",[s._v("当前所有连接线数据，数组类型，数组的每一项也是一个数组：")]),v("pre",{staticClass:"hljs"},[v("code",[s._v("[\n    path, "),v("span",{staticClass:"hljs-comment"},[s._v("// 连接线节点")]),s._v("\n    clickPath, "),v("span",{staticClass:"hljs-comment"},[s._v("// 不可见的点击线节点")]),s._v("\n    node, "),v("span",{staticClass:"hljs-comment"},[s._v("// 起始节点")]),s._v("\n    toNode "),v("span",{staticClass:"hljs-comment"},[s._v("// 目标节点")]),s._v("\n]\n")])]),v("h3",[s._v("mindMap.associativeLine.activeLine")]),v("p",[s._v("当前激活的连接线，数组类型，同"),v("code",[s._v("lineList")]),s._v("数组的每一项的结构。")]),v("h2",[s._v("方法")]),v("h3",[s._v("renderAllLines()")]),v("p",[s._v("重新渲染所有关联线。")]),v("h3",[s._v("removeAllLines()")]),v("p",[s._v("移除所有关联线。")]),v("h3",[s._v("createLineFromActiveNode()")]),v("p",[s._v("从当前激活节点开始创建关联线，如果有多个激活节点，默认为第一个节点。")]),v("p",[s._v("调用该方法后，会从第一个激活节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在第一个激活节点和点击节点之间渲染一条关联线。")]),v("h3",[s._v("createLine(fromNode)")]),v("p",[s._v("从指定节点开始创建关联线。")]),v("p",[s._v("调用该方法后，会从指定节点到当前鼠标实时位置渲染一条关联线，当点击某个目标节点后则代表创建完成，会在指定节点和点击节点之间渲染一条关联线。")]),v("h3",[s._v("addLine(fromNode, toNode)")]),v("p",[s._v("直接添加一条关联线。")]),v("p",[s._v("调用该方法，会直接创建一条从"),v("code",[s._v("fromNode")]),s._v("到"),v("code",[s._v("toNode")]),s._v("节点的关联线。")]),v("h3",[s._v("removeLine()")]),v("p",[s._v("删除当前激活的关联线。点击某条关联线则视为激活。")]),v("h3",[s._v("clearActiveLine()")]),v("p",[s._v("清除当前激活的关联线的激活状态。")])])}],a={},n=a,t=e("2877"),o=Object(t["a"])(n,i,_,!1,null,null,null);v["default"]=o.exports}}]);