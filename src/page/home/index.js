import React from 'react';
import styles from './style.css'
import {getHistory} from "../../util/uitls";
import pageRedux from '../pageRedux'
import FriendList from "../../component/friendlist";

export class Home extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    componentDidMount() {

    }


    render() {
        var self = this
        return <div title="通讯录">
       {/*     <div style={{height: 200}}>
                hello
            </div>*/}
            <FriendList {...this.props}/>
        </div>
    }
}


export default pageRedux(Home)