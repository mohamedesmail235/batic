baticApp.doctypes['customer'] = {
    load: function (form, scope) {

    },
    data: function ($rootScope) {
        return $rootScope.formView.form.get_data();
    },
}
