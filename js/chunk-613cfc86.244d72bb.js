(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-613cfc86"],{6918:function(a,e,t){"use strict";t("f57a")},b50c:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-tabs",{on:{"tab-click":a.handleClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"Данные",name:"data"}},[a._v("Данных нет")]),t("el-tab-pane",{attrs:{label:"Документы",name:"docs"}},[a._v("Данных нет")]),t("el-tab-pane",{attrs:{label:"Контакты",name:"contacts"}},[a._v("Данных нет")]),t("el-tab-pane",{attrs:{label:"Тарифы",name:"tar"}},[t("Tariffs")],1),t("el-tab-pane",{attrs:{label:"Арбитраж",name:"arb"}},[a._v("Данных нет")])],1)},r=[],n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("el-row",[t("div",{staticStyle:{padding:"15px 0","font-size":"13px"}},[a._v("Цены")]),t("div",[t("el-radio-group",{on:{change:a.handleClick},model:{value:a.radio1,callback:function(e){a.radio1=e},expression:"radio1"}},[t("el-radio-button",{attrs:{label:"Для клиента"}}),t("el-radio-button",{attrs:{label:"Для водителя"}})],1)],1)]),t("el-row",[t("div",{staticStyle:{padding:"15px 0","font-size":"13px"}},[a._v("Вид расчета")]),t("div",[t("el-radio-group",{on:{change:a.handleClick},model:{value:a.radio2,callback:function(e){a.radio2=e},expression:"radio2"}},[t("el-radio-button",{attrs:{label:"По ставке"}}),t("el-radio-button",{attrs:{label:"По часам"}}),t("el-radio-button",{attrs:{label:"По точкам"}}),t("el-radio-button",{attrs:{label:"Км + мин"}}),t("el-radio-button",{attrs:{label:"Грузчики"}})],1)],1)]),t("el-row",[t("div",{staticStyle:{padding:"15px 0","font-size":"13px"}},[a._v("Тип будки")]),t("div",[t("el-radio-group",{on:{change:a.handleClick},model:{value:a.radio3,callback:function(e){a.radio3=e},expression:"radio3"}},[t("el-radio-button",{attrs:{label:"Тент"}}),t("el-radio-button",{attrs:{label:"Промтовары"}}),t("el-radio-button",{attrs:{label:"Изотерма"}}),t("el-radio-button",{attrs:{label:"Реф"}})],1)],1)]),t("div",{staticClass:"table"},[t("el-row",[t("div",{staticStyle:{padding:"15px 0","font-size":"13px"}},[a._v("Оптимальные цены")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"date",align:"center",label:"Тоннаж ТС",width:"100"}}),t("el-table-column",{attrs:{prop:"name",align:"center",label:"Тип ТС",width:"80"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Мин-но / мах часов в ставке"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Подача ТС"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Экспедир."}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Тариф по ставке"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Переработка за час"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Гидроборт"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Въезд ТТК, МОЖД"}}),t("el-table-column",{attrs:{align:"center",label:"Километраж за МКАД"}},[t("el-table-column",{attrs:{prop:"address",align:"center",label:"Границы"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Стоимость"}})],1),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Ручная разгрузка"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Перегруз"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Платная парковка"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Инкасация"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Водитель-Грузчик за час"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Водитель Грузчк время"}})],1)],1),t("el-row",[t("div",{staticStyle:{padding:"15px 0","font-size":"13px","margin-top":"20px"}},[a._v("Минимально возможные цены")]),t("el-table",{staticStyle:{width:"100%"},attrs:{data:a.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"date",align:"center",label:"Тоннаж ТС",width:"100"}}),t("el-table-column",{attrs:{prop:"name",align:"center",label:"Тип ТС",width:"80"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Мин-но / мах часов в ставке"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Подача ТС"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Экспедир."}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Тариф по ставке"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Переработка за час"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Гидроборт"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Въезд ТТК, МОЖД"}}),t("el-table-column",{attrs:{align:"center",label:"Километраж за МКАД"}},[t("el-table-column",{attrs:{prop:"address",align:"center",label:"Границы"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Стоимость"}})],1),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Ручная разгрузка"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Перегруз"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Платная парковка"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Инкасация"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Водитель-Грузчик за час"}}),t("el-table-column",{attrs:{prop:"address",align:"center",label:"Водитель Грузчк время"}})],1)],1)],1),t("el-divider"),t("el-button",{staticClass:"button--save"},[a._v(" Сохранить изменения ")])],1)},s=[],d={name:"Tariffs",data:function(){return{radio1:"Для клиента",radio2:"По часам",radio3:"Тент",tableData:[],tableDataCopy:[{date:"2016-05-03",name:"Александр",address:"Москва"},{date:"2016-05-02",name:"Антон",address:"Ленинград"},{date:"2016-05-04",name:"Tom",address:"Берлин"},{date:"2016-05-01",name:"Raul",address:"Дамаск"}],newTableDataCopy:[{date:"2020-05-03",name:"Евгений",address:"Москва"},{date:"2020-05-02",name:"Александр",address:"Ленинград"},{date:"2020-05-04",name:"Наталья",address:"Берлин"},{date:"2020-05-01",name:"Софья",address:"Дамаск"},{date:"2020-05-10",name:"Нина",address:"Омск"}],newTableDataCopy2:[{date:"2019-05-03",name:"Арсаманян",address:"Калуга"},{date:"2019-05-02",name:"Алмет",address:"Астана"},{date:"2019-05-04",name:"Курнар",address:"Париж"},{date:"2019-05-01",name:"Анатолий",address:"Гаваи"},{date:"2019-05-10",name:"Ахмед",address:"Тундра"}],newTableDataCopy3:[{date:"2018-05-03",name:"Таканян",address:"Оренбург"},{date:"2018-05-02",name:"Хомит",address:"Владивосток"},{date:"2018-05-04",name:"Михаил",address:"Томск"},{date:"2018-05-01",name:"Светлана",address:"Астана"},{date:"2018-05-10",name:"Дурбас",address:"грозный"}],newTableDataCopy4:[{date:"2017-05-03",name:"Николая",address:"Киев"},{date:"2017-05-02",name:"ольга",address:"Амстердам"},{date:"2017-05-04",name:"Кухнай",address:"Дейли"},{date:"2017-05-01",name:"Марк",address:"Брянск"},{date:"2017-05-10",name:"Нина",address:"Люберцы"}]}},created:function(){this.tableData=this.tableDataCopy,this.handleClick("По часам")},methods:{handleClick:function(a){switch(a){case"По ставке":this.tableData=this.tableDataCopy;break;case"По часам":this.tableData=this.newTableDataCopy;break;case"По точкам":this.tableData=this.newTableDataCopy2;break;case"Км + мин":this.tableData=this.newTableDataCopy3;break;case"Грузчики":this.tableData=this.newTableDataCopy4;break}}}},o=d,i=(t("6918"),t("2877")),b=Object(i["a"])(o,n,s,!1,null,null,null),c=b.exports,p={components:{Tariffs:c},name:"Tabs",data:function(){return{activeName:"tar"}},methods:{handleClick:function(a,e){console.log(a,e)}}},u=p,m=Object(i["a"])(u,l,r,!1,null,null,null);e["default"]=m.exports},f57a:function(a,e,t){}}]);
//# sourceMappingURL=chunk-613cfc86.244d72bb.js.map