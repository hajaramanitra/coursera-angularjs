(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$state', 'ApiPath'];
function SignUpController(MenuService, $state, ApiPath) {
	var signCtrl = this;

  	signCtrl.submit = function () {
  	   console.log("SUBMITTING");
	   // signCtrl.items = MenuService.getMenuItems(signCtrl.menu.shortname);
	   var myInfo = {};
	   myInfo.firstname = signCtrl.user.firstname;
	   myInfo.lastname = signCtrl.user.lastname;
	   myInfo.email = signCtrl.user.email;
	   myInfo.phone = signCtrl.user.phone;
	   myInfo.menu = signCtrl.menu.shortname;
	   myInfo.picUrl = ApiPath + '/images/menu/' + signCtrl.menu.shortname + '/' + signCtrl.menu.shortname + '.jpg';


	   MenuService.setInfo(myInfo);

	   $state.go('public.saved');
	   // $state.go('public.menuitems', {category: signCtrl.menu.shortname});
	};
}
	
})();