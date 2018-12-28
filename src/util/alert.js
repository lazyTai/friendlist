import {ActivityIndicator, Modal, Toast} from "antd-mobile"

import Loading from './load/index'


const alert = Modal.alert;
const MyAlert1 = {}

MyAlert1.success = (str) => {
    Toast.success(str, 1)
}
MyAlert1.fail = (str) => {
    Toast.fail(str, 1)
}
MyAlert1.loading = () => {
    MyAlert1._loading = Loading({})
    setTimeout(() => {
        MyAlert1._loading.close()
    }, 1000 * 10)
}
MyAlert1.confirm = (str) => {
    return new Promise((resolve, reject) => {
        alert('标题', str, [
            {text: '取消', onPress: () => resolve({success: false})},
            {text: '确定', onPress: () => resolve({success: true})},
        ]);
    })
}
MyAlert1.clear = () => {
    MyAlert1._loading.close()
    Toast.hide()
}

export default MyAlert1