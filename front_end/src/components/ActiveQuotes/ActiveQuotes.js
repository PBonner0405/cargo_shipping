import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tab from '@material-ui/core/Tab';
import AssignmentRounded from '@material-ui/icons/AssignmentRounded';

import QuotesDashboardItem from './quotesDashboardItem';

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    z-index: 999;
    align-items: center;
`;

const NewQuotesButton = styled.button`
    width: 160px;
    height: 42px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    background: #4D7CFE;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 12px;

    &:hover {
        background: #00a8e8;
    }
`;

const ActiveQuotes = (props) => {
    
    const { quotes } = props;

    function ViewAllQuotes(event) {
        event.preventDefault();
    }

    return (
        <Container>
            <Tab icon={<AssignmentRounded />} label="Quotes" disabled/>
            {quotes!==null&&
                <QuotesDashboardItem quotes={quotes}></QuotesDashboardItem>
            }
            <NewQuotesButton onClick={ViewAllQuotes}>
                New Quotes
            </NewQuotesButton>
        </Container>
    );
};

function mapStateToProps(state) {
    return {
        quotes: state.page.info!==null?state.page.info.quotes: null,
    };
}

ActiveQuotes.defaultProps = {
    quotes: null,
};

ActiveQuotes.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    quotes: PropTypes.array,
};

export default connect(mapStateToProps)(ActiveQuotes);