var newWindow;
    function openNewWindow(){
        var dataN = document.querySelector('#sendValueN').value;        
        var data = document.querySelector('#sendValue').value;
        var data2 = document.querySelector('#sendValue2').value;
        var data3 = document.querySelector('#sendValue3').value;
        var data4 = document.querySelector('#sendValue4').value;
        var data5 = document.querySelector('#sendValue5').value;
        var data6 = document.querySelector('#sendValue6').value;
        var data7 = document.querySelector('#sendValue7').value;
        var data8 = document.querySelector('#sendValue8').value;
        var data9 = document.querySelector('#sendValue9').value;
        var data10 = document.querySelector('#sendValue10').value;
        var data11 = document.querySelector('#sendValue11').value;


        window.open("son.html?val="+dataN+data+data2+data3+data4+data5+data6+data7+data8+data9+data10+data11 , "newWindow", "width=1000, height=800, scrollbar=no");
    }




var x = "당신이 1번 문제를 풀지 않아서 만두피를 어떻게 할지 알지 못합니다 멍청씨";
var x2 = "당신이 2번 문제를 풀지 않아서 만두소를 어떻게 할지 알지 못합니다 멍청씨";
var x3 = "당신이 3번 문제를 풀지 않아서 어떤 향의 만두를 만들지 못합니다 멍청씨";
var x4 = "당신이 4번 문제를 풀지 않아서 어떤 간의 만두를 만들지 못합니다 멍청씨";
var x5 = "당신이 5번 문제를 풀지 않아서 어떤 질감의 만두를 만들지 못합니다 멍청씨";
var x6 = "당신이 6번 문제를 풀지 않아서 어떤 모양의 만두를 만들지 못합니다 멍청씨";
var x7 = "당신이 7번 문제를 풀지 않아서 만두를 어떻게 먹어야할지 알지 못합니다 멍청씨";
var x8 = "당신이 8번 문제를 풀지 않아서 어떤 온도의 만두를 만들지 알지 못합니다 멍청씨";
var x9 = "당신이 9번 문제를 풀지 않아서 얼만큼의 양을 준비할지 알지 못합니다 멍청씨";
var x10 = "당신이 10번 문제를 풀지 않아서 어떤 그릇을 준비할지 알지 못합니다 멍청씨";
var x11 = "당신이 11번 문제를 풀지 않아서 어떻게 식탁을 준비할지 준비할지 알지 못합니다 멍청씨";



