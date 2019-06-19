import React, { Component } from 'react';
import { auth } from '../actions'
import { connect } from 'react-redux';

export default function(ComposedClass,reload){
    class AuthenticationCheck extends Component{
        
        state={
            loading:true
        }
        
        componentWillMount(){
            this.props.dispatch(auth())
        }

        componentWillReceiveProps(nextprops){
            this.setState({loading:false})

            if(!nextprops.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login');

                }
            }else{
                if(reload===false){
                    this.props.history.push('/user');
                }
            }
        }

        render(){
            if(this.state.loading){
                return <div className='loader'>Loading Please Wait</div>
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} />
            )
        }
    }

    function mapStateToProps(state){
        return{
            user:state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)
};