const app = getApp()
import { getFloorImage, getFloorCar } from '../../api/index.js'
import { html, renderSVG } from '../../cax/cax/cax'

Page({
  data: {
    detailId: '',
    imageInfo: {
      imgUrl: '',
      width: '',
      height: ''
    },
    matrix: {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    },
    preTouchesClientx1y1x2y2: [],
    preTouchPosition: {
      x: 0,
      y: 0
    },
    rect: {
      left: '',
      top: ''
    },
    translateX: 0,
    translateY: 0,
    scaleRatio: 1,
    scaleOrigin: {
      x: 0,
      y: 0
    },
    transformOrigin: {
      x: 0,
      y: 0
    },
    originHaveSet: false,
    tags: [{"id":"051","text":"051","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":923.001038,"pageY":1310,"rotation":0,"points":[{"X":973.001038,"Y":1310},{"X":923.001038,"Y":1310},{"X":923.001038,"Y":1420},{"X":973.001038,"Y":1420}]},{"id":"052","text":"052","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":973.001038,"pageY":1310,"rotation":0,"points":[{"X":1023.001038,"Y":1310},{"X":973.001038,"Y":1310},{"X":973.001038,"Y":1420},{"X":1023.001038,"Y":1420}]},{"id":"053","text":"053","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1023.001038,"pageY":1310,"rotation":0,"points":[{"X":1073.000977,"Y":1310},{"X":1023.001038,"Y":1310},{"X":1023.001038,"Y":1420},{"X":1073.000977,"Y":1420}]},{"id":"054","text":"054","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1085.000977,"pageY":1310,"rotation":0,"points":[{"X":1135.000977,"Y":1310},{"X":1085.000977,"Y":1310},{"X":1085.000977,"Y":1420},{"X":1135.000977,"Y":1420}]},{"id":"055","text":"055","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1135.000977,"pageY":1310,"rotation":0,"points":[{"X":1185.000977,"Y":1310},{"X":1135.000977,"Y":1310},{"X":1135.000977,"Y":1420},{"X":1185.000977,"Y":1420}]},{"id":"056","text":"056","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1185.000977,"pageY":1310,"rotation":0,"points":[{"X":1235.000977,"Y":1310},{"X":1185.000977,"Y":1310},{"X":1185.000977,"Y":1420},{"X":1235.000977,"Y":1420}]},{"id":"076","text":"076","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1552,"pageY":1864,"rotation":270,"points":[{"X":1552,"Y":1914},{"X":1552,"Y":1864},{"X":1662,"Y":1864},{"X":1662,"Y":1914}]},{"id":"075","text":"075","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1552,"pageY":1914,"rotation":270,"points":[{"X":1552,"Y":1964},{"X":1552,"Y":1914},{"X":1662,"Y":1914},{"X":1662,"Y":1964}]},{"id":"087","text":"087","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":786.001038,"pageY":1639.999512,"rotation":180,"points":[{"X":836.001038,"Y":1639.999512},{"X":786.001038,"Y":1639.999512},{"X":786.001038,"Y":1529.999512},{"X":836.001038,"Y":1529.999512}]},{"id":"086","text":"086","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":836.001038,"pageY":1639.999512,"rotation":180,"points":[{"X":886.001038,"Y":1639.999512},{"X":836.001038,"Y":1639.999512},{"X":836.001038,"Y":1529.999512},{"X":886.001038,"Y":1529.999512}]},{"id":"085","text":"085","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":900.496643,"pageY":1640.000366,"rotation":180,"points":[{"X":950.496643,"Y":1640.000366},{"X":900.496643,"Y":1640.000366},{"X":900.496643,"Y":1530.000366},{"X":950.496643,"Y":1530.000366}]},{"id":"084","text":"084","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":950.496643,"pageY":1640.019775,"rotation":180,"points":[{"X":1000.496643,"Y":1640.019775},{"X":950.496643,"Y":1640.019775},{"X":950.496643,"Y":1530.019775},{"X":1000.496643,"Y":1530.019775}]},{"id":"083","text":"083","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1013,"pageY":1640.020264,"rotation":180,"points":[{"X":1063,"Y":1640.020264},{"X":1013,"Y":1640.020264},{"X":1013,"Y":1530.020264},{"X":1063,"Y":1530.020264}]},{"id":"078","text":"078","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.003174,"pageY":1752.5,"rotation":270,"points":[{"X":1612.003174,"Y":1802.5},{"X":1612.003174,"Y":1752.5},{"X":1722.003174,"Y":1752.5},{"X":1722.003174,"Y":1802.5}]},{"id":"077","text":"077","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.003174,"pageY":1802.5,"rotation":270,"points":[{"X":1612.003174,"Y":1852.5},{"X":1612.003174,"Y":1802.5},{"X":1722.003174,"Y":1802.5},{"X":1722.003174,"Y":1852.5}]},{"id":"079","text":"079","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.00354,"pageY":1702.499512,"rotation":270,"points":[{"X":1612.00354,"Y":1752.499512},{"X":1612.00354,"Y":1702.499512},{"X":1722.00354,"Y":1702.499512},{"X":1722.00354,"Y":1752.499512}]},{"id":"081","text":"081","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.003174,"pageY":1591.5,"rotation":270,"points":[{"X":1612.003174,"Y":1641.5},{"X":1612.003174,"Y":1591.5},{"X":1722.003174,"Y":1591.5},{"X":1722.003174,"Y":1641.5}]},{"id":"080","text":"080","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.003174,"pageY":1641.5,"rotation":-90,"points":[{"X":1612.003174,"Y":1691.5},{"X":1612.003174,"Y":1641.5},{"X":1722.003174,"Y":1641.5},{"X":1722.003174,"Y":1691.5}]},{"id":"082","text":"082","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1612.00354,"pageY":1541.499512,"rotation":-90,"points":[{"X":1612.00354,"Y":1591.499512},{"X":1612.00354,"Y":1541.499512},{"X":1722.00354,"Y":1541.499512},{"X":1722.00354,"Y":1591.499512}]},{"id":"023","text":"023","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":877.281372,"pageY":968.107544,"rotation":227.274809,"points":[{"X":911.205505,"Y":1004.838379},{"X":877.281372,"Y":968.107544},{"X":958.089172,"Y":893.474426},{"X":992.013306,"Y":930.205261}]},{"id":"024","text":"024","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":911.205505,"pageY":1004.838379,"rotation":227.274809,"points":[{"X":945.129639,"Y":1041.569214},{"X":911.205505,"Y":1004.838379},{"X":992.013306,"Y":930.205261},{"X":1025.9375,"Y":966.936096}]},{"id":"022","text":"022","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":843.357239,"pageY":931.376709,"rotation":227.274809,"points":[{"X":877.281372,"Y":968.107544},{"X":843.357239,"Y":931.376709},{"X":924.165039,"Y":856.743652},{"X":958.089172,"Y":893.474426}]},{"id":"026","text":"026","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":987.195557,"pageY":1087.115356,"rotation":227.274809,"points":[{"X":1021.11969,"Y":1123.846191},{"X":987.195557,"Y":1087.115356},{"X":1068.003418,"Y":1012.4823},{"X":1101.92749,"Y":1049.213135}]},{"id":"027","text":"027","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":1021.11969,"pageY":1123.846191,"rotation":227.274809,"points":[{"X":1055.043823,"Y":1160.577026},{"X":1021.11969,"Y":1123.846191},{"X":1101.92749,"Y":1049.213135},{"X":1135.851685,"Y":1085.94397}]},{"id":"025","text":"025","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":953.271423,"pageY":1050.384644,"rotation":227.274809,"points":[{"X":987.195557,"Y":1087.115356},{"X":953.271423,"Y":1050.384644},{"X":1034.079224,"Y":975.751465},{"X":1068.003418,"Y":1012.4823}]},{"id":"032","text":"032","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":596.5,"pageY":857.002197,"rotation":0,"points":[{"X":646.5,"Y":857.002197},{"X":596.5,"Y":857.002197},{"X":596.5,"Y":967.002197},{"X":646.5,"Y":967.002197}]},{"id":"033","text":"033","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":546.5,"pageY":857.002197,"rotation":0,"points":[{"X":596.5,"Y":857.002197},{"X":546.5,"Y":857.002197},{"X":546.5,"Y":967.002197},{"X":596.5,"Y":967.002197}]},{"id":"034","text":"034","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":496.5,"pageY":857.002197,"rotation":0,"points":[{"X":546.5,"Y":857.002197},{"X":496.5,"Y":857.002197},{"X":496.5,"Y":967.002197},{"X":546.5,"Y":967.002197}]},{"id":"035","text":"035","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":434.5,"pageY":857.002197,"rotation":0,"points":[{"X":484.5,"Y":857.002197},{"X":434.5,"Y":857.002197},{"X":434.5,"Y":967.002197},{"X":484.5,"Y":967.002197}]},{"id":"036","text":"036","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":384.5,"pageY":857.002197,"rotation":0,"points":[{"X":434.5,"Y":857.002197},{"X":384.5,"Y":857.002197},{"X":384.5,"Y":967.002197},{"X":434.5,"Y":967.002197}]},{"id":"037","text":"037","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":334.5,"pageY":857.002197,"rotation":0,"points":[{"X":384.5,"Y":857.002197},{"X":334.5,"Y":857.002197},{"X":334.5,"Y":967.002197},{"X":384.5,"Y":967.002197}]},{"id":"038","text":"038","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":272.5,"pageY":857.002197,"rotation":0,"points":[{"X":322.5,"Y":857.002197},{"X":272.5,"Y":857.002197},{"X":272.5,"Y":967.002197},{"X":322.5,"Y":967.002197}]},{"id":"039","text":"039","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":222.5,"pageY":857.002197,"rotation":0,"points":[{"X":272.5,"Y":857.002197},{"X":222.5,"Y":857.002197},{"X":222.5,"Y":967.002197},{"X":272.5,"Y":967.002197}]},{"id":"019","text":"019","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":596.5,"pageY":857.002197,"rotation":180,"points":[{"X":646.5,"Y":857.002197},{"X":596.5,"Y":857.002197},{"X":596.5,"Y":747.002197},{"X":646.5,"Y":747.002197}]},{"id":"018","text":"018","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":546.5,"pageY":857.002197,"rotation":180,"points":[{"X":596.5,"Y":857.002197},{"X":546.5,"Y":857.002197},{"X":546.5,"Y":747.002197},{"X":596.5,"Y":747.002197}]},{"id":"017","text":"017","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":496.5,"pageY":857.002197,"rotation":180,"points":[{"X":546.5,"Y":857.002197},{"X":496.5,"Y":857.002197},{"X":496.5,"Y":747.002197},{"X":546.5,"Y":747.002197}]},{"id":"016","text":"016","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":434,"pageY":857,"rotation":180,"points":[{"X":484,"Y":857},{"X":434,"Y":857},{"X":434,"Y":747},{"X":484,"Y":747}]},{"id":"015","text":"015","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":384,"pageY":857,"rotation":180,"points":[{"X":434,"Y":857},{"X":384,"Y":857},{"X":384,"Y":747},{"X":434,"Y":747}]},{"id":"014","text":"014","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":334,"pageY":857,"rotation":180,"points":[{"X":384,"Y":857},{"X":334,"Y":857},{"X":334,"Y":747},{"X":384,"Y":747}]},{"id":"013","text":"013","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":272.5,"pageY":857.002197,"rotation":180,"points":[{"X":322.5,"Y":857.002197},{"X":272.5,"Y":857.002197},{"X":272.5,"Y":747.002197},{"X":322.5,"Y":747.002197}]},{"id":"012","text":"012","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":222.5,"pageY":857.002197,"rotation":180,"points":[{"X":272.5,"Y":857.002197},{"X":222.5,"Y":857.002197},{"X":222.5,"Y":747.002197},{"X":272.5,"Y":747.002197}]},{"id":"010","text":"010","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":110.5,"pageY":857.002197,"rotation":180,"points":[{"X":160.5,"Y":857.002197},{"X":110.5,"Y":857.002197},{"X":110.5,"Y":747.002197},{"X":160.5,"Y":747.002197}]},{"id":"011","text":"011","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":160.5,"pageY":857.002197,"rotation":180,"points":[{"X":210.5,"Y":857.002197},{"X":160.5,"Y":857.002197},{"X":160.5,"Y":747.002197},{"X":210.5,"Y":747.002197}]},{"id":"043","text":"043","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":546.5,"pageY":1190.998413,"rotation":180,"points":[{"X":596.5,"Y":1190.998413},{"X":546.5,"Y":1190.998413},{"X":546.5,"Y":1080.998413},{"X":596.5,"Y":1080.998413}]},{"id":"044","text":"044","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":596.5,"pageY":1190.998413,"rotation":180,"points":[{"X":646.5,"Y":1190.998413},{"X":596.5,"Y":1190.998413},{"X":596.5,"Y":1080.998413},{"X":646.5,"Y":1080.998413}]},{"id":"042","text":"042","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":496.5,"pageY":1190.998413,"rotation":180,"points":[{"X":546.5,"Y":1190.998413},{"X":496.5,"Y":1190.998413},{"X":496.5,"Y":1080.998413},{"X":546.5,"Y":1080.998413}]},{"id":"041","text":"041","width":50,"height":110,"color":"rgb(222, 186, 208, 0.4)","pageX":434.502777,"pageY":1190.997925,"rotation":180,"points":[{"X":484.502777,"Y":1190.997925},{"X":434.502777,"Y":1190.997925},{"X":434.502777,"Y":1080.997925},{"X":484.502777,"Y":1080.997925}]},{"id":"008","text":"008","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":204.111374,"pageY":613,"rotation":179.999473,"points":[{"X":154.111374,"Y":613.000488},{"X":204.111374,"Y":613},{"X":204.110352,"Y":503},{"X":154.110352,"Y":503.000458}]},{"id":"009","text":"009","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":154.111374,"pageY":613.000488,"rotation":179.999473,"points":[{"X":104.111366,"Y":613.000916},{"X":154.111374,"Y":613.000488},{"X":154.110352,"Y":503.000458},{"X":104.110352,"Y":503.000916}]},{"id":"045","text":"045","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":733.500305,"pageY":1143.00061,"rotation":0.000404,"points":[{"X":647.500305,"Y":1143},{"X":733.500305,"Y":1143.00061},{"X":733.5,"Y":1187.00061},{"X":647.5,"Y":1187}]},{"id":"049","text":"049","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":552.500122,"pageY":1290.998535,"rotation":269.999596,"points":[{"X":552.499512,"Y":1204.998535},{"X":552.500122,"Y":1290.998535},{"X":596.500122,"Y":1290.998291},{"X":596.499512,"Y":1204.998291}]},{"id":"040","text":"040","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":390.50293,"pageY":1080.999023,"rotation":-89.999596,"points":[{"X":390.502319,"Y":1166.999023},{"X":390.50293,"Y":1080.999023},{"X":434.50293,"Y":1080.999268},{"X":434.502319,"Y":1166.999268}]},{"id":"074","text":"074","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836.000977,"pageY":1964,"rotation":269.999473,"points":[{"X":1836.00061,"Y":1914},{"X":1836.000977,"Y":1964},{"X":1946.000977,"Y":1963.999023},{"X":1946.00061,"Y":1913.999023}]},{"id":"073","text":"073","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836.000977,"pageY":1914,"rotation":269.999473,"points":[{"X":1836.00061,"Y":1864},{"X":1836.000977,"Y":1914},{"X":1946.000977,"Y":1913.999023},{"X":1946.00061,"Y":1863.999023}]},{"id":"072","text":"072","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1852.499023,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1802.499023},{"X":1836,"Y":1852.499023},{"X":1946,"Y":1852.497925},{"X":1945.999512,"Y":1802.497925}]},{"id":"071","text":"071","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1802.499023,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1752.499023},{"X":1836,"Y":1802.499023},{"X":1946,"Y":1802.497925},{"X":1945.999512,"Y":1752.497925}]},{"id":"070","text":"070","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1752.499023,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1702.499023},{"X":1836,"Y":1752.499023},{"X":1946,"Y":1752.497925},{"X":1945.999512,"Y":1702.497925}]},{"id":"069","text":"069","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1691.500122,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1641.500122},{"X":1836,"Y":1691.500122},{"X":1946,"Y":1691.499023},{"X":1945.999512,"Y":1641.499023}]},{"id":"068","text":"068","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1641.500122,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1591.500122},{"X":1836,"Y":1641.500122},{"X":1946,"Y":1641.499023},{"X":1945.999512,"Y":1591.499023}]},{"id":"067","text":"067","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1591.500122,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1541.500122},{"X":1836,"Y":1591.500122},{"X":1946,"Y":1591.499023},{"X":1945.999512,"Y":1541.499023}]},{"id":"065","text":"065","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1479.689087,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1429.689087},{"X":1836,"Y":1479.689087},{"X":1946,"Y":1479.687988},{"X":1945.999512,"Y":1429.687988}]},{"id":"066","text":"066","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1836,"pageY":1529.689087,"rotation":269.999473,"points":[{"X":1835.999512,"Y":1479.689087},{"X":1836,"Y":1529.689087},{"X":1946,"Y":1529.687988},{"X":1945.999512,"Y":1479.687988}]},{"id":"063","text":"063","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1783,"pageY":1417.997192,"rotation":179.999473,"points":[{"X":1733,"Y":1417.997559},{"X":1783,"Y":1417.997192},{"X":1782.999023,"Y":1307.997192},{"X":1732.999023,"Y":1307.997559}]},{"id":"064","text":"064","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1833,"pageY":1417.997192,"rotation":179.999473,"points":[{"X":1783,"Y":1417.997559},{"X":1833,"Y":1417.997192},{"X":1832.999023,"Y":1307.997192},{"X":1782.999023,"Y":1307.997559}]},{"id":"048","text":"048","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":646.500061,"pageY":1305.000122,"rotation":179.999473,"points":[{"X":596.500061,"Y":1305.000488},{"X":646.500061,"Y":1305.000122},{"X":646.499084,"Y":1195.000122},{"X":596.499084,"Y":1195.000488}]},{"id":"047","text":"047","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":708.000488,"pageY":1304.999512,"rotation":179.999473,"points":[{"X":658.000488,"Y":1305},{"X":708.000488,"Y":1304.999512},{"X":707.999512,"Y":1194.999512},{"X":657.999512,"Y":1195}]},{"id":"046","text":"046","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":758.000488,"pageY":1304.999512,"rotation":179.999473,"points":[{"X":708.000488,"Y":1305},{"X":758.000488,"Y":1304.999512},{"X":757.999512,"Y":1194.999512},{"X":707.999512,"Y":1195}]},{"id":"050","text":"050","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":551.395508,"pageY":1291.658203,"rotation":146.359171,"points":[{"X":509.769196,"Y":1319.357422},{"X":551.395508,"Y":1291.658203},{"X":490.457184,"Y":1200.080322},{"X":448.830841,"Y":1227.779541}]},{"id":"031","text":"031","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":793.874329,"pageY":1045.821899,"rotation":227.274809,"points":[{"X":759.950195,"Y":1009.091064},{"X":793.874329,"Y":1045.821899},{"X":874.682129,"Y":971.188782},{"X":840.757996,"Y":934.457947}]},{"id":"030","text":"030","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":827.798462,"pageY":1082.552734,"rotation":227.274809,"points":[{"X":793.874329,"Y":1045.821899},{"X":827.798462,"Y":1082.552734},{"X":908.606262,"Y":1007.919617},{"X":874.682129,"Y":971.188782}]},{"id":"029","text":"029","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":861.722595,"pageY":1119.283569,"rotation":227.274809,"points":[{"X":827.798462,"Y":1082.552734},{"X":861.722595,"Y":1119.283569},{"X":942.530396,"Y":1044.650391},{"X":908.606262,"Y":1007.919617}]},{"id":"028","text":"028","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":902.770813,"pageY":1163.727783,"rotation":227.274809,"points":[{"X":868.84668,"Y":1126.996948},{"X":902.770813,"Y":1163.727783},{"X":983.578613,"Y":1089.094727},{"X":949.65448,"Y":1052.363892}]},{"id":"021","text":"021","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":880.742126,"pageY":809.72821,"rotation":47.274809,"points":[{"X":914.66626,"Y":846.458984},{"X":880.742126,"Y":809.72821},{"X":799.934326,"Y":884.361267},{"X":833.858459,"Y":921.092102}]},{"id":"020","text":"020","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":776.5,"pageY":749,"rotation":0,"points":[{"X":826.5,"Y":749},{"X":776.5,"Y":749},{"X":776.5,"Y":859},{"X":826.5,"Y":859}]},{"id":"058","text":"058","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":1297.000977,"pageY":1420,"rotation":269.999596,"points":[{"X":1297.000366,"Y":1334},{"X":1297.000977,"Y":1420},{"X":1341.000977,"Y":1419.999634},{"X":1341.000366,"Y":1333.999634}]},{"id":"059","text":"059","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":1341.000977,"pageY":1419.999634,"rotation":269.999596,"points":[{"X":1341.000366,"Y":1333.999634},{"X":1341.000977,"Y":1419.999634},{"X":1385.000977,"Y":1419.99939},{"X":1385.000366,"Y":1333.99939}]},{"id":"060","text":"060","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":1413.000977,"pageY":1420,"rotation":269.999596,"points":[{"X":1413.000366,"Y":1334},{"X":1413.000977,"Y":1420},{"X":1457.000977,"Y":1419.999634},{"X":1457.000366,"Y":1333.999634}]},{"id":"057","text":"057","width":88.386067,"height":48.868682,"color":"rgb(252, 194, 138, 0.4)","pageX":1253.000977,"pageY":1420.000366,"rotation":269.999596,"points":[{"X":1253.000366,"Y":1334.000366},{"X":1253.000977,"Y":1420.000366},{"X":1297.000977,"Y":1420.000122},{"X":1297.000366,"Y":1334.000122}]},{"id":"061","text":"061","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1507.000977,"pageY":1420.000977,"rotation":179.999473,"points":[{"X":1457.000977,"Y":1420.001465},{"X":1507.000977,"Y":1420.000977},{"X":1507,"Y":1310.000977},{"X":1457,"Y":1310.001465}]},{"id":"062","text":"062","width":56.201912,"height":112.676546,"color":"rgb(154, 183, 218, 0.4)","pageX":1557.000977,"pageY":1420.000977,"rotation":179.999473,"points":[{"X":1507.000977,"Y":1420.001465},{"X":1557.000977,"Y":1420.000977},{"X":1557,"Y":1310.000977},{"X":1507,"Y":1310.001465}]}]
  },
  recordPreTouchPosition(touch) {
    let preTouchPosition = {
      x: touch.clientX,
      y: touch.clientY
    }
    this.setData({
      preTouchPosition: preTouchPosition
    })
  },
  getDistance(x0, y0, x1, y1) { // 返回两指之间的距离
    const xMove = x1 - x0
    const yMove = y1 - y0
    return Math.sqrt(xMove * xMove + yMove * yMove)
  },
  relativeCoordinate(x, y, rect) {
    let cx = (x - this.data.rect.left) / this.data.scaleRatio
    let cy = (y - this.data.rect.top) / this.data.scaleRatio
    return {
      x: cx,
      y: cy
    }
  },
  getDomQuery() {
    let that = this
    let query = wx.createSelectorQuery()
    query.select('.detail-container').boundingClientRect(res => {
      let rect = {
        left: res.left,
        top: res.top
      }
      that.setData({
        rect: rect
      })
      // this.canvasWidth = Math.round(res.width)
      // this.canvasHeight = Math.round(res.height)
    }).exec()
  },
  start({ touches }) {
    if (touches.length > 1) {
      let one = touches['0']
      let two = touches['1']
      this.setData({
        preTouchesClientx1y1x2y2: [one.clientX, one.clientY, two.clientX, two.clientY],
        originHaveSet: false
      })
    }
    this.recordPreTouchPosition(touches[0])
  },
  moving({ touches }) {
    if (touches.length === 1) {
      let oneTouch = touches['0']
      let translated = { left: this.data.matrix.e, top: this.data.matrix.f }
      let translateX = oneTouch.clientX - this.data.preTouchPosition.x + translated.left
      let translateY = oneTouch.clientY - this.data.preTouchPosition.y + translated.top
      // if (translateX >= 0) translateX = 0
      // if (translateY >= this.data.imageInfo.width)  translateY = this.data.imageInfo.width
      let matrix = {
        a: this.data.scaleRatio,
        b: 0,
        c: 0,
        d: this.data.scaleRatio,
        e: translateX,
        f: translateY
      }
      // let matrix = `matrix(${scaleRatio}, 0, 0, ${scaleRatio}, ${translateX}, ${translateY})`;
      // setStyle('transform', matrix);
      this.setData({
        matrix: matrix,
        translateX: translateX,
        translateY: translateY
      })
      this.recordPreTouchPosition(oneTouch)
    } else {
      let one = touches['0']
      let two = touches['1']
      let diff = this.getDistance(one.clientX, one.clientY, two.clientX, two.clientY) - this.getDistance(...this.data.preTouchesClientx1y1x2y2) // 新旧差值
      let _scale = this.data.scaleRatio + 0.005 * diff
      if (_scale <= 0.5) _scale = 0.5
        // 移动视线中心
      this.getDomQuery()
      let origin = this.relativeCoordinate((one.clientX + two.clientX) / 2, (one.clientY + two.clientY) / 2)
      // 修正视野变化带来的平移量
      let translateX = (_scale - 1) * (origin.x - this.data.scaleOrigin.x) + this.data.translateX
      let translateY = (_scale - 1) * (origin.y - this.data.scaleOrigin.y) + this.data.translateY
      let transformOrigin = {
        x: origin.x,
        y: origin.y
      }
      let matrix = {
        a: _scale,
        b: 0,
        c: 0,
        d: _scale,
        e: translateX,
        f: translateY,
      }
      let preTouchesClientx1y1x2y2 = [one.clientX, one.clientY, two.clientX, two.clientY]
      this.setData({
        matrix: matrix,
        scaleRatio: _scale,
        translateX: translateX,
        translateY: translateY,
        scaleOrigin: origin,
        transformOrigin: transformOrigin,
        preTouchesClientx1y1x2y2: preTouchesClientx1y1x2y2
      })
      // let matrix = `matrix(${scaleRatio}, 0, 0, ${scaleRatio}, ${translateX}, ${translateY})`;
      // setStyle('transform', matrix);
      // preTouchesClientx1y1x2y2 = [one.clientX, one.clientY, two.clientX, two.clientY];
    }
  },
  end({ touches }) {
    if (touches.length === 1) {
      this.recordPreTouchPosition(touches['0'])
    }
  },
  imageLoading({ detail }) {
    // this.getImage()
    this.setData({
      'imageInfo.width': detail.width,
      'imageInfo.height': detail.height
    })
  },
  clickTag({ currentTarget: { dataset: { item } } }) {
    wx.$nav.navigateTo('/pages/carport/carDetail/index', { id: item.id })
  },
  createCanvas() {
    var context = wx.createCanvasContext('myCanvas', this) // 创建绘图工具
    console.log(context)
  },
  async getFloorImage() {
    try {
      const { data } = await getFloorImage({ id: this.data.detailId })
      this.setData({
        'imageInfo.imgUrl': data.imgUrl
      })
      this.data.tags.forEach(item => {
        if (item.id === '009') console.log(item)
        if (item.id === '010') console.log(item)
        if (item.id === '039') console.log(item)
        if (item.id === '050') console.log(item)
        item.pageX = item.points[item.points.length - 1].X
        item.pageY = item.points[item.points.length - 1].Y
      })
      this.setData({ tags: this.data.tags })
      this.getFloorCar()
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  async getFloorCar() {
    try {
      const { data } = await getFloorCar({ id: this.data.detailId })
      // this.setData({
      //   tags: data
      // })
    } catch (err) {
      wx.showToast({ title: err.msg, icon: 'none' })
    }
  },
  onLoad({ id }) {
    this.setData({ detailId: id })
    this.getFloorImage()
  },
})
