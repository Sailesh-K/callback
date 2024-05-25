var div=document.createElement("div");
div.setAttribute("id","countdown");

function countDown(number,callback)
{
    setTimeout(() =>
        {
            document.getElementById('countdown').innerText=number;
            if(callback) callback();
        },1000);
}

countDown(10,function() {
    countDown(9,function() {
        countDown(8,function() {
            countDown(7,function() {
                countDown(6,function(){
                    countDown(5,function() {
                        countDown(4,function() {
                            countDown(3,function() {
                                countDown(2,function() {
                                    countDown(1,function() {
                                        setTimeout(()=>
                                        {
                                            document.getElementById('countdown').innerText='Happy Independence Day!';
                                        },1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

document.body.append(div)