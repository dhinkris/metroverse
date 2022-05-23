import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

        this.props.handleSearch(boosts)
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
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="select boosts"
                            placeholder="Favorites"
                        />
                    )}
                />
                </Stack>
                <Button sx={{  marginTop: "50px", }}  variant="contained" color="primary" onClick={this.handleSearch}>
                    Search
                </Button>
            </>
            
        );
    }


}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [{'title':'Football Stadium'},
{'title':'Baseball Stadium'},
{'title':'Soccer Stadium'},
{'title':'Wind Farm'},
{'title':'Solar Farm'},
{'title':'Nuclear Power Plan'},
{'title':'Rocket Launch Site'},
{'title':'Crypto Mining Facility'},
{'title':'UnbelieVALTable'},
{'title':'School'},
{'title':'University'},
{'title':'Town Hall'},
{'title':'Cylinder Mansion'},
{'title':'Organic Mansion'},
{'title':'Winter Mega-Mansion'},
{'title':'METPOT CASINO'},
{'title':'Wildlife Waystation'},
{'title':'Circ-o-verse'},
{'title':'Cemetery'},
{'title':'ETHRASH'},
{'title':'Sewage Treatment'},
{'title':'Hospital'},
{'title':'Police Station'},
{'title':'Fire Station'},
{'title':'Bus Stop'},
{'title':'Subway Station'},
{'title':'Metaxi Station'},
{'title':'Metroverse Theatre'},
{'title':'Metroverse Museum'},
{'title':'Metcinema'},
{'title':'Double Rail'},
{'title':'Double Rail'},
{'title':'Double Rail'},
{'title':'Double River'},
{'title':'Double River'},
{'title':'Double River'}]
