// 一些公共方法的封装，主要处理数据

/**作用：用于数组去重，这里是在渲染下拉框时用到
 *参数，一个数组对象
 *返回值：一个去重后的数组对象
 *
 */
function removeRepeat(array){
 // array去重(数组/数组对象的去重，借助数组对象的id去重)
      //第一遍取出第一个数，和后面所有的数作比较，如果没有相等的，则把该数放进uniqueCate,有相等的，则把相等的数删除，再把该数放进uniqueCate中
      console.log("原", array);
      var uniqueArr = [];
      var len = array.length;
      for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
          if (array[j]["id"] == array[i]["id"]) {
            array.splice(j, 1);
            len--;
            j--;
          }
        }
        uniqueArr.push(array[i]);
      }
      console.log("去重后", uniqueArr);
      return uniqueArr;
}
/**用来处理要第几页的数据 //自动对拿到的数据进行分页，每10个一份，放到数组中，处理结果返回除去
	 * 参数 data 从服务端获取的数据
	 * 		n 要展示第几页
	 * 返回值 要被展示的数据
	*/
function whichPage(data,n) {
    var temp = [];
    for (var i = (n - 1) * 10; i <= n * 10 - 1; i++) {
        if (i > data.length - 1) break;
        temp.push(data[i]);
    }
    return temp;
}