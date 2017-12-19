import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { Tab, Tabs } from 'react-patternfly-shims';
import { Alert } from 'patternfly-react';
import { Project } from '../models/project';
import { Stage } from '../models/stage';
import CreateProjectForm from '../components/Forms/CreateProjectForm';
import CreateStageForm from '../components/Forms/CreateStageForm';

interface State {
  projectAlertVisible: boolean;
  stageAlertVisible: boolean;
  newProject: Project;
  newStage: Stage;
}

class AuthorsPage extends React.Component<RouteComponentProps<any>, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      projectAlertVisible: false,
      stageAlertVisible: false,
      newProject: {
        name: '',
        description: ''
      },
      newStage: {
        name: '',
        description: ''
      }
    };
  }

  handleProjectChange = (e: Event, prop: string) => {
    const o = Object.assign({}, this.state.newProject);
    let target = e.currentTarget as HTMLInputElement;
    let value = target.value as string;
    o[prop] = value;
    this.setState({ newProject: o });
  };

  handleSubmitProject = (event: Event) => {
    event.preventDefault();
    this.setState({ projectAlertVisible: true });
  };

  dismissProjectAlert = () => {
    this.setState({ projectAlertVisible: false });
  };

  handleStageChange = (e: Event, prop: string) => {
    const o = Object.assign({}, this.state.newStage);
    let target = e.currentTarget as HTMLInputElement;
    let value = target.value as string;
    o[prop] = value;
    this.setState({ newStage: o });
  };

  handleSubmitStage = (event: Event) => {
    event.preventDefault();
    this.setState({ stageAlertVisible: true });
  };

  dismissStageAlert = () => {
    this.setState({ stageAlertVisible: false });
  };

  render() {
    return (
      <div className="container-fluid container-pf-nav-pf-vertical">
        <div className="row">
          <div className="col-md-12">
            <div className="page-header">
              <h1>Projects</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <Tab tabTitle="Create Project">
                <br />
                {this.state.projectAlertVisible &&
                  <Alert type="warning" onDismiss={this.dismissProjectAlert}>
                    <strong>Warning</strong> This is just a demo, so your inputs
                    really aren't saved. You can dismiss me though.
                  </Alert>}
                <CreateProjectForm
                  handleSubmit={this.handleSubmitProject}
                  handleChange={this.handleProjectChange}
                  value={this.state.newProject}
                />
              </Tab>
              <Tab tabTitle="Create Stage">
                <br />
                {this.state.stageAlertVisible &&
                  <Alert type="info" onDismiss={this.dismissStageAlert}>
                    <strong>Alright</strong>, you submitted another form.
                  </Alert>}
                <CreateStageForm
                  handleSubmit={this.handleSubmitStage}
                  handleChange={this.handleStageChange}
                  value={this.state.newProject}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthorsPage);
