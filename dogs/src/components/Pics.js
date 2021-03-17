import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPic } from '../store/actions/actions'
import styled from 'styled-components'

const StyledDiv = styled.div`
*{
    font-family: Arial, Helvetica, sans-serif;
    background-color: black;
    color: white;
}
h1 {
    display: flex;
    justify-content: center;
}
.image {
    display: block;
    max-width: 50rem;
    max-height: 50rem;
    margin: 0 auto;
    border: 1px solid black;
}
button {
    margin: 0;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
}
`

const Pics = (props) => {
    
    const { pic, isFetching, error } = props;

    const handleClick = () => {
        props.getPic();
    }

    useEffect(() => {
        props.getPic();
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching picture!</h2>
    }
    return (
        <StyledDiv>
        <h1>Random Dog Picture</h1>
        <img className='image' src={pic.url} alt=""/>
        <button onClick={handleClick}>Get new picture</button>
        </StyledDiv>
    )
}

const mapStateToProps = (state) => {
    return {
        pic: state.pic,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps, {getPic})(Pics)