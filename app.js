function harfSayisiBul() {
    var iller = [
        "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin",
        "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa",
        "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum",
        "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir",
        "Kahramanmaraş", "Karabük", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kırıkkale", "Kırklareli",
        "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir",
        "Niğde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Şanlıurfa", "Şırnak",
        "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
    ];

    var arananHarf = document.getElementById("harfGirisi").value.toLowerCase();
    var harfSayacı = 0;
    var harfinGectigiIller = [];

    for (var i = 0; i < iller.length; i++) {
        var il = iller[i].toLowerCase();
        for (var j = 0; j < il.length; j++) {
            if (il.charAt(j) === arananHarf) {
                harfSayacı++;
                break; // Harf bulunduğunda iç döngüyü sonlandır
            }
        }
        if (il.includes(arananHarf)) {
            harfinGectigiIller.push(iller[i]);
        }
    }

    var sonucHTML = "Girilen harf '" + arananHarf + "' Türkiye'deki iller içinde " + harfSayacı + " kez geçiyor.";
    sonucHTML += "<br>İlleri içinde geçtiği şehirler: " + harfinGectigiIller.join(", ");
    document.getElementById("sonuc").innerHTML = sonucHTML;
}