var dataUrl  = "https://lab.isaaclin.cn/nCoV/";
var dataUrlBackup  = "https://lab.isaaclin.cn/nCoV/";
var w=window.innerWidth;
var myChart1 = echarts.init(document.getElementById('china'));   
myChart1.showLoading({
    animation:'QuarticIn',
    text: 'Loading',
});

var geoCoordMap1 = {
    "北京": [116.395645,39.929986],
    "天津": [117.210813,39.14393],
    "上海": [121.487899,31.249162],
    "重庆": [106.530635,29.544606],
    "香港": [114.186124,22.293586],
    "澳门": [113.557519,22.204118],
    "台湾": [120.961454,23.80406],
    // 湖北省
    "武汉": [114.3162,30.581084],
    "黄石": [115.050683,30.216127],
    "十堰": [110.801229,32.636994],
    "襄阳": [112.176326,32.094934],
    "宜昌": [111.310981,30.732758],
    "荆州": [112.241866,30.332591],
    "荆门": [112.21733,31.042611],
    "鄂州": [114.895594,30.384439],
    "孝感": [113.935734,30.927955],
    "黄冈": [114.906618,30.446109],
    "咸宁": [114.300061,29.880657],
    "随州": [113.379358,31.717858],
    "恩施州": [109.517433,30.308978],
    "仙桃": [113.443107,30.327249],
    "天门": [113.168020,30.663312],
    "潜江": [112.900485,30.401380],
    "神农架林区": [110.487231,31.595768],
    //新疆维吾尔自治区
    "克拉玛依": [84.88118,45.594331],
    "乌鲁木齐": [87.564988,43.84038],
    "巴州": [86.121688,41.771362],
    "伊犁州": [81.297854,43.922248],
    "吐鲁番市": [89.181595,42.96047],
    "阿勒泰": [88.137915,47.839744],
    "哈密": [93.528355,42.858596],
    "博尔塔拉": [82.052436,44.913651],
    "阿克苏地区": [80.269846,41.171731],
    "克孜勒苏": [76.137564,39.750346],
    "昌吉州": [87.296038,44.007058],
    "喀什": [75.992973,39.470627],
    "和田": [79.930239,37.116774 ],
    "塔城": [82.974881,46.758684],
    "兵团第四师": [85.564988,40.84038],
    "兵团第九师": [81.28,40.55],
    "兵团第十二师": [86.03,47],
    "兵团第八师石河子市": [86.03,44.3],
    "兵团第六师五家渠市": [87.53,44.17],
    "兵团第七师": [79.13,39.85],
    //广西壮族自治区
    "崇左": [107.357322, 22.415455],
    "柳州": [109.422402, 24.329053],
    "百色": [106.631821, 23.901512],
    "南宁": [108.297234,22.806493 ],
    "梧州": [111.305472, 23.485395],
    "北海": [109.122628, 21.472718],
    "桂林": [110.26092, 25.262901],
    "河池": [108.069948, 24.699521],
    "贵港": [109.613708, 23.103373],
    "钦州": [108.638798, 21.97335],
    "来宾": [109.231817, 23.741166],
    "防城港": [108.351791, 21.617398],
    "贺州": [111.552594, 24.411054],
    "玉林": [110.151676, 22.643974],
    // 西藏自治区
    "山南": [91.750644, 29.229027],
    "那曲": [92.067018, 31.48068],
    "阿里": [81.107669, 30.404557],
    "拉萨": [91.111891, 29.662557],
    "昌都": [97.185582, 31.140576],
    "林芝": [94.349985, 29.666941],
    "日喀则": [88.891486, 29.269023],
    //宁夏回族自治区
    "银川": [106.206479, 38.502621],
    "吴忠": [106.208254, 37.993561],
    "中卫": [105.196754, 37.521124],
    "石嘴山": [106.379337, 39.020223],
    "固原": [106.285268, 36.021523],
    "宁东": [106.6, 38.45],
    // 内蒙古自治区
    "乌海市": [106.831999,39.683177],
    "鄂尔多斯": [109.993706,39.81649],
    "兴安盟": [122.048167,46.083757],
    "锡林郭勒盟": [116.02734,43.939705],
    "巴彦淖尔": [107.423807,40.76918],
    "赤峰": [118.930761,42.297112],
    "乌兰察布": [113.112846,41.022363],
    "呼伦贝尔": [119.760822,49.201636],
    "通辽": [122.260363,43.633756],
    "阿拉善盟": [105.695683,38.843075],
    "包头": [109.846239,40.647119],
    "呼和浩特": [111.660351, 40.828319],
    //四川省
    "遂宁": [105.564888,30.557491],
    "雅安": [103.009356,29.999716],
    "巴中": [106.757916,31.869189],
    "攀枝花": [101.722423,26.587571],
    "自贡": [104.776071,29.359157],
    "凉山州": [102.259591,27.892393],
    "广元": [105.819687,32.44104],
    "广安": [106.63572,30.463984],
    "宜宾": [104.633019,28.769675],
    "达州": [107.494973,31.214199],
    "南充": [106.105554,30.800965],
    "成都": [104.067923,30.679943],
    "内江": [105.073056,29.599462],
    "资阳": [104.633019,28.769675],
    "阿坝州": [102.228565,31.905763],
    "甘孜州": [101.969232,30.055144],
    "绵阳": [104.705519,31.504701],
    "乐山": [103.760824,29.600958],
    "泸州": [105.44397,28.89593],
    "德阳": [104.402398,31.13114],
    "眉山": [103.84143,30.061115],
    //陕西省
    "安康": [109.038045,32.70437],
    "咸阳": [108.707509,34.345373],
    "渭南": [109.483933,34.502358],
    "汉中": [107.045478,33.081569],
    "延安": [109.50051,36.60332],
    "榆林": [109.745926,38.279439],
    "西安": [108.953098,34.2778],
    "铜川": [108.968067,34.908368],
    "宝鸡": [107.170645,34.364081],
    "商洛": [109.934208,33.873907],
    "韩城": [110.44,35.48],
    "杨凌": [108,34.3],
    // 河南省
    "焦作": [113.211836,35.234608],
    "南阳": [112.542842,33.01142],
    "三门峡": [111.181262,34.78332],
    "平顶山": [113.300849,33.745301],
    "驻马店": [114.049154,32.983158],
    "新乡": [113.91269,35.307258],
    "许昌": [113.835312,34.02674],
    "洛阳": [112.447525,34.657368],
    "开封": [114.351642,34.801854],
    "安阳": [114.351807,36.110267],
    "周口": [114.654102,33.623741],
    "信阳": [114.085491,32.128582],
    "郑州": [113.649644,34.75661],
    "濮阳": [115.026627,35.753298],
    "商丘": [115.641886,34.438589],
    "漯河": [114.046061,33.576279],
    "鹤壁": [114.29777,35.755426],
    //浙江省
    "丽水": [119.929576,28.4563],
    "衢州": [118.875842,28.95691],
    "台州": [121.440613,28.668283],
    "宁波": [121.579006,29.885259],
    "杭州": [120.219375,30.259244],
    "金华": [119.652576,29.102899],
    "温州": [120.690635,28.002838],
    "绍兴": [120.592467,30.002365],
    "嘉兴": [120.760428,30.773992],
    "湖州": [120.137243,30.877925],
    "舟山": [122.169872,30.03601],
    "省十里丰监狱": [119,29],
    // 海南省
    "海口": [110.330802,20.022071],
    "三亚": [109.522771,18.257776],
    "万宁": [109.9267865,19.1399235],
    "五指山": [109.52,18.78],
    "琼海": [110.47,19.52],
    "昌江": [109.05,19.25],
    "儋州": [109.57,19.52],
    "澄迈": [110,19.73],
    "保亭": [109.7,18.63],
    "临高": [109.68,19.92],
    "东方": [108.63,19.1],
    "陵水": [110.03,18.5],
    "定安": [110.32,19.7],
    "文昌": [110.8,19.55],
    "乐东": [109.17,18.75],
    "琼中": [109.83,19.03],
    // 山西省
    "运城": [111.006854,35.038859],
    "忻州": [112.727939,38.461031],
    "晋城": [112.867333,35.499834],
    "临汾": [111.538788,36.099745],
    "阳泉": [113.569238,37.869529],
    "长治": [113.120292,36.201664],
    "吕梁": [111.143157,37.527316],
    "太原": [112.550864,37.890277],
    "大同": [113.290509,40.113744],
    "朔州": [112.479928,39.337672],
    "晋中": [112.738514,37.693362],
    // 广东省
    "韶关": [113.594461,24.80296],
    "惠州": [114.410658,23.11354],
    "揭阳": [116.379501,23.547999],
    "云浮": [112.050946,22.937976],
    "深圳": [114.025974,22.546054],
    "潮州": [116.630076,23.661812],
    "清远": [113.040773,23.698469],
    "梅州": [116.126403,24.304571],
    "广州": [113.30765,23.120049],
    "东莞": [113.763434,23.043024],
    "江门": [113.078125,22.575117],
    "肇庆": [112.479653,23.078663],
    "茂名": [110.931245,21.668226],
    "阳江": [111.97701,21.871517],
    "汕尾": [115.372924,22.778731],
    "河源": [114.713721,23.757251],
    "中山": [113.42206,22.545178],
    "佛山": [113.134026,23.035095],
    "汕头": [116.72865,23.383908],
    "湛江": [110.365067,21.257463],
    "珠海": [113.562447,22.256915],
    // 云南省
    "怒江": [98.859932,25.860677],
    "迪庆": [99.713682,27.831029],
    "昭通": [103.725021,27.340633],
    "西双版纳": [100.803038,22.009433],
    "玉溪": [102.545068,24.370447],
    "临沧": [100.092613,23.887806],
    "大理州": [100.223675,25.5969],
    "丽江": [100.229628,26.875351],
    "楚雄州": [101.529382,25.066356],
    "红河州": [103.384065,23.367718],
    "文山州": [104.089112,23.401781],
    "昆明": [102.714601,25.049153],
    "曲靖": [103.782539,25.520758],
    "保山": [99.177996,25.120489],
    "思茅": [100.980058,22.788778],
    "德宏州": [98.589434,24.44124],
    "普洱": [101,23],
    // 贵州省
    "贵阳": [106.709177,26.629907],
    "黔西南州": [104.900558,25.095148],
    "铜仁": [109.196161,27.726271],
    "黔东南州": [107.985353,26.583992],
    "遵义": [106.93126,27.699961],
    "毕节": [105.300492,27.302612],
    "黔南州": [107.523205,26.264536],
    "六盘水": [104.852087,26.591866],
    "安顺": [105.92827,26.228595],
    // 辽宁省
    "鞍山": [123.007763,41.118744],
    "本溪": [123.778062,41.325838],
    "营口": [122.233391,40.668651],
    "大连": [121.593478,38.94871],
    "铁岭": [123.85485,42.299757],
    "朝阳": [120.446163,41.571828],
    "抚顺": [123.92982,41.877304],
    "盘锦": [122.073228,41.141248],
    "丹东": [124.338543,40.129023],
    "葫芦岛": [120.860758,40.74303],
    "锦州": [121.147749,41.130879],
    "沈阳": [123.432791,41.808645],
    "辽阳": [123.172451,41.273339],
    "阜新": [121.660822,42.01925],
    // 河北省
    "廊坊": [116.703602,39.518611],
    "衡水": [115.686229,37.746929],
    "秦皇岛": [119.604368,39.945462],
    "承德": [117.933822,40.992521],
    "沧州": [116.863806,38.297615],
    "张家口": [114.893782,40.811188],
    "石家庄": [114.522082,38.048958],
    "保定": [115.49481,38.886565],
    "唐山": [118.183451,39.650531],
    "邢台": [114.520487,37.069531],
    "邯郸": [114.482694,36.609308],
    // 青海省
    "海南州": [100.624066,36.284364],
    "海西州": [97.342625,37.373799],
    "海东州": [102.085207,36.51761],
    "果洛": [100.223723,34.480485],
    "西宁": [101.767921,36.640739],
    "海北州": [100.879802,36.960654],
    "黄南": [102.0076,35.522852],
    "玉树": [97.013316,33.00624],
    // 湖南省
    "邵阳": [111.461525,27.236811],
    "张家界": [110.48162,29.124889],
    "益阳": [112.366547,28.588088],
    "怀化": [109.986959,27.557483],
    "湘西自治州": [109.745746,28.317951],
    "郴州": [113.037704,25.782264],
    "衡阳": [112.583819,26.898164],
    "永州": [111.614648,26.435972],
    "株洲": [113.131695,27.827433],
    "岳阳": [113.146196,29.378007],
    "长沙": [112.979353,28.213478],
    "湘潭": [112.935556,27.835095],
    "常德": [111.653718,29.012149],
    "娄底": [111.996396,27.741073],
    // 江苏省
    "镇江": [119.455835,32.204409],
    "常州": [119.981861,31.771397],
    "南通": [120.873801,32.014665],
    "泰州": [119.919606,32.476053],
    "南京": [118.778074,32.057236],
    "苏州": [120.619907,31.317987],
    "盐城": [120.148872,33.379862],
    "宿迁": [118.296893,33.95205],
    "无锡": [120.305456,31.570037],
    "连云港": [119.173872,34.601549],
    "徐州": [117.188107,34.271553],
    "淮安": [119.030186,33.606513],
    "扬州": [119.427778,32.408505],
    // 山东省
    "潍坊": [119.142634,36.716115],
    "日照": [119.50718,35.420225],
    "济宁": [116.600798,35.402122],
    "聊城": [115.986869,36.455829],
    "德州": [116.328161,37.460826],
    "临沂": [118.340768,35.072409],
    "枣庄": [117.279305,34.807883],
    "莱芜": [117.684667,36.233654],
    "烟台": [121.309555,37.536562],
    "淄博": [118.059134,36.804685],
    "滨州": [117.968292,37.405314],
    "泰安": [117.089415,36.188078],
    "荷泽": [115.46336,35.26244],
    "济南": [117.024967,36.682785],
    "威海": [122.093958,37.528787],
    "青岛": [120.384428,36.105215],
    "东营": [118.583926,37.487121],
    // 安徽省
    "宣城": [118.752096,30.951642],
    "阜阳": [115.820932,32.901211],
    "亳州": [115.787928,33.871211],
    "蚌埠": [117.35708,32.929499],
    "黄山": [118.29357,29.734435],
    "六安": [116.505253,31.755558],
    "池州": [117.494477,30.660019],
    "滁州": [118.32457,32.317351],
    "淮南": [117.018639,32.642812],
    "铜陵": [117.819429,30.94093],
    "合肥": [117.282699,31.866942],
    "芜湖": [118.384108,31.36602],
    "马鞍山": [118.515882,31.688528],
    "安庆": [117.058739,30.537898],
    "淮北": [116.791447,33.960023],
    "宿州": [116.988692,33.636772],
    "巢湖": [117.88049,31.608733],
    //黑龙江省
    "双鸭山": [131.171402,46.655102],
    "绥化": [126.989095,46.646064],
    "大兴安岭": [124.196104,51.991789],
    "佳木斯": [130.284735,46.81378],
    "黑河": [127.50083,50.25069],
    "哈尔滨": [126.657717,45.773225],
    "大庆": [125.02184,46.596709],
    "七台河": [131.019048,45.775005],
    "伊春": [128.910766,47.734685],
    "牡丹江": [129.608035,44.588521],
    "鸡西": [130.941767,45.32154|13],
    "齐齐哈尔": [123.987289,47.3477],
    "鹤岗": [130.292472,47.338666],
    // 福建省
    "三明": [117.642194,26.270835],
    "厦门": [118.103886,24.489231],
    "龙岩": [117.017997,25.078685],
    "莆田": [119.077731,25.44845],
    "南平": [118.181883,26.643626],
    "宁德": [119.542082,26.656527],
    "泉州": [118.600362,24.901652],
    "漳州": [117.676205,24.517065],
    "福州": [119.330221,26.047125],
    // 甘肃省
    "定西": [104.626638,35.586056],
    "嘉峪关": [98.281635,39.802397],
    "庆阳": [107.644227,35.726801],
    "酒泉": [98.508415,39.741474],
    "临夏": [103.215249,35.598514],
    "金昌": [102.208126,38.516072],
    "张掖": [100.459892,38.93932],
    "白银": [104.171241,36.546682],
    "陇南": [104.934573,33.39448],
    "天水": [105.736932,34.584319],
    "兰州": [103.823305,36.064226],
    "武威": [102.640147,37.933172],
    "平凉": [106.688911,35.55011],
    "甘南": [102.917442,34.992211],
    // 吉林省
    "长春": [125.313642,43.898338],
    "通化": [125.94265,41.736397],
    "吉林市": [126.564544,43.871988],
    "白山": [126.435798,41.945859],
    "松原": [124.832995,45.136049],
    "延边": [129.485902,42.896414],
    "辽源": [125.133686,42.923303],
    "白城": [122.840777,45.621086],
    "四平市": [124.391382,43.175525],
    "公主岭": [124.8,43.5],
    "梅河口": [125.7,42.5],
    // 江西省
    "抚州": [116.360919,27.954545],
    "九江": [115.999848,29.71964],
    "宜春": [114.400039,27.81113],
    "上饶": [117.955464,28.457623],
    "赣州": [114.935909,25.845296],
    "南昌": [115.893528,28.689578],
    "吉安": [114.992039,27.113848],
    "景德镇": [117.186523,29.303563],
    "萍乡": [113.859917,27.639544],
    "新余": [114.947117,27.822322],
    "鹰潭": [117.03545,28.24131],
    "赣江新区": [116,29]
}

