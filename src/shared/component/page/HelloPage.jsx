// @flow

import React from 'react';
import Helmet from 'react-helmet';

import HelloButton from '../../container/HelloButton';
import Message from '../../container/Message';

const title = 'Hello Page';

const HelloPage = () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <Message />
        <HelloButton />
      </div>
    </div>
  </div>);

export default HelloPage;
