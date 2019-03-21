import icons from './icons';
import htmlElementMap from './htmlElementMap';

const newState = {
  icons,
  htmlElementMap,
  componentMap: {
    App: {
      componentName: 'App',
      children: [
        {
          componentName: 'HomeView',
          children: []
        }
      ]
    },
    HomeView: {
      componentName: 'HomeView',
      children: []
    }
  },
  routes: {
    HomeView: []
  },

  componentNameInputValue: '',
  projects: ['Untitled-1'],
  activeRoute: 'HomeView',
  activeComponent: '',
  selectedElementList: [],
  projectNumber: 2,
  activeTab: 0,
  componentChildrenMultiselectValue: []
};

export default newState;
