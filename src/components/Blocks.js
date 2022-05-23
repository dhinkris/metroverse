import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import { makeStyles } from '@material-ui/core/styles';



export default class Block extends React.Component {
    render() {

        const block_id = this.props.block_id
        return (
            <div style={{ marginTop: "50px" }}>
                {
                    block_id.length>0?
                        block_id.map((item) => {
                            return (<Chip style={{ marginLeft: "10px", height: "50px", marginTop: "10px" }} avatar={<>
                                <a target='_blank' href={`https://metroverse.com/block/${item}`}>
                                    <Avatar src="https://www.gitbook.com/cdn-cgi/image/width=40,height=40,fit=contain,dpr=2,format=auto/https%3A%2F%2F2561342972-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FnOO7748KNXJqs8ZOV3sm%252Ficon%252FfkbMavQMoxhndmJMIHmO%252FyyjhYDpk.png%3Falt%3Dmedia%26token%3Da0344a9b-276f-47de-8bfb-09d5f81e80f2"></Avatar>
                                </a>
                                <a target='_blank' href={`https://opensea.io/assets/ethereum/0x7a1eb86c35136143dda358d4a2d8ac25c4902388/${item}`}>
                                    <Avatar src="https://opensea.io/static/images/logos/opensea.svg"></Avatar>
                                </a>
                            </>} label={item}></Chip>);
                        }): <p></p>
                }
            </div>
        )
    }
}