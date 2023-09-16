function validasiFrom() {
    //ini adalah untuk memanggil id inputUltah di js dari html
    const inputUltah = document.getElementById("inputUltah");
    const inputUltahValue = inputUltah.value

    //ini perhitungan untuk tahun sekarang secara real time 
    const tahunSekarang = new Date().getFullYear()

    //ini adalah perhitungan tahun sekarang - ulang tahun yang di input oleh user 
    const hasil = tahunSekarang-inputUltahValue

    //ini untuk memanggil id hasil di dalam <p> lalu menambahkan value dari <p> menggunakan inner.HTML = "value untuk <p>" + hasil dari pengurangan di atas
    const hasilView = document.getElementById("Hasil")

    hasilView.innerHTML = "Umur Anda Sekarang Adalah: " + hasil + " Tahun"

    const peringatanView = document.getElementById("Peringatan")
    peringatanView.innerHTML = "Mohon isi tahun kelahiran Anda"

    //ini adalah penggunaan css di dalam js
    peringatanView.style="color:red;"

    //ini adalah logic ketika user menginput dengan nilai yang kososng 
    if(inputUltahValue === "") {
        hasilView.style= "display:none;"
    } else 
     peringatanView.style="display:none;"

}

//validasi onekeydown didalam input ketika user mengenter lalu memanggil logic yang ada di dalam onklik yag button 
function saatDiEnter(event) {
    if(event.key === "Enter") {
        validasiFrom()
    }
}

//baris ini mengambil nilai dari input ultah. value di validasi menjadi user hanya memberikan value hanya 4 angka saja
function maksimumInput() {
    const inputUltah = document.getElementById("inputUltah")
    const inputUltahValue = inputUltah.value

    inputUltah.value = inputUltahValue.slice(0,4)




}