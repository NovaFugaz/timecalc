$(document).ready(function () {
    $("#exportBtn").on("click", function () {
        exportToCSV();
    });
});

function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,Split Name,Hours,Minutes,Seconds,Milliseconds\n";

    $("tbody tr").each(function () {
        const splitName = $(this).find(".name").val();
        const hours = $(this).find(".horas").val();
        const minutes = $(this).find(".minutos").val();
        const seconds = $(this).find(".segundos").val();
        const milliseconds = $(this).find(".milis").val();

        const rowData = [splitName, hours, minutes, seconds, milliseconds].join(",");
        csvContent += rowData + "\n";
    });

    // Add total time to the CSV
    const totalTime = $("#totalTime").val();
    csvContent += "Total Time," + totalTime + "\n";

    const runnerName = $("#runnername").val();
    const encodedUri = encodeURI(csvContent);
    const link = $("<a>", {
        href: encodedUri,
        download: `${runnerName}_split_data.csv`
    });
    $("body").append(link);
    link.get(0).click();
    link.remove();
}
