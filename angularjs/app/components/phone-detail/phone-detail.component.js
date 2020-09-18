angular.module('phoneDetailModule')
    .component('phoneDetail', {
    templateUrl: 'components/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', function PhoneDetailComponent($routeParams, Phone) {
        this.componentName = 'Detail';
        this.phoneId = $routeParams.phoneId;
        var self = this;

        self.setImage = function setImage(imageUrl) {
            self.mainImageUrl = imageUrl;
        };
        self.phone = Phone.get({phoneId: this.phoneId}, function(phone) {
            self.setImage(phone.images[0]);
        });
    }],
});