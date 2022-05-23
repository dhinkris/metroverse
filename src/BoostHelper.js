import search_blocks  from './search';
import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import SearchBoost from './components/SearchBoost';
import Blocks from './components/Blocks';
class BoostHelper extends React.Component {
    state={
        block_id:[]
    }
    handleSearch=async (boosts)=>{
        const block_id=await search_blocks(boosts)
        this.setState({block_id})
    }
    render() {
        const block_id = this.state
        return (
            <div>
                <MenuAppBar/>
                <SearchBoost handleSearch={this.handleSearch} />
                <Blocks  {...block_id}/>
            </div>
        )
    }
}

export default BoostHelper