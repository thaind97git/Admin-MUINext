import Head from 'next/head';
import React from 'react';
import EmptyPageLayout from '../layouts/EmptyPageLayout';
import HomeComponent from '../components/HomeComponent';

const HomePage = () => (
  <EmptyPageLayout>
    <Head>
      <title key="title">Book Store</title>
    </Head>
    <HomeComponent />
  </EmptyPageLayout>
);
export default HomePage;