function checkfunction(a){
  with(document.all){ 


  /*11번 문제라우*/

  for(i=0; i<l.length; i++)
      {
        if(l[i].checked==true){

          if(l[i].value==1)
            { x11 = "1인분보다 10퍼센트에서 20퍼센트가량 양을 늘려 충분히  포만감을 느낄 수 있게 하고, 한 그릇 음식으로 간편하게 만든다. <br><br><br>"; return false;}

          else if(l[i].value==2)
            { x11 = "함께하고 싶은 사람이 있다면 미리 식사에 초대하고, 음식과 어울리는 노래나 장식으로 식사 자리의 분위기를 만든다. 그릇, 접시, 테이블 매트 그리고 커트러리도 내가 가진 것 중에 가장 어울릴만한 것들로 준비한다. 냄비나 프라이팬 채로 식탁에 음식이 올라가지 않도록 한다. 접시나 그릇에 담아 소스나 허브 등으로 장식한다. 음식이 식탁에 올라가자마자 먹지않고, 잠시 감상하고 즐거운 마음으로 식사를 시작한다.  <br><br><br>"; return false;}
      }
    }


  /*10번 문제라우*/

  for(i=0; i<k.length; i++)
      {
        if(k[i].checked==true){

          if(k[i].value==1)
            { x10 = "만두에 곁들여 맛을 다양하게 느끼고 싶다면 다양한 소스를 준비하기를 권한다. 간장, 초간장, 간장과 매실액기스를 섞은 소스, 칠리소스, 마요네즈와 간장을 섞은 소스. 소스로 충분하지 않다면 간단한 면요리나 샐러드를 함께 먹는 것도 좋다.<br><br><br>"; return false;}

          else if(k[i].value==2)
            { x10 = "만두는 비교적 필요영양소가 모두 들어가 있기 때문에 만두 요리에는 굳이 더 채워 넣어야 할 영양소를 찾지 않아도 된다. 식이섬유와 무기질, 견과류에서 얻을 수 있는 영양소를 함께하면 더 좋겠다. 생채소와 견과류를 곁들인 비빔만두면 모든 영양소를 섭취할 수 있다. <br><br><br>"; return false;}
      }
    }



  /*9번 문제라우*/

  for(i=0; i<j.length; i++)
      {
        if(j[i].checked==true){

          if(j[i].value==1)
            { x9 = "만두는 특히 한 번 요리에 많이 만들어 쟁여둘 수 있다. 만두소를 넉넉히 하고, 만두피도 많이 준비하면 한 번에 몇백 개의 만두를 만들게 될지도 모른다. 완성된 만두는 냉동실에 넣어 보관한다. 냉동된 만두는 군만두, 찐만두, 만둣국 등으로 조리하는 대로 다른 요리가 된다. 한편 만둣국을 만들어서 냉동에 보관하는 것은 만두피의 변화를 가져오므로 추천하지 않는다.<br><br><br>"; return false;}

          else if(j[i].value==2)
            { x9 = "만두를 먹을 때마다 만든다면 번거로울 일이다. 하지만 재료 준비과정이 간단해진다면 크게 번거롭지 않을 것이다. 매번 신선하게 요리해 먹기를 좋아한다면, 만두피는 마트에서 구입하고, 만두소는 구하기 쉬운 재료들을 사용해 푸드프로세서에 한 번에 갈아버린다. 쉽게 만들 수 있는 만두소와 함께라면 매번 요리하는 것이 그리 귀찮은 일이 아니게 될 것이다!<br><br><br>"; return false;}
      }
    }



  /*8번 문제라우*/

  for(i=0; i<h.length; i++)
      {
        if(h[i].checked==true){

          if(h[i].value==1)
            { x8 = "뜨거운 음식은 뜨겁지 않은 만두보다 간이 덜 느껴질 수 있으므로 먹기 전에 한 번 더 간을 해서 먹는다. 만두소는 만두피보다 훨씬 뜨거우므로, 입안을 데이지 않도록 조심한다.<br><br><br>"; return false;}

          else if(h[i].value==2)
            { x8 = "미지근한 음식은 자칫 애매한 온도일 수 있다. 너무 식지 않되 또 너무 따뜻해서는 안 된다. 먹기 편한 온도는 사람마다 다를 수 있어, 어려운 온도이다. 주의할 점으로, 가령 찐만두는 너무 오래 쪄버리면 미지근하게 식는 동안 만두피가 계속해서 퍼질 수 있다. 튀김만두는 기름의 온도가 높기 때문에 미지근하게 식기까지 조금 더 오랜 시간이 걸린다. 그럴 때 같이 곁들여 마실 녹차나 보이차를 우리는 것도 방법이다.<br><br><br>"; return false;}

          else if(h[i].value==3)
            { x8 = "음식 자체를 냉장고에 넣어 차게 먹거나, 미지근한 온도에서 주변에 얼음을 띄우거나, 살얼음이 있는 국물을 함께하면 차가운 음식이 된다. 차갑게 먹는 만두에는 신선한 야채를 채썰어 식초와 간장을 베이스로 한 소스와 곁들이거나, 냉만둣국을 한다면 살얼음이 있는 고기육수를 함께한다. <br><br><br>"; return false;}

      }
    }




  /*7번 문제라우*/

  for(i=0; i<g.length; i++)
      {
        if(g[i].checked==true){

          if(g[i].value==1)
            { x7 = "물만두를 만들자.<br><br><br>"; return false;}

          else if(g[i].value==2)
            { x7 = "찐만두를 만들자.<br><br><br>"; return false;}

          else if(g[i].value==3)
            { x7 = "만둣국을 끓이자.<br><br><br>"; return false;}

          else if(g[i].value==4)
            { x7 = "군만두를 만들자.<br><br><br>"; return false;}

          else if(g[i].value==5)
            { x7 = "튀김만두를 만들자.<br><br><br>"; return false;}
      }
    }




  /*6번 문제라우*/

  for(i=0; i<f.length; i++)
      {
        if(f[i].checked==true){

          if(f[i].value==1)
            { x6 = "또아리모양 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==2)
            { x6 = "초승달모양 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==3)
            { x6 = "낙엽모양 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==4)
            { x6 = "뿔모양 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==5)
            { x6 = "동그라미 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==6)
            { x6 = "삼각형 만두를 빚자.<br><br><br>"; return false;}

          else if(f[i].value==7)
            { x6 = "사각형 만두를 빚자.<br><br><br>"; return false;}

      }
    }



  /*5번 문제라우*/

  for(i=0; i<e.length; i++)
      {
        if(e[i].checked==true){

          if(e[i].value==1)
            { x5 = "만두소를 잘게 다지지 않는다.<br><br><br>"; return false;}

          else if(e[i].value==2)
            { x5 = "만두소를 아주 부드럽게 갈고 으깬 두부를 만두소에 넣는다.<br><br><br>"; return false;}

      }
    }




  /*4번 문제라우*/

  for(i=0; i<d.length; i++)
      {
        if(d[i].checked==true){

          if(d[i].value==1)
            { x4 = "짠맛, 매운맛, 진한 맛으로 음식을 즐긴다면 만두소 만들 때 혹은 만두를 이용하여 요리할 때 소금이나 간장뿐만 아니라 치킨스톡, 미원 등 감칠맛을 내는 조미료의 비중을 조금 더 늘린다.<br><br><br>"; return false;}

          else if(d[i].value==2)
            { x4 = "식재료 본연의 맛을 살릴 수 있도록 간을 세게 하지 않는다. 간이 센 요리보다 훨씬 섬세한 조리가 필요하다. 강한 조리로 본연의 맛이 너무 크게 변하거나 재료들의 맛이 하나로 섞여버리지 않도록 한다. 식재료 종류를 최대 세 가지를 넘지 않게 단순하게 하여 만두소를 만들고, 다양한 맛을 느끼고 싶다면 여러 가지 맛의 만두소를 만들어 만두를 다양하게 한다.<br><br><br>"; return false;}

      }
    }



    /*3번 문제라우*/

  for(i=0; i<c.length; i++)
      {
        if(c[i].checked==true){

          if(c[i].value==1)
            { x3 = "고수, 부추 등 향이 강한 허브류나 채소류를 사용하여 만두소를 만들거나, 튀김만두나 만둣국에 그런 채소를 곁들여 요리한다. 마늘을 좋아한다면 다진 마늘을 미리 한번 기름에 충분히 볶아 마늘향을 풍부하게 만든 후 만두소에 넣는 것도 좋다.<br><br><br>"; return false;}

          else if(c[i].value==2)
            { x3 = "향이 강한 혹은 싫어하는 향을 가진 허브류와 채소류는 뺀다. 그것을 대신하여 향이 강하지 않은 채소를 사용하거나, 한 번 데쳐 만두소를 만들거나 요리한다.<br><br><br>"; return false;}

      }
    }




    /*2번 문제라우*/ 

  for(i=0; i<b.length; i++)
      {
        if(b[i].checked==true){

          if(b[i].value==1)
            { x2 = "고기만두의 만두소<br><br>재료 : 돼지고기 다짐육 100g, 숙주 100g, 부추 50g, 당면 50g, (당면에)진간장 10g + 식재료의 향 옵션 <br>간하기 재료 : 진간장 20g, 후추 3g, 생강가루 2g, 마늘분말 3g, 참기름 10g, 설탕 10g + 간 옵션 <br>도구 : 냄비, 면보, 커다란 보울 혹은 양푼 <br><br>2-a. 당면을 물에 불린다. <br>2-b. 숙주는 끓는 물에 데치고 면보에 싸서 물기를 짠다. <br>2-c. 부추는 다진다. <br>2-d. 불린 당면을 삶아 다진 후 진간장으로 간을 한다. <br>2-e. 손질된 재료(+씹는 맛 옵션)와 돼지고기 다짐육을 한 데 담는다. <br>2-f. 재료가 모두 담긴 보울에 간하기 재료 + 간 옵션을  넣어 간을 한다. <br>2-g. 모든 재료와 양념이 고루 섞이고 찰기가 생길 수 있게 잘 치댄다. <br> 만두소 완성 ! <br><br><br>"; return false;}

          else if(b[i].value==2)
            { x2 = "야끼만두의 만두소<br><br>재료 : 마른당면 50g + 식재료의 향 옵션 <br>간하기 재료 : 후추5g, 소금4g, 간장 10g  + 간 옵션 <br>도구 : 당면을 불릴 인내심, 커다란 보울, 밋밋한 맛을 즐기는 입맛 <br><br>2-a. 찬물 또는 미지근한 물에 당면을 불린다. (따뜻한 물에 불리면 모든 조리가 끝났을때 당면이 퍼져서 쫄깃한 당면이 아니라 질척한 당면이 된다) <br>2-b. 불린당면을 자른다. 당면을 자르는 것은 식감의 취향을 반영해서 자르면 되는데, 너무 많이 다져 쌀알처럼 되면 야끼만두의 당면이 씹히는 느낌을 거의 느낄 수 없다. 혹은 만두크기만큼 길게 자르면 정성이 없어보이므로 그 사이의 길이에서 자유롭게 자른다. <br>2-c. 잘린 당면을 보울에 담는다. <br>2-d. 당면에 간하기 재료 + 간 옵션으로 간을 한다. <br> *야끼만두를 후추맛으로 먹는 사람은 후추를 5g더 추가한다. <br> 만두소 완성 !<br><br><br>"; return false;}

          else if(b[i].value==3)
            { x2 = "/*김치김치!!!!*/야채만두의 만두소<br><br>만두소 재료 : 표고버섯 100g, 두부 100g, 양파 50g, 당근 30g, 파 30g, 옵션 달걀 반개 <br>간하기 재료 : 다진마늘 10g 혹은 마늘분말 5g, 설탕 10g, 깨 3g, 후추 3g, 참기름 10g, 간장 10g <br>도구 : 면보, 커다란 보울, 야채를 좋아하는 마음  <br><br>2-a. 표고버섯(말린 표고버섯을 불려 사용하면 식감이 쫄깃해진다), 양파, 당근, 파를 다진다. <br>2-b. 식재료의 향 옵션에 따라 재료를 데치거나 기름에 볶아 익혀준다. 미리 재료를 익히지 않을 경우 만두를 만들었을때 재료에서 나오는 수분으로인해 당황하게 될 수도 있다. 재료를 데치거나 기름에 볶을 때는 한번에 조리하는 것이 아니라 따로따로 조리하여 재료의 맛이 미리 섞지 않는 것을 권한다. <br>2-c. 면보에 두부의 물기를 짜면서 두부를 으깬다. <br>2-d. 조리된 표고버섯, 양파, 당근, 파와 으깬 두부를 커다란 보울에 담는다. <br> 2-e. 재료가 모두 담긴 보울에 간하기 재료 + 간 옵션를 넣어 간을 한다. <br>2-e. 비건이 아니라면 달걀 반개를 넣어 속재료가 서로 잘 붙을 수 있게 한다. <br> 만두소 완성 ! <br><br><br>"; return false;}


          else if(b[i].value==4)
            { x2 = "야채 만두의 만두소<br><br>만두소 재료 : 표고버섯 100g, 두부 100g, 양파 50g, 당근 30g, 파 30g, 옵션 달걀 반 개 <br>간하기 재료 : 다진 마늘 10g 혹은 마늘 분말 5g, 설탕 10g, 깨 3g, 후추 3g, 참기름 10g, 간장 10g <br>도구 : 면보, 커다란 보울, 야채를 좋아하는 마음  <br><br>2-a. 표고버섯(말린 표고버섯을 불려 사용하면 식감이 쫄깃해진다), 양파, 당근, 파를 다진다. <br>2-b. 식재료의 향 옵션에 따라 재료를 데치거나 기름에 볶아 익혀준다. 미리 재료를 익히지 않을 경우 만두를 만들었을 때 재료에서 나오는 수분으로 인해 당황하게 될 수도 있다. 재료를 데치거나 기름에 볶을 때는 한 번에 조리하는 것이 아니라 따로따로 조리하여 재료의 맛이 미리 섞지 않는 것을 권한다. <br>2-c. 면보에 두부의 물기를 짜면서 두부를 으깬다. <br>2-d. 조리된 표고버섯, 양파, 당근, 파와 으깬 두부를 커다란 보울에 담는다. <br> 2-e. 재료가 모두 담긴 보울에 간하기 재료 + 간 옵션을 넣어 간을 한다. <br>2-e. 비건이 아니라면 달걀 반 개를 넣어 속 재료가 서로 잘 붙을 수 있게 한다. <br> 만두소 완성! <br><br><br>"; return false;}

          else if(b[i].value==5)
            { x2 = "(망하더라도 책임질 수 없는) 냉장고 털어 만두 만두소<br><br>만두소 재료 : 냉장고 속 주재료가 너무 많아지면 복잡한 맛이 되므로 아무리 좋은 재료가 있더라도 주재료를 한 가지 정도로 정하는 것을 추천한다. 야채가 있다면 꺼낸 다음 주재료와 어울릴만한 것, 오늘의 요리사가 좋아하는 것, 탐구하고 싶은 조합 등을 통해 야채 1~3가지정도 정한다. + 식재료의 향 옵션 <br><br> 간하기 재료 : 간 옵션 <br> 도구 : 커다란 보울, 참신한 아이디어, 도전정신, 텅 비지 않은 냉장고<br><br>2-a.만두소에 들어갈 재료를 손질한다. 대체로 잘게 다지는 편이 좋으나, 새우와 같은 재료를 사용할 때, 식감을 위해서라면 숭덩숭덩 자르거나 통으로 사용해도 좋다. <br>2-b.간할 재료로 간장, 후추, 소금, 설탕, 참기름, 다진 마늘 정도의 선택으로 하기를 권한다. 대략 한 숟가락 정도의 양으로 간을 한다면 간이 너무 튀는 맛이 나오지 않을 것이다. <br>2-c.모든 재료를 커다란 보울에 넣고 섞는다. 단백질 재료가 있다면 (고기, 계란 등) 잘 치대기만 한다면 하나로 잘 뭉쳐지게 된다. 야채만 가득한 만두소를 서로 붙이려고 밀가루와 같은 재료를 많이 넣게 되면 조리 후 만두소가 떡같아 진다. 그런 맛을 원한다면 도전해보아도 좋다. <br>부디 당신의 선택으로 만든 만두소의 맛이 사 먹을 수 없는 독특한 맛이면서 당신의 입맛에 꼭 맞기를!<br>만두소 완성 !<br><br><br>"; return false;}

      }
    }
    


  /*1번 문제라우*/

  for(i=0; i<a.length; i++)
      { 
        if(a[i].checked==true){

          if(a[i].value==1)
            { x = "만두피를 직접 만들어 보자! <br><br>필요한 재료 : 강력분 밀가루 200g, 달걀 30g, 소금 2g, 식용유 10mL, 물 40mL, 덧밀가루 25g (강력분 중력분 상관없음) <br>필요한 도구 : 도마, 보울, 밀대, 팔 힘, 인내심 <br><br>1-a. 보에 강력분 밀가루, 식용유, 소금, 달걀, 물을 넣고 잘 치대어 반죽한다. 반죽이 되지만 이는 잘 하고 있는 것이며, 그래서 팔 힘과 인내심이 필요하 다. (기계가 있다면 기계의 힘을 빌려도 좋지만, 만두피처럼 된 반죽을 감당하려면 웬만한 가정용 기계로는 힘들 것이다.) 도자기처럼 매끄러워 질때까지 반죽한다. <br>1-b. 반죽을 냉장고에서 1시간 이상 숙성한다. 숙성하면 반죽이 부드러워진다. <br>1-c. 도마에 덧밀가루를 뿌린다. 냉장고에서 꺼낸 반죽은 굵은 가래떡 모양으로 만든다. 가래떡 모양 반죽을 10g 정도씩으로 자른다. 밀대로 둥글게 밀어 만두피를 만든다. (둥글게 밀되 만두피의 가운데를 비교적 두껍게, 그리고 가장자리를 비교적 얇게 밀면 만두가 완성되었을 때 만두피만 붙는 끝부분도 맛있게 먹을 수 있다. 하지만 당신이 아직 만두피 왕초보라면 일정하게 밀어버리세요.) <br><br><br>"; return false;}
          else if(a[i].value==2)
            { x = "마트에서 만두피를 구매하자!<br> 냉동으로 된 것을 샀다면 미리 해동한다. <br> 해동이 조금이라도 덜 된 상태에서 만두피를 한 장씩 떼다가는 모조리 부서질 것이다. <br><br><br>"; return false;}

          else if(a[i].value==3)
            { x = "굴림만두를 만들어 보자!<br> 만두피가 없으면 간단할 것 같지만 오히려 굴림만두가 손이 더 많이 간다. 만두소를 단단하고 둥글게 잘 뭉쳐야 하고, 뭉친 것을 밀가루에 굴려 익히고 다시 굴려 익힘을 서너 번 반복하는 수고로움을 필요로 한다. 하지만 그것을 감당하고 굴림만두를 성공해 맛본다면 그 맛은 아주 꿀맛! <br><br><br>"; return false;}
      }
    }






}
}


function myFunctionN(){
  var n = nq.value
  document.querySelector('.contentN').innerHTML = " &#128105;&#8205;&#127859;&#129375;&#128104;&#8205;&#127859; 오늘은 " + n + " (이)가  &#128105;&#8205;&#127859;&#129375;&#128104;&#8205;&#127859;<br> &#128105;&#8205;&#127859;&#129375;&#128104;&#8205;&#127859;  만두만두 요↘리↗사! &#128105;&#8205;&#127859;&#129375;&#128104;&#8205;&#127859;<br><br><br>";
}


function myFunction(){
  document.querySelector('.content').innerHTML = "<b>1. </b>"  + x;
}

function myFunction2(){
  document.querySelector('.content2').innerHTML = "<b>2. </b> "  + x2;
}

function myFunction3(){
  document.querySelector('.content3').innerHTML = "<b>3. </b>"  + x3;
}

function myFunction4(){
  document.querySelector('.content4').innerHTML = "<b>4. </b> "  + x4;
}

function myFunction5(){
  document.querySelector('.content5').innerHTML = "<b>5. </b> "  + x5;
}

function myFunction6(){
  document.querySelector('.content6').innerHTML = "<b>6. </b> "  + x6;
}

function myFunction7(){
  document.querySelector('.content7').innerHTML = "<b>7. </b> "  + x7;
}

function myFunction8(){
  document.querySelector('.content8').innerHTML = "<b>8. </b> "  + x8;
}

function myFunction9(){
  document.querySelector('.content9').innerHTML = "<b>9. </b> "  + x9;
}

function myFunction10(){
  document.querySelector('.content10').innerHTML = "<b>10. </b> "  + x10;
}

function myFunction11(){
  document.querySelector('.content11').innerHTML = "<b>11. </b> "  + x11;
}


    