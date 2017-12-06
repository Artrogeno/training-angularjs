function DashCtrl() {
    var vm = this;
    vm.pageTitle = 'Dashboard';
    vm.listLabel = [
        {
            img: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
            title: "Label",
            sub: "Something else"
        },
        {
            img: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
            title: "Label",
            sub: "Something else"
        },
        {
            img: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
            title: "Label",
            sub: "Something else"
        },
        {
            img: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
            title: "Label",
            sub: "Something else"
        }
    ];
    vm.subHeader = 'Sub Header';
    vm.itemsByPage = 15;
    vm.options = [
        { key: 5, value: 5 },
        { key: 10, value: 10 },
        { key: 15, value: 15 },
        { key: 20, value: 20 },
        { key: 50, value: 50 },
        { key: 100, value: 100 }
    ];
    vm.rowCollection = [];

    _init();

    function _init() {
        for (var j = 0; j < 200; j++) {
            vm.rowCollection.push(_createRandomItem(j));
        }

    }

    function _createRandomItem(i) {
        var nameList = ['Arthur', 'Magda', 'Joaquim', 'Robert', 'Elisa'],
            familyName = ['Costa', 'Silva', 'Delcourt', 'Marquez', 'Menezes'];

        var firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = _randomDate(new Date(1988, 0, 1), new Date(1994, 0, 1)),//Math.floor(Math.random() * 100),
            email = firstName + lastName + '@test.com',
            balance = Math.random() * 3000;
        return {
            id: i + 1,
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

    function _randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}

angular.module('todoApp')
    .controller('DashCtrl', DashCtrl);

