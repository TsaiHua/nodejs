const delay = (timeout)=>{
  return new Promise(resolve=>{
    setTimeout (resolve,timeout)
  })
}
delay(1000).then(tot=>{console.log('toted')})
delay(2000).then(tot=>{console.log('toted')})



// {
//   todos:[{
//     text:'Monday',
//     complete:true
//   },{
//     text:'Tuesday',
//     complete:false
//   }],
//   visibilityFilter:'SHOW_COMPLETED'
// }


// const counter = (state=0,action)=>{
//   switch (action.type) {
//     case 'INCREMENT':
//       return state +1;
//     case 'DEREMENT':
//       return state -1;
//     default:
//       return state;
//   }
// }
//
// const {createStore }=Redux;
// const store = createStore(counter);
// console.log(store.getState());
// store.dispatch({type:'INCREMENT'});

// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }
// var f = lazy_sum([1, 2, 3, 4, 5]);
// console.log(f());


//数组排序sort
// var arr = ['Google', 'apple', 'Microsoft'];
// arr.sort(function (s1, s2) {
//    x1 = s1.toUpperCase();
//    x2 = s2.toUpperCase();
//    if (x1 < x2) {
//        return -1;
//    }
//    if (x1 > x2) {
//        return 1;
//    }
//    return 0;
// });


 // 素数
 // let arr=[],m;
 // for ( m = 1; m < 100; m++) {
 //   arr.push(m);
 // }
 //
 // function get_primes(arr) {
 //   return arr.filter(function (x) {
 //     if (x===1){return false;}
 //     for (var i = 2; i <= Math.sqrt(x); i++) {
 //       if (x%i===0) {
 //         return false;
 //       }
 //     }
 //     return true;
 //   })
 // }
 // let r = get_primes(arr);
 // if (r.toString() == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
 //     console.log('测试通过！');
 // } else {
 //     console.log('测试不通过！'+ r.toString());
 // }



 // //数组去重
 // let arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
 // let arr1=arr.filter(function(ele,ind,self){
 //   return self.indexOf(ele)===ind;
 // })
 // console.log(arr1);
 // console.log(arr);


// //交换参数
// function pic(a,b,c) {
//     if (arguments.length===2) {
//       c=b;
//       b=null;
//       console.log(c);
//       console.log(b);
//     }
//     console.log('exchanged!');
//     return 'tot'
// }
// console.log(pic(1,3));



// throw {toString: function() { return "Error!"; } };
// console.log(2);
// console.log(3);

// var data = `ubuntu install node etc (software).
// build 1 git repo.
// clone 1 git repo.
// echarts scan.
// 命令行安装命令是要注意顺序的。
// webpack npm概念。
// 阮一峰 git隐藏目录。http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013758404317281e54b6f5375640abbb11e67be4cd49e0000`;
// fs.writeFile('/home/totsai/doc/aeveryday', data, function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('ok.');
//     }
// });

// fs.readFile('/home/totsai/doc/aeveryday', 'utf-8', function (err, dataa) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(dataa);
//     }
// });



// if (typeof(global) !== 'undefined') {
//   console.log('node');
// }else{console.log('browser');}


// // import hello from './hello.js';
// var hello = require('./hello');
// console.log(hello('tot'));

// var obj = {
//     birth: 1990,
//     getAge: function () {
//         var fn = ()=> {2017 - this.birth};
//         return fn();
//     }
// };
// console.log(obj.getAge());


// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push((function () {
//           return i*i;
//         })(i));
//     }
//     return arr;
// }
// console.log(count()[0]);
// console.log(count()[2]);


// function lazy(arr) {
//   let sum = arr.reduce(function (a,b) {
//     return a+b;
//   });
//   return sum;
// }
// let f = lazy([1,2,3,4]);
// let g = lazy([1234,1234,1234])
// console.log(g);
// console.log(f);
// console.log(typeof f);
// console.log(lazy([1,2,3,4]));


// function Pasta(grain, width, shape) {
//     this.grain = grain;
//     this.width = width;
//     this.shape = shape;
// }
// function CheckKey(value) {
//     var firstChar = value.substr(0, 1);
//     if (firstChar.toLowerCase() === "s")
//         return true;
//     else
//         return false;
// }
// var polenta = new Pasta("corn", 1, "mush");
//
// var keys = Object.keys(polenta).filter(CheckKey);
// console.log(keys);



// async function f(){
//   await new Promise(function(resolve,reject){throw new Error('tot!')})
// }
// f()
// .then(v=>console.log(v))
// .catch(e=>console.log(e))
