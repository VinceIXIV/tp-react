import React from 'react';
import '../styles/index.scss';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  render() {
    return (
			<MuiThemeProvider>
				<AppBar
					title="Mon app"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</MuiThemeProvider>
    )
  }
}
