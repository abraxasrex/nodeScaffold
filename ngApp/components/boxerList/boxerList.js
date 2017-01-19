var chThreeApp;
(function (chThreeApp) {
    var Components;
    (function (Components) {
        var name = 'boxerList';
        var template = '/ngApp/components/boxerList/boxerList.html';
        var BoxerList = (function () {
            function BoxerList($http) {
                var _this = this;
                this.$http = $http;
                $http.get('/api/stuff').then(function (results) {
                    _this.stuff = results.data;
                });
            }
            return BoxerList;
        }());
        Components.BoxerList = BoxerList;
        angular.module('ch-three-app').component(name, {
            templateUrl: template,
            controller: chThreeApp.Components.BoxerList,
            controllerAs: 'vm'
        });
    })(Components = chThreeApp.Components || (chThreeApp.Components = {}));
})(chThreeApp || (chThreeApp = {}));
