$(".text-box").on("keyup", function (e) {
    if (e.key == 'Enter' && $(".text-box").val() != "")
        {
            var task = $("<div class='task'></div>").text($(".text-box").val())

            var trashBin = $("<i class='fas fa-trash-alt'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    p.remove();
                })
            })

            var check = $("<i class='fas fa-check'></i>").click(function(){
                var p = $(this).parent();
                p.fadeOut(function(){
                    $(".completed").append(p);
                    p.fadeIn();
                })
                $(this).remove()
            })
            
           task.append(trashBin, check)
            $(".incomplete").append(task)
            $(".text-box").val("") 
        }
})