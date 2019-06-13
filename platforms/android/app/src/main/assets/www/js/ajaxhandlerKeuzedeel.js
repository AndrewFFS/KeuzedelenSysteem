$(document).ready(function ($) {
    var id = localStorage.getItem("idKeuzedelen");
    console.log(id);
    localStorage.removeItem("idKeuzedelen");
    $.ajax({
        type: 'GET',
        url: 'http://arrancrowley.nl/Keuzedelen-Systeem/wordpress/ajaxhandler/',
        data: {
            'action': 'getInfoKeuzedeel',
            'keuzedeel_id': id
        },
        success: function (keuzedeel) {
            var tableRow = $('.dataKeuzedeelRow');
            keuzedeel = JSON.parse(keuzedeel);

            $.each(keuzedeel, function (index, keuze) {
                var newOpleiding = "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>" + keuze.keuzedelen_naam + "</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Code Keuzedeel</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.code_keuzedeel + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Aantal Klokuren</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.aantal_klokuur + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Omschrijving inhoud</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.omschrijving_inhoud + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Programma Begeleiding</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.programma_begeleiding + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Locatie</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.locatie + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Examinering</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.examinering + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Periode</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.periode + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Voorwaarden start</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.voorwaarden_start + "</div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center'><h1 class='h1'>Trainers/Begeleiders</h1></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-3'></div>" +
                    "<div class='col-6 text-center branchClass border rounded'>" + keuze.trainers_begeleiders + "</div>" +
                    "<div class='col-3'></div>";
                tableRow.append(newOpleiding);
            })

        },
        error: function () {
            alert('Er is iets fout gegaan.');
        }
    });
});

function urlGet(elem) {
    var id = $(elem).data("opleiding-id");
    localStorage.setItem("idOpleiding", id);
    window.location = "keuzedelen.html";
};