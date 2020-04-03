import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/donationCandidate';

const DonationCandidates = (props) => {
    useEffect(() => {
        props.fetchAllDonationCandidates()
    },[]);

    return ( <div> from DonationCandidates </div> )
};

const mapStateToProps = state => {
    return{
        donationCandidateList:state.donationCandidate.list
    }
};

const mapActionToProps = {
    fetchAllDonationCandidates: actions.fetchAll
};

export default connect(mapStateToProps, mapActionToProps)(DonationCandidates);