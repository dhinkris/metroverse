import React from 'react';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export default class Block extends React.Component {
    render() {

        const selected_boosts = this.props.selected_boosts
        return (
            <div style={{ marginTop: "50px" }}>
                Selected Boosts: 
                {
                    selected_boosts.length > 0 ?
                        selected_boosts.map((item) => {
                            return (<Chip style={{ marginLeft: "10px" }} label={item} variant='outlined'></Chip>);
                        }) : <h5>No data available. Try searching a combo!

                        </h5>
                }
            </div>
        )
    }
}