import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import Routes from './routes'

export default props => (
    <div className='container-fluid'>
        <Header />
        <Routes />
        <Footer /> 
    </div>
)