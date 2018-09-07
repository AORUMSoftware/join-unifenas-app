import React from 'react'
import { Footer } from 'react-materialize'

export default props => (
    <Footer copyrights="&copy; 2018 Copyright - All rights reserved."
        moreLinks = { <a className="grey-text text-lighten-4 right" href="http://www.aorum.com.br/" target="_blank">AORUM Software.</a> }
        links = {
            <ul>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-stack-overflow"></i> João's StackOverflow</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-stack-overflow"></i> Vinicius' StackOverflow</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-github"></i> João's GitHub</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-github"></i> Vinicius' GitHub</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-link"></i> Unifenas Computação's Site</a></li>
                <li><a className="grey-text text-lighten-3" href="#!"><i className="fa fa-link"></i> Unifenas' Site</a></li>
            </ul>
        }
        className='blue'
    >

        <h5 className = "white-text">XXIX JOIN - 2018</h5>
        <p className = "grey-text text-lighten-4">Site/ App oficial da XXIX JOIN da UNIFENAS.</p>
        <p style = {{ fontStyle: "italic" }} className = "grey-text text-lighten-4">Develop once, render everywhere!</p>
        <a target = '_blank' href = 'https://play.google.com/store/apps/details?id=com.joinapp&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <img
                style = {{ width: 200, height: 75, marginLeft: -15 }}
                alt = 'Disponível no Google Play' 
                src = { require("../../resources/google-play-badge.png") }
            />
        </a>

    </Footer>
)