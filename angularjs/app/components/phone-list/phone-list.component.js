// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module("phoneListModule").component("phoneList", {
  templateUrl: 'components/phone-list/phone-list.template.html',
  controller: ['$http', function PhoneListController($http) {
    this.query = '';
    this.orderProp = 'age';
    var self = this;
    
    $http.get('phones/phones.json').then(function(response) {
      console.log(response);
      self.phones = response.data;
    }, function(error) {
      console.log(error);
    });
  }],
});