$(document).ready(function () {
    initChart1();
});

var initChart1 = function () {
    $.ajax({
        url: dataUrl + 'api/area',
        type: 'get',
        success: function (res) {
            if (res.success === true) {
                var chartData = res.results;
                var datalist = [];
                for (var i in chartData) {
                    var name1 = chartData[i].provinceShortName;
                    var confirmedCount1 = chartData[i].confirmedCount ? chartData[i].confirmedCount : chartData[i].confirmed;
                    var cityData = chartData[i].cities;
                    for (var j in cityData) {
                        var name2 = cityData[j].cityName; 
                        var confirmedCount2 = cityData[j].confirmedCount ? cityData[j].confirmedCount : cityData[j].confirmed;
                        datalist.push({
                            name: name2,
                            value: confirmedCount2
                        });
                    }
                    datalist.push({
                        name: name1,
                        value: confirmedCount1
                    });
                }
                console.log(datalist);
                if (w<1000){
                    initChart1_small(datalist);
                }
                else {
                    initChart1_big(datalist);
                }
                return;
            }
            alert("获取数据失败");
        }, error: function (res) {
            if (res.state() === "rejected" && !this.url.includes(dataUrlBackup)) {
                this.url = this.url.replace(dataUrl,dataUrlBackup);
                $.ajax(this);
            }
        }
    });

    var initChart1_small = function (datalist) {
        var convertData1 = function(datalist) {
            var res = [];
            for (var i = 0; i < datalist.length; i++) {
                var geoCoord1 = geoCoordMap1[datalist[i].name];
                if (geoCoord1) {
                    res.push({
                        name: datalist[i].name,
                        value: geoCoord1.concat(datalist[i].value)
                    });
                }
            }
            return res;
        };

        var convertedData1 = [
            convertData1(datalist),
            convertData1(datalist.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6))
        ];

        var help = [{
                name: 'help[1]',
                value: [114.2,30.5, '求助泌尿外科医生更换尿管','硚口区长丰街团结社区团结佳兴园6-1-502','13871444225','80岁老人中风瘫痪在床8年，患有糖尿病'],
                type: 'help'
            },
            {
                name: 'help[2]',
                value: [114.9,30.4, '急需做ercp手术','九坤翰林院','15327130516','消除炎症然后打治疗癌症的药物。病人在蔡甸人民医院，2月10日已下病危通知书，急需手术所在医院无法手术。'],
                type: 'help'
            },
        ];

        var option = {
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{                      //渐变
                        offset: 0, color: '#1e1e1e'     // 0% 处的颜色
                    }, 
                    {
                        offset: 0.5, color: '#111111'
                    },
                    {
                        offset: 1, color: '#000000'     // 100% 处的颜色
                    }],
                },

                animationDurationUpdate: 1000,

                title: {
                    left: 'center',
                    padding:30,
                    text: '全国各省市疫情状况累计确诊地图',
                    subtext: '数据来源国家卫健委\n查看过往数据与预测数据请至疫情地图',
                    sublink: 'http://www.nhc.gov.cn',
                    x:'left',
                    textStyle: {
                        color: '#fff'
                    },
                    subtextStyle: {
                        fontStyle: 'italic'
                    }
                },

                graphic: [
                    {//区域选择说明
                        type: 'text',
                        right: 'center',
                        top: '12%',
                        style: {
                            fill: '#fff',
                            text: '关闭热图以使用区域选择',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        right: 'center',
                        top: '14%',
                        style: {
                            fill: '#fff',
                            text: '点击求助气泡送出祝福',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        right: 'center',
                        top: '16.5%',
                        style: {
                            fill: '#fff',
                            text: '更多可视化分析请点击上方\n   疫情地图与可视化分析',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                ],

                legend: {
                    icon: 'circle',
                    orient: 'vertical',
                    top: '8%',
                    right: '10px',
                    data:[
                    {
                        name: '热图',
                    },
                    {
                        name: '散点',
                    },
                    {
                        name: '求助',
                    }],
                    textStyle: {
                        color: '#fff'
                    }
                },

                brush: {
                    outOfBrush: {
                        color: 'gray'
                    },
                    brushStyle: {
                        borderWidth: 2,
                        color: 'rgba(255,255,255,0.2)',
                        borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [1],
                    brushMode: 'multiple',
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                },

                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderColor: '#abc'
                        }
                    },
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    },
                    left: 'center'
                },
                
                tooltip: {
                    trigger: 'item'
                },

                grid: {
                    right: '2%',
                    top: '20%',
                    bottom: '15%',
                    width: '15%'
                },
                
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    boundaryGap: false,
                    splitNumber:4,
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
                },
                
                yAxis: {
                    type: 'category',
                    nameGap: 95,
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {interval: 0, textStyle: {color: '#fff'}},
                    data: []
                },
                
                visualMap: {
                    pieces: [
                        {min: 2000},
                        {min: 1000, max: 2000},
                        {min: 600, max: 1000},
                        {min: 200, max: 600},
                        {min: 100, max: 200},
                        {min: 30, max: 100},
                        {min: 5, max: 30},
                        {max: 5}
                    ],
                    seriesIndex: [0,1,2],
                    inRange: {
                        color: ['aqua', '#eac736', '#ff3300']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },

                geo: {
                    //center:[121.487899,31.249162],//视角的中心点为上海
                    roam: true,//缩放平移

                    zoom: 3,

                    center: [111.031229,37.636994],

                    scaleLimit: {
                        min: 1,
                        max:10,
                    },

                    map: 'china',

                    itemStyle: {
                        areaColor: '#333333',
                        borderColor: '#000',
                    },
                    
                    emphasis: {
                        itemStyle: {
                            areaColor: '#123555',
                            shadowColor: '#000',
                            shadowBlur: 10
                        },
                        label: {
                            show: false
                        }
                    },

                    regions: [{
                        name: '湖北',
                        itemStyle: {
                            areaColor: '#222222'
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: '#111111',
                                shadowColor: '#000',
                                shadowBlur: 10
                            },
                        }
                    }],
                },
            
                series: [{
                        name: '热图',
                        type: 'heatmap',
                        coordinateSystem: 'geo',
                        data: convertedData1[0]
                    },
                    {
                        name: '散点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertedData1[0],
                        symbolSize: function(val) {
                            if (val[2]>100){
                                return (2 + Math.log2(val[2]));
                            }
                            else {
                                return (2 + val[2]/20)
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.name + ' : ' + params.value[2];
                            }
                        },
                    },
                    {
                        name: 'Top',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData1(datalist.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 2)),
                        symbolSize: function(val) {
                            return (Math.log2(val[2]));
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.name + ' : ' + params.value[2];
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: '求助',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: help,
                        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA91JREFUaN7tWU1IVFEUPncmK9OcsBJdGZjUwo20bCXkoqCdGSrkYtoFge1aitAmaKWIyGAtqk0oVNAiSQqDIEVdDZISLSqiRZj5U5P3a/F5J57vvt95ORSdzcebd+653/neufed+0bkv/0Zg4aG3rsXAIBUKvJ4AEA6zTh79pQ7n5CEz50jzswQtSZ+/058+dL42cd3dxNnZ4mFAnFrizg9TTx9utz5/iauoaE7OpxEg0xrjrt6lXjjRrhxxoygbW3lSxwAsH8/8dOnaAkYM0/YVEoE09DQ+TwvlIqbR+S16bTWVmJdXbzxZm3HSECJEnXyJC+OHdt9ASAQHD8ee3xSViKP+AIoUaI+fy53/onz4NrKZLi2BgZ4feaM3a+mhn6rq/H2gFLt/XtiOu3iBwA4e5bY30++Bw8GCwAAGBx0TvTjBwM0NtqFuHmzPAL09dn5NDfz/s+fRddtniEr4NUr11waGrq93e5/9CidPn7cncQXF4kHDtj5nD9vH/f8+U5/9x6gRIk6fNirPlzuKZVSKbMGe3qIW1uh11wk29jgptfZqZRSSq2vh+VJq60NFkBERCwCKFGivAKLkNCzZ7zKZolaJ5N4ocDEL16k4AsL8eK4BSj22CwR07NnMl4hWGKXLlGQ2loSy+VIbHWVQty5w3hm1MgIcd++aIS/fWP87m7Gf/TIySOTIY/Ll/nrhw/Er1/DCvA7MQBAVZXnstPQ0Bcu2H/P54lHjtjjnjpFfPcu3Bp/84bxWlrs8erri35OMtqTp4Ov5XDFG9XV/sS6uohra/bAr197vW7o1NDA+1NT9vjj48RDh+z8zOt5ft4+fmWF2NvrL0BFhUcFKEU0PfpOu3uXODTkP8HkJNFd8s55slliZ6d/ZVZWEl+88J/31i2nkDttbS1w1dHx7VvfQigS2dz093vwgOhuVAJ5bJcqxz986D/P+jrRHJe9BMrnQwpw+zYSNRMv+NBj/Eg4l0uWx/BwSOW9GokSbPvcH25+U8pJz+9u6b2fAABgYiJxIgCsLSwA4Pr1PzPf/ftRl+COzefx42QJrazY5wvaU6LaxITXZhxeiO3XBgPeu5cMsY0NuwAxvgxZbWws8Y+pDGyWxrVrJpF4BAsFp8Bmt49r5i1w5UpiCYcT5MQJJjA3F4+4EdR8W4xgpvECADQ1xc0j9hch9vyLi7x6+jS6ggJBOk2MUapKlKgnT8hjeTluHuX7w0GJEmUSt7Smu2QlfhUuwcyTj1sBf70AIiJiWuTof50lZQkpPzpKXFoKdIVA8OULz/emHzCnuK4uXtfUhJt3cnKX9fpv/5z9AsChpwnglQSbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTE5VDE5OjUwOjExKzA4OjAw5lHBhwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0xOVQxOTo1MDoxMSswODowMJcMeTsAAABHdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3FmeDRxNTIzbDRwL2hlbHAuc3Zn04epAwAAAABJRU5ErkJggg==',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false,
                                formatter: function(params) {
                                    return params.name;
                                },
                                position: 'right',
                                color: '#fff',
                                fontSize: '8'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#fff',
                                borderWidth: 2,
                                borderColor: '#D33BD3'
                            }
                        },
                        tooltip: {
                            padding: 10,
                            backgroundColor: '#222',
                            borderColor: '#777',
                            borderWidth: 1,
                            formatter: function (params) {
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + params.value[2] + '！'
                                    + '</div>'
                                    + '地址:' + params.value[3] + ';<br>'
                                    + '联系方式:' + params.value[4] + ';<br>' 
                                    + params.value[5];
                            }
                        },
                    },
                    {
                        id: 'bar',
                        zlevel: 2,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            color: '#ddd',
                        },
                        emphasis: {
                            color: '#fff',
                            shadowColor: 'rgba(255, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                        data: []
                    }
                ]
        }

        myChart1.hideLoading();
        myChart1.setOption(option);
        myChart1.on('brushselected', renderBrushed);
        myChart1.on('click', best_wish);
        myChart1.on('click', sufe);

        setTimeout(function() {
            myChart1.dispatchAction({
                type: 'brush',
                areas: [{
                    geoIndex: 0,
                    brushType: 'polygon',
                    coordRange: [
                        [115.5, 29.5],
                        [115.5, 33],
                        [109, 33],
                        [109, 29.5]
                    ]
                }]
            });
        }, 0);

        function renderBrushed(params) {
            var mainSeries = params.batch[0].selected[0];
            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            var maxBar = 30;
            var sum = 0;
            var count = 0;

            for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                var rawIndex = mainSeries.dataIndex[i];
                var dataItem = convertedData1[0][rawIndex];
                var Value = dataItem.value[2];
                sum += Value;
                count++;
                selectedItems.push(dataItem);
            }

            selectedItems.sort(function (a, b) {
                return a.value[2] - b.value[2];
            });

            for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                categoryData.push(selectedItems[i].name);
                barData.push(selectedItems[i].value[2]);
            }

            this.setOption({
                yAxis: {
                    data: categoryData,
                },

                xAxis: {
                    axisLabel: {
                        show: !!count,
                    }
                },

                title: {
                    id: 'statistic',
                    right: '4%',
                    top: '20%',
                    text: count ? '区域内总和: ' + (sum): '',
                    textStyle: {
                        color: '#fff'
                    },
                },
                
                series: {
                    id: 'bar',
                    data: barData
                }
            });
        }

        function best_wish(params) {
            if (params.componentType === 'series') {
                if (params.seriesIndex === 3) {
                    var word = prompt("请输您的祝福","");
                    if(word){
                        alert("祝福"+word+"已被传达");
                    }
                }
            } 
        }

        function sufe(params) {
            if (params.componentType === 'graphic') {
                window.open('http://www.shufe.edu.cn/');
            }
        }
    }

    var initChart1_big = function (datalist) {
        var convertData1 = function(datalist) {
            var res = [];
            for (var i = 0; i < datalist.length; i++) {
                var geoCoord1 = geoCoordMap1[datalist[i].name];
                if (geoCoord1) {
                    res.push({
                        name: datalist[i].name,
                        value: geoCoord1.concat(datalist[i].value)
                    });
                }
            }
            return res;
        };

        var convertedData1 = [
            convertData1(datalist),
            convertData1(datalist.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 6))
        ];

        var help = [{
                name: 'help[1]',
                value: [114.2,30.5, '求助泌尿外科医生更换尿管','硚口区长丰街团结社区团结佳兴园6-1-502','13871444225','80岁老人中风瘫痪在床8年，患有糖尿病'],
                type: 'help'
            },
            {
                name: 'help[2]',
                value: [114.9,30.4, '急需做ercp手术','九坤翰林院','15327130516','消除炎症然后打治疗癌症的药物。病人在蔡甸人民医院，2月10日已下病危通知书，急需手术所在医院无法手术。'],
                type: 'help'
            },
        ];

        var option = {
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{                      //渐变
                        offset: 0, color: '#1e1e1e'     // 0% 处的颜色
                    }, 
                    {
                        offset: 0.5, color: '#111111'
                    },
                    {
                        offset: 1, color: '#000000'     // 100% 处的颜色
                    }],
                },

                title: {
                    left: 'left',
                    padding:20,
                    text: '全国各省市疫情状况累计确诊地图',
                    subtext: '数据来源国家卫健委\n查看过往数据与预测数据请点击疫情地图',
                    sublink: 'http://www.nhc.gov.cn',
                    x:'left',
                    textStyle: {
                        color: '#fff',
                        fontSize: 23
                    },
                    subtextStyle: {
                        fontStyle: 'italic'
                    }
                },

                graphic: [
                    {//区域选择说明
                        type: 'text',
                        right: 'center',
                        top: '4%',
                        style: {
                            fill: '#fff',
                            text: '关闭热图以使用区域选择',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        right: 'center',
                        top: '6%',
                        style: {
                            fill: '#fff',
                            text: '点击求助气泡送出祝福',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        right: 'center',
                        top: '8.5%',
                        style: {
                            fill: '#fff',
                            text: '更多可视化分析请点击导航栏\n   疫情地图与可视化分析',
                            font: 'bold 13px Microsoft YaHei'
                        }
                    },
                ],

                legend: {
                    icon: 'circle',
                    orient: 'vertical',
                    top: '5%',
                    right: '17%',
                    selected: {
                        '热图': false
                    },
                    data:[
                    {
                        name: '热图',
                    },
                    {
                        name: '散点',
                    },
                    {
                        name: '求助',
                    }],
                    textStyle: {
                        color: '#fff'
                    }
                },

                brush: {
                    outOfBrush: {
                        color: 'gray'
                    },
                    brushStyle: {
                        borderWidth: 2,
                        color: 'rgba(255,255,255,0.2)',
                        borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [1],
                    brushMode: 'multiple',
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                },

                toolbox: {
                    iconStyle: {
                        normal: {
                            borderColor: '#fff'
                        },
                        emphasis: {
                            borderColor: '#abc'
                        }
                    },
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    },
                    right: '17%'
                },
                
                tooltip: {
                    trigger: 'item'
                },

                grid: {
                    right: '2%',
                    top: '25%',
                    bottom: '15%',
                    width: '15%'
                },
                
                xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    boundaryGap: false,
                    splitNumber:4,
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
                },
                
                yAxis: {
                    type: 'category',
                    nameGap: 95,
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {interval: 0, textStyle: {color: '#fff'}},
                    data: []
                },
                
                visualMap: {
                    pieces: [
                        {min: 2000},
                        {min: 1000, max: 2000},
                        {min: 600, max: 1000},
                        {min: 200, max: 600},
                        {min: 100, max: 200},
                        {min: 30, max: 100},
                        {min: 5, max: 30},
                        {max: 5}
                    ],
                    seriesIndex: [0,1,2],
                    inRange: {
                        color: ['aqua', '#eac736', '#ff3300']
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },

                geo: {
                    //center:[121.487899,31.249162],//视角的中心点为上海
                    roam: true,//缩放平移

                    zoom: 1.2,

                    scaleLimit: {
                        min: 1,
                        max:10,
                    },

                    map: 'china',

                    itemStyle: {
                        areaColor: '#333333',
                        borderColor: '#000',
                    },
                    
                    emphasis: {
                        itemStyle: {
                            areaColor: '#123555',
                            shadowColor: '#000',
                            shadowBlur: 10
                        },
                        label: {
                            show: false
                        }
                    },

                    regions: [{
                        name: '湖北',
                        itemStyle: {
                            areaColor: '#222222'
                        },
                        emphasis: {
                            itemStyle: {
                                areaColor: '#111111',
                                shadowColor: '#000',
                                shadowBlur: 10
                            },
                        }
                    }],
                },
            
                series: [{
                        name: '热图',
                        type: 'heatmap',
                        coordinateSystem: 'geo',
                        data: convertedData1[0]
                    },
                    {
                        name: '散点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertedData1[0],
                        symbolSize: function(val) {
                            if (val[2]>100){
                                return (2 + 2 * Math.log2(val[2]));
                            }
                            else {
                                return (3 + val[2]/10)
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.name + ' : ' + params.value[2];
                            }
                        },
                    },
                    {
                        name: 'Top',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData1(datalist.sort(function(a, b) {
                            return b.value - a.value;
                        }).slice(0, 2)),
                        symbolSize: function(val) {
                            return (2 * Math.log2(val[2]) - 5);
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: function(params) {
                                return params.name + ' : ' + params.value[2];
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: '求助',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: help,
                        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAYAAAAj6qa3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA91JREFUaN7tWU1IVFEUPncmK9OcsBJdGZjUwo20bCXkoqCdGSrkYtoFge1aitAmaKWIyGAtqk0oVNAiSQqDIEVdDZISLSqiRZj5U5P3a/F5J57vvt95ORSdzcebd+653/neufed+0bkv/0Zg4aG3rsXAIBUKvJ4AEA6zTh79pQ7n5CEz50jzswQtSZ+/058+dL42cd3dxNnZ4mFAnFrizg9TTx9utz5/iauoaE7OpxEg0xrjrt6lXjjRrhxxoygbW3lSxwAsH8/8dOnaAkYM0/YVEoE09DQ+TwvlIqbR+S16bTWVmJdXbzxZm3HSECJEnXyJC+OHdt9ASAQHD8ee3xSViKP+AIoUaI+fy53/onz4NrKZLi2BgZ4feaM3a+mhn6rq/H2gFLt/XtiOu3iBwA4e5bY30++Bw8GCwAAGBx0TvTjBwM0NtqFuHmzPAL09dn5NDfz/s+fRddtniEr4NUr11waGrq93e5/9CidPn7cncQXF4kHDtj5nD9vH/f8+U5/9x6gRIk6fNirPlzuKZVSKbMGe3qIW1uh11wk29jgptfZqZRSSq2vh+VJq60NFkBERCwCKFGivAKLkNCzZ7zKZolaJ5N4ocDEL16k4AsL8eK4BSj22CwR07NnMl4hWGKXLlGQ2loSy+VIbHWVQty5w3hm1MgIcd++aIS/fWP87m7Gf/TIySOTIY/Ll/nrhw/Er1/DCvA7MQBAVZXnstPQ0Bcu2H/P54lHjtjjnjpFfPcu3Bp/84bxWlrs8erri35OMtqTp4Ov5XDFG9XV/sS6uohra/bAr197vW7o1NDA+1NT9vjj48RDh+z8zOt5ft4+fmWF2NvrL0BFhUcFKEU0PfpOu3uXODTkP8HkJNFd8s55slliZ6d/ZVZWEl+88J/31i2nkDttbS1w1dHx7VvfQigS2dz093vwgOhuVAJ5bJcqxz986D/P+jrRHJe9BMrnQwpw+zYSNRMv+NBj/Eg4l0uWx/BwSOW9GokSbPvcH25+U8pJz+9u6b2fAABgYiJxIgCsLSwA4Pr1PzPf/ftRl+COzefx42QJrazY5wvaU6LaxITXZhxeiO3XBgPeu5cMsY0NuwAxvgxZbWws8Y+pDGyWxrVrJpF4BAsFp8Bmt49r5i1w5UpiCYcT5MQJJjA3F4+4EdR8W4xgpvECADQ1xc0j9hch9vyLi7x6+jS6ggJBOk2MUapKlKgnT8hjeTluHuX7w0GJEmUSt7Smu2QlfhUuwcyTj1sBf70AIiJiWuTof50lZQkpPzpKXFoKdIVA8OULz/emHzCnuK4uXtfUhJt3cnKX9fpv/5z9AsChpwnglQSbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAyLTE5VDE5OjUwOjExKzA4OjAw5lHBhwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMi0xOVQxOTo1MDoxMSswODowMJcMeTsAAABHdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3FmeDRxNTIzbDRwL2hlbHAuc3Zn04epAwAAAABJRU5ErkJggg==',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false,
                                formatter: function(params) {
                                    return params.name;
                                },
                                position: 'right',
                                color: '#fff',
                                fontSize: '8'
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#fff',
                                borderWidth: 2,
                                borderColor: '#D33BD3'
                            }
                        },
                        tooltip: {
                            padding: 10,
                            backgroundColor: '#222',
                            borderColor: '#777',
                            borderWidth: 1,
                            formatter: function (params) {
                                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                    + params.value[2] + '！'
                                    + '</div>'
                                    + '地址:' + params.value[3] + ';<br>'
                                    + '联系方式:' + params.value[4] + ';<br>' 
                                    + params.value[5];
                            }
                        },
                    },
                    {
                        id: 'bar',
                        zlevel: 2,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            color: '#ddd',
                        },
                        emphasis: {
                            color: '#fff',
                            shadowColor: 'rgba(255, 0, 0, 0.5)',
                            shadowBlur: 10
                        },
                        data: []
                    }
                ]
        }

        myChart1.hideLoading();
        myChart1.setOption(option);
        myChart1.on('brushselected', renderBrushed);
        myChart1.on('click', best_wish);
        myChart1.on('click', sufe);

        setTimeout(function() {
            myChart1.dispatchAction({
                type: 'brush',
                areas: [{
                    geoIndex: 0,
                    brushType: 'polygon',
                    coordRange: [
                        [115.5, 29.5],
                        [115.5, 33],
                        [109, 33],
                        [109, 29.5]
                    ]
                }]
            });
        }, 0);

        function renderBrushed(params) {
            var mainSeries = params.batch[0].selected[0];
            var selectedItems = [];
            var categoryData = [];
            var barData = [];
            var maxBar = 30;
            var sum = 0;
            var count = 0;

            for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                var rawIndex = mainSeries.dataIndex[i];
                var dataItem = convertedData1[0][rawIndex];
                var Value = dataItem.value[2];
                sum += Value;
                count++;
                selectedItems.push(dataItem);
            }

            selectedItems.sort(function (a, b) {
                return a.value[2] - b.value[2];
            });

            for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                categoryData.push(selectedItems[i].name);
                barData.push(selectedItems[i].value[2]);
            }

            this.setOption({
                yAxis: {
                    data: categoryData,
                },

                xAxis: {
                    axisLabel: {
                        show: !!count,
                    }
                },

                title: {
                    id: 'statistic',
                    right: '8%',
                    top: '15%',
                    text: count ? '区域内总和: ' + (sum): '',
                    textStyle: {
                        color: '#fff'
                    },
                },
                
                series: {
                    id: 'bar',
                    data: barData
                }
            });
        }

        function best_wish(params) {
            if (params.componentType === 'series') {
                if (params.seriesIndex === 3) {
                    var word = prompt("请输您的祝福","");
                    if(word){
                        alert("祝福"+word+"已被传达");
                    }
                }
            } 
        }

        function sufe(params) {
            if (params.componentType === 'graphic') {
                window.open('http://www.shufe.edu.cn/');
            }
        }
    }
}