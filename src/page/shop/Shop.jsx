import React from "react";
import { Route } from 'react-router-dom';
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";

const ShopPage = ({match, location, history}) => (
  <div className="shop-page">
		{console.log({match,location,history})}
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
