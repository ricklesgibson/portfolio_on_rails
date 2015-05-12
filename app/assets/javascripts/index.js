//.diy-slideshow (the divs that contain all of the figures)
//.diy-slideshow.current figure (all slides inside current project)

/**
 * Changes the current project to the one that was clicked
 */
$(document).ready(function(){
    $(document).on("click", ".projectbutton", function(mouseEvent){
      
        var projectId = $(mouseEvent.target).data('projectId');  

        //Switch the current project
        $(".diy-slideshow").removeClass("current")
        $("#" + projectId).addClass("current")

        //Determine which figure to show
        $(".diy-slideshow figure").removeClass("show")
        $(".diy-slideshow.current figure:first-of-type").addClass("show")

    });

    $(document).on("click", ".prev", function(mouseEvent){

        var $project = $(mouseEvent.target).parent();

        console.log($project);
        var $item = $project.find(".show");

        $item.removeClass("show");
        if($item.prev("figure").length){
          $item.prev("figure").addClass("show")
        }else{
            $project.find("figure").last().addClass("show")
        }

    });
    $(document).on("click", ".next", function(mouseEvent){

        var $project = $(mouseEvent.target).parent();
        var $item = $project.find(".show");

        $item.removeClass("show");
        if($item.next("figure").length){
          $item.next("figure").addClass("show")
        }else{
            $project.find("figure").first().addClass("show")
        }

    });
});
