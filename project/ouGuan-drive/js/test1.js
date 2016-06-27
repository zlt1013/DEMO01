/**
 * Created by Administrator on 2016/5/23.
 */
$(document).ready(function(){
    var arr = new Array();
    var n = 0;
    $.ajax({
        type:"GET",
        url:"http://sjz.bokanedu.com/tgr/api/?day=52-2&type=zj",
        data:null,
        dataType:"json",
        success:function(data){
            if(data.code==0){
                $.each(data.data,function(i,item){
                    arr.push(item);
                })
                show(0);
            }
        }
    })
    function show(n){
        var content = "";
        for(var i = n;i<n+9&&i<arr.length;i++){
            content+=
                "<tr class='tableTitle'>" +
                "<td class='kong'><b class='number'>"+(i<9?"0"+(i+1):i+1)+"</b>"+"期"+"</td>" +
                "<td class='name'>"+arr[i].name+"</td>"+
                "<td class='phone'>"+arr[i].tele+"</td>"+
                "<td class='prize'>"+arr[i].gift+"</td>"+
                "</tr>";
        }
        $("#table").html(content);
    }
    $(".down").on("click",function(){
        if (n+9<arr.length){
            n=n+9;
        }
        else {
            return;
        }
        show(n);
    })
    $(".up").on("click",function(){
        if (n+9>arr.length){
            n=0;
        }
        else {
            return;
        }
        show(n);
    })
})