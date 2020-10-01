import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PubliceRoute = ({
    isAuthenticated,
    component : Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? 
        (
            <Redirect to="/dashboard" />
        )
        :
        (
            <div>
                <Component {...props} />
            </div>
        )
    )} />
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated : !!state.auth.uid
    }
};

export default connect(mapStateToProps)(PubliceRoute);