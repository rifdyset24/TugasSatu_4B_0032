const inputValue = document.getElementById("inputTask");
const btnTambahTodo = document.getElementById("btnTambahTodo");
const inputTanggal = document.getElementById("tanggal");
const daftarTugas = document.getElementById("listTugas");

btnTambahTodo.addEventListener("click",function(){

    if(inputValue.value === ""){
        alert("input tidak boleh kosong!");
        return;
    }

    const listBaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;


});