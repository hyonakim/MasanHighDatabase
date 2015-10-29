import Backbone from 'backbone';
import $ from 'jquery';

import {People as PeopleCollection
} from './resources';

import {
	People as PeopleTemplate,
	Person as PersonTemplate,
	AddNew as AddNewTemplate
} from './views';

export default Backbone.Router.extend ({

	routes: {
		''            : 'redirectToStudents',
		'students'    : 'showStudents',
		'student/:id' : 'showSpecificStudent'
	},

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();
  }





});
