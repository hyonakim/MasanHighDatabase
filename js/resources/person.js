import Backbone from 'backbone';
import {AppURL} from '../parse_info';

export default Backbone.Model.extend ({

  urlRoot: AppURL,

  idAttribute: 'objectId'

});

