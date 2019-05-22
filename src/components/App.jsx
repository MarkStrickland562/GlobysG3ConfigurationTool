import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions';

import Error404 from './Error404';
import Main from './Main';
import Clients from './Clients';
import AddClientForm from './AddClientForm';
import EditClientForm from './EditClientForm';
import DeleteClientForm from './DeleteClientForm';
import Groups from './Groups';
import AddGroupForm from './AddGroupForm';
import EditGroupForm from './EditGroupForm';
import DeleteGroupForm from './DeleteGroupForm';
import Products from './Products';
import AddProductForm from './AddProductForm';
import EditProductForm from './EditProductForm';
import DeleteProductForm from './DeleteProductForm';
import ConfigurePermissionsForm from './ConfigurePermissionsForm';
import ConfigureCustomValuesForm from './ConfigureCustomValuesForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleRouteBack = this.handleRouteBack.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseClientsRef } = actions;
    dispatch(watchFirebaseClientsRef());
    const { watchFirebaseGroupsRef } = actions;
    dispatch(watchFirebaseGroupsRef());
    const { watchFirebaseProductsRef } = actions;
    dispatch(watchFirebaseProductsRef());
    const { watchFirebasePermissionsRef } = actions;
    dispatch(watchFirebasePermissionsRef());
    const { watchFirebasePermissionCategoriesRef } = actions;
    dispatch(watchFirebasePermissionCategoriesRef());
    const { watchFirebaseClientPermissionsRef } = actions;
    dispatch(watchFirebaseClientPermissionsRef());
    const { watchFirebaseGroupPermissionsRef } = actions;
    dispatch(watchFirebaseGroupPermissionsRef());
    const { watchFirebaseProductPermissionsRef } = actions;
    dispatch(watchFirebaseProductPermissionsRef());
    const { watchFirebaseProductUserTypePermissionsRef } = actions;
    dispatch(watchFirebaseProductUserTypePermissionsRef());
    const { watchFirebaseCustomValuesRef } = actions;
    dispatch(watchFirebaseCustomValuesRef());
    const { watchFirebaseCustomTypesRef } = actions;
    dispatch(watchFirebaseCustomTypesRef());
    const { watchFirebaseClientCustomValuesRef } = actions;
    dispatch(watchFirebaseClientCustomValuesRef());
    const { watchFirebaseProductCustomValuesRef } = actions;
    dispatch(watchFirebaseProductCustomValuesRef());
    const { watchFirebaseGroupCustomValuesRef } = actions;
    dispatch(watchFirebaseGroupCustomValuesRef());
  }

  /*eslint-disable */
  handleRouteBack(target) {
    this.props.history.push(`/${target}`);
  }
  /*eslint-enable */

  render() {
    return (
      <div>
        <style global jsx>
          {`
            .link {
              color: white;
              text-shadow: 1px 1px 2px black;
              text-decoration: none;
            }

            .navlink {
              color: green;
              font-weight: bold;
              text-decoration: none;
            }

            .navlink:hover {
              color: rgb(216, 216, 216);
            }
          `}
        </style>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route
              path="/clients"
              render={() => (<Clients clients={this.props.masterClients} />)}
            />
            <Route
              path="/addclient"
              render={() => (
                <AddClientForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/editclient"
              render={() => (
                <EditClientForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deleteclient"
              render={() => (
                <DeleteClientForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/groups" 
              render={() => (<Groups groups={this.props.masterGroups} />)}
            />
            <Route
              path="/addgroup"
              render={() => (
                <AddGroupForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/editgroup"
              render={() => (
                <EditGroupForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deletegroup"
              render={() => (
                <DeleteGroupForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/products"
              render={() => (<Products products={this.props.masterProducts} />)}
            />
            <Route
              path="/addproduct"
              render={() => (
                <AddProductForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/editproduct"
              render={() => (
                <EditProductForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/deleteproduct"
              render={() => (
                <DeleteProductForm onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/configurepermissions"
              render={() => (
                <ConfigurePermissionsForm
                  permissions={this.props.masterPermissions}
                  permissionCategories={this.props.masterPermissionCategories}
                  clientPermissions={this.props.masterClientPermissions}
                  productPermissions={this.props.masterProductPermissions}
                  groupPermissions={this.props.masterGroupPermissions}
                  productUserTypePermissions={this.props.masterProductUserTypePermissions}
                  onFormSubmit={this.handleRouteBack} />
              )}
            />
            <Route
              path="/configurecustomvalues"
              render={() => (
                <ConfigureCustomValuesForm
                  customValues={this.props.masterCustomValues}
                  customTypes={this.props.masterCustomTypes}
                  clientCustomValues={this.props.masterClientCustomValues}
                  productCustomValues={this.props.masterProductCustomValues}
                  groupCustomValues={this.props.masterGroupCustomValues}
                  onFormSubmit={this.handleRouteBack}
                />
              )}
            />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  masterClients: PropTypes.object,
  masterGroups: PropTypes.object,
  masterProducts: PropTypes.object,
  masterPermissions: PropTypes.object,
  masterPermissionCategories: PropTypes.object,
  masterClientPermissions: PropTypes.object,
  masterProductPermissions: PropTypes.object,
  masterGroupPermissions: PropTypes.object,
  masterProductUserTypePermissions: PropTypes.object,
  masterCustomValues: PropTypes.object,
  masterCustomTypes: PropTypes.object,
  masterClientCustomValues: PropTypes.object,
  masterProductCustomValues: PropTypes.object,
  masterGroupCustomValues: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    masterClients: state.masterClients,
    masterGroups: state.masterGroups,
    masterProducts: state.masterProducts,
    masterPermissions: state.masterPermissions,
    masterPermissionCategories: state.masterPermissionCategories,
    masterClientPermissions: state.masterClientPermissions,
    masterProductPermissions: state.masterProductPermissions,
    masterGroupPermissions: state.masterGroupPermissions,
    masterProductUserTypePermissions: state.masterProductUserTypePermissions,
    masterCustomValues: state.masterCustomValues,
    masterCustomTypes: state.masterCustomTypes,
    masterClientCustomValues: state.masterClientCustomValues,
    masterProductCustomValues: state.masterProductCustomValues,
    masterGroupCustomValues: state.masterGroupCustomValues
  };
};

export default withRouter(connect(mapStateToProps)(App));
