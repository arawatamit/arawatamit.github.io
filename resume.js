var btn = document.querySelector("#pdf");
// Default export is a4 paper, portrait, using millimeters for units
window.jsPDF = window.jspdf.jsPDF;
const doc = new jsPDF();

btn.addEventListener("click", function () {
  var element = document.querySelector("#doc2");
  doc.html(element, {
    callback: function (doc) {
      doc.save("Resume_AmitRawat.pdf");
    },
    width: 70,
    windowWidth: 315,
  });
});
