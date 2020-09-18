// Define the `PhoneListController` controller on the `phonecatApp` module
angular.module("phoneListModule")
  .component("phoneList", {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: ['Phone', function PhoneListController(Phone) {
      this.query = '';
      this.orderProp = 'age';
      this.phones = Phone.query();
    }],
});
