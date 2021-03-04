$(()=>{
  //get dom elem
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  //判断是是否是浮点数，如果是，求出是几位
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
  function ifFloat(num){
    let flag = 0;
    let y = String(num).indexOf('.')+1;
    var count = String(num).length - y;
    if(y > 0 && count > 0){
      return count;//返回几位小数
    }else{
      return flag;
    }
  }
  //calc button click
  $btnCal.click(()=>{
   //get value
   let num;
   let Num;
   let w = Number($width.val()),
       h = Number($height.val());
   let num1 = ifFloat(w);
   let num2 = ifFloat(h);
   if(num1 == num2) {
    num = num1;
    Num=num1+num2;
   }
   else if(num1 > num2){
     num = num1;
     Num=num1+num2;
   }
   else if(num1 < num2){
     num = num2;
     Num=num1+num2;
   }
   //calc
   let p = (w+h)*2,
       a = w * h;
   //output
   let answer1 = roundFractional(p,num);
   let answer2 = roundFractional(a,Num);
    $perimeter.val(answer1);
    $area.val(answer2);
  });
});
