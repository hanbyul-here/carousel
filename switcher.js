function Switcher(func, params){
  if (window.self == window.top) {
    var eventFunction = func;
    var eventParams = params;
    var width = 0;

    var switcherEL = document.createElement('div');
    switcherEL.className = "control";
    var styleUL = document.createElement('ul');

    var titleLI = document.createElement('li');
    var titleTxt = document.createTextNode('styles');
    titleLI.appendChild(titleTxt);
    titleLI.className = 'title';
    styleUL.appendChild(titleLI);
    
    titleLI.addEventListener('click',function(e){
        titleLI.classList.toggle('bottom-line');
        var style = document.querySelectorAll('li.style');
        var len = style.length;
        var i =0;
        for( i =0; i<len; i++){
          style[i].classList.toggle('show');
        }
    });

    params.forEach(function(styleName,index){

      var styleLI = document.createElement('li');
      var styleTxt = document.createTextNode(styleName);
      styleLI.appendChild(styleTxt);
      styleLI.className = 'style';
      styleLI.addEventListener('click',function(e){
        func(styleName);
      });
      styleUL.appendChild(styleLI);
    });
    switcherEL.appendChild(styleUL);
    document.body.appendChild(switcherEL);
   }
}