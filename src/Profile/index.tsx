import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../Loading';
import RepositoryList from '../Repository';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

const Profile = () => {
  const { data, loading } = useQuery(GET_REPOSITORIES_OF_CURRENT_USER);

  // eslint-disable-next-line no-console
  console.log('data: ', data);

  if (loading || !data.viewer) return <Loading />;

  return (
    <RepositoryList repositories={data.viewer.repositories} />
  );
};

export default Profile;