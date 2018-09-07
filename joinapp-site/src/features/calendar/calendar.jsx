import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './calendaractions'

class Calendar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: {}
        };
    }

    componentWillMount() {
        this.props.getSummary()
    }

    render() {
        
        const { credit, debt } = this.props.summary

        return (
            <div>
              Calendar
            </div>            
        )
    }

}

const mapStateToProps = state => ({ summary: state.calendar.summary })
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)