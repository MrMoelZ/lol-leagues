
Vue.component("navigation",{
    template: `
        <div id="navigation" @mouseleave="showSubNav('')">
            <ul class="navHead">
                <li class="navPoint" v-for="nav in navi">
                    <span @click="navigateTo(nav.key)" @mouseover="showSubNav(nav.key)">{{nav.name}}</span>
                    <ul class="navSub" v-show="shownSubNav==nav.key">
                        <li class="navSubPoint" v-for="item in nav.subNavs">
                            <span @click="navigateTo(nav.key + '/' + item.key)">{{item.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    methods: {
        navigateTo(target) {
            console.log('emit event navTo ', target)
        },
        showSubNav(target) {
            this.shownSubNav = target
        },
        test() {
            console.log('TEST')
        }
    },
    data() {
        return {
            shownSubNav: '',
            navi: [
                {
                    name: "Europe",
                    key: "eu",
                    subNavs: [
                        {
                            id: 0,
                            name: "Overview",
                            key: "index"
                        },
                        {
                            id: 1,
                            name: "LEC",
                            key: "lec"
                        },
                        {
                            id: 2,
                            name: "EU Masters",
                            key: "eum"
                        }
                    ]
                },
                {
                    name: "Korea",
                    key: "kr",
                    subNavs: [
                        {
                            id: 0,
                            name: "Overview",
                            key: "index"
                        },
                        {
                            
                        }
                    ]
                },
                {
                    name: "NorthAmerica",
                    key: "na",
                    subNavs: [
                        {
                            id: 0,
                            name: "Overview",
                            key: "index"
                        },
                        {
                            
                        }
                    ]
                },
                {
                    name: "China",
                    key: "cn",
                    subNavs: [
                        {
                            id: 0,
                            name: "Overview",
                            key: "index"
                        },
                        {
                            
                        }
                    ]
                }
            ]
        }
    }
})


const app = new Vue({
    el: '#app',
    methods: {
        sortBy(table, col) {
            console.log('sort by ', table, col)
        },
        getFlag(nationality) {
            return "./imgs/flags/" + nationality + ".png"
        },
        getAge(dob) {
            return moment().diff(moment(dob), 'years')
        },
        formatBirthday(dob) {
            return moment(dob).format("DD.MM.YY")
        }
    },
    data: {
        msg: 'msg',
        sortKey: "team",
        moment: {
            m: moment(),
            date: moment().format("DD.MM.YY"),
            time: moment().format("HH:mm:ss")
        },
        tableColumnsPlayers: [
            {
                name: "Place",
                key: "place"
            },
            {
                name: "Nickname",
                key: "nickname"
            },
            {
                name: "Name",
                key: "name"
            },
            {
                name: "Team",
                key: "team"
            },
            {
                name: "Splits on Team",
                key: "sot"
            },
            {
                name: "Nationality",
                key: "nationality"
            },
            {
                name: "Birthday (Age)",
                key: "age"
            },
            {
                name: "Splits Pro",
                key: "pro"
            }
        ],
        tableColumnsTeams: [
            {
                name: "Place",
                key: "place"
            },
            {
                name: "",
                key: ""
            },
            {
                name: "Name",
                key: "name"
            },
            {
                name: "G",
                key: "games"
            },
            {
                name: "W",
                key: "wins"
            },
            {
                name: "L",
                key: "losses"
            }
        ],
        leagues: [
            {
                name: "LEC",
                key: "lec",
                participants: [
                    {
                        team: "Fnatic",
                        key: "fnc",
                        logo: "fnc.svg",
                        stats: {
                            current: {},
                            bySplit: [
                                {
                                    season: 9,
                                    split: 0,
                                    games: 0,
                                    wins: 0,
                                    losses: 0
                                }
                            ]
                        }
                    }
                ]
            }
        ],
        players: [
            {
                nick: "Bwipo",
                lastName: "Rau",
                firstName: "Gabriel",
                nationality: "be",
                role: "TOP",
                secondaryRole: "BOT",
                stats: [],
                dob: "1998-12-24",
                team: "FNC",
                splitsPro: 5,
                splitsOnTeam: 4
            }
        ],
        current: {} 
    },
    created() {
        console.log('Hello World')
        this.current = this.leagues[0]
        this.current.participants.forEach(p => p.stats.current = p.stats.bySplit[0])
        setInterval(() => {
            this.moment.time = moment().format("HH:mm:ss")
        }, 1000)
    }
})