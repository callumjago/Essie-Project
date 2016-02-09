'use strict';

angular.module('forms').factory('Forms', function() {
  var forms = {
    entries : [
			{
    	    	'code': 'test',
				'name': 'test form'

			},
			{
    			'code': 'test2',
    			'name': 'test form 2'
			}]
    };
    return forms.entries;
});