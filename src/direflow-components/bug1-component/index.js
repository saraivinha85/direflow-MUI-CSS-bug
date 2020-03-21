import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'bug1-component',
  },
  plugins: [
    {
      name: 'material-ui',
    },
  ],
});
