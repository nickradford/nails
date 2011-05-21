nails = require('../../nails/nails')
/* routes = {
  "route_name" : Class.action(),
  "route_name" : Class.action(), 
}
*/
routes = {
  "dashboard" : dashboard.index,
  "goodbye"   : dashboard.goodbye,
	"default"	  : dashboard.index 
	}


module.exports = routes