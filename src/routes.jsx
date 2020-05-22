import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const DemoView = Loadable({
	loader: () => import('containers/DemoView'),
	loading: () => <div>Loading...</div>
});

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => <DemoView title="Azure Static Web App demo" />} />
				<Route render={() => <Redirect to="/" />} />
			</Switch>
		);
	}
}

export default withRouter(Routes);
