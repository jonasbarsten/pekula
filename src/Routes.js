import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/pages/Home';
import About from './containers/pages/About';

import AllReleases from './containers/releases/AllReleases';
import ReleaseSingle from './containers/releases/ReleaseSingle';

import AllArtists from './containers/artists/AllArtists';
import ArtistSingle from './containers/artists/ArtistSingle';

import AllShows from './containers/shows/AllShows';
import ShowSingleWrapper from './containers/shows/ShowSingleWrapper';

import NotFound from './containers/NotFound';

export default () =>
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/about" exact component={About} />
		<Route path="/releases" exact component={AllReleases} />
		<Route path="/releases/:slug" component={ReleaseSingle} />
		<Route path="/artists" exact component={AllArtists} />
		<Route path="/artists/:slug" component={ArtistSingle} />
		<Route path="/shows" exact component={AllShows} />
		<Route path="/shows/:slug" component={ShowSingleWrapper} />
		{ /* Finally, catch all unmatched routes */ }
		<Route component={NotFound} />
	</Switch>;