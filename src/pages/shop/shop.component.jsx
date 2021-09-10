import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from './../../components/collection-overview/collection-overview.component';
import CollectionPage from './../collection/collection.component';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from './../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const { match, isCollectionFetching, isCollecionLoaded } = this.props;   
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />  } />
                <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollecionLoaded} {...props} />  } />
            </div>
        );
    }

}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollecionLoaded: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
 
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);

