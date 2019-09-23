import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components'

import StreamCreate from '../streams/StreamCreate';
import StreamEdit from '../streams/StreamEdit';
import StreamDelete from '../streams/StreamDelete';
import StreamList from '../streams/StreamList';
import StreamShow from '../streams/StreamShow';
import StreamIndex from '../streams/StreamIndex';

import '../App.scss'

const Content = () => {
    return (
        <StyledContent>
            <Route path="/" exact component={StreamIndex} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/list" exact component={StreamList} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/show/:id" exact component={StreamShow} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </StyledContent>
    )
};

const StyledContent = styled.div`
    margin-top: 20px;
`;

export default Content;