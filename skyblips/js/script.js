// JavaScript source code

function startPage() {
    GetModifiedDate();
    setInterval(spinColors, 100);
}

function GetModifiedDate() {
    let modifiedDate = new Date(Date.parse(document.lastModified));
    let output = "Last Update: " +
        modifiedDate.toLocaleString("en-US", {
            month: "2-digit", day: "2-digit",
            year: "numeric", hour: "2-digit",
            minute: "2-digit", second: "2-digit"
        });

    document.getElementById("year").innerHTML = modifiedDate.getFullYear();
    document.getElementById("dateTime").innerHTML = output;
}



