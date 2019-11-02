import React from 'react';

function Footer() {
    var styles1 = {
        backgroundColor: '#2a89d1',
        position: 'fixed',
        bottom: 0,
        width: '100%'
    };

    var styles2 = {
        textAlign: 'center'
    }

    
    return(
        <>
            <footer className="navbar" style={styles1}>
                <h5 className="text-white offset-md-5" style={styles2}>attainu-test@2019</h5>
            </footer>
        </>
    );
}

export default Footer;