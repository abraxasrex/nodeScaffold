namespace chThreeApp.Components {

  const name = 'boxerList'
  const template = '/ngApp/components/boxerList/boxerList.html';

  export class BoxerList {
    public stuff;
    constructor(private $http: ng.IHttpService){
      $http.get('/api/stuff').then((results)=>{
        this.stuff = results.data;
      });
    }
  }

  angular.module('ch-three-app').component(name, {
    templateUrl: template,
    controller: chThreeApp.Components.BoxerList,
    controllerAs: 'vm'
  });
}
