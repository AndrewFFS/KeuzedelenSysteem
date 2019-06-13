$(document).ready(function($) {
    var id = localStorage.getItem("idBranch");
    console.log(id);
    localStorage.removeItem("idBranch");
    $.ajax({
        type:  'GET',
        url: 'http://arrancrowley.nl/Keuzedelen-Systeem/wordpress/ajaxhandler/' ,
        data: {
            'action': 'getAllOpleidingen',
            'branch_id': id
        },
        success: function(opleidingen) {
            var tableRow = $('.dataOpleidingRow');
            opleidingen = JSON.parse(opleidingen);
            console.log(opleidingen);

            $.each(opleidingen, function(index, opleiding) {

                var newOpleiding = "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded' onclick='urlGet(this);' data-opleiding-id='" + opleiding.opleiding_ID + "'>" + opleiding.opleiding_naam + "</div>" +
                    "<div class='col-3'></div>";
                tableRow.append(newOpleiding);
            })

        },
        error  : function() {
            alert('Er is iets fout gegaan.');
        }
    });
});
function urlGet(elem){
    var id  = $(elem).data("opleiding-id");
    localStorage.setItem("idOpleiding", id);
    window.location = "keuzedelen.html";
};