import React from 'react'
import Board from './Board'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
    render() {
      const style = {
        fontFamily:'Prompt'

      };
        return (
          <div style= {style}>
          <MuiThemeProvider>
            <Board/>
          </MuiThemeProvider>
          </div>
        );
    }
}

export default App;
