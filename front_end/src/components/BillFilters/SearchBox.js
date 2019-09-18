import React, { Component } from 'react';

import "./style.css";

import Search from '@material-ui/icons/Search';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#80bdff",
        },
    },
});

class SearchBox extends Component {
    state = {
    };

    render() {
        return (
            <div className="container toolkit ">
                <div className="row grid-divider ">
                    <div className="col-md-2 vcenter">
                        <div className="left-icon">
                            <ThemeProvider theme={theme}>
                                <Search color='primary' />
                            </ThemeProvider>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="toolbox">
                            <span>Search</span>
                            <input
                                type="text"
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default SearchBox;