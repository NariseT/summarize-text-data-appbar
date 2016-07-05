import * as React from 'react';
import {AppBar, IconButton, IconMenu, MenuItem} from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class AppBarIcon extends React.Component<any, any> {
    render () {
        return (
            <AppBar
                 title="Summarize Text Data"
                 titleStyle={{textAlign: "center"}}
                 iconElementLeft={
                     <IconMenu
                         iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                         anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                         targetOrigin={{horizontal: 'left', vertical: 'top'}}
                     >
                         <MenuItem primaryText="Version 0.0.1" />
                         <MenuItem primaryText="Version 0.0.1" />
                     </IconMenu>
                 }
            />
        );
    }
}
