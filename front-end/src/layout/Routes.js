import React from 'react';
import NewReservation from '../reservation/NewReservation';
import NewTable from '../table/NewTable';
import SearchReservation from '../reservation/SearchReservation';
import EditReservation from '../reservation/EditReservation';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import NotFound from './NotFound';
import { today } from '../utils/date-time';
import SeatReservation from '../reservation/SeatReservation';
import useQuery from '../utils/useQuery';

/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {
	const query = useQuery();
	const queryDate = query.get('date');
	const date = queryDate ? queryDate : today();

	return (
		<Switch>
			<Route exact={true} path="/">
				<Redirect to={'/dashboard'} />
			</Route>
			<Route exact={true} path="/reservations">
				<Redirect to={'/dashboard'} />
			</Route>
			<Route exact={true} path="/reservations/new">
				<NewReservation />
			</Route>
			<Route exact={true} path="/reservations/:reservation_id/seat">
				<SeatReservation />
			</Route>
			<Route exact={true} path="/reservations/:reservation_id/edit">
				<EditReservation />
			</Route>
			<Route path="/search">
				<SearchReservation />
			</Route>
			<Route exact={true} path="/tables/new">
				<NewTable />
			</Route>
			<Route path="/dashboard">
				<Dashboard date={date} />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}

export default Routes;
