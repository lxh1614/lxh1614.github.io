/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.9.1.min.js",
            js+"fenxiang.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Symbol_2',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['0', '0', '750', '1334', 'auto', 'auto'],
                            userClass: "s2"
                        },
                        {
                            id: 'top2',
                            symbolName: 'top2',
                            type: 'rect',
                            rect: ['0%', '0%', '100%', '12.6%', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['0', '0', '750', '1334', 'auto', 'auto']
                        },
                        {
                            id: 'Symbol_3',
                            symbolName: 'Symbol_3',
                            type: 'rect',
                            rect: ['0%', 'auto', '100%', '95', 'auto', '0.2%']
                        },
                        {
                            id: 'Symbol_4',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['0', '0', '750', '1334', 'auto', 'auto']
                        },
                        {
                            id: 'music2',
                            symbolName: 'music',
                            type: 'rect',
                            rect: ['auto', '1.4%', '11.2%', '84', '3.1%', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 21825.75,
                    autoPlay: true,
                    labels: {
                        "s1": 0
                    },
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '750px', '1334px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.12', '1.12']],
                            id: 'bg',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bg.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '-174px', '750px', '1227px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.23', '1.23']],
                            id: 'textboard',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/textboard.png', '0px', '0px']
                        },
                        {
                            id: 'title3',
                            type: 'image',
                            rect: ['79px', '240px', '603px', '244px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/title3.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'Text8',
                            text: '<p style=\"margin: 0px;\">​艺人统筹</p>',
                            userClass: 'p8 pall',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['419px', '959px', '153px', '44px', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: '<p style=\"margin: 0px;\">​王祖蓝</p>',
                            userClass: 'p7 pall',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['200px', '954px', '191px', '44px', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'Text6',
                            text: '<p style=\"margin: 0px;\">​李晨</p>',
                            userClass: 'p6 pall',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['431px', '881px', '115px', '44px', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        },
                        {
                            type: 'text',
                            id: 'Text5',
                            text: '<p style=\"margin: 0px;\">​郑恺</p>',
                            userClass: 'p5 pall',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['223px', '874px', '166px', '44px', 'auto', 'auto'],
                            align: 'left',
                            opacity: '0'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['419px', '801px', '255px', '44px', 'auto', 'auto'],
                            userClass: 'p4 pall',
                            align: 'left',
                            id: 'Text4',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​Angelababy</p>',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['254px', '801px', '316px', '44px', 'auto', 'auto'],
                            userClass: 'p3 pall',
                            align: 'left',
                            id: 'Text3',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​邓超</p>',
                            type: 'text'
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            rect: ['447px', '721px', '303px', '44px', 'auto', 'auto'],
                            userClass: 'p2 pall',
                            align: 'left',
                            id: 'Text2',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​陈赫</p>',
                            type: 'text'
                        },
                        {
                            rect: ['223px', '726px', '138px', '34px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            userClass: 'p1 selected2 pall',
                            id: 'Text',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​鹿晗</p>',
                            type: 'text'
                        },
                        {
                            id: 'runningman',
                            type: 'image',
                            rect: ['223px', '122px', '303px', '130px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/runningman.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '941px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'yiren2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yiren2.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '941px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'yiren',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/yiren.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '941px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'wangzulan2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wangzulan2.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '941px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'wangzulan',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/wangzulan.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '861px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'licheng2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/licheng2.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '861px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'licheng',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/licheng.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '861px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'zhengkai2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zhengkai2.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '861px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'zhengkai',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/zhengkai.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '781px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'baby2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baby2.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '781px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'baby',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/baby.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '781px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'dengchao2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dengchao2.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '781px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'dengchao',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/dengchao.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '700px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'chenghe2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chenghe2.png', '0px', '0px']
                        },
                        {
                            rect: ['391px', '700px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'chenghe',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/chenghe.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '701px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'luhan2',
                            userClass: 'all',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luhan2.png', '0px', '0px']
                        },
                        {
                            rect: ['191px', '701px', '191px', '70px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: 'luhan',
                            userClass: 'blue',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/luhan.png', '0px', '0px']
                        },
                        {
                            rect: ['18.8%', '5.5%', '27.9%', '60px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.24', '1.24']],
                            fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px'],
                            id: 'logo',
                            opacity: '0',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['189px', '570px', '393px', '103px', 'auto', 'auto'],
                            id: 'input',
                            transform: [[], [], [], ['0.5', '0.5']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/input.png', '0px', '0px']
                        },
                        {
                            rect: ['190px', '1043px', '393px', '109px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.5', '0.5']],
                            id: '_322',
                            userClass: 'submit',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '750px', '1334px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    labels: {
                        "s1": 250
                    },
                    data: [
                        [
                            "eid148",
                            "opacity",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao}",
                            '0',
                            '1'
                        ],
                        [
                            "eid186",
                            "top",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan2}",
                            '920px',
                            '941px'
                        ],
                        [
                            "eid130",
                            "scaleX",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${title3}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid21",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${textboard}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid190",
                            "top",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren}",
                            '920px',
                            '941px'
                        ],
                        [
                            "eid176",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "scaleX",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid129",
                            "scaleY",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${title3}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid24",
                            "opacity",
                            250,
                            1000,
                            "easeInQuad",
                            "${textboard}",
                            '0',
                            '1'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${input}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid145",
                            "scaleY",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${logo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid153",
                            "scaleY",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid194",
                            "top",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren2}",
                            '920px',
                            '941px'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid192",
                            "opacity",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid42",
                            "top",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${logo}",
                            '5.5%',
                            '7.1%'
                        ],
                        [
                            "eid189",
                            "scaleY",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid166",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "top",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby}",
                            '760px',
                            '781px'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${logo}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid37",
                            "scaleY",
                            500,
                            1000,
                            "easeInOutQuad",
                            "${logo}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid169",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid133",
                            "scaleY",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            250,
                            750,
                            "easeInQuad",
                            "${bg}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "top",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan2}",
                            '680px',
                            '701px'
                        ],
                        [
                            "eid183",
                            "scaleX",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid139",
                            "scaleX",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid149",
                            "scaleY",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid77",
                            "scaleX",
                            250,
                            750,
                            "easeInQuad",
                            "${bg}",
                            '1.12',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${title3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid182",
                            "top",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan}",
                            '920px',
                            '941px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            500,
                            750,
                            "easeInOutQuad",
                            "${runningman}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid165",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe}",
                            '0',
                            '1'
                        ],
                        [
                            "eid54",
                            "top",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${input}",
                            '549px',
                            '570px'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            250,
                            750,
                            "easeInQuad",
                            "${bg}",
                            '1.12',
                            '1'
                        ],
                        [
                            "eid134",
                            "top",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan}",
                            '680px',
                            '701px'
                        ],
                        [
                            "eid144",
                            "opacity",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            500,
                            750,
                            "easeInOutQuad",
                            "${runningman}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "top",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao}",
                            '760px',
                            '781px'
                        ],
                        [
                            "eid178",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid175",
                            "top",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng2}",
                            '840px',
                            '861px'
                        ],
                        [
                            "eid141",
                            "scaleY",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid173",
                            "scaleY",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid127",
                            "top",
                            750,
                            1000,
                            "easeInOutQuad",
                            "${title3}",
                            '219px',
                            '240px'
                        ],
                        [
                            "eid22",
                            "top",
                            250,
                            1000,
                            "easeInQuad",
                            "${textboard}",
                            '-174px',
                            '0px'
                        ],
                        [
                            "eid174",
                            "scaleX",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${_322}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid146",
                            "top",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe2}",
                            '679px',
                            '700px'
                        ],
                        [
                            "eid187",
                            "scaleX",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid171",
                            "top",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${licheng}",
                            '840px',
                            '861px'
                        ],
                        [
                            "eid135",
                            "scaleX",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid168",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "top",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai2}",
                            '840px',
                            '861px'
                        ],
                        [
                            "eid163",
                            "top",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai}",
                            '840px',
                            '861px'
                        ],
                        [
                            "eid74",
                            "top",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${_322}",
                            '1022px',
                            '1043px'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "opacity",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${zhengkai}",
                            '0',
                            '1'
                        ],
                        [
                            "eid184",
                            "opacity",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            250,
                            1000,
                            "easeInQuad",
                            "${textboard}",
                            '1.23',
                            '1'
                        ],
                        [
                            "eid160",
                            "opacity",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid161",
                            "scaleY",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "top",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby2}",
                            '760px',
                            '781px'
                        ],
                        [
                            "eid53",
                            "scaleY",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${input}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            1250,
                            500,
                            "easeInOutQuad",
                            "${input}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "scaleX",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid46",
                            "top",
                            500,
                            750,
                            "easeInOutQuad",
                            "${runningman}",
                            '101px',
                            '122px'
                        ],
                        [
                            "eid157",
                            "scaleY",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid45",
                            "scaleY",
                            500,
                            750,
                            "easeInOutQuad",
                            "${runningman}",
                            '1.24',
                            '1'
                        ],
                        [
                            "eid151",
                            "top",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao2}",
                            '760px',
                            '781px'
                        ],
                        [
                            "eid150",
                            "scaleX",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${dengchao}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid179",
                            "scaleX",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${wangzulan}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid143",
                            "scaleX",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid158",
                            "scaleX",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid137",
                            "scaleY",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid72",
                            "opacity",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${_322}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${luhan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "top",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${chenghe}",
                            '679px',
                            '700px'
                        ],
                        [
                            "eid162",
                            "scaleX",
                            1750,
                            500,
                            "easeInOutQuad",
                            "${baby2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid73",
                            "scaleY",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${_322}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            2250,
                            500,
                            "easeInOutQuad",
                            "${yiren2}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            250,
                            1000,
                            "easeInQuad",
                            "${textboard}",
                            '1.23',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '750px', '1334px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)', [270, [['rgba(154,211,232,1.00)', 0], ['rgba(154,211,232,1.00)', 100]]]]
                        },
                        {
                            rect: ['0px', '168px', '750px', '1071px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.14999', '1.14999']],
                            fill: ['rgba(0,0,0,0)', 'images/img2.jpg', '0px', '0px'],
                            id: 'img2',
                            opacity: '1',
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            transform: [[], ['5']],
                            rect: ['303px', '917px', '186px', '53px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'name',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​王大锤</p>',
                            type: 'text'
                        },
                        {
                            transform: [[], ['5']],
                            rect: ['296px', '977px', '206px', '40px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [28, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'job',
                            opacity: '0',
                            text: '<p style=\"margin: 0px;\">​副导演</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '750px', '1334px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    labels: {
                        "s1": 0
                    },
                    data: [
                        [
                            "eid94",
                            "scaleY",
                            0,
                            500,
                            "easeInOutQuad",
                            "${img2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            0,
                            500,
                            "easeInOutQuad",
                            "${img2}",
                            '1.14999',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            0,
                            500,
                            "easeInOutQuad",
                            "${img2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "music": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'music_stop2',
                            tag: 'img',
                            rect: ['auto', '0%', '100%', '84px', '0%', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/music_stop2.png', '0px', '0px']
                        },
                        {
                            rect: ['auto', '-7.1%', '114.3%', '96', '-7.1%', 'auto'],
                            id: 'play',
                            symbolName: 'play',
                            type: 'rect'
                        },
                        {
                            autoplay: 'autoplay',
                            type: 'audio',
                            source: ['media/music.mp3'],
                            id: 'music3',
                            preload: 'auto',
                            rect: ['-262', '596', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            loop: 'loop',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '11.2%', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 21825.75,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "following": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '95px', 'auto', 'auto'],
                            id: 'followbg',
                            fill: ['rgba(0,0,0,0)', 'images/followbg.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['582px', '17px', '18.8%', '67px', 'auto', 'auto'],
                            id: 'follow2',
                            fill: ['rgba(0,0,0,0)', 'images/follow2.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            rect: ['55px', '17px', '67.3%', '66px', 'auto', 'auto'],
                            id: 'adv2',
                            fill: ['rgba(0,0,0,0)', 'images/adv2.png', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "top": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            id: 'logo4',
                            type: 'image',
                            rect: ['21px', '14px', '209px', '60px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo4.png', '0px', '0px']
                        },
                        {
                            id: 'sharetext3',
                            type: 'image',
                            rect: ['27px', '88px', '624px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sharetext3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '164px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "top2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            id: 'white',
                            fill: ['rgba(0,0,0,0)', 'images/white.jpg', '0px', '0px'],
                            type: 'image',
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/sharetext4.png', '0px', '0px'],
                            id: 'sharetext4',
                            rect: ['3.1%', '50.6%', '83.2%', '69px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.17', '1.17']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo5.png', '0px', '0px'],
                            id: 'logo5',
                            rect: ['2.3%', '14.9%', '27.9%', '60px', 'auto', 'auto'],
                            transform: [[], [], [], ['1.17', '1.17']],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '12.6%']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    labels: {
                        "s1": 0
                    },
                    data: [
                        [
                            "eid79",
                            "scaleX",
                            0,
                            750,
                            "easeInOutQuad",
                            "${logo5}",
                            '1.17',
                            '1'
                        ],
                        [
                            "eid84",
                            "opacity",
                            250,
                            750,
                            "easeInOutQuad",
                            "${sharetext4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid80",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${logo5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "top",
                            250,
                            750,
                            "easeInOutQuad",
                            "${sharetext4}",
                            '71.5%',
                            '50.6%'
                        ],
                        [
                            "eid82",
                            "top",
                            0,
                            750,
                            "easeInOutQuad",
                            "${logo5}",
                            '25.4%',
                            '13.69%'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            0,
                            750,
                            "easeInOutQuad",
                            "${logo5}",
                            '1.17',
                            '1'
                        ],
                        [
                            "eid83",
                            "scaleX",
                            250,
                            750,
                            "easeInOutQuad",
                            "${sharetext4}",
                            '1.17',
                            '1'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            250,
                            750,
                            "easeInOutQuad",
                            "${sharetext4}",
                            '1.17',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            tag: 'img',
                            rect: ['auto', 'auto', '100%', '103px', '0%', '-34.5%'],
                            id: 'followbg2',
                            opacity: '0',
                            transform: [[], [], [], ['1.15999', '1.15999']],
                            fill: ['rgba(0,0,0,0)', 'images/followbg.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'follow3',
                            rect: ['auto', 'auto', '18.8%', '67px', '3.5%', '5.6%'],
                            transform: [[], [], [], ['1.15999', '1.15999']],
                            fill: ['rgba(0,0,0,0)', 'images/follow.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'adv',
                            tag: 'img',
                            rect: ['7.3%', 'auto', '67.3%', '66px', 'auto', '1.7%'],
                            fill: ['rgba(0,0,0,0)', 'images/adv.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: true,
                    labels: {
                        "s1": 0
                    },
                    data: [
                        [
                            "eid104",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${adv}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "bottom",
                            0,
                            750,
                            "easeInOutQuad",
                            "${adv}",
                            '1.7%',
                            '14.7%'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${followbg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "scaleY",
                            0,
                            750,
                            "easeInOutQuad",
                            "${follow3}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid105",
                            "scaleY",
                            0,
                            750,
                            "easeInOutQuad",
                            "${adv}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid108",
                            "opacity",
                            0,
                            750,
                            "easeInOutQuad",
                            "${follow3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid99",
                            "scaleX",
                            0,
                            750,
                            "easeInOutQuad",
                            "${followbg2}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid103",
                            "scaleX",
                            0,
                            750,
                            "easeInOutQuad",
                            "${adv}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid100",
                            "scaleY",
                            0,
                            750,
                            "easeInOutQuad",
                            "${followbg2}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            0,
                            750,
                            "easeInOutQuad",
                            "${follow3}",
                            '1.15999',
                            '1'
                        ],
                        [
                            "eid110",
                            "bottom",
                            0,
                            750,
                            "easeInOutQuad",
                            "${follow3}",
                            '5.6%',
                            '14.7%'
                        ],
                        [
                            "eid101",
                            "bottom",
                            0,
                            750,
                            "easeInOutQuad",
                            "${followbg2}",
                            '-34.5%',
                            '-7.4%'
                        ]
                    ]
                }
            },
            "play": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            type: 'image',
                            tag: 'img',
                            id: 'music',
                            rect: ['auto', '6.3%', '87.4%', '84px', '6.3%', 'auto'],
                            transform: [[], ['-9'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/music.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '114.3%', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "rotateZ",
                            0,
                            500,
                            "easeInOutQuad",
                            "${music}",
                            '-9deg',
                            '9deg'
                        ],
                        [
                            "eid87",
                            "rotateZ",
                            500,
                            500,
                            "easeInOutQuad",
                            "${music}",
                            '9deg',
                            '-9deg'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '1094px', '750px', '240px', 'auto', 'auto'],
                            fill: ['rgba(154,211,232,1.00)']
                        },
                        {
                            rect: ['0px', '160px', '750px', '1071px', 'auto', 'auto'],
                            tag: 'img',
                            id: 'img2',
                            userClass: 'tupian',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/img2.jpg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '0px', '750px', '240px', 'auto', 'auto'],
                            fill: ['rgba(154,211,232,1.00)']
                        },
                        {
                            rect: ['10px', '111px', '633px', '129px', 'auto', 'auto'],
                            id: 'playgame',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/playgame.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '750px', '1334px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-26251823");
