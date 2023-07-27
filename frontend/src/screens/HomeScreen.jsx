import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
const HomeScreen = () => {
  return (
    <>
      {/* 
        the isLoading logic structure:->{isLoading ? () : error ? () : ()} 
      */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
        {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          
        </>
      )}
    </>
  );
};

export default HomeScreen;
