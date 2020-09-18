angular.module('phoneDetailModule')
    .component('phoneDetail', {
    templateUrl: 'components/phone-detail/phone-detail.template.html',
    controller: ['$routeParams', '$http', function PhoneDetailComponent($routeParams, $http) {
        this.componentName = 'Detail';
        this.phoneId = $routeParams.phoneId;
        var self = this;

        $http.get(`phones/${this.phoneId}.json`).then(function (response) {
            self.phone = response.data;
        });
    }],
});