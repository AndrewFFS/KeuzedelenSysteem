$(document).ready(function($) {
    var id = localStorage.getItem("idOpleiding");
    console.log(id);
    localStorage.removeItem("idOpleiding");
    $.ajax({
        type:  'GET',
        url: 'http://arrancrowley.nl/Keuzedelen-Systeem/wordpress/ajaxhandler/' ,
        data: {
            'action': 'getAllKeuzedelen',
            'keuzedelen_id': id
        },
        success: function(keuzedelen) {
            var tableRow = $('.dataKeuzedelenRow');
            keuzedelen = JSON.parse(keuzedelen);
            console.log(keuzedelen);

            $.each(keuzedelen, function(index, keuzedeel) {
                var newOpleiding = "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded' onclick='urlGet(this);' data-keuzedelen-id='" + keuzedeel.keuzedeel_ID + "'>" + keuzedeel.keuzedelen_naam + "</div>" +
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
    var id  = $(elem).data("keuzedelen-id");
    localStorage.setItem("idKeuzedelen", id);
    window.location = "keuzedeel.html";
};