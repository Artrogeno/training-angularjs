function MainCtrl() {
    var vm = this;
    vm.sidebar = [
        {
            group: 'Overview',
            list: [
                {
                    title: "Dashboard",
                    uri: "main.dashboard"
                },
                {
                    title: "Reports",
                    uri: "main.reports"
                },
                {
                    title: "Analytics",
                    uri: "main.analytics"
                },
                {
                    title: "Export",
                    uri: "main.export"
                }
            ],
        },
        {
            group: 'Nav',
            list: [
                {
                    title: "Nav 001",
                    uri: "main.nav001"
                },
                {
                    title: "Nav 002",
                    uri: "main.nav002"
                },
                {
                    title: "Nav 003",
                    uri: "main.nav003"
                },
                {
                    title: "Nav 004",
                    uri: "main.nav004"
                },
            ],
        },
        {
            group: 'Nav',
            list: [
                {
                    title: "Nav 001",
                    uri: "main.nav001"
                },
                {
                    title: "Nav 002",
                    uri: "main.nav002"
                },
                {
                    title: "Nav 003",
                    uri: "main.nav003"
                },
                {
                    title: "Nav 004",
                    uri: "main.nav004"
                },
            ],
        },
        {
            group: 'Nav',
            list: [
                {
                    title: "Nav 001",
                    uri: "main.nav001"
                },
                {
                    title: "Nav 002",
                    uri: "main.nav002"
                },
                {
                    title: "Nav 003",
                    uri: "main.nav003"
                },
                {
                    title: "Nav 004",
                    uri: "main.nav004"
                },
            ],
        }
    ];
}

angular.module('todoApp')
.controller('MainCtrl', MainCtrl);

