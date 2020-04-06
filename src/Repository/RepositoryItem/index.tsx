/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import '../style.css';
import Link from '../../Link';
import Button from '../../Button';
import { STAR_REPOSITORY, UNSTAR_REPOSITORY } from '../mutations';

const RepositoryItem: React.FC<any> = ({
  id,
  name,
  url,
  descriptionHTML,
  primaryLanguage,
  owner,
  stargazers,
  watchers,
  viewerSubscription,
  viewerHasStarred,
}) => {
  const [addStar] = useMutation(STAR_REPOSITORY);
  const [removeStar] = useMutation(UNSTAR_REPOSITORY);

  // eslint-disable-next-line no-console

  return (
    <div>
      <div className="RepositoryItem-title">
        <h2>
          <Link href={url}>{name}</Link>
        </h2>
        
        <Button
          className="RepositoryItem-title-action"
          onClick={() => viewerHasStarred ? removeStar({ variables: { id } }) : addStar({ variables: { id } })}
        >
          {stargazers.totalCount} Stars
        </Button>
      </div>

      <div className="RepositoryItem-description">
        <div
          className="RepositoryItem-description-info"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: descriptionHTML }}
        />
        <div className="RepositoryItem-description-details">
          <div>{primaryLanguage && <span>Language: {primaryLanguage.name}</span>}</div>
          <div>
            {owner && (
              <span>
                Owner: <a href={owner.url}>{owner.login}</a>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryItem;
