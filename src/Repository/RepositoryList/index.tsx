/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import '../style.css';
import RepositoryItem from '../RepositoryItem';

const RepositoryList = ({ repositories }: { repositories: any}) =>
  repositories.edges.map(({ node }: { node: any}) => (
    <div key={node.id} className="RepositoryItem">
      <RepositoryItem {...node} />
    </div>
  ));

export default RepositoryList;