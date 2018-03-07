import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

export default class Loader extends React.Component {
    render = () => <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
        <CircularProgress size={80} style={{ color: "#ef5350" }} />
    </div>
}

