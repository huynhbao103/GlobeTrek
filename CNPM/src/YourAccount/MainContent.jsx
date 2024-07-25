import React from 'react';
import Settings from './Settings';
import SetPlace from './SetPlace';
import Passenger from './Passenger';
import Refunds from './Refunds';
import Transaction from './Transaction';
// Import other components as needed

const MainContent = ({ selectedSection }) => {
  switch (selectedSection) {
    case 'Settings':
      return <Settings />;
    case 'SetPlace':
      return <SetPlace/>;
    case 'Passenger':
      return <Passenger />;
    case 'refunds':
      return <Refunds />;
    case 'Transaction':
        return <Transaction/>
    // Add cases for other sections
    default:
      return <p>Select an option from the sidebar</p>;
  }
};

export default MainContent;
