import React from 'react';
import '../styles/index.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TableComp from './tableComp';

export default class App extends React.Component {

  render() {

    return (
			<MuiThemeProvider>
				<div>
				<AppBar
					title="Mon app"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
				<TableComp/>
				</div>
			</MuiThemeProvider>
    )
  }
}
