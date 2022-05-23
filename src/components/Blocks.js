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
                                    <Avatar src="https://metroverse.com/favicon.ico"></Avatar>
                                </a>
                                <a target='_blank' href={`https://opensea.io/assets/ethereum/0x7a1eb86c35136143dda358d4a2d8ac25c4902388/${item}`}>
                                    <Avatar src="https://opensea.io/favicon.ico"></Avatar>
                                </a>
                            </>} label={item}></Chip>);
                        }): <p>No data available. Try searching a combo!</p>
                }
            </div>
        )
    }
}