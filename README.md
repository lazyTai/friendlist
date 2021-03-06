##效果如下
![image.png](https://upload-images.jianshu.io/upload_images/3767836-c1901ef537e7d3ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![结果](https://upload-images.jianshu.io/upload_images/3767836-92179f107293c85e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#####结果是：
左侧和右侧
滚动左侧，右侧会指引
点击右侧，左侧会跳转

##html分布
```
//简单版本
<div class="main">左主要 ...</div>
<div class="right">右指引</div>  
```
![image.png](https://upload-images.jianshu.io/upload_images/3767836-ccd8dd13b17f7949.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


> 提示：请记住这个名字，main，label，mainItem,rightItem

```
//左主要 简单版本

<div class="main">
  <div class="label">a</div>
  <div class="mainItem">a1</div>
  <div class="mainItem">a2</div>
...
</div>
```
```
//具体代码
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
```
```
  renderZhiMu(array, key) {
        var div1 = [<div className={`${style.mainItemLabel} label_zhimu label_${key}`}>{key}</div>]
        var _array = MyMap(array, item1 => {
            return <div className={style.mainItem}>
                {item1.name}
            </div>
        })
        return div1.concat(_array)
    }
```

html部分完毕
继续是js部分
##js思路
##初始化，得到数据先
数据格式
1.data1需要显示的数据
```
{"a":[{"id":"a1","name":"a1"},{"id":"a2","name":"a2"},{"id":"a3","name":"a3"},{"id":"a4","name":"a4"}],"b":[{"id":"b1","name":"b1"},{"id":"b2","name":"b2"},{"id":"b3","name":"b3"},{"id":"b4","name":"b4"},{"id":"b5","name":"b5"},{"id":"b6","name":"b6"},{"id":"b7","name":"b7"},{"id":"b8","name":"b8"}],"c":[{"id":"c1","name":"c1"},{"id":"c2","name":"c2"},{"id":"c3","name":"c3"},{"id":"c4","name":"c4"},{"id":"c5","name":"c5"},{"id":"c6","name":"c6"},{"id":"c7","name":"c7"},{"id":"c8","name":"c8"}],"d":[{"id":"d1","name":"d1"},{"id":"d2","name":"d2"},{"id":"d3","name":"d3"},{"id":"d4","name":"d4"},{"id":"d5","name":"d5"},{"id":"d6","name":"d6"},{"id":"d7","name":"d7"},{"id":"d8","name":"d8"}],"e":[{"id":"e1","name":"e1"},{"id":"e2","name":"e2"},{"id":"e3","name":"e3"},{"id":"e4","name":"e4"},{"id":"e5","name":"e5"},{"id":"e6","name":"e6"},{"id":"e7","name":"e7"},{"id":"e8","name":"e8"}],"f":[{"id":"f1","name":"f1"},{"id":"f2","name":"f2"},{"id":"f3","name":"f3"},{"id":"f4","name":"f4"},{"id":"f5","name":"f5"},{"id":"f8","name":"f8"}],"g":[{"id":"g1","name":"g1"},{"id":"g2","name":"g2"},{"id":"g3","name":"g3"},{"id":"g4","name":"g4"},{"id":"g5","name":"g5"},{"id":"g6","name":"g6"},{"id":"g7","name":"g7"},{"id":"g8","name":"g8"}],"h":[{"id":"h1","name":"h1"},{"id":"h2","name":"h2"},{"id":"h3","name":"h3"},{"id":"h5","name":"h5"},{"id":"h6","name":"h6"},{"id":"h7","name":"h7"},{"id":"h8","name":"h8"}],"i":[{"id":"i1","name":"i1"},{"id":"i2","name":"i2"},{"id":"i3","name":"i3"},{"id":"iundefined","name":"iundefined"},{"id":"i6","name":"i6"},{"id":"i7","name":"i7"},{"id":"i8","name":"i8"}],"j":[{"id":"j1","name":"j1"},{"id":"j2","name":"j2"},{"id":"j3","name":"j3"},{"id":"j4","name":"j4"},{"id":"j5","name":"j5"},{"id":"j6","name":"j6"},{"id":"j7","name":"j7"},{"id":"j8","name":"j8"}],"k":[{"id":"k1","name":"k1"},{"id":"k2","name":"k2"},{"id":"k3","name":"k3"},{"id":"k4","name":"k4"},{"id":"k5","name":"k5"},{"id":"k6","name":"k6"},{"id":"k7","name":"k7"},{"id":"k8","name":"k8"}],"l":[{"id":"l1","name":"l1"},{"id":"l2","name":"l2"},{"id":"l3","name":"l3"},{"id":"l4","name":"l4"},{"id":"l5","name":"l5"},{"id":"lundefined","name":"lundefined"},{"id":"l8","name":"l8"}],"m":[{"id":"m1","name":"m1"},{"id":"m2","name":"m2"},{"id":"m3","name":"m3"},{"id":"m4","name":"m4"},{"id":"m5","name":"m5"},{"id":"m7","name":"m7"},{"id":"m8","name":"m8"}],"n":[{"id":"n1","name":"n1"},{"id":"n2","name":"n2"},{"id":"n3","name":"n3"},{"id":"n4","name":"n4"},{"id":"n5","name":"n5"},{"id":"n6","name":"n6"},{"id":"n7","name":"n7"},{"id":"n8","name":"n8"}],"o":[{"id":"o1","name":"o1"},{"id":"o2","name":"o2"},{"id":"o3","name":"o3"},{"id":"o4","name":"o4"},{"id":"o5","name":"o5"},{"id":"o6","name":"o6"},{"id":"o7","name":"o7"},{"id":"o8","name":"o8"}],"p":[{"id":"p1","name":"p1"},{"id":"p2","name":"p2"},{"id":"p3","name":"p3"},{"id":"p6","name":"p6"},{"id":"p7","name":"p7"},{"id":"p8","name":"p8"}],"q":[{"id":"q1","name":"a1"},{"id":"q2","name":"a2"},{"id":"q3","name":"a3"},{"id":"q4","name":"a4"},{"id":"q5","name":"a5"},{"id":"q6","name":"a6"},{"id":"q7","name":"a7"},{"id":"q8","name":"a8"}],"r":[{"id":"r1","name":"r1"},{"id":"r2","name":"r2"}],"s":[{"id":"s1","name":"s1"},{"id":"s2","name":"s2"},{"id":"s3","name":"s3"},{"id":"s4","name":"s4"},{"id":"s5","name":"s5"},{"id":"s6","name":"s6"},{"id":"s7","name":"s7"},{"id":"s8","name":"s8"}],"t":[{"id":"t1","name":"t1"},{"id":"t2","name":"t2"},{"id":"t3","name":"t3"},{"id":"t4","name":"t4"},{"id":"t5","name":"t5"},{"id":"t8","name":"t8"}],"u":[{"id":"u1","name":"u1"},{"id":"u2","name":"u2"},{"id":"u3","name":"u3"},{"id":"u4","name":"u4"},{"id":"u5","name":"u5"},{"id":"u6","name":"u6"},{"id":"u7","name":"u7"},{"id":"u8","name":"u8"}],"v":[{"id":"v1","name":"v1"},{"id":"v2","name":"v2"},{"id":"v3","name":"v3"},{"id":"v4","name":"v4"},{"id":"v5","name":"v5"},{"id":"v6","name":"v6"},{"id":"v7","name":"v7"},{"id":"v8","name":"v8"}],"w":[{"id":"w1","name":"w1"},{"id":"w2","name":"w2"},{"id":"w3","name":"w3"},{"id":"w7","name":"w7"},{"id":"w8","name":"w8"}],"x":[{"id":"x1","name":"x1"},{"id":"x2","name":"x2"},{"id":"x3","name":"x3"},{"id":"x4","name":"x4"},{"id":"x5","name":"x5"},{"id":"x6","name":"x6"},{"id":"x7","name":"x7"},{"id":"x8","name":"x8"}],"y":[{"id":"y1","name":"y1"},{"id":"y2","name":"y2"},{"id":"y3","name":"y3"},{"id":"y7","name":"y7"},{"id":"y8","name":"y8"}],"z":[{"id":"z1","name":"z1"},{"id":"z2","name":"z2"},{"id":"z7","name":"z7"},{"id":"z8","name":"z8"}]}
```
2.data2每个字母的label所在的offsetTop是多少
```
[{"label":"a","offsetTop":0},{"label":"b","offsetTop":260},{"label":"c","offsetTop":760},{"label":"d","offsetTop":1260},{"label":"e","offsetTop":1760},{"label":"f","offsetTop":2260},{"label":"g","offsetTop":2640},{"label":"h","offsetTop":3140},{"label":"i","offsetTop":3580},{"label":"j","offsetTop":4020},{"label":"k","offsetTop":4520},{"label":"l","offsetTop":5020},{"label":"m","offsetTop":5460},{"label":"n","offsetTop":5900},{"label":"o","offsetTop":6400},{"label":"p","offsetTop":6900},{"label":"q","offsetTop":7280},{"label":"r","offsetTop":7780},{"label":"s","offsetTop":7920},{"label":"t","offsetTop":8420},{"label":"u","offsetTop":8800},{"label":"v","offsetTop":9300},{"label":"w","offsetTop":9800},{"label":"x","offsetTop":10120},{"label":"y","offsetTop":10620},{"label":"z","offsetTop":10940}]
```
##js主要事件
我们需要处理2个事件也就是2个功能
第一：main滚动的时候，让rightItem跟着显示
第二：点击rightItem的时候，让main滚动到相应的位置
分来来说
第一：监听body滚动结束事件，结束的时候，得到body的scrollTop(滚动距离)
然后和data2匹配，找到offsetTop和scrollTop差距最小的那个数据

第二：点击rightItem事件,和data2匹配得到scrollTop，设置body.scrollTop

下面是github:
