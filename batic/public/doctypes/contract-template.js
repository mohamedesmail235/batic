baticApp.doctypes['contract-template'] = {
    load: function (form, scope) {

    },
    data: function ($rootScope) {
        return $rootScope.formView.form.get_data();
    },
    events: function (form_data, $rootScope, $scope, $http, $timeout) {

    }
}