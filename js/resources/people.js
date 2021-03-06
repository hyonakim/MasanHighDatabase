import Backbone from 'backbone';
import Person from './person';
import {AppURL} from '../parse_info';

export default Backbone.Collection.extend ({

	url: AppURL,

	model: Person,

	parse(data) {
		return data.results;
	}
});
