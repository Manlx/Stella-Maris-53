var ImageData = []
var FilteredImages = []
function Init() {
    $.getJSON("/Data/Data.json",
        function (data, textStatus, jqXHR) {
            ImageData = data.ImageData
            // console.log(ImageData)
        }
    );
}
//                   0          1              2               3                  4             5                6       7        8         9         10               11
var Locations = ["Outside","Dining Area","Master Bedroom","Guest Bedroom","Master Bathroom","Guest Bathroom","Lounge","Kitchen","Hallway","Various","Balcony","External Hallway"]
function OnAreaClick(Area,Number) {
    FilteredImages = []
    let Tag = Locations[Number]
    FilteredImages = ImageData.filter(function (e) {
        return e.Location.includes(Tag);
    })
    DisplaySelectedImages(FilteredImages)
}
function DisplaySelectedImages(ImageArray) {
    LandScapes = ImageArray.filter(function (e) { return !e.Tags.includes("Portrait") })
    Portraits = ImageArray.filter(function (e) { return e.Tags.includes("Portrait") })

    LoadImagesLandScape(LandScapes,"LandScapeDisplay")
    LoadImagesPriority(Portraits,"PortraitDisplay")
}

Init()

function LoadImagesLandScape(Array,ID) {
    if(Array.length <= 0)
    {
        $(`#${ID}`).html(`<div class="FlexCenter"><h1>No Images to Display Currently</h1></div>`)
        return;
    }
    var ObjectWidth = document.getElementById(ID).offsetWidth
    let ColCount = 3
    if (Array.length < ColCount)
        ColCount = Array.length
    $(`#${ID}`).css("grid-template-columns",`repeat(${ColCount},1fr)`);
    var ImageWidth = ObjectWidth/ColCount;
    var ImageWidth = ImageWidth - screen.width/100;
    var ImageHeight = ImageWidth*0.625;
    ImageHeight = ImageHeight/(screen.width/100)
    let Temp = ""
    Array.forEach(element => {
        Temp += `
        <div style="background-image: url('${element.ImagePath}'); width:100%;height:${ImageHeight}vw;" class="LandScapeImage">
        </div>`
    });
    $(`#${ID}`).html(Temp);
}

function LoadImagesPriority(Array,ID) {
    if(Array.length <= 0)
    {
        $(`#${ID}`).html(`<div class="FlexCenter"><h1>No Images to Display Currently</h1></div>`)
        return;
    }
    var ObjectWidth = document.getElementById(ID).offsetWidth
    let ColCount = 5
    if (Array.length < ColCount)
        ColCount = Array.length
    $(`#${ID}`).css("grid-template-columns",`repeat(${ColCount},1fr)`);
    var ImageWidth = ObjectWidth/ColCount;
    var ImageWidth = ImageWidth - screen.width/100;
    var ImageHeight = ImageWidth*1.6;
    ImageHeight = ImageHeight/(screen.width/100)
    let Temp = ""
    Array.forEach(element => {
        Temp += `
        <div style="background-image: url('${element.ImagePath}'); width:100%;height:${ImageHeight}vw;" class="LandScapeImage">
        </div>`
    });
    $(`#${ID}`).html(Temp);
}