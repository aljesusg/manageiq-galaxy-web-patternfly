import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState/EmptyState';

class ProfilePage extends React.Component<RouteComponentProps<any>, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <EmptyState title="Spin Page" />
      </div>
    );
  }
}

export default withRouter(ProfilePage);
