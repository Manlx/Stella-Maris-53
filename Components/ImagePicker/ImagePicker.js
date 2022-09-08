var ImageData = []
var FilteredImages = []
function Init() {
    $.getJSON("/Data/Data.json",
        function (data, textStatus, jqXHR) {
            ImageData = data.ImageData();
            // console.log(ImageData)
        }
    );
}
function OnAreaClick(Area) {
    alert(Area.id)
    let Tag
    
    ImageData.filter(function (e) {
        if ()
    })
}