import React from 'react';
import {  withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import View from 'containers/View';

import H1 from 'components/H1';
import Paragraph from 'components/Paragraph';

const DemoView = () => (
	<View title="Azure Static Web App demo">
		<Helmet>
			<meta property="og:site_name" content="Azure Static Web App demo" />
			<meta property="og:title" content="Azure Static Web App demo" />
			<meta property="og:description" content="Basic demonstration of an Azure Static Web App using React." />
		</Helmet>
		<H1>Azure Static Web App demo</H1>
		<Paragraph>
			Congratulations! Seems like your Azure Static Web App is running fine.
		</Paragraph>
	</View>
);

export default withRouter(DemoView);
