var numberToBDT=function(n){"use strict";return n.NumberToBDT=class{convertNumberToBDT(n=0,i={}){var r,o;const u=new Intl.NumberFormat("en-IN",{currency:"BDT",minimumFractionDigits:null!==(r=null==i?void 0:i.nDecimalPoints)&&void 0!==r?r:0,maximumFractionDigits:null!==(o=null==i?void 0:i.nDecimalPoints)&&void 0!==o?o:0});return"number"==typeof n?null==u?void 0:u.format(n):n?isNaN(Number(n))?n:null==u?void 0:u.format(n):n}},n}({});