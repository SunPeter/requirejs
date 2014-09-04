require.config({
	baseUrl:"module",
	paths:{
		jquery:"../lib/jquery-1.8.0.min"
	}
});

require(["jquery"],function($) {
	alert($().jquery);
});

require(["ssd"],function(s){
	s.run();
});