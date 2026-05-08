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

    const tanggal = inputTanggal.value;
    if (tanggal === "") {
        alert("Tanggal harus diisi!");
        return;
    }
    const item = document.createElement("span");
    item.classList.add("deadline");
    item.textContent = " deadline: " + tanggal;

    listBaru.appendChild(span);
    listBaru.appendChild(item);

    daftarTugas.appendChild(listBaru);

    inputValue.value= "";
    inputTanggal.value="";
    inputValue.focus();

});