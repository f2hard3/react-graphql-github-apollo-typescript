import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

const Profile = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  return (<div>Profile</div>);
};

export default Profile;