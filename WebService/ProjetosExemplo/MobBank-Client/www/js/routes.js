angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider      

      .state('mobBankClient', {
    url: '/mobBankClient',
    templateUrl: 'templates/mobBankClient.html',
    controller: 'mobBankClient'
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('createAccountActivity', {
    url: '/createAccountActivity',
    templateUrl: 'templates/createAccountActivity.html',
    controller: 'createAccount'
  })

  .state('getBalanceActivy', {
    url: '/getBalanceActivy',
    templateUrl: 'templates/getBalanceActivy.html',
    controller: 'getBalance'
  })

  .state('depositActivy', {
    url: '/depositActivy',
    templateUrl: 'templates/depositActivy.html',
    controller: 'deposit'
  })

  .state('withdrawActivy', {
    url: '/withdrawActivy',
    templateUrl: 'templates/withdrawActivy.html',
    controller: 'withdraw'
  })

  .state('closeAccountActivy', {
    url: '/closeAccountActivy',
    templateUrl: 'templates/closeAccountActivy.html',
    controller: 'closeAccount'
  })

  .state('showAllTransactionActivy', {
    url: '/showAllTransactionActivy',
    templateUrl: 'templates/showAllTransactionActivy.html',
    controller: 'showAllTransaction'
  })

  .state('showAccountTransactionsActivy', {
    url: '/showAccountTransactionsActivy',
    templateUrl: 'templates/showAccountTransactionsActivy.html',
    controller: 'showAccountTransactions'
  })  

  .state('showAllAccountsActivy', {
    url: '/showAllAccountsActivy',
    templateUrl: 'templates/showAllAccountsActivy.html',
    controller: 'showAllAccounts'
  })  

$urlRouterProvider.otherwise('/mobBankClient')
});