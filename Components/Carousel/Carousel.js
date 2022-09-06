var Index = 0;
var Data = [];
var PageRate = 2000;
var doTick = true

function CourselInit() {  
    $(".CarouselHolder").mouseenter(function () { 
        doTick= false
    });
    $(".CarouselHolder").mouseleave(function () { 
        doTick= true
    });
}

function btnLeftClick() {
    Index--;
    if (Index < 0)
        Index = Data.length-1
    LoadData()
}

function btnRightClick() {
    Index++;
    if (Index >= Data.length)
        Index = 0
    LoadData()
}

function Tick() {
    if (!doTick)
        return;
    btnRightClick()
    LoadData()
}

function LoadData() {  
    $(".CarouselDisplay").css("background-image",`url('${Data[Index].ImagePath}')`);
    $(".CarouselInfo").html(`
    <p class="CarouselText">${Data[Index].Description}</p>
    `);
}

function GetData() {
    $.getJSON("../Data/Data.json",
        function (data, textStatus, jqXHR) {
            console.log(data)
            Data = data.ImageData
            console.log(Data)
            Data = Data.filter(function (e){
                return e.Tags.includes("View")
            })
            setInterval(Tick,PageRate)
            LoadData()
        }
    );
}

GetData()
CourselInit()