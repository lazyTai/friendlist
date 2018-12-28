import io from 'socket.io-client';
import * as axios from "axios";
import {__API__} from "../constants";
import {max, min} from "./lodash";

var _io = null

export function getSocket(me, you) {
    _io = io('http://192.168.1.101:9010');
    _io.on('connection', (meg) => {
        if (meg) {
            console.log("socket is connect")
            getSomeOneConnect(me, you)
        }

    });
    return _io
}

export function getSomeOneConnect(me_id, you_id) {
    return axios.post(`${__API__}/talk/create-uniq-connect`, {
        me_id, you_id
    })
}

export function sendMessageIO(me_id, you_id, message) {
    return new Promise(resolve => {
        _io.emit(createIOuuid(me_id, you_id), {message}, function (res) {
            return resolve(res)
        })
    })
}

export function createIOuuid(me, you) {
    var _max = max(me, you)
    var _min = min(me, you)
    return _max + "_" + _min
}