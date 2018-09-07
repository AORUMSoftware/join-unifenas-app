import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Theme extends Component {
    
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      
    }

    render() {

        return (
            <div>
                Theme
            </div>            
        )
    }
}


const mapStateToProps = state => ({ })
const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Theme)