const form = document.querySelector("#calculateForm");
const result = document.querySelector("#result");

const calculateMarks = (event) => {
    event.preventDefault();

maxMarks = 400;
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = +value;
    });
    const totalMarks = data.english + data.urdu + data.math + data.science;
const percentage = (totalMarks/maxMarks)*100;
result.innerText= `Your have got ${totalMarks} marks and percentage is ${percentage.toFixed(2)}%.`;

}
