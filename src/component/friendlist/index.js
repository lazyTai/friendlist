import React from 'react'
import style from './style.css'
import {a_z} from "./containt";
import {closest, MyMap} from "../../util/lodash";
import {getHeight} from "../../util/uitls";

class FriendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            active_zhimu: "a",
            offsetTopList: [],
            offsetTopList_obj: {}
        };
    };


    scrollEnd() {
        var self = this
        var scrollTop = 0;
        if (!this.main_zhimu) return false
        scrollTop = this.main_zhimu.dataset.scrollTop
        var _a = closest(-scrollTop * 2, this.state.offsetTopList, "offsetTop")
        // console.log(_a, scrollTop* 2)
        setTimeout(() => {
            self.setState({active_zhimu: _a.label})
        }, 200)
    }

    click_zhimu(itemStr) {
        var self = this;
        var scrollTop = this.state.offsetTopList_obj[itemStr]
        setTimeout(() => {
            // self.main_zhimu.style.transform = `translateY(-${scrollTop}px)`
            document.body.scrollTop = scrollTop / 2
            self.setState({active_zhimu: itemStr,})
        }, 300)


    }

    componentDidMount() {
        var self = this;
        var label_zhimus = document.querySelectorAll(".label_zhimu")
        var offsetTopList_obj = {}
        var offsetTopList = []

        document.addEventListener("scroll", function (e) {
            if (!self.state.offsetTopList.length) return false
            if (document.body.scrollTop * 2 > self.state.offsetTopList[self.state.offsetTopList.length - 1].offsetTop) {
                document.body.scrollTop = self.state.offsetTopList[self.state.offsetTopList.length - 1].offsetTop / 2
                return false
            }
            if (self.main_zhimu) {
                self.main_zhimu.style.transform = `translateY(-${document.body.scrollTop}px)`;
                self.main_zhimu.dataset['scrollTop'] = -document.body.scrollTop;
            }
            self.scrollEndTimeout && clearTimeout(self.scrollEndTimeout)
            self.scrollEndTimeout = setTimeout(() => {
                self.scrollEnd()
            }, 250)
        })


        setTimeout(() => {
            MyMap(label_zhimus, item => {
                offsetTopList_obj[item.innerText] = item.offsetTop
                offsetTopList.push({
                    label: item.innerText,
                    offsetTop: item.offsetTop
                })
            })
            self.setState({offsetTopList_obj, offsetTopList})
            self.props.setStore("app.offsetTopList_obj", offsetTopList_obj)
            self.props.setStore("app.offsetTopList", offsetTopList)
        }, 500)
    }

    onClose() {
    }

    renderZhiMu(array, key) {
        var div1 = [<div className={`${style.mainItemLabel} label_zhimu label_${key}`}>{key}</div>]
        var _array = MyMap(array, item1 => {
            return <div className={style.mainItem}>
                {item1.name}
            </div>
        })
        return div1.concat(_array)
    }

    render() {
        debugger
        var self = this
        var active_zhimu = this.state.active_zhimu
        return <section className={style.body} ref={(node) => this.body = node}>
            <div className={style.main} id={"main_zhimu"}
                 ref={(node) => this.main_zhimu = node}>
                {
                    MyMap(this.props.data, (item, key) => {
                        return self.renderZhiMu(item, key)
                    })
                }

            </div>
            <div className={style.right}>
                {
                    a_z.map(item => {
                        return <div className={`${style.rigthItem}
                        ${active_zhimu == item ? style.active : ''}`}
                                    onClick={this.click_zhimu.bind(this, item)}
                        >{item}</div>
                    })
                }
            </div>
        </section>
    }
}

FriendList.defaultProps = {
    data: require("./mockdata").default
}
export default FriendList