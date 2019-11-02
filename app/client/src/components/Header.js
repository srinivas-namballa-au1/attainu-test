import React from 'react';

function Header() {
    var styles1 = {
        backgroundColor: '#2a89d1'
    };

    var styles2 = {
        textAlign: 'center'
    }

    
    return(
        <>
            <nav className="navbar" style={styles1}>
                <h2 className="text-white offset-md-5" style={styles2}>Cities - Airports</h2>
            </nav>
        </>
    );
}

export default Header;