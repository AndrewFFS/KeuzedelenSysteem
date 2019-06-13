$(document).ready(function($) {
    $.ajax({
        type:  'GET',
        url: 'http://arrancrowley.nl/Keuzedelen-Systeem/wordpress/ajaxhandler/' ,
        data: {
            'action': 'getAllBranches'
        },
        success: function(branches) {
            var tableRow = $('.dataRow');
             branches = JSON.parse(branches);

            $.each(branches, function(index, branch) {

                var newBranch = "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded' onclick='urlGet(this);' data-branch-id='" + branch.branch_ID + "'>" + branch.branch_naam + "</div>" +
                    "<div class='col-3'></div>";
                tableRow.append(newBranch);
            })

        },
        error  : function() {
            alert('Er is iets fout gegaan.');
        }
    });
});
function urlGet(elem){
    var id  = $(elem).data("branch-id");
    localStorage.setItem("idBranch", id);
    window.location = "opleiding.html";
};