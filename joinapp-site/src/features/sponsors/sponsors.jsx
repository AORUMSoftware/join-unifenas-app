import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Sponsors extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      
    }

    render() {

        return (
            <div>
                Sponsors
            </div>            
        )
    }
}


const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Sponsors)