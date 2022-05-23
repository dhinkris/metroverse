import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/material/Box';

export default class Tags extends React.Component {
    state={
        selected_boost: ''
    }

    handleChange=(event, value)=>{
        this.setState({selected_boost: value});
    }

    handleSearch=()=>{
        let boosts=[]
        this.state.selected_boost.map((_boost)=>{
            boosts.push(_boost['title'])
        })
        if ((boosts.length)>0){
            this.props.handleSearch(boosts)
        }
    }

    handleClear=()=>{
        this.props.handleClear()
    }
    render() {
        
        return (
            <>
                <Stack spacing={3} sx={{ width: "100%", marginTop: "50px", }}>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    filterSelectedOptions
                    onChange={this.handleChange}
                    groupBy={(option) => option.group}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                          <img
                            loading="lazy"
                            width="20"
                            src={option.img_src}
                            srcSet={option.img_src}
                            alt=""
                          />
                          {option.title}
                        </Box>
                      )}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            
                            label="select boosts"
                            placeholder="Boosts"
                        ></TextField>
                    )}
                />
                </Stack>
                <Button sx={{  marginTop: "50px", }}   color="primary"  variant="contained" onClick={this.handleSearch}>
                    Search
                </Button>
                <Button sx={{  marginTop: "50px", }}   color="primary" onClick={this.handleClear}>
                    Clear all
                </Button>
            </>
            
        );
    }


}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    {'title':'Football Stadium', 'img_src':'../media/icon_sports_safety_active.437d05c3.png', 'group':'Sports'},
    {'title':'Baseball Stadium', 'img_src':'../media/icon_sports_safety_active.437d05c3.png', 'group':'Sports'},
    {'title':'Soccer Stadium', 'img_src':'../media/icon_sports_safety_active.437d05c3.png', 'group':'Sports'},
    {'title':'Wind Farm', 'img_src':'../media/icon_power_safety_active.fa2744a6.png', 'group':'Energy'},
    {'title':'Solar Farm', 'img_src':'../media/icon_power_safety_active.fa2744a6.png', 'group':'Energy'},
    {'title':'Nuclear Power Plant', 'img_src':'../media/icon_power_safety_active.fa2744a6.png', 'group':'Energy'},
    {'title':'Rocket Launch Site', 'img_src':'../media/icon_technology_safety_active.95a48ef7.png', 'group':'Tech'},
    {'title':'Crypto Mining Facility', 'img_src':'../media/icon_technology_safety_active.95a48ef7.png', 'group':'Tech'},
    {'title':'UnbelieVALTable', 'img_src':'../media/icon_technology_safety_active.95a48ef7.png', 'group':'Tech'},
    {'title':'School', 'img_src':'../media/icon_bonus_education_active.d9343487.png', 'group':'Education'},
    {'title':'University', 'img_src':'../media/icon_bonus_education_active.d9343487.png', 'group':'Education'},
    {'title':'Town Hall', 'img_src':'../media/icon_bonus_education_active.d9343487.png', 'group':'Education'},
    {'title':'Cylinder Mansion', 'img_src':'../media/icon_mansion_safety_active.51f566df.png', 'group':'Mansion'},
    {'title':'Organic Mansion', 'img_src':'../media/icon_mansion_safety_active.51f566df.png', 'group':'Mansion'},
    {'title':'Winter Mega-Mansion', 'img_src':'../media/icon_mansion_safety_active.51f566df.png', 'group':'Mansion'},
    {'title':'METPOT CASINO', 'img_src':'../media/icon_entertainment_safety_active.aafb04cd.png', 'group':'Entertainment'},
    {'title':'Wildlife Waystation', 'img_src':'../media/icon_entertainment_safety_active.aafb04cd.png', 'group':'Entertainment'},
    {'title':'Circ-o-verse', 'img_src':'../media/icon_entertainment_safety_active.aafb04cd.png', 'group':'Entertainment'},
    {'title':'Cemetery', 'img_src':'../media/icon_bonus_odds_active.838ed4c7.png', 'group':'Odds'},
    {'title':'ETHRASH', 'img_src':'../media/icon_bonus_odds_active.838ed4c7.png', 'group':'Odds'},
    {'title':'Sewage Treatment', 'img_src':'../media/icon_bonus_odds_active.838ed4c7.png', 'group':'Odds'},
    {'title':'Hospital', 'img_src':'../media/icon_bonus_safety_active.8080e503.png', 'group':'Safety'},
    {'title':'Police Station', 'img_src':'../media/icon_bonus_safety_active.8080e503.png', 'group':'Safety'},
    {'title':'Fire Station', 'img_src':'../media/icon_bonus_safety_active.8080e503.png', 'group':'Safety'},
    {'title':'Bus Stop', 'img_src':'../media/icon_bonus_transparent_active.dafc84a8.png', 'group':'Transport'},
    {'title':'Subway Station', 'img_src':'../media/icon_bonus_transparent_active.dafc84a8.png', 'group':'Transport'},
    {'title':'Metaxi Station', 'img_src':'../media/icon_bonus_transparent_active.dafc84a8.png', 'group':'Transport'},
    {'title':'Metroverse Theatre', 'img_src':'../media/icon_cultural_safety_active.723a9102.png', 'group':'Cultural'},
    {'title':'Metroverse Museum', 'img_src':'../media/icon_cultural_safety_active.723a9102.png', 'group':'Cultural'},
    {'title':'Metcinema', 'img_src':'../media/icon_cultural_safety_active.723a9102.png', 'group':'Cultural'},
    {'title':'Double Rail', 'img_src':'../media/icon_bonus_river_active.45e4764a.png', 'group':'Railway'},
    {'title':'Double River', 'img_src':'../media/icon_bonus_river_active.45e4764a.png', 'group':'River'},
]
