import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class About extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      
    }

    render() {

        return (
            <div>
                About
            </div>            
        )
    }
}


const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(About)