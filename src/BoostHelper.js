import search_blocks from './search';
import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import SearchBoost from './components/SearchBoost';
import Blocks from './components/Blocks';
import ColorChips from './components/Coffee';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
class BoostHelper extends React.Component {
    state = {
        block_id: []
    }
    handleSearch = async (boosts) => {
        const block_id = await search_blocks(boosts)
        this.setState({ block_id })
    }
    handleClear=()=>{
        this.setState({ block_id:[] })
    }
    render() {
        const block_id = this.state
        return (
            <>
                <MenuAppBar />
                <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 2">
                    {/* <Item>xs=8</Item> */}
                </Box>
                <Box gridColumn="span 8">
                    <div style={{ display: 'flex' }}>
                        <div style={{ flexGrow: 1 }}>
                            <h5 style={{marginTop: "60px"}}> Disclaimer: This search feature is based on block info from 20000 to 51407. More info will be update hopefully by end of the day.
                            <br/><br/>
                            This website/search function is not affiliated or developed by the Metroverse team. It is a community driven project created to help fellow Metizens.
                            
                            Neither I, nor the Metroverse team, shall be held responsible for any purchases made using the information available on this site.</h5>
                            <SearchBoost handleSearch={this.handleSearch} handleClear={this.handleClear} />
                            
                            <Blocks  {...block_id} />
                            <ColorChips />
                        </div>
                    </div>
                </Box>
                <Box gridColumn="span 2">
                    {/* <Item>xs=4</Item> */}
                </Box>
                </Box>
            </>
        )
    }
}

export default BoostHelper