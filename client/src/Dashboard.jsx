import React from 'react';

import LinkBlocks from './LinkBlocks';
import Header from './Header';

class Dashboard extends React.Component {
    render() { 
        return <div>
            <Header/>
            <LinkBlocks/>
        </div>;
    }
}
 
export default Dashboard;