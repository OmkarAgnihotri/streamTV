import React from 'react';
import { FaGoogle, FaGooglePlusSquare } from 'react-icons/fa'
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                clientId : '764497182740-ulgj1muvbov9vku7k2688ebb3at8q539.apps.googleusercontent.com',
                sccope : 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthStatusChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthStatusChange);
            })
        })
    }

    signIn = () => {
        this.auth.signIn();
    }

    signOut = () => {
        this.auth.signOut();
    }

    onAuthStatusChange = (isSignedIn) => {
    
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else this.props.signOut();
    }

    renderSignInButton = () => {
        const authStatus = this.props.isSignedIn;

        if(authStatus)return <button className="btn btn-primary" onClick={this.signOut} >Sign Out</button>
        else if (authStatus === false){
            return (
                <button className="btn btn-danger d-flex align-items-center" onClick={this.signIn} >
                    <FaGoogle/>
                    <span className="px-1">Sign in</span>
                </button>
            );
        }
        else return null;
    }

    render(){
        return (
            <div>
                { this.renderSignInButton() }
            </div>
        );
    };
}


const mapStateToProps = (state) => {
    return { isSignedIn : state.auth.isSignedIn }
}

export default connect(mapStateToProps, {
    signIn, signOut
})(GoogleAuth);