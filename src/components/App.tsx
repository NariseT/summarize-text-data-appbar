import * as React from 'react';
import AppBarIcon from './AppBarIcon';
import FileDropzoneContainer from '../containers/FileDropzoneContainer';
import TextAreaContainer from '../containers/TextAreaContainer';
import SummaryContainer from '../containers/SummaryContainer';

import * as injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
            <AppBarIcon />
            <FileDropzoneContainer />
            <TextAreaContainer />
            <SummaryContainer />
        </div>
    </MuiThemeProvider>
)

export default App
