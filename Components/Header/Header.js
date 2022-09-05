function init() {
    $(".Logo").css("background-image","url('/Icons/Stella_Maris_5.png')");
    HeaderLoadData()
}
function LookFor(Attribute)
{
    z = document.getElementsByTagName("*");
    for (let i = 0; i < z.length; i++) {
        let elmnt = z[i];
        if (elmnt.getAttribute(Attribute) != undefined)
            return elmnt.getAttribute(Attribute)
    }
    return undefined
}

function HeaderLoadData() {
    let Value = $("div").attr("Header");
    $.getJSON("../Data/Localization.json",
        function (data, textStatus, jqXHR) {
            data = data[LookFor(`Specialization`)]
            $("#Title").text(data.Title);
            $("#SubTitle").text(data.SubTitle);        
            $(".Logo").click(LogoOnclick);
        }
    );
}
function LogoOnclick()
{
    window.location="../Home/Index.html"
}
init()