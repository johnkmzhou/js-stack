// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { HOME_PAGE_ROUTE } from '../../routes';

const title = 'Page Not Found';

/* eslint-disable jsx-a11y/anchor-is-valid */
const NotFoundPage = () => (
  <div className="container mt-4">
    <Helmet
      title={title}
      met={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <div className="row">
      <div className="col-12">
        <h1>{title}</h1>
        <div><Link to={HOME_PAGE_ROUTE}>Go to the homepage</Link>.</div>
      </div>
    </div>
  </div>);
/* eslint-enable jsx-a11y/anchor-is-valid */

export default NotFoundPage;
