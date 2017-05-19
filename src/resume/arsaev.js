export default {
    ru: {
        name: 'Арсаев Ринат Вадимович',
        title: 'Full-stack JavaScript разработчик',
        phoneNumber: '+7(981)828-45-16',
        email: 'krickray@gmail.com',
        birthday: new Date(1993, 11, 20),
        social: {
            skype: '',
            vk: ''
        },
        description: '',
        location: 'г. Санкт-Петербург',
        skills: {
            'Код': [
                'JavaScript',
                'ES2015',
                'ES6',
                'ES7',
                'Node.js',
                'React',
                'Redux',
                'Angular',
                'Arduino',
                'Java',
                'C#',
                'C++',
                'C',
                'PHP'
            ],
            'Инструменты': [
                'Webpack',
                'Gulp',
                'Git',
                'GitHub',
                'NPM'
            ],
            'Верстка': [
                'CSS',
                'BEM',
                'SCSS',
                'PostCSS',
                'Stylus',
                'HTML',
                'Веб-компоненты'
            ],
            'Базы данных': [
                'MongoDB',
                'SQL',
                'MySQL',
            ],
            'Программы': [
                'JetBrains WebStorm',
                'Adobe Photoshop'
            ]
        },
        timeline: [
            // {
            //     title: 'Среднее общее образование',
            //     type: 'education',
            //     time: [new Date(2001, 8, 1), new Date(2012, 5, 23)],
            //     document: 'Аттестат',
            //     place: {
            //         name: 'МОБУ "Башкирская гимназия"',
            //         department: 'Физико-математический класс',
            //         town: 'Агидель',
            //     }
            // },
            {
                title: 'Высшее образование',
                type: 'education',
                description: 'Бакалавр по специальности программная инжененрия',
                time: [new Date(2012, 8, 1), new Date(2016, 5, 23)],
                document: 'Диплом бакалавра по специальности "Программная инженерия"',
                place: {
                    name: 'Уфимского государственного авиационного технического университета»',
                    department: 'Факультет информатики и робототехники',
                    town: 'Уфа',
                }
            }, {
                title: 'Сервис-менеджер',
                type: 'job',
                time: [new Date(2013, 6, 22), new Date(2013, 8, 17)],
                description: 'Решение проблем с интернетом и телевидением у клиентов. Продажи',
                place: {
                    department: 'Отдел продаж',
                    town: 'Уфа',
                    name: 'ОАО «Уфанет»'
                }
            }, {
                title: 'Frontend разработчик',
                type: 'job',
                time: [new Date(2015, 6, 1), new Date(2015, 7, 31)],
                description: 'Разработка модуля корпоративной социальной сети',
                place: {
                    management: 'Управления разработки',
                    department: 'Отдел разработки',
                    name: 'ЗАО «ПФ «СКБ Контур»',
                    town: 'Екатеринбург',
                }
            }, {
                title: 'Оператор научной роты',
                type: 'education',
                time: [new Date(2016, 6, 7), new Date(2017, 6, 6)],
                description: 'Разработка веб-сервиса мониторинга сетевого оборудования',
                place: {
                    town: 'Санкт-Петербург',
                    department: 'Научно-исследовательский центр',
                    name: 'Военной академии связи имени С.М. Будённого',
                }
            }
        ]
    },
    en: {
        name: 'Rinat Arsaev',
        title: 'Full-stack JavaScript developer',
        location: 'St. Petersburg',
        phoneNumber: '+7(981)828-45-16',
        email: 'krickray@gmail.com',
        birthday: new Date(1993, 11, 20),
        description: '',
        skills: {
            'Code': [
                'JavaScript',
                'ES2015',
                'ES6',
                'ES7',
                'Node.js',
                'React',
                'Redux',
                'Angular',
                'Arduino',
                'Java',
                'C#',
                'C++',
                'C',
                'PHP'
            ],
            'Tools': [
                'Webpack',
                'Gulp',
                'Git',
                'GitHub',
                'NPM'
            ],
            'Layout': [
                'CSS',
                'BEM',
                'SCSS',
                'PostCSS',
                'Stylus',
                'HTML',
                'Web components'
            ],
            'Database': [
                'MongoDB',
                'SQL',
                'MySQL',
            ],
            'Programs': [
                'JetBrains WebStorm',
                'Adobe Photoshop'
            ]
        },
        timeline: [
            {
                title: 'Education',
                type: 'education',
                description: `Bachelor's degree in Software Engineering`,
                time: [new Date(2012, 8, 1), new Date(2016, 5, 23)],
                document: 'Диплом бакалавра по специальности "Программная инженерия"',
                place: {
                    name: 'Ufa State Aviation Technical University',
                    department: 'Faculty of Informatics and Robotics',
                    town: 'Ufa',
                }
            }, {
                title: 'Service manager',
                type: 'job',
                time: [new Date(2013, 6, 22), new Date(2013, 8, 17)],
                description: 'Solving customer problems with the Internet and television. Sales',
                place: {
                    department: 'Sales department',
                    town: 'Ufa',
                    name: 'Ufanet'
                }
            }, {
                title: 'Frontend developer',
                type: 'job',
                time: [new Date(2015, 6, 1), new Date(2015, 7, 31)],
                description: 'Development of corporate social network module',
                place: {
                    department: 'Development department',
                    name: 'SKB Kontur',
                    town: 'Ekaterinburg',
                }
            }, {
                title: 'Operator of scientific company',
                type: 'education',
                time: [new Date(2016, 6, 7), new Date(2017, 6, 6)],
                description: 'Development of a web-based monitoring service for network equipment',
                place: {
                    town: 'St. Petersburg',
                    department: 'Research Center',
                    name: 'Budyonny Military Academy of the Signal Corps',
                }
            }
        ]
    }
}