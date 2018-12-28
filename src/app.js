// galobel css
import "./style/index.css"

/**
 * @type {Object}
 * @desc dva
 * */
import dva from 'dva';
import React from 'react';
// To set the default locale of moment to zh-cn globally.
import moment from 'moment';
import 'moment/locale/zh-cn';
/**
 * @type {Object}
 * @desc routes所有的一级路由
 * */
import routes from './route/index'
import {createBrowserHistory as createHistory} from 'history';
//axios 拦截器 ，全局有效
import "../src/api/index.js"

/**
 * #主入口
 * @description 主入口
 *
 * */

moment.locale('zh-cn');


/**
 * @type {React.Component}
 * @example app.start("#root");
 * */
var app = null;

app = dva({
    history: createHistory(),
    onError(error) {
        // message.destroy();
        // message.error(error.message);
        console.error(error.message)
    },
});
// app = dva({});
app.model(require('./model/app').default);

app.router(routes);

app.start("#root");

if (module.hot) {
    app.start("#root");
    module.hot.accept();
} else {
    throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/*提示配置*/

window.cc = (value) => {
    if (value instanceof HTMLElement) {
        /*如果是图片，在浏览器显示*/
        if (value.nodeName.toLowerCase() === 'img') {
            console.log("%c", `padding:${value.width}px ${value.height}px;line-height:${value.height}px;background:url('${value.src}') no-repeat;`);
        } else {
            console.log(JSON.stringify(value, null, 2));
        }

    } else {
        console.log(JSON.stringify(value, null, 2));
    }
};
export default app;