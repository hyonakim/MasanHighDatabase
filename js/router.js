import Backbone from 'backbone';
import $ from 'jquery';

import {Person} from './resources';
import {People as PeopleCollection} from './resources';

import {People as PeopleView} from './views';
import {Person as PersonView} from './views';
import {AddNew} from './views'; 
import {Spinner} from './views';


export default Backbone.Router.extend ({

	routes: {
		''           : 'redirectToPeople',
		'people'     : 'showPeople',
		'person/:id' : 'showSpecificPerson',
    'newPerson'  : 'AddNewPerson'
	},

  initialize(appElement) {
    this.$el = appElement;
    this.collection = new PeopleCollection();

    this.$el.on('click', '.person-list-item', (event) => {
      let $div = $(event.currentTarget);
      let personId = $div.data('person-id');
      this.navigate(`person/${personId}`, {trigger: true});
    });

    this.$el.on('click', '.backBtn', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
    });

    this.$el.on('click', '.addStudent', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(`newPerson`, {trigger: true});
    });

    this.$el.on('click', '.createStudent', (event) => {
      let newStudent = new Person({
        FirstName: $('#firstname').val(),
        LastName: $('#lastname').val(),
        Age: $('#age').val(),
        GradeLevel: $('#gradelevel').val(),
        GPA: $('#gpa').val(),
        SpecialSkill: $('#skill').val(),
        Weapon: $('#weapon').val()
      });
      newStudent.save().then(() => {
        alert('Add new student to Masan High?');
        this.navigate(`people`, {trigger: true});
      });
    });
  },

  start() {
    Backbone.history.start();
    return this;
  },

  showSpinner() {
    this.$el.html(Spinner() );
  },

  redirectToPeople() {
    this.navigate('people', {
      replace: true,
      trigger: true
    });
  },

  showPeople() {
    this.showSpinner();
    this.collection.fetch().then(() => {
      this.$el.html(PeopleView(this.collection.toJSON()) );
    });
  },

  showSpecificPerson(id) {
    let person = this.collection.get(id);

    if (person) {
      this.$el.html(PersonView(person.toJSON()) );
  } else {
    this.showSpinner();
    person = this.collection.add({objectId: id});
    person.fetch().then( () => {
      this.$el.html(PersonView(person.toJSON()) );
    });
  }
},

  AddNewPerson() {
    this.showSpinner();
    this.$el.html(AddNew());
}



});
